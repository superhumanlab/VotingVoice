
var textsizeCookieVal = readCookie('textSize'),
currentSize = textsizeCookieVal != null ? parseInt(textsizeCookieVal) :  3;

function textSize(type) {
	var sizes = ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
	sizeVal,
	defaultSize,
	d = document,
	x;

	if (currentSize > 6 || currentSize < 0) return;

	if (type == 'increase') {
		if (currentSize > 5) return;
		currentSize++;
	} else if (type == 'decrease') {
		if (currentSize < 1) return;
		currentSize--;
	}

	sizeVal = sizes[currentSize];
	defaultSize = currentSize == 3;

	if (defaultSize && !type) return;

	if ((x = d.getElementById('story-body-text') || d.getElementById('story-body'))) {
		x.className = sizeVal;
	}
	if ((x = d.getElementById('story-body2'))) {
		x.className = sizeVal;
	}
	if ($$('.galleryModule')) {
		$$('.galleryModule p').each(function(s) {
			if (s.hasClassName('date')) {
				s.className = 'date' + (defaultSize ? '' : ' ' + sizeVal);  
			} else {
				s.className = sizeVal;
			}
		});
		$$('.galleryModule h3').each(function(s) {
			s.className = defaultSize ? '' : sizeVal; 
		});
	}

	if (typeof resetInlineAds != 'undefined') {
		resetInlineAds();
	}

	if (type) {
		eraseCookie('textSize');
		createCookie('textSize', currentSize, 365);
	}
}