function toggle_textbox(onoff) {
	if(onoff == "on"){
		document.getElementById('search').className="searchon";
	}
	else if(onoff == "off"){
		document.getElementById('search').className="searchoff";
	}
}
function getElementsByClassName(node, classname) {
	var a = [];
	var re = new RegExp('\\b' + classname + '\\b');
	var els = node.getElementsByTagName("div");
	for (var i = 0, j = els.length; i < j; i++)
		if (re.test(els[i].className)) a.push(els[i]);
	return a;
}
function switchtab(aid, id) {
	var div = getElementsByClassName(document, "highlightstory");
	var tabs = getElementsByClassName(document, "highlightselected");

	for (var i = 0; i < div.length; i++) {
		div[i].style.display = 'none';
	}

	for (var q = 0; q < tabs.length; q++) {
		tabs[q].className = "highlight";
	}
	document.getElementById(id).style.display = 'block';
	document.getElementById(aid).className = "highlightselected";
}
function textClear(input) {
    if (input.value == 'Enter a search term...') {
        input.value = "";
    }
}
function textRestore(input) {
    if (input.value == "") {
        input.value = 'Enter a search term...';
    }
}
//outdated browser notification
//var Pushup={Version:"1.0.3",options:{appearDelay:0.5,fadeDelay:6,images:"/images/pushup/",message:"Important browser update available",reminder:{hours:24,message:"Remind me again in #{hours}"},skip:true},updateLinks:{IE:"http://www.microsoft.com/windows/downloads/ie/",Firefox:"http://www.getfirefox.com",Safari:"http://www.apple.com/safari/download/",Opera:"http://www.opera.com/download/"},Browser:{IE:!!(window.attachEvent&&navigator.userAgent.indexOf("Opera")===-1),Firefox:navigator.userAgent.indexOf("Firefox")>-1,Safari:navigator.userAgent.indexOf("AppleWebKit/")>-1&&/Apple/.test(navigator.vendor),Opera:navigator.userAgent.indexOf("Opera")>-1}};Pushup.conditions={IE:(function(B){var A=/MSIE ([\d.]+)/.exec(B);return A&&parseFloat(A[1])<7})(navigator.userAgent),Firefox:Pushup.Browser.Firefox&&parseFloat(navigator.userAgent.match(/Firefox[\/\s](\d+)/)[1])<3,Safari:Pushup.Browser.Safari&&parseFloat(navigator.userAgent.match(/AppleWebKit\/(\d+)/)[1])<500,Opera:Pushup.Browser.Opera&&(!window.opera.version||parseFloat(window.opera.version())<9.5)};(function(){for(var E in Pushup.Browser){if(Pushup.Browser[E]){Pushup._browserUsed=E}}Pushup._updateBrowser=Pushup.conditions[Pushup._browserUsed]&&Pushup._browserUsed;if(!Pushup._updateBrowser&&Pushup.options.skip){return }function G(I,K){for(var J in K){I[J]=K[J]}return I}G(Pushup,{start:function(){if(/^(https?:\/\/|\/)/.test(this.options.images)){this.images=this.options.images}else{var K=/pushup(?:-[\w\d.]+)?\.js(.*)/,I=document.getElementsByTagName("script");for(var L=0,J=I.length;L<J;L++){var M=I[L];if(M.src&&M.src.match(K)){this.images=M.src.replace(K,"")+this.options.images}}}if(Pushup._updateBrowser){this.show()}},build:function(){this.pushup=document.createElement("div");D.set(this.pushup,0);this.pushup.id="pushup";this.messageLink=this.pushup.appendChild(document.createElement("a"));this.messageLink.className="pushup_messageLink";this.messageLink.target="_blank";this.messageLink.appendChild(this.icon=document.createElement("div"));this.icon.className="pushup_icon";this.messageLink.appendChild(this.message=document.createElement("span"));this.message.className="pushup_message";this.message.innerHTML=this.options.message;var I=this.options.reminder.hours;if(I&&Pushup.cookiesEnabled){this.pushup.appendChild(this.reminder=document.createElement("a"));this.reminder.href="#";this.reminder.className="pushup_reminder";this.pushup.className="withReminder";var J=I+" hour"+(I>1?"s":""),K=this.options.reminder.message.replace("#{hours}",J);this.reminder.innerHTML=K}if(Pushup.Browser.Opera&&(!window.opera.version||parseFloat(window.opera.version())<9.25)){this.messageLink.style.cssFloat="none";this.reminder.style.cssFloat="none"}Pushup.setBrowser(Pushup._updateBrowser);document.body.appendChild(this.pushup);Pushup.addEvents()},addEvents:function(){if(this.reminder){A.add(this.reminder,"click",function(I){A.stop(I);Pushup.setReminder(Pushup.options.reminder.hours);Pushup.fade()})}A.add(this.pushup,"mouseover",Pushup.clearFade);A.add(this.pushup,"mouseout",function(){Pushup.fade({delay:Pushup.options.fadeDelay})})},setBrowser:function(I){I=I||"IE";H(this.icon,this.images+I.toLowerCase()+".png");this.messageLink.href=this.updateLinks[I]},show:function(){var J=typeof arguments[0]=="string"?arguments[0]:Pushup._browserUsed||"IE",I=arguments[J?1:0]||{};if(I.resetReminder){Pushup.resetReminder()}if(!I.ignoreReminder&&Pushup.cookiesEnabled&&B.get("_pushupBlocked")){return }if(!Pushup.pushup){Pushup.build()}D.set(Pushup.pushup,0);Pushup.pushup.style.display="block";if(J){Pushup.setBrowser(J)}this.appear({fadeAfter:true,delay:Pushup.options.appearDelay})},appear:function(J){Pushup.clearFade();var I=arguments[0]||{};return window.setTimeout(function(){C(Pushup.pushup,{afterFinish:function(){if(I.fadeAfter){Pushup.fade({delay:Pushup.options.fadeDelay})}}})},(I.delay||0.01)*1000)},clearFade:function(){if(Pushup._fadeTimer){window.clearTimeout(Pushup._fadeTimer);Pushup._fadeTimer=null}},fade:function(){var I=arguments[0]||{};Pushup._fadeTimer=window.setTimeout(function(){F(Pushup.pushup)},(I.delay||0.01)*1000)},setReminder:function(I){B.set("_pushupBlocked","blocked",{duration:1/24*I})},resetReminder:function(){B.remove("_pushupBlocked")}});var D={set:function(I,J){I.style.opacity=(J==1||J==="")?"":(J<0.00001)?0:J},get:function(J){var I=J.style.opacity;return I?parseFloat(I):1}};if(Pushup.Browser.IE){D.get=function(J){var I=J.style.opacity;if(!I&&J.currentStyle){I=J.currentStyle[I]}if(I=(J.style.filter||"").match(/alpha\(opacity=(.*)\)/)){if(I[1]){return parseFloat(I[1])/100}}return 1};D.set=function(J,M){function N(O){return O.replace(/alpha\([^\)]*\)/gi,"")}var I=J.currentStyle;if((I&&!I.hasLayout)||(!I&&J.style.zoom=="normal")){J.style.zoom=1}var L=J.style.filter,K=J.style;if(M==1||M===""){(L=N(L))?K.filter=L:K.filter=""}else{K.filter=N(L)+"alpha(opacity="+(M*100)+")"}}}function C(J){var K=D.get(J),I=arguments[1]||{};if(J.style.display!="block"){J.style.display="block"}if(K<1){setTimeout(function(){D.set(J,K+=0.05);C(J,I)},0.01)}else{if(Pushup.Browser.IE&&J.style.filter){J.style.removeAttribute("filter")}if(I.afterFinish){I.afterFinish.call()}}}function F(J){var K=D.get(J),I=arguments[1]||{};if(K>0){setTimeout(function(){D.set(J,K-=0.05);F(J,I)},0.01)}else{J.style.display="none";if(I.afterFinish){I.afterFinish.call()}}}function H(K,J){var I=G({align:"top left",repeat:"no-repeat",sizingMethod:"crop",backgroundColor:""},arguments[2]||{});G(K.style,arguments.callee.IEBelow7?{filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+J+"'', sizingMethod='"+I.sizingMethod+"')"}:{background:I.backgroundColor+" url("+J+") "+I.align+" "+I.repeat})}H.IEBelow7=Pushup.Browser.IE&&parseFloat(/MSIE ([\d.]+)/.exec(navigator.userAgent)[1])<7;var B={set:function(L,M){var I="",K=arguments[2]||{};if(K.duration){var J=new Date();J.setTime(J.getTime()+K.duration*1000*60*60*24);M+="; expires="+J.toGMTString()}document.cookie=L+"="+M+I+"; path=/"},remove:function(I){this.set(I,"",-1)},get:function(J){var L=document.cookie.split(";"),M=J+"=";for(var K=0,I=L.length;K<I;K++){var N=L[K];while(N.charAt(0)==" "){N=N.substring(1,N.length)}if(N.indexOf(M)==0){return N.substring(M.length,N.length)}}return null}};Pushup.cookiesEnabled=(function(I){if(B.get(I)){return true}B.set(I,"test",{duration:15});return B.get(I)})("_pushupCookiesEnabled");var A={add:function(K,J,I){if(K.attachEvent){K["e"+J+I]=I;K[J+I]=function(){K["e"+J+I](window.event)};K.attachEvent("on"+J,K[J+I])}else{K.addEventListener(J,I,false)}},stop:function(I){if(Pushup.Browser.IE){I.cancelBubble=true;I.returnValue=false}else{I.preventDefault();I.stopPropagation()}}};A.add(window,"load",function(){Pushup.start()})})();
function changeFontSize(id,size) {
	document.getElementById(id).style.fontSize = size + "px";
}
function submitWebSearch(field){
    document.getElementById('selecturl').value='web'; 
    document.getElementById('searchsite').value = document.getElementById('searchweb').value; 
    field.form.submit();
}
function checkKey (field, event, type) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 13) {
      if(type == "web") {
        submitWebSearch(field);
        return false;
      }
      else {
    	 window.open('http://directory.the570.com/search.pg?q='+escape(field.form['what'].value)+'&z='+escape(type));
    	 return false;
      }
    } 
    else
      return true;
}