// five options: plaintext, positiveSmiley, positiveCheck, stars, icon4, icon8

var iconModes = ['plaintext', 'positiveSmiley', 'positiveCheck', 'stars', 'icon4', 'icon8'];

var plaintext = [];
var positiveSmiley = ['smile', 'frown'];
var positiveCheck = ['check', 'x'];
var stars = ['star','star', 'star', 'star'];
var icon4 = ['check', 'x', 'qmark', 'star-full'];
var icon8 = ['check', 'x', 'qmark', 'star-full', 'house', 'money', 'book2', 'health'];
var votePlugin = null;
var starIDs = ['star1', 'star2', 'star3', 'star4']

Annotator.Plugin.Vote = function(element, options) {
	var plugin = {};
	votePlugin = this;

	Annotator.Plugin.apply(this, options);
	this.iconMode = options["iconMode"];
	$('#vvBtnChangeIconsCaption').html(this.iconMode);
	$('#vvBtnChangeIcons').show();
	
	plugin.pluginInit = function() {
		this.annotator
			.subscribe("beforeAnnotationCreated", function(annotation) {
				console.info("The annotation: %o has just been created!")
			})
			.subscribe("beforeAnnotationUpdated", function(annotation) {
				console.info("The annotation: %o has just been created!")

			})
			.subscribe("annotationCreated", function(annotation) {
				console.info("The annotation: %o has just been created!")
			})
			.subscribe("annotationUpdated", function(annotation) {
				console.info("The annotation: %o has just been created!")
			})
			.subscribe("annotationsLoaded", function(annotations) {
				console.info("The annotation: %o has just been created!");
				// give each annotation highlight its id
				for (var i = 0; i < annotations.length; i++) {
					var annotation = annotations[i];
					annotation.highlights[0].id = annotation.id;
				}
			})
			.subscribe("annotationDeleted", function(annotation) {
				console.info("The annotation: %o has just been created!")
			})
			.subscribe("annotationEditorShown", function(editor, annotation) {
				// for new annotation, annotation.quote has the quote text
				console.info("The annotation: %o has just been created!")
			})
			.subscribe("annotationEditorHidden", function(editor) {
				console.info("The annotation: %o has just been created!")
			})
			.subscribe("annotationViewerShown", function(viewer, annotations) {
				// annotation.highlights has the highlighted fields
				console.info("The annotation: %o has just been created!")
				if (speakMode == 'onOpen') {
					var text = $('.annotator-annotation div')[0].innerText;
					if (!isUrl(text)) {
						speak(text)
					}
				}
				
			})
			.subscribe("annotationViewerTextField", function(field, annotation) {
				console.info("The annotation: %o has just been created!")
			})
		
		// we add a field for an image (if our comment is an image)
		this.annotator.viewer.addField({
			class: 'imageViewer',
			load: Annotator.Plugin.Vote.prototype.updateViewer,
		});

		this.annotator.editor.addField({
			load: Annotator.Plugin.Vote.prototype.setupEditorField,
			submit: Annotator.Plugin.Vote.prototype.editorSubmit
		});
	}
	return plugin;
};

Annotator.Plugin.Vote.prototype = new Annotator.Plugin();

Annotator.Plugin.Vote.prototype.updateViewer = function(field, annotation) {
	$(field).children().remove();
	
	// if there are images, add them to the field
	if (isUrl($.trim(annotation.text))) {
		$(field).append('<img src="' + annotation.text + '" width="200"/>');
	} 
	
	// if the note has icons, show them
	if (annotation.icons != null && annotation.icons.length > 0) {
		var buttonContainer = $('<div>').addClass('annotator-voteButtons');
		for (var i = 0; i < annotation.icons.length; i++) {
			var icon = annotation.icons[i];
			var button = $('<div class="annotator-voteButton" title="'+icon+'"><img src="../icons/'+icon+'.png"/></div>')
			buttonContainer.append(button);
		}
		$(field).append(buttonContainer);
	}
	
	if ($(field).children().length == 0) {
		$(field).remove()
	}
};

