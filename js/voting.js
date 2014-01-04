// store the annotator user credentials (TODO: fix this hack)
var demoConsumerKey = 'ead1f235b4b8444c98801b07398fc99e';
var demoConsumerSecret = 'e3eed9ac-3c9a-4f3b-a02f-0f898ee46b87';
var demoUserID = 'votingvoice';
// readability: https://www.readability.com/developers/api/parser
var readabilityAPIKey = '605b8405ed2bdeb5a63856a6972c503f1306e9de';

// globals
var mainAnnotator = null;
var votePlugin = null;

// where the magic happens
$(document).ready(
	function() {
		// set up stuff
		//setupDocument(['btnAnnotator']);
		
		// speech
		startSpeech();
		
		// readability mode
		// startReadability("#vvContent", "vvReadOverlay", "#vvPageElements");
		//startReadability("#vvContent", "vvReviewOverlay", "#vvReviewNotesContent");
		
		//readabilityRequest('http://umbc.edu', 'readabilityWebTest', '#vvPageElements');
		
		// annotator and vote plugin
		mainAnnotator = startAnnotator('.vvContent', 'plaintext', true);
		votePlugin = mainAnnotator.plugins.Vote;
		
		// setupReviewList
		
		// toolbar
	}
)

// set up important stuff: the annotator, readability, the review notes, the slide show

// start annotator on the specified dom element with specified tag mode
function startAnnotator(element, tag_mode, use_speech) {
	// plugins: auth, store, and (my own custom) vote
	
	$(element).annotator({ readOnly: false, })
	.annotator('addPlugin', 'Auth', { token: getAuthToken(demoConsumerKey, demoConsumerSecret, demoUserID) })
	.annotator('addPlugin', 'Vote', { tagMode: tag_mode, useSpeech: use_speech })
	.annotator('addPlugin', 'Store', {
		prefix: 'http://annotateit.org/api',
		annotationData: {
			'uri': window.location.href,
		},
		loadFromSearch: {
			'limit': 100,
			'uri': window.location.href,
		}
	});
		
	// return a reference to the annotator
	return $(element).annotator().data('annotator');
}

// run readability on the specified content
function startReadability(element, name, newParent) {
	readability.init(element, name, newParent);
}


// take a (mostly) uninstrumented page and set it up
function setupToolbar(toolbarOptions) {
	var btnAnnotator = $('<button class="vvBtnAnnotator"><img src="../images/postit.png"><br><span>Load Notes</span></button>');
	var btnRead = $('<button class="vvBtnRead"><img src="../images/book.png"><br><span>Text Only</span></button>');
	var btnSpeak = $('<button class="vvBtnSpeak"><img src="../images/speak.png"><br><span>Speak</span></button>');
	var btnReviewList = $('<button class="vvBtnReviewList"><img src="../images/review.png"><br><span>Review List</span></button>');
	var btnReviewNotes = $('<button class="vvBtnReviewNotes"><img src="../images/notebook.png"><br><span>Review Notes</span></button>');
	var btnReviewSlides = $('<button class="vvBtnReviewSlides"><img src="../images/presentation.png"><br><span>Review Slides</span></button>');
	var btnChangeIcons = $('<button class="vvBtnChangeIcons"><img src="../images/frown.png"><br><span>Not loaded</span></button>');
	
	var toolbar = $('<div class="vvToolbar">');
	var toolbarShadow = $('<div class="vvToolbarShadow">');
	
	for (var i = 0; i < toolbarOptions.length; i++) {
		var name = toolbarOptions[i];
		if (name == 'btnAnnotator') {
			toolbar.append(btnAnnotator);
			$(".vvBtnAnnotator").click(vvBtnAnnotator_click);
		}
		else if (name == 'btnRead') {
			toolbar.append(btnRead);
			$(".vvBtnRead").click(vvBtnRead_click);
		}
		else if (name == 'btnSpeak') {
			toolbar.append(btnSpeak);
			$(".vvBtnSpeak").click(vvBtnSpeak_click);
		}
		else if (name == 'btnReviewList') {
			toolbar.append(btnReviewList);
			$(".vvBtnReviewList").click(vvBtnReviewList_click);
		}
		else if (name == 'btnReviewNotes') {
			toolbar.append(btnReviewNotes);
			$(".vvBtnReviewNotes").click(vvBtnReviewNotes_click);
		}
		else if (name == 'btnReviewSlides') {
			toolbar.append(btnReviewSlides);
			$(".vvBtnReviewSlides").click(vvBtnReviewSlides_click);
		}
		else if (name == 'btnChangeIcons') {
			toolbar.append(btnChangeIcons);
			$(".vvBtnChangeIcons").click(vvBtnChangeIcons_click);
		}
	}
	
	$('body').prepend(toolbarShadow);
	$('body').prepend(toolbar);
}

function setupDocument(toolbarOptions) {
	$('body').wrapInner('<div class="vvContent"/>');
	$('.vvContent').wrap('<div class="vvPageElements"/>')

	// prepend toolbar
	setupToolbar(toolbarOptions);
}

// the following 3 functions create DIV elements (under the destination) 
// with review notes

