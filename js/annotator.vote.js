/* 
VotingVoice plugin for annotator by Shaun Kane

This does a bunch of cool stuff.
- parses image URLs in comments and shows them as images
- customizable image-based tagging (checkmark vs. X, 4 star rating, etc)
- ties the highlight spans to the annotator object by setting the span id to the annotation's store ID
- speak button added to viewer (requires mespeak)
- speak button for selection highlight, too.

*/

// tag options
var tagModes = ['plaintext', 'positiveSmiley', 'positiveCheck', 'stars', 'tag4', 'tag10'];
var plaintext = [];
var positiveSmiley = ['smile', 'frown'];
var positiveCheck = ['check', 'x'];
var stars = ['star','star', 'star', 'star'];
var tag4 = ['check', 'x', 'qmark', 'star-full'];
var tag10 = ['smile', 'frown', 'check', 'x', 'qmark', 'star-full', 'house', 'money', 'book2', 'health'];
var starIDs = ['star1', 'star2', 'star3', 'star4', 'star5']

Annotator.Plugin.Vote = function(element, options) {
	Annotator.Plugin.apply(this, options);
	
	// set an tagMode and show the toggle button. default is plaintext
	if (options["tagMode"] !== undefined) this.tagMode = options["tagMode"];
	else this.tagMode = "plaintext";
	
	this.useSpeech = options["useSpeech"];

	// extend the annotator plugin, and listen for events
	this.pluginInit = function() {
		this.annotator
			.subscribe("annotationsLoaded", function(annotations) {
				// give each annotation highlight the id of its corresponding annotation
				for (var i = 0; i < annotations.length; i++) {
					for (var j = 0; j < annotations[i].highlights.length; j++) {
						$(annotations[i].highlights[j]).addClass(annotations[i].id);
					}
				}
			})
			.subscribe("annotationCreated", function(annotation) {
				// our annotations don't come with an id until a page refresh, so assign a
				// temporary id (the current time) so we can track highlights
				annotation.id = $.now().toString();
				for (var j = 0; j < annotation.highlights.length; j++) {
					$(annotation.highlights[j]).addClass(annotation.id);
				}
			});
			
		// we add a field for an image (if our comment is an image)
		this.annotator.viewer.addField({
			load: Annotator.Plugin.Vote.prototype.updateViewer,
		});

		this.annotator.editor.addField({
			load: Annotator.Plugin.Vote.prototype.updateEditor,
			submit: Annotator.Plugin.Vote.prototype.editorSubmit,
		});
		
		if (this.useSpeech) {
			var newAdder = $('<div class="annotator-adder">');
			var addButton = $('<button class="adderButton">');
			addButton.click(this.annotator.adder.onAdderClick);
			
			// add a speak button
			var speakButton = $('<div class="speakButton"><div style="line-height: 40px">Speak</div></div>"');
			speakButton.mousedown(function(e) {
				vvSpeak(getSelectedText());
			})
			newAdder.append(addButton);
			//newAdder.append(speakButton);
			var button = $('.annotator-adder button');
			//$(this.annotator.adder).off('click');
			
			this.annotator.adder.append(speakButton);
			// this.annotator.adder = newAdder;
		}
	}
	return this;
};

Annotator.Plugin.Vote.prototype = new Annotator.Plugin();

Annotator.Plugin.Vote.prototype.updateViewer = function(field, annotation) {
	$(field).children().remove(); // remove any old elements we previously added
	
	// if there are images, add an image viewer to the field
	if (isImageUrl($.trim(annotation.text))) {
		$(field).append('<div class="annotator-imageViewer"><img src="' + annotation.text + '" width="200"/></div');
	} 
	
	// if the note has tags, show them
	// we have a different mode for stars
	if (annotation.tags != null && annotation.tags.length > 0) {
		var buttonContainer = $('<div>').addClass('annotator-tagViewer');

		if (annotation.tagMode != "stars")
		{
			for (var i = 0; i < annotation.tags.length; i++) {
				var tag = annotation.tags[i];
				var button = $('<div class="annotator-tag" title="'+tag+'"><img src="../images/'+tag+'.png"/></div>')
				buttonContainer.append(button);
			}
		} else { // stars
			for (var i = 0; i < starIDs.length; i++) {
				var starName = starIDs[i];
				if (annotation.tags != null && $.inArray(starName, annotation.tags) > -1) {
					var button = $('<div class="annotator-tag" title="'+starName+'">');
					button.append($('<img src="../images/star-full.png"/>'));
					buttonContainer.append(button);
				}
			}
		}
		
		// if we added any tags, add the container
		if (buttonContainer.children().length > 0) $(field).append(buttonContainer);
	}
	
	// if speech is enabled, add a speak button
	if (votePlugin.useSpeech) {
		var speakButton = $('<div class="annotator-speakButton"><img src="../images/speakbutton.png"/></div>');
		speakButton.click(function(e) {
			vvSpeak(annotation.text);
		})
		$(field).append(speakButton);
	}
	
	// if we didn't add anything, remove this empty editor field
	if ($(field).children().length == 0) $(field).remove();	
};

