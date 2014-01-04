var runReadability = false;
var runReview = false;
var runAnnotator = false;
var mainAnnotator = null;
var speaking = null;
var speakMode = 'onClick'; // onOpen, onClick, none

$(document).ready(
	function() {
		meSpeak.loadConfig("../js/mespeak_config.json");
		meSpeak.loadVoice('../js/en-us.json');

		showOnly('#vvContent');
		$('#vvBtnChangeIcons').hide();
				
		// $('body').wrapInner('<div class="vvContent"/>');

		$("#vvBtnRead").click(
			function(e) {
				startReadability($('#vvContent')[0]);
				
				if (!$('#vvReadOverlay').is(':visible')) {
					showOnly('#vvReadOverlay');
					buttonOn("#vvBtnRead");
				} else {
					showOnly('#vvContent');
					buttonsOff("#vvBtnRead");
				}
			}
		)

		$("#vvBtnAnnotator").click(
			function(e) {
				if (!runAnnotator) {
					mainAnnotator = startAnnotator('#vvContent');
					$("#vvBtnAnnotator").addClass('annotator-button-on')
					$("#vvBtnAnnotatorCaption").html('Notes loaded')
					runAnnotator = true;
				}
			}
		)

		$("#vvBtnSpeak").click(
			function(e) {
				speak(getSelectedText());
			}
		)
		
		$("#vvBtnReviewList").click(
			function(e) {
				startReview();
				
				if (!$('#vvReviewList').is(':visible')) {
					showOnly('#vvReviewList');
					buttonOn("#vvBtnReviewList");
				} else {
					showOnly('#vvContent');
					buttonsOff("#vvBtnReviewList");
				}
			}
		);
		
		$("#vvBtnReviewNotes").click(
			function(e) {
				startReview();
				
				if (!$('#vvReviewNotes').is(':visible')) {
					showOnly('#vvReviewNotes');
					buttonOn("#vvBtnReviewNotes");
				} else {
					showOnly('#vvContent');
					buttonsOff("#vvBtnReviewList");
				}
			}
		);
		
		$("#vvBtnReviewSlides").click(
			function(e) {
				startReview();
				if (!runSlides) {
					initSlideShow('#vvReviewSlideContent','#slidePrevButton','#slideNextButton')
				}
				
				if (!$('#vvReviewSlides').is(':visible')) {
					showOnly('#vvReviewSlides');
					buttonOn("#vvBtnReviewSlides");
				} else {
					showOnly('#vvContent');
					buttonsOff("#vvBtnReviewSlides");
				}
			}
		);
		
		$("#vvBtnChangeIcons").click(function(e) {
			votePlugin.nextIconMode();
		});
		
		$('.annotator-annotation div').click(function(e) {
			if (speakMode == 'onClick') {
				var text = $('.annotator-annotation div')[0].innerText;
				if (!isUrl(text)) {
					speak(text)
				}
			}
		})
	}
)

// 3 review types: list, slides, notes
function startReview() {
	if (!runReview) {
		
		// list
		$('#vvReviewListTitle').html('Review: ' + document.title); 
		var annotations = mainAnnotator.dumpAnnotations();
		for (var i = 0; i < annotations.length; i++) {
			var annotation = annotations[i];
			var listItem = $('<li>');
			var highlight = $('<div class="vvReviewQuote"><span class="annotator-hl">'+annotation.quote+'</span></div>');
			var notes = $('<div class="vvReviewNote">My Notes: '+annotation.text+'</div>');
			var icons = $('<div class="vvReviewIcons">');
			Annotator.Plugin.Vote.prototype.updateViewer(icons, annotation);
			var date = new Date(annotation.created);

			var dateLine  = $('<div class="vvReviewDate">Added '+ printDate(date) +'</div>');
		
			listItem.append(highlight);
			listItem.append(notes);
			listItem.append(icons);
			listItem.append(dateLine);
			$('#vvReviewListItems').append(listItem);
		}
		
		// slides
		// start slide
		var startSlide = $('<div class="vvReviewSlide" id="vvStartSlide"><div class="vvReviewTitle">Review: ' + document.title + '</div></div>');
		$('#vvReviewSlideContent').append(startSlide);
		
		for (var i = 0; i < annotations.length; i++) {
			var annotation = annotations[i];
			var slide = $('<div class="vvReviewSlide">');
			var highlight = $('<div class="vvReviewQuote"><span class="annotator-hl">'+annotation.quote+'</span></div>');
			var notes = $('<div class="vvReviewNote">My Notes: '+annotation.text+'</div>');
			var icons = $('<div class="vvReviewIcons">');
			Annotator.Plugin.Vote.prototype.updateViewer(icons, annotation);
			var date = new Date(annotation.created);

			var dateLine  = $('<div class="vvReviewDate">Added '+ printDate(date) +'</div>');
		
			slide.append(highlight);
			slide.append(notes);
			slide.append(icons);
			slide.append(dateLine);
			slide.hide();
			$('#vvReviewSlideContent').append(slide);
		}
		
		var endSlide = $('<div class="vvReviewSlide" id="vvEndSlide"><div class="vvReviewTitle">The End: ' + document.title + '</div></div>');
		endSlide.hide();
		$('#vvReviewSlideContent').append(endSlide);
		
		// notes
		for (var i = 0; i < annotations.length; i++) {
			var annotation = annotations[i];
			var note = $('<div class="vvReviewSideNote">');
			var highlight = $('<div class="vvReviewQuote"><span class="annotator-hl">'+annotation.quote+'</span></div>');
			var notes = $('<div class="vvReviewNote">My Notes: '+annotation.text+'</div>');
			var icons = $('<div class="vvReviewIcons">');
			Annotator.Plugin.Vote.prototype.updateViewer(icons, annotation);
			var date = new Date(annotation.created);

			var dateLine  = $('<div class="vvReviewDate">Added '+ printDate(date) +'</div>');
		
			note.append(highlight);
			note.append(notes);
			note.append(icons);
			note.append(dateLine);
			$('#vvReviewNotesSidebar').append(note);
		}
	}
	runReview = true;
}