function setupReviewList(annotator, idName, destinationElement) {
	var container = $('<div id="'+idName+'" class="vvReviewList">');
	var heading = $('<h1 class="vvReviewListTitle"></h1>');
	var list = $('<ol class="vvReviewListItems"></ol>');
	
	heading.html('Review: ' + document.title); 
	var annotations = annotator.dumpAnnotations();
	for (var i = 0; i < annotations.length; i++) {
		var annotation = annotations[i];
		var listItem = $('<li>');
		var highlight = $('<div class="vvReviewQuote"><span class="annotator-hl">'+annotation.quote+'</span></div>');
		var notes = $('<div class="vvReviewNote">My Notes: '+annotation.text+'</div>');
		var icons = $('<div class="vvReviewIcons">');
		Annotator.Plugin.Vote.prototype.updateViewer(icons, annotation); // add tag icons
		var dateLine  = $('<div class="vvReviewDate">Added '+ printDate(new Date(annotation.created)) +'</div>');
	
		listItem.append(highlight);
		listItem.append(notes);
		listItem.append(icons);
		listItem.append(dateLine);
		list.append(listItem);
	}
	
	container.append(heading);
	container.append(list);
	$(destinationElement).append(container);
	return container;
}

// doesn't (yet) add content
function setupReviewNotes(annotator, idName, destinationElement) {
	var container = $('<div id="'+idName+'" class="vvReviewNotes">');
	var content = $('<div class="vvReviewNotesContent"></div>');
	var sidebar = $('<div class="vvReviewNotesSidebar"></div>');

	var annotations = annotator.dumpAnnotations();
	for (var i = 0; i < annotations.length; i++) {
		var annotation = annotations[i];
		var note = $('<div class="vvReviewSideNote">');
		var highlight = $('<div class="vvReviewQuote"><span class="annotator-hl">'+annotation.quote+'</span></div>');
		var notes = $('<div class="vvReviewNote">My Notes: '+annotation.text+'</div>');
		var icons = $('<div class="vvReviewIcons">');
		Annotator.Plugin.Vote.prototype.updateViewer(icons, annotation);
		var dateLine  = $('<div class="vvReviewDate">Added '+ printDate(new Date(annotation.created)) +'</div>');
	
		note.append(highlight);
		note.append(notes);
		note.append(icons);
		note.append(dateLine);
		sidebar.append(note);
	}

	container.append(content);
	container.append(sidebar);
	$(destinationElement).append(container);
	return container;
}

// note: we currently only support one slide show
function setupReviewSlides(annotator, idName, destinationElement) {
	var container = $('<div id="'+idName+'" class="vvReviewSlides">');
	var content = $('<div class="vvReviewSlideContent">');
	var controls = $('<div class="vvReviewSlideControls"/>')
	var prevButton = $('<div class="slidePrevButton"><img src="../images/prev.png"></div>');
	var nextButton = $('<div class="slideNextButton"><img src="../images/next.png"></div>');
	controls.append(prevButton);
	controls.append(nextButton);
	
	var startSlide = $('<div class="vvReviewSlide"><div class="vvReviewTitle">Review: ' + document.title + '</div></div>');
	content.append(startSlide);
		
	for (var i = 0; i < annotations.length; i++) {
		var annotation = annotations[i];
		var slide = $('<div class="vvReviewSlide">');
		var highlight = $('<div class="vvReviewQuote"><span class="annotator-hl">'+annotation.quote+'</span></div>');
		var notes = $('<div class="vvReviewNote">My Notes: '+annotation.text+'</div>');
		var icons = $('<div class="vvReviewIcons">');
		Annotator.Plugin.Vote.prototype.updateViewer(icons, annotation);
		var dateLine  = $('<div class="vvReviewDate">Added '+ printDate(new Date(annotation.created)) + '</div>');

		slide.append(highlight);
		slide.append(notes);
		slide.append(icons);
		slide.append(dateLine);
		content.append(slide);
	}

	var endSlide = $('<div class="vvReviewSlide"><div class="vvReviewTitle">The End</div></div>');
	content.append(endSlide);
	
	container.append(content);
	container.append(controls);
	$(destinationElement).append(container);
	
	// set up slides
	initSlideShow(content,prevButton,nextButton);
	return container;
}

// start toolbar DOM UI functions

// hide all the divs in this container except the named one
function showOnly(element) {
	var element = $(element);
	element.parent().children().each( function() {
		$(this).hide();
	});
	element.show();
}

// highlight this button (and turn off the others)
function buttonOn(element) {
	var element = $(element);
	element.parent().children().each( function() {
		$(this).removeClass('button-on');
	});
	element.addClass('button-on');
}

// turn off all buttons, including this one
function buttonsOff(element) {
	var element = $(element);
	element.parent().children().each( function() {
		$(this).removeClass('button-on');
	});
}

// end toolbar DOM

// start annotator backend

// create an authentication token for the backend
// http://okfnlabs.org/annotator/demo/
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