Annotator.Plugin.Vote.prototype.updateViewer = function(field, annotation) {
	$(field).children().remove();
	
	// if there are images, add them to the field
	if (isUrl($.trim(annotation.text))) {
		$(field).append('<img src="' + annotation.text + '" width="200"/>');
	} 
	
	// if the note has icons, show them
	if (annotation.icons != null && annotation.icons.length > 0) {
		if (annotation.iconMode != "stars")
		{
			var buttonContainer = $('<div>').addClass('annotator-badge-viewer');
			for (var i = 0; i < annotation.icons.length; i++) {
				var icon = annotation.icons[i];
				var button = $('<div class="annotator-voteBadge" title="'+icon+'"><img src="../icons/'+icon+'.png"/></div>')
				buttonContainer.append(button);
			}
			$(field).append(buttonContainer);
		} else {
			var buttonContainer = $('<div>').addClass('annotator-badge-viewer');
			for (var i = 0; i < starIDs.length; i++) {
				var starName = starIDs[i];
				if (annotation.icons != null && $.inArray(starName, annotation.icons) > -1) {
					var button = $('<div class="annotator-voteBadge" title="'+starName+'">');
					button.append($('<img src="../icons/star-full.png"/>'));
					buttonContainer.append(button);
				}
			}
			if (buttonContainer.children().length > 0) {
				$(field).append(buttonContainer);
			}
		}
	}
	
	if ($(field).children().length == 0) {
		$(field).remove()
	}
};

Annotator.Plugin.Vote.prototype.getIconSet = function(iconMode) {
	if (iconMode == 'plaintext') return plaintext;
	else if (iconMode == 'positiveSmiley') return positiveSmiley;
	else if (iconMode == 'positiveCheck') return positiveCheck;
	else if (iconMode == 'stars') return stars;
	else if (iconMode == 'icon4') return icon4;
	else if (iconMode == 'icon8') return icon8;	
}

Annotator.Plugin.Vote.prototype.editorSubmit = function(field, annotation) {
	if (annotation.iconMode == null) {
		annotation.iconMode =  votePlugin.iconMode;
	}
	annotation.icons = [];
	// for each selected icon, add it to the stored annotation
	if (annotation.iconMode != "stars") {
		$('div.annotator-voteButton').each(function() {
			if ($(this).hasClass('button-on')) {
				annotation.icons.push($(this).attr('title'));
			}
		});
	} else {
		$('div.annotator-voteButton').each(function() {
			if ($(this).children("img").attr("src") == "../icons/star-full.png") {
				annotation.icons.push($(this).attr('title'));
			}
		});
	}
}

Annotator.Plugin.Vote.prototype.nextIconMode = function() {
	var index = iconModes.indexOf(this.iconMode);
	index += 1;
	if (index >= iconModes.length) index = 0;
	this.iconMode = iconModes[index];
	console.info('Changed icon mode to ' + this.iconMode);
	$('#vvBtnChangeIconsCaption').html(this.iconMode);
}

// return the icon editor bar as a string, for the annotator
Annotator.Plugin.Vote.prototype.setupEditorField = function(field, annotation) {
	// remove existing annotator-votebutton divs
	$(field).children().remove();

	// correct a bug. wipe out iconset and icons if the annotation is new / not created yet
	if (annotation.created == null) {
		annotation.iconMode = null;
		annotation.icons = null;
	}
	
	var iconMode;
	if (annotation.iconMode != null) iconMode = annotation.iconMode;
	else iconMode = votePlugin.iconMode;
	
	if (iconMode == "plaintext") {
		$(field).remove();
		return;
	}
	
	var iconSet = Annotator.Plugin.Vote.prototype.getIconSet(iconMode);
	
	// do we have any active icons? if so, add them
	var buttonContainer = $('<div>').addClass('annotator-voteButtons');
	if (iconMode != "stars" && iconMode != "plainText") {
		for (var i = 0; i < iconSet.length; i++) {
			var icon = iconSet[i];
			var button = $('<div class="annotator-voteButton" title="'+icon+'"><img src="../icons/'+icon+'.png"/></div>')
			if (annotation.icons != null && $.inArray(icon, annotation.icons) > -1) {
				button.addClass('button-on');
			} else {
				button.removeClass('button-on');
			}
			button.click(function(e) {
				$(this).toggleClass('button-on');
			})
			buttonContainer.append(button);
		}
	} else if (iconMode == "stars") { // stars have special handling. if we click a star then the n-1 stars go on
		for (var i = 0; i < starIDs.length; i++) {
			var starName = starIDs[i];
			var button = $('<div class="annotator-voteButton annotator-star" title="'+starName+'">');
			if (annotation.icons != null && $.inArray(starName, annotation.icons) > -1) {
				button.append($('<img src="../icons/star-full.png"/>'));
			} else {
				button.append($('<img src="../icons/star.png"/>'));
			}
			button.click(function(e) {
				// turn on everything up to this, and off everything after it
				var container = $(this).parent();
				var index = container.children().index($(this));
				for (var i = 0; i < container.children().length; i++) {
					if (i <= index) {
						$(container.children()[i]).children("img").attr("src", "../icons/star-full.png")
					} else {
						$(container.children()[i]).children("img").attr("src", "../icons/star.png")
					}
				}
			})
			buttonContainer.append(button);
		}
	
	}
	$(field).append(buttonContainer);
}