function startAnnotator(element) {
	// annotator stuff
	$(element).annotator({
		// readOnly: true,
	})
		.annotator('addPlugin', 'Auth', {
			token: getAuthToken(demoConsumerKey, demoConsumerSecret, 'votingvoice')
        })
		.annotator('addPlugin', 'Store', {
			prefix: 'http://annotateit.org/api',
			annotationData: {
			        'uri': window.location.href,
			},
			loadFromSearch: {
			        'limit': 100,
			        'uri': window.location.href,
			}
		})
		.annotator('addPlugin', 'Vote', {
			iconMode: 'stars'
		});
		
	// get a reference to the annotator
	return  $(element).annotator().data('annotator');
}

function startReadability(element) {
	if (!runReadability) {
		readability.init(element, "vvReviewOverlay", "#vvReviewNotesContent");
		$('#vvReviewOverlay').show();
		readability.init(element, "vvReadOverlay", "#vvPageElements");
	}
	runReadability = true;
}

function vvSpeak(text) {
	if (text == null || text.length == 0) text = 'no comments';
	speaking = meSpeak.speak(text, {
		variant: 'f2'
	});
}


function printDate(date) {
	return date.toDateString() + " at " + date.toLocaleTimeString();
}

// annotator stuff
if (!Date.prototype.toISOString) {
	Date.prototype.toISOString = function() {
		function pad(n) {
			return n < 10 ? '0' + n : n;
		}
		return this.getUTCFullYear() + '-' + pad(this.getUTCMonth() + 1) + '-' + pad(this.getUTCDate()) + 'T' + pad(this.getUTCHours()) + ':' + pad(this.getUTCMinutes()) + ':' + pad(this.getUTCSeconds()) + 'Z';
	};
}

// Please note that you would *never* expose the consumer secret in this way
// for an ordinary application. For the purposes of convenience for this demo, we do.
var demoConsumerKey = 'ead1f235b4b8444c98801b07398fc99e';
var demoConsumerSecret = 'e3eed9ac-3c9a-4f3b-a02f-0f898ee46b87';

function getAuthToken(consumerKey, consumerSecret, userId) {
	"use strict";

	var date = new Date(new Date() - 1 * 60 * 60 * 1000), // 1 hour ago
		alg = {
			typ: 'JWT',
			alg: 'HS256'
		},
		payload = {
			consumerKey: consumerKey,
			userId: userId,
			issuedAt: date.toISOString(),
			ttl: 86400
		},
		token;

	alg = JSON.stringify(alg);
	payload = JSON.stringify(payload);
	token = new jwt.WebToken(payload, alg);

	return token.serialize(consumerSecret);
}

// hide all the divs in this container except the named one
function showOnly(element) {
	var element = $(element);
	element.show();
	var parent = element.parent();
	parent.children().each( function() {
		if (!$(this).is(element)) {
			$(this).hide();
		}
	});
}

// highlight button
function buttonOn(element) {
	var element = $(element);
	element.addClass('button-on');
	var parent = element.parent();
	parent.children().each( function() {
		if (!$(this).is(element)) {
			$(this).removeClass('button-on');
		}
	});
}

// turn off all buttons, including this one
function buttonsOff(element) {
	var element = $(element);
	var parent = element.parent();
	parent.children().each( function() {
		$(this).removeClass('button-on');
	});
}



// http://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text
function getSelectedText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}


// slideshow
var runSlides = false;
var slideshowContainer = null;
var slideIndex = -1;
var slides;
var nextButton;
var prevButton;

function initSlideShow(container, prevB, nextB) {
	if (!runSlides) {
		slideshowContainer = $(container);
		slides = slideshowContainer.children();
		nextButton = $(nextB);
		prevButton = $(prevB);
		showSlide(0);
	
		$(nextButton).click(function(e) {
			slideIndex += 1;
			showSlide(slideIndex);
		})
		$(prevButton).click(function(e) {
			slideIndex -= 1
			showSlide(slideIndex);
		})
	}
	runSlides = true;
}

function showSlide(n) {
	for (var i = 0; i < slides.length; i++) {
		var slide = slides.eq(i);
		if (i == n) slide.show();
		else slide.hide();
	}
	nextButton.show();
	prevButton.show();
	
	if (n == 0) prevButton.hide();
	if (n == slides.length - 1) nextButton.hide();
	slideIndex = n;
}