// ISO 8601 date (for annotator store)
// http://okfnlabs.org/annotator/demo/
if (!Date.prototype.toISOString) {
	Date.prototype.toISOString = function() {
		function pad(n) {
			return n < 10 ? '0' + n : n;
		}
		return this.getUTCFullYear() + '-' + pad(this.getUTCMonth() + 1) + '-' + pad(this.getUTCDate()) + 'T' + pad(this.getUTCHours()) + ':' + pad(this.getUTCMinutes()) + ':' + pad(this.getUTCSeconds()) + 'Z';
	};
}

// end annotator backend

// start mespeak

// initialize mespeak
function startSpeech() {
	meSpeak.loadConfig("../js/mespeak_config.json");
	meSpeak.loadVoice('../js/en-us.json');
}

// speak using meSpeak
function vvSpeak(text) {
	if (text == null || text.length == 0) text = 'no comment';
	var speaking = meSpeak.speak(text, { variant: 'f2' });
}

// end mespeak

// start slideshow
var slides;
var slideIndex = -1;
var nextButton;
var prevButton;

function initSlideShow(container, prevB, nextB) {
	var slideshowContainer = $(container);
	slides = slideshowContainer.children();
	nextButton = $(nextB);
	prevButton = $(prevB);
	
	$(nextButton).click(function(e) {
		slideIndex += 1;
		showSlide(slideIndex);
	})
	$(prevButton).click(function(e) {
		slideIndex -= 1
		showSlide(slideIndex);
	})
	
	showSlide(0);
	didSetupSlides = true;
}

// show the slide and activate appropriate buttons
function showSlide(n) {
	for (var i = 0; i < slides.length; i++) {
		if (i == n) slides.eq(i).show();
		else slides.eq(i).hide();
	}
	nextButton.show();
	prevButton.show();
	
	if (n == 0) prevButton.hide();
	if (n == slides.length - 1) nextButton.hide();
	slideIndex = n;
}
// end slideshow

// util functions

// used to speak selected text
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

// prient friendly date (for notes)
function printDate(date) {
	return date.toDateString() + " at " + date.toLocaleTimeString();
}

// start readability

// get the readability source. when it's done, add the rendered html to the named container
function readabilityRequest(scrapeUrl, destinationContainer, destinationName) {
	var url = 'http://readability.com/api/content/v1/parser?callback=?&token='+readabilityAPIKey+'&url='+scrapeUrl;
	$.getJSON(url, function(json) {
		if (json.error != undefined) console.log('Readability: ' + json.error);
		else {
			console.log('Readability: loaded ' + scrapeUrl);
			var title = json.title;
			var titleH1 = $('<h1>'+title+'</h1>');
			var content = $(json.content);
			var container = $('<div class="readabilityOuter">');
			if (destinationName !== undefined) container.attr('id', destinationName);
			content.addClass('readabilityInner');
			content.prepend(titleH1);
			container.append(content);
			$(destinationContainer).empty();
			$(destinationContainer).append(container);
		}
	});
}

function setupReadabilitySearch(element, outputID) {
	var element = $(element);
	var searchPanel = element.find('.vvReadabilitySearchPanel')
	var searchResults = element.find('.vvReadabilitySearchResults');
	searchResults.html('<span class="vvSearchLoading">Loading results...</span>');
	searchResults.hide();
	var element = $(element);
	var inputBox = element.find('input');
	var button = element.find('button');
	button.click(function(e) {
		searchPanel.hide();
		searchResults.show();
		readabilityRequest(inputBox.val(), searchResults);
	})
	
}

// end readability

// event handlers

function vvBtnAnnotator_click(e) {
	startAnnotator('#vvContent');
	$("#vvBtnAnnotator").addClass('annotator-button-on')
	$("#vvBtnAnnotatorCaption").html('Notes loaded')
}

function vvBtnSpeak_click(e) {
	vvSpeak(getSelectedText());
}

function vvBtnChangeIcons_click(e) {
	votePlugin.nextIconMode();
}

function vvBtnRead_click(e) {
	if (!$('#vvReadOverlay').is(':visible')) {
		showOnly('#vvReadOverlay');
		buttonOn("#vvBtnRead");
	} else {
		showOnly('#vvContent');
		buttonsOff("#vvBtnRead");
	}
}

function vvBtnReviewList_click(e) {	
	if (!$('#vvReviewList').is(':visible')) {
		showOnly('#vvReviewList');
		buttonOn("#vvBtnReviewList");
	} else {
		showOnly('#vvContent');
		buttonsOff("#vvBtnReviewList");
	}
}

function vvBtnReviewNotes_click(e) {	
	if (!$('#vvReviewNotes').is(':visible')) {
		showOnly('#vvReviewNotes');
		buttonOn("#vvBtnReviewNotes");
	} else {
		showOnly('#vvContent');
		buttonsOff("#vvBtnReviewList");
	}
}

function vvBtnReviewSlides_click(e) {
	if (!$('#vvReviewSlides').is(':visible')) {
		showOnly('#vvReviewSlides');
		buttonOn("#vvBtnReviewSlides");
	} else {
		showOnly('#vvContent');
		buttonsOff("#vvBtnReviewSlides");
	}
}