// return the tag editor bar as a string, for the annotator
Annotator.Plugin.Vote.prototype.updateEditor = function(field, annotation) {
	$(field).children().remove(); // remove any old elements we previously added

	// which tagMode to show? if the annotator already has one, use that
	// if not, use the annotator's current mode
	var tagMode;
	if (annotation.tagMode != null) tagMode = annotation.tagMode;
	else tagMode = votePlugin.tagMode;
	var tagSet = Annotator.Plugin.Vote.prototype.getTagSet(tagMode);
	
	// go through the tags in that set and add buttons for them
	// if the annotation has that tag, then activate the button
	var buttonContainer = $('<div>').addClass('annotator-tagEditor');
	if (tagMode != "stars") {
		for (var i = 0; i < tagSet.length; i++) {
			var tag = tagSet[i];
			var button = $('<div class="annotator-tagButton" title="'+tag+'"><img src="../images/'+tag+'.png"/></div>')
			if (annotation.tags != null && $.inArray(tag, annotation.tags) > -1) {
				button.addClass('button-on');
			} 
			button.click(function(e) {
				$(this).toggleClass('button-on');
			})
			buttonContainer.append(button);
		}
	} else if (tagMode == "stars") { // stars have special handling. if we click a star then the n-1 stars go on
		for (var i = 0; i < starIDs.length; i++) {
			var starName = starIDs[i];
			var button = $('<div class="annotator-tagButton annotator-star" title="'+starName+'">');
			if (annotation.tags != null && $.inArray(starName, annotation.tags) > -1) {
				button.addClass('star-on');
				button.append($('<img src="../images/star-full.png"/>'));
			} else {
				button.append($('<img src="../images/star.png"/>'));
			}
			
			button.click(function(e) {
				// when I click on star N, turn on stars <= N
				var container = $(this).parent();
				var index = container.children().index($(this));
				for (var i = 0; i < container.children().length; i++) {
					var child = container.children().eq(i);
					if (i <= index) {
						child.children("img").attr("src", "../images/star-full.png")
						child.addClass('star-on');
					} else {
						child.children("img").attr("src", "../images/star.png")
						child.removeClass('star-on');
					}
				}
			})
			buttonContainer.append(button);
		}
	}
	
	// if we added any tags, add the container
	if (buttonContainer.children().length > 0) $(field).append(buttonContainer);
	
	// if we didn't add anything, remove this empty editor field
	if ($(field).children().length == 0) $(field).remove();
}

Annotator.Plugin.Vote.prototype.editorSubmit = function(field, annotation) {
	if (annotation.tagMode == null) { // set a tag mode for all edited annotations
		annotation.tagMode = votePlugin.tagMode;
	}
	
	// check the editor. set the annotation's tags to be all "on" buttons
	annotation.tags = [];
	$('div.annotator-tagButton').each(function() {
		if ($(this).hasClass('button-on') || $(this).hasClass('star-on')) {
			annotation.tags.push($(this).attr('title'));
		}
	});
}

// get the set of tag images
Annotator.Plugin.Vote.prototype.getTagSet = function(tagMode) {
	if (tagMode == 'plaintext') return plaintext;
	else if (tagMode == 'positiveSmiley') return positiveSmiley;
	else if (tagMode == 'positiveCheck') return positiveCheck;
	else if (tagMode == 'stars') return stars;
	else if (tagMode == 'tag4') return tag4;
	else if (tagMode == 'tag10') return tag10;	
}

// set the next tag mode
Annotator.Plugin.Vote.prototype.nextTagMode = function() {
	var index = tagModes.indexOf(this.tagMode);
	index += 1;
	if (index >= tagModes.length) index = 0;
	this.tagMode = tagModes[index];
	console.info('Changed tag mode to ' + this.tagMode);
}

// http://stackoverflow.com/questions/6803463/how-can-you-detect-a-url-in-a-text-area-using-a-javascript-callback-function
function isImageUrl(s) {
    var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?(jpg|gif|png|jpeg)/
    return regexp.test(s);
}