function createCookie(name,value,days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function createCookieWithDomain(name,value,days,domain) {
	var expires = "";
	var domainStr = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	}
	if (domain) {
		domainStr = "; domain="+domain;
	}
	document.cookie = name+"="+value+expires+domainStr+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function readDFPCookie(name) {
	var nameEQ = "doubleclickserved=" + name;
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) {return true;}
	}
	return null;
}

function checkViewed(adID) {
	var currentCookie = readDFPCookie(adID);
	var returnValue;
	if (currentCookie) {
		returnValue = 'yes';
	} else {
		createCookie('doubleclickserved',adID,1);
		returnValue = 'no';	
	}
	return returnValue;
}

function cookieEncode(value) {
    if (value== null || value== "")
		return "";
   var keyStr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/=";
   var output = "";
   var char1, char2, char3;
   var enc1, enc2, enc3, enc4;
   var i = 0;
   do {
      char1 = value.charCodeAt(i++);
      char2 = value.charCodeAt(i++);
      char3 = value.charCodeAt(i++);
      enc1 = char1 >> 2;
      enc2 = ((char1 & 3) << 4) | (char2 >> 4);
      enc3 = ((char2 & 15) << 2) | (char3 >> 6);
      enc4 = char3 & 63;
      if (isNaN(char2)) {
         enc3 = enc4 = 64;
      } else if (isNaN(char3)) {
         enc4 = 64;
      }
      output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + 
         keyStr.charAt(enc3) + keyStr.charAt(enc4);
   } while (i < value.length);
   return output;
}

function cookieDecode(value) {
	  if (value== null || value== "")
		return "";
      var keyStr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/=";
      var output = "";
      var char1, char2, char3 = "";
      var enc1, enc2, enc3, enc4 = "";
      var i = 0;
      value = value.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      do {
         enc1 = keyStr.indexOf(value.charAt(i++));
         enc2 = keyStr.indexOf(value.charAt(i++));
         enc3 = keyStr.indexOf(value.charAt(i++));
         enc4 = keyStr.indexOf(value.charAt(i++));
         char1 = (enc1 << 2) | (enc2 >> 4);
         char2 = ((enc2 & 15) << 4) | (enc3 >> 2);
         char3 = ((enc3 & 3) << 6) | enc4;
         output = output + String.fromCharCode(char1);
         if (enc3 != 64) {
            output = output + String.fromCharCode(char2);
         }
         if (enc4 != 64) {
            output = output + String.fromCharCode(char3);
         }
         char1 = char2 = char3 = "";
         enc1 = enc2 = enc3 = enc4 = "";
      } while (i < value.length);
      return output;
 }


function readCvalue(cookie, name) {
	var nameEQ = name + ":";
	var ca = cookie.split('|');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) 
			return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function addCvalue(cookie,name,value) {
	var nameEQ = name + ":";
	if (cookie)
		cookie = cookie + "|" + nameEQ + value;
	else
		cookie = nameEQ + value;
	return cookie;
}

function makeSessionFrame() {
	var iframeHTML='\<iframe id="SessionIFrame" src="/services/site/registration/get-session" style="';
    iframeHTML+='border:0px;';
    iframeHTML+='width:0px;';
    iframeHTML+='height:0px;';
    iframeHTML+='"><\/iframe>';
    document.getElementById('sessionchk').innerHTML=iframeHTML;
}
