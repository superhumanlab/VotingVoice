//v95 (c) 2013 33Across Inc. All Rights Reserved

Tynt=window.Tynt||[];
if(typeof Tynt.TIL=="undefined"){(function(){var Jb=function(){function J(a){var b=J.options;a=b.parser[b.strictMode?"strict":"loose"].exec(a);for(var c={},d=14;d--;)c[b.key[d]]=a[d]||"";c[b.q.name]={};c[b.key[12]].replace(b.q.parser,function(f,e,g){if(e)c[b.q.name][e]=g});return c}J.options={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var h=document,l=h.body,s=h.documentElement,V=eval("/*@cc_on!@*/false"),ya=function(a,b){for(var c="",d=0;d<b;d++)c+=a;return c},B=ya("a",50),C=(Tynt.e||"")+"ic.tynt.com",Xa=(Tynt.e||"")+"de.tynt.com/deb/",Ya=(Tynt.e||"")+"cdn.tynt.com",W=C+"/b/s",za=(Tynt.e||"")+"id.tynt.com",u=function(){return(new Date).getTime()},
z=function(a){return a.replace(/^\s+|\s+$/g,"")},K=function(a,b){for(var c in a)if(a.hasOwnProperty(c))b[c]=a[c]},q=function(a,b,c){a=h.createElement(a);K(b,a);K(c,a.style);return a},P=function(){for(var a=Tynt,b={},c=a.length,d=[],f=0;f<c;f++)if(!b[a[f]]){b[a[f]]=true;d.push(a[f])}return d.join("~")},D,Q;if(window.addEventListener){D=function(a,b,c){a.addEventListener(b,c,false)};Q=function(a,b,c){a.removeEventListener(b,c,false)}}else{D=function(a,b,c){a.attachEvent("on"+b,c)};Q=function(a,b,c){a.detachEvent("on"+
b,c)}}var R=function(a,b){var c=location.hostname.split("."),d,f=2;do{d=c.slice(c.length-f,c.length).join(".");d=a+";path=/;domain=."+d+";"+b;h.cookie=d;f++}while(h.cookie.indexOf(a)==-1&&f<=c.length);if(h.cookie.indexOf(a)==-1){d=a+";path=/;"+b;h.cookie=d}},X=function(a){h.readyState=="complete"?a():D(window,"load",function(){setTimeout(function(){if(typeof h.readyState=="undefined"&&!V)h.readyState="complete";a()},10)})},r=function(a,b){var c=[],d=function(f,e){var g="http://"+f.replace("id="+B,
"id="+P());if(g.indexOf(C+"/b/p?")>-1&&typeof Tynt.b=="string")g+="&b="+Tynt.b;var j=new Image(1,1);if(e)j.onerror=e;j.src=g};r=function(f,e){c.push([f,e])};X(function(){r=d;for(var f=0;f<c.length;f++)r(c[f][0],c[f][1]);c=null});r(a,b)},la=function(a){a=q("script",{async:"async",src:"http://"+a});var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},Aa=function(a){var b=[],c="",d;for(d in a)if(a.hasOwnProperty(d)){b.push(c,d,"=",a[d]);c="&"}return b.join("")},L=function(a){for(var b=
0,c=a.length<100?a.length:100,d=0;d<c;d++)b+=a.charCodeAt(d);a=Math.floor(Math.random()*3844);c=Math.abs(u()-12281184E5);return Ba(c,7)+Ba((b+a)%3844,2)},Ca=function(a){if(a<62)return"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(this);else{var b=Math.floor(a/62);a=a-b*62;return b>=62?Ca(b)+"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a):"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(b)+"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a)}},
Ba=function(a,b){var c=Ca(a);return ya("0",b-c.length)+c},Y=function(a){return(a=z(a))?a.split(/\s+/i).length:0},S=z((h.title||location.hostname).toString()).replace(RegExp(location.hash,"g"),""),Da=function(){for(var a=h.getElementsByTagName("link"),b=0;b<a.length;b++)if(a[b].getAttribute("rel")&&a[b].getAttribute("rel").match("canonical")&&a[b].getAttribute("href")){a=a[b].getAttribute("href");b=location.protocol+"//"+location.host+location.pathname;var c=h.getElementsByTagName("base")[0];if(c)if(c=
c.getAttribute("href"))b=c;if(!a.match(/^http/)){if(a.charAt(0)=="/"){c=b.indexOf("/",9);if(c>-1)b=b.slice(0,c)}else{c=b.lastIndexOf("/");if(c>9)b=b.slice(0,c+1);else b+="/"}a=b+a}return a}return""},E=function(a){return a.replace(/^https?:\/\//,"")},ma=function(a,b){for(var c=b+"=",d=a.split(";"),f=0;f<d.length;f++){for(var e=d[f];e.charAt(0)==" ";)e=e.substring(1,e.length);if(e.indexOf(c)===0)return e.substring(c.length,e.length)}return null},Za=function(){var a=ma(h.cookie,"tracertraffic"),b=encodeURIComponent(E(Da())),
c=h.location.hash;c=/tynt=/.test(c)?c.match(/tynt=?([^?&$#]*)/)[1]:false;var d=C+"/b/p?id="+B+(a?"&et="+a:"")+(c?"&a="+c:"")+"&ts="+u(),f=d+(b?"&cu="+b:""),e=f+(h.referrer?"&r="+encodeURIComponent(E(h.referrer)):"");a=e+"&t="+encodeURIComponent(S);r(a,function(){r(e,function(){r(f,function(){r(d)})})})},$a=function(){X(function(){var a=[Xa,"v2?id=",P(),"&r=",encodeURIComponent(E(h.referrer))].join("");la(a)})},Ea=function(a){var b=a.trace_type;delete a.trace_type;var c=a.g;delete a.g;for(var d=[],
f=["id","wc","f","w","h","t","c"],e=0;e<f.length;e++){var g=f[e],j=a[g];j&&d.push([g,encodeURIComponent(j).replace(/\'/g,"%27")]);delete a[g]}for(var k in a)if(a.hasOwnProperty(k))(f=a[k])&&d.push([k,encodeURIComponent(f).replace(/\'/g,"%27")]);a=[];e=2048-(("http://"+C+"/a/t/x#?").length+(3+c.length)+5);g=d.length;var p=j=0,o=0,v,m,G,t,w=0;for(a[w]={g:c,tp:null};j<g&&a.length<35;){v=d[j][0];k=d[j][1];G=v.length+2;m=e-G-p;if(m>0){f=k.substring(o,o+m);t=f.slice(-2).indexOf("%");if(t>-1){f=k.substring(o,
o+m-2+t);p+=t+2}p+=f.length+G;o+=f.length;a[w][v]=f}else p=e;if(p>=e){a[++w]={g:c,p:w};p=0}if(o>=k.length){j++;o=0}}a[0].tp=a.length;r(C+"/b/t/"+b+"?"+Aa(a[0]));for(c=1;c<a.length;c++)r(C+"/b/x/"+b+"?"+Aa(a[c]))},na=function(){var a=[];return function(b){for(var c=a.length-1;c>=0;c--)if(a[c]==b)return false;a.unshift(b);a.length>3&&a.pop();return true}},ab=na(),bb=na(),cb=function(){var a,b=function(){window.removeEventListener("blur",b,false);oa(a);return true};return function(c){a=c.target||c.srcElement;
window.removeEventListener("blur",b,false);if(a.nodeName=="IMG"&&a.parentNode.nodeName!="A"){window.addEventListener("blur",b,false);setTimeout(function(){h.removeEventListener("blur",b,false)},1E4)}return true}}(),Fa=function(a){oa(a.target||a.srcElement,true)},Z,Ga=function(a){a=a.target||a.srcElement;Z=a.nodeName=="IMG"?a:null},pa=function(){var a=function(g){return typeof g.pageX=="number"?{x:g.pageX-(s.scrollLeft?s.scrollLeft:l.scrollLeft),y:g.pageY-(s.scrollTop?s.scrollTop:l.scrollTop)}:{x:g.clientX,
y:g.clientY}},b=function(g){g=a(g);return g.x<=0||g.y<=0||g.x>=l.clientWidth||g.y>=l.clientHeight},c=function(g){g=a(g);return g.x<=0||g.y<=0||g.x>=s.clientWidth||g.y>=s.clientHeight},d=function(g){return g.target.nodeName=="#document"},f=function(g){g=a(g);return g.x<=4||g.y<=4||g.x>=s.clientWidth-4||g.y>=s.clientHeight-4},e=function(g){e=navigator.userAgent.match("MSIE")?!h.compatMode||h.compatMode.indexOf("CSS")==-1?b:c:navigator.userAgent.match("Firefox")?d:f;e(g)};return function(g){if(Z&&e(g)){oa(Z);
Z=null}return true}}(),Ha=function(){return/tracer=test|tracer=no_tracing|disableTracer=/.test(location.href)||/disableTracer=y/.test(h.cookie)};Tynt.ci=function(){var a;return function(b,c){a=c||a;var d=W+["?ci=",b,"&id=",B,"&g=",a,"&r=",encodeURIComponent(E(h.referrer)),"&ts=",u()].join("");r(d)}}();Tynt.st=function(){var a;return function(b,c,d){a=d||a;b=W+["?",encodeURIComponent(b),"=",encodeURIComponent(c),"&id=",B,"&g=",a,"&r=",encodeURIComponent(E(h.referrer)),"&href=",encodeURIComponent(E(h.location.href)),
"&ts=",u()].join("");r(b)}}();var qa;if(Tynt.c)qa=function(){};else{Tynt.c=true;Tynt.m=Tynt.m||[];Tynt.n=Tynt.n||[];qa=function(){var a=true,b,c=function(d,f){var e={id:B,wc:Y(f),c:f,f:a?1:0,t:S};K(d,e);a=false;Ea(e)};if(window.addEventListener){navigator.userAgent.match(/Firefox\/2\b/)||l.addEventListener("copy",Fa,false);window.addEventListener("mousedown",Ga,false);window.addEventListener("dragleave",pa,false);window.addEventListener("dragexit",pa,false);h.addEventListener("contextmenu",cb,false)}else{l.attachEvent("oncopy",
Fa);h.getElementsByTagName("html")[0].attachEvent("ondragleave",pa);l.attachEvent("onmousedown",Ga)}if(h.cookie.indexOf("tracertraffic=")!==-1)if(!h.referrer||h.referrer.indexOf(location.host)==-1)R("tracertraffic=0","expires=Thu, 01 Jan 1970 00:00:00 GMT");Za();$a();return function(d,f){if(!h.getElementById("tyntSh")){var e,g,j;if(f)if(!h.selection||!h.selection.createRange){g=getSelection();j=g.rangeCount>0&&g.getRangeAt(0);e=g.toString()}else{g=h.selection.createRange();j=g.duplicate();e=g.text}var k=
d.src;if(k&&!e&&bb(k)){g={trace_type:3,g:L(k),w:d.width,h:d.height};for(j=0;j<Tynt.n.length;j++)Tynt.n[j](g,k);c(g,k)}else if(e&&z(e).length&&d.nodeName!="TEXTAREA"&&d.nodeName!="INPUT"){k=ab(e);g={trace_type:1};if(k)b=L(e);g.g=b;for(var p=true,o=0;o<Tynt.m.length;o++)p=p&&Tynt.m[o](g,e,j,k);k&&p&&c(g,e)}}}}}if(typeof A==="undefined")var A={afterIpBlockCheck:[],afterDynamicConfig:[],afterCheckModules:[],afterProtectTynt:[],afterDynamicConfigAndDocumentLoaded:[]};var F=function(a,b){if(typeof A!==
"undefined"&&A.hasOwnProperty(a)&&A[a].hasOwnProperty("length"))for(var c=0;c<A[a].length;c+=1)typeof A[a][c]==="function"&&A[a][c](b)},aa=function(a){a=a.charCodeAt(0);return 3584<=a&&a<=3711||11904<=a&&a<=12591||12688<=a&&a<=40959||63744<=a&&a<=64255||65072<=a&&a<=65103||131072<=a&&a<=173791||194560<=a&&a<=195103},Ia=function(a){a=a.getElementsByTagName("script");for(var b=a.length-1;b>=0;b--){var c=a[b];c.parentNode.removeChild(c)}},M=function(a,b){var c=Da();c=c&&i.c!==false?c:location.href;c=
c.replace(/#(i|a)xzz=?(.*)$/g,"");c=c+"#"+("ixzz"+a);if(b)c+="&"+b;return c},db=function(a,b){b=z(b);if(a.getElementsByClassName)return a.getElementsByClassName(b);if(a.querySelectorAll)return a.querySelectorAll("."+b);return function(){for(var c=a.getElementsByTagName("*"),d=[],f=0;f<c.length;f++)c[f].className.match(b)&&d.push(c[f]);return d}()},ra=h.defaultView,sa=V?!h.compatMode||h.compatMode.indexOf("CSS")==-1:false,eb=V?!("XMLHttpRequest"in window):false,ba=function(a){ba=typeof ra!="undefined"&&
typeof ra.getComputedStyle!="undefined"?function(b){return ra.getComputedStyle(b,"")}:function(b){return b.currentStyle};return ba(a)},x={};x.t=3;x.p=6;x.w=7;x.f=8;x.i=9;x.l=10;x.g=11;x.ssbt=12;x.ssbf=13;x.ssbp=14;x.ssbl=15;x.ssbg=16;var fb=function(a){a=a.match(/ixzz=?([^?$#]*)/);if(!a)return null;a=a[1].match(/&([^?$]*)/);if(Tynt.k)return Tynt.k.charAt(1);if(!a||!a[1])return null;return a[1]},Ja=function(a){var b=new Date(u()+864E5);R("tracertraffic="+a.toString(),"expires="+b.toUTCString())},gb=
function(){if(Tynt.v)return false;Tynt.v=true;var a=location.href.match(/ixzz=?([^?&$#]*)/),b=(a&&a.length==2?a[1]:null)||Tynt.h;if(b&&!(h.referrer?J(h.referrer).host===J(h.location.hostname).host:false)){a=fb(location.href);b=C+"/b/v"+["?g=",b,/\?trace_owner_view/.test(location.href)?"&o=y":"","&id=",B,a?"&s="+a:"","&r=",encodeURIComponent(E(h.referrer)),"&ts=",u()].join("");r(b);Ja(x[a]||1);return true}return false},H="http://"+(Tynt.e||"")+"cdn.tynt.com/images/ss/",Ka=typeof createImageMeme!==
"undefined",hb=/Mobile|iP(hone|od|ad)|Android|BlackBerry|Tablet|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/,I=I||"";I+=["#tyntSh div,#tyntSh span,#tyntSh img,#tyntSh a,div#tyntSh{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;line-height:1;background:0;text-align:left}#tyntSh img,#tyntSh span{display:inline}#tyntSh div,div#tyntSh{display:block}div#tyntSh{z-index:9999999;position:absolute;height:62px;margin:10px;overflow:visible;background:#FFF;border-radius:5px;text-align:center;box-shadow: 0 2px 6px rgba(0,0,0,0.5)}div#tyntShTr{margin:-11px auto 0 auto;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:11px solid #F1F1F1}img#tyntShTw,img#tyntShP,img#tyntShFb,img#tyntShLi,img#tyntShGp{cursor:pointer;height:28px;width:28px;margin:3px 3px 2px 3px;vertical-align:bottom}div#tyntShPTL,div#tyntShHFL{color:#888;text-decoration:none;margin:0 0 2px 0;background-color:#F1F1F1;padding:2px 4px;border-radius:5px 5px 0 0}div#tyntShHFL{text-align:right;border-radius:0 0 5px 5px;margin:2px 0 0 0}div#tyntShHFL,span#tyntShHFLs,div#tyntShPTL{font:normal 8px Arial}",
"span#tyntShHFLs{cursor:pointer;"+(sa?"text-decoration:underline":"")+"}","span#tyntShHFLs:hover{color:#555;text-decoration:underline}div#tyntShCB{position:absolute;cursor:pointer;width:14px;height:14px;top:0;right:0;background-position:0 -14px;background-repeat:no-repeat}div#tyntShCB:hover{background-position: 0 0}"].join("");var y=function(){var a,b;return function(c,d,f){a=d||a;b=f||b;c=W+["?w=",c,"&id=",B,"&g=",a,"&wc=",b,"&r=",encodeURIComponent(E(h.referrer)),"&ts=",u()].join("");r(c)}}(),ca=
function(){return hb.test(navigator.userAgent||navigator.vendor||window.opera)},N=function(a){return(i.ss||"").indexOf(a)>-1},La=function(){return(i.ss||"").replace("p","").replace("m","").length},da=function(a,b){return b.length>a?b.slice(0,a-1)+"\u2026":b},ib=function(a,b,c){if(typeof c==="undefined")c="w";b=M(b,c);return b=da(114,a)+" "+b},n={words:0,_content:"",guid:null,isBar:function(a){a=a||"";return!!a.toString().match(/ssb/)},getContentFor:function(a){return n.isBar(a)?"":n._content},setContent:function(a){n._content=
a},getGuid:function(){return this.guid?this.guid:L(document.location.toString())},twitter:function(a,b,c){return q("img",{src:H+"t.png",title:"tweet this",id:a,onclick:function(){window.open("http://twitter.com/home?status="+encodeURIComponent(ib(n.getContentFor(c),n.getGuid(),c)),"tweet","width=723,height=251");y(b,n.getGuid(),n.words)}})},facebook:function(a,b,c){return q("img",{src:H+"fb.png",title:"share on Facebook",id:a,onclick:function(){var d=["http://www.facebook.com/dialog/feed?app_id=158472647611546&link=",
encodeURIComponent(M(n.getGuid(),c)),"&description=",encodeURIComponent(da(140,n.getContentFor(c))),"&redirect_uri=",encodeURIComponent("http://cdn.tynt.com/close.html")].join("");window.open(d,"fbshare","width=985,height=450");y(b,n.getGuid(),n.words)}})},linkedin:function(a,b,c){return q("img",{src:H+"li.png",title:"share on LinkedIn",id:a,onclick:function(){var d;d=["http://www.linkedin.com/shareArticle?mini=true","&url=",encodeURIComponent(M(n.getGuid(),c)),"&title=",S];if(n.getContentFor(c)){d.push("&summary=");
d.push(encodeURIComponent(da(255,n.getContentFor(c))))}d=d.join("");window.open(d,"lishare","width=520,height=450");y(b,n.getGuid(),n.words)}})},googleplus:function(a,b,c){return q("img",{src:H+"gp.png",title:"share on Google+",id:a,onclick:function(){var d=["https://plus.google.com/share?url=",encodeURIComponent(M(n.getGuid(),c))].join("");window.open(d,"gpshare","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");y(b,n.getGuid(),n.words)}})},pinterest:function(){}},ta=function(a,
b,c){var d=a.createElement("style");d.id=b;d.type="text/css";b=a.createTextNode(c);d.styleSheet?d.styleSheet.cssText=b.nodeValue:d.appendChild(b);a.getElementsByTagName("head")[0].appendChild(d)},Ma=function(a,b,c){var d,f=function(e,g,j){n.guid=g;n.setContent(e);n.words=Y(e);if(!(h.getElementById("tyntSh")||n.words<8)){y(0,n.guid,n.words);var k;if(!h.selection||!h.selection.createRange){e=q("span",{},{display:"inline"});g=j.startContainer;var p=j.endContainer,o=j.endOffset;try{var v=h.createRange();
v.setStart(p,o);v.setEnd(p,o);v.surroundContents(e);var m,G,t;o={top:0,left:0,bottom:0};var w=e&&e.ownerDocument;if(w){m=w.documentElement;if(typeof e.getBoundingClientRect!=="undefined")o=e.getBoundingClientRect();G="scrollTo"in w&&w.document?w:w.nodeType===9?w.defaultView||w.parentWindow:false;t={top:o.top,left:o.left,width:o.right-o.left,height:o.bottom-o.top};if(ba(e).position!="fixed"){t.top+=G.pageYOffset||m.scrollTop||0;t.left+=G.pageXOffset||m.scrollLeft||0}t.top+=m.clientTop||0;t.left+=m.clientLeft||
0;k=[t.left,t.top,t.width,t.height]}else k=null;k[2]=e.offsetHeight;e.parentNode.removeChild(e);v.detach();g.parentNode.normalize();p.parentNode.normalize()}catch(Kb){}typeof getSelection().setBaseAndExtent!="undefined"&&getSelection().setBaseAndExtent(j.startContainer,j.startOffset,j.endContainer,j.endOffset)}else{j=h.selection.createRange();v=sa?"offset":"bounding";k=[];k[0]=j[v+"Left"]+(s.scrollLeft||l.scrollLeft);k[1]=j[v+"Top"]+(s.scrollTop||l.scrollTop);k[2]=j.boundingHeight}k=k;d.style.left=
k[0]+"px";d.style.top=Math.max(k[1]+k[2],3)+"px";l.insertBefore(d,l.firstChild);D(l,"mousedown",O);D(l,"touchstart",O)}};(function(){h.getElementById("tyntShCSS")||ta(h,"tyntShCSS",I);d=q("div",{id:"tyntSh"},{width:Math.max(80,La()*34)+"px"});sa||d.appendChild(q("div",{id:"tyntShTr"}));var e=q("div",{id:"tyntShPTL",innerHTML:"Powered by Tynt"});d.appendChild(e);e=q("div",{id:"tyntShHFL"});e.appendChild(q("span",{id:"tyntShHFLs",innerHTML:"Don't show again",onclick:jb}));var g=q("div",{id:"tyntShCB",
title:"close",onclick:kb},{backgroundImage:"url("+(H+"x.png")+")"});N("f")&&d.appendChild(n.facebook("tyntShFb",4,"f"));N("t")&&d.appendChild(n.twitter("tyntShTw",3,"w"));N("l")&&d.appendChild(n.linkedin("tyntShLi",8,"l"));N("g")&&d.appendChild(n.googleplus("tyntShGp",9,"g"));if(Ka){var j=q("img",{src:H+"pi.png",title:"pin it",id:"tyntShP",onclick:function(){createImageMeme(void 0,void 0)}});Ka&&d.appendChild(j)}ca()||d.appendChild(e);d.appendChild(g)})();f(a,b,c);Ma=f},kb=function(){O();y(2)},O=
function(a){var b=h.getElementById("tyntSh"),c=a?a.target||a.srcElement:{id:""};if(b&&!(c.id.indexOf("tyntSh")>-1)){Q(l,"mousedown",O);Q(l,"touchstart",O);l.removeChild(b);a&&y(1)}},jb=function(){O();var a=new Date(u()+31536E7);R("TyntSpeedShareHide=true","expires="+a.toUTCString());y(5)},ea=function(){return!eb&&h.cookie.indexOf("TyntSpeedShareHide=true")==-1},lb=function(a,b,c){La()&&setTimeout(function(){ea()&&Ma(b,a.g,c)},1);return true};if(typeof i==="undefined")var i;A.afterDynamicConfigAndDocumentLoaded.push(function(a){if(a&&
a.ssb){ta(h,"tyntSbCSS",".tynt-speedshare-bar img{margin:0 3px;}");for(var b=db(document,"tynt-speedshare-bar"),c,d=false,f=0;f<b.length;f++){c=b[f];if(a.ssb.indexOf("f")>-1){c.appendChild(n.facebook("tyntSbFb",16,"ssbf"));d=true}if(a.ssb.indexOf("t")>-1){c.appendChild(n.twitter("tyntSbTw",17,"ssbt"));d=true}if(a.ssb.indexOf("l")>-1){c.appendChild(n.linkedin("tyntSbLi",19,"ssbl"));d=true}if(a.ssb.indexOf("g")>-1){c.appendChild(n.googleplus("tyntSbGp",20,"ssbg"));d=true}}d?y(14):y(15)}});var fa=[],
T=[],Na=[{x:970,y:250},{x:300,y:600},{x:300,y:1050},{x:970,y:90},{x:300,y:250},{x:970,y:250},{x:970,y:90},{x:180,y:150},{x:160,y:600},{x:728,y:90},{x:120,y:60},{x:88,y:31}],Oa=[/:\/\/[^\/]*?outbrain\.com/,/:\/\/ads\.yldmgrimg\.net/,/:\/\/[^\/]*?cdn\.adblade\.com/,/:\/\/[^\/]*?googlesyndication\.com/];I=I||"";I+=["div.tyntShIh,.tyntShIh div,.tyntShIh span{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;line-height:1;background:0;text-align:left}.tyntShIh img,.tyntShIh span{display:inline}.tyntShIh div,div.tyntShIh{display:block;outline:0}",
"div.tyntShIh{position:absolute;cursor:default;background:transparent url("+(H+"pi.png")+") no-repeat;width:43px;height:21px;opacity:0;filter:alpha(opacity=0);z-index:9999999;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s}","div.tyntIhHover{opacity:1;filter:alpha(opacity=100);cursor:pointer}"].join("");var mb=function(a){a.getElementById("tyntShCSS")||ta(a,"tyntShCSS",I)},ob=function(a,b,c){var d=c.document,f=a.getBoundingClientRect(),e=(f.right+f.left+a.width)/2,g=(f.top+f.bottom+a.height)/
2,j;for(j=function(){var k={};for(k.x=e;k.x>f.left;k.x-=20)for(k.y=g;k.y>f.top;k.y-=20)if(d.elementFromPoint(k.x,k.y)===a)return k;k.x=-1;k.y=-1;return k}();j.y<=g&&d.elementFromPoint(j.x,j.y)===a;)j.y++;for(j.y--;j.x<=e&&d.elementFromPoint(j.x,j.y)===a;)j.x++;j.x--;j=nb(j,c);b.style.left=j.x-45+"px";b.style.top=j.y-22+"px"},nb=function(a,b){var c=b.document.documentElement;return{x:a.x+((b.pageXOffset||c.scrollLeft||0)+(c.clientLeft||0)),y:a.y+((b.pageYOffset||c.scrollTop||0)+(c.clientTop||0))}},
pb=function(a){if(i&&typeof i.sspe!=="undefined"){if(T.length===0)T=i.sspe.split(",");if(T.length!==fa.length)for(var b=0;b<T.length;b+=1)fa.push(RegExp(T[b]));for(b=0;b<fa.length;b+=1)if(a.getAttribute("src")&&fa[b].test(a.getAttribute("src")))return true}return false},qb=function(a){var b,c;for(b=0;b<Oa.length;b++)if(Oa[b].test(a.src))return true;for(b=0;b<Na.length;b++){c=Na[b];if(a.width===c.x&&a.height===c.y)return true}return false},rb=function(){if(!(Ha()||!ea()||!N("p"))){var a=function(b){var c=
b.document,d=null,f,e=null,g,j,k,p;f=c.createElement("div");f.className="tyntShIh";c.body.appendChild(f);D(f,"click",function(){if(f.className=="tyntShIh tyntIhHover"&&ea()){window.open("http://pinterest.com/pin/create/button/?url="+encodeURIComponent(M(L(e.src),"i"))+"&media="+e.src+"&description="+encodeURIComponent(da(500,z(e.title||e.alt))));y(7)}});mb(c);D(c,"mouseover",function(m){if(!m)m=b.event;m=b.event?m.srcElement:m.target;if(m.nodeName==="IMG"&&m.height>=80&&m.width>=80&&m.src.indexOf("data:")!==
0&&!qb(m)&&!pb(m)&&m.getAttribute("nopin")!=="nopin"&&m.nopin!=="nopin")if(!(m===e&&f.showing)){e!==null&&e!==m&&o();e=m;e.__tyntPinItShow=true;d!==null&&clearTimeout(d);d=setTimeout(function(){if(e.__tyntPinItShow&&ea()){ob(e,f,b);f.className="tyntShIh tyntIhHover";f.showing=true;e.__tyntPinItRecorded||y(6);e.__tyntPinItRecorded=true}},typeof i!=="undefined"&&typeof i.pt!=="undefined"&&i.pt=="i"?0:1E3);D(c,"mousemove",p)}});p=function(m){m=c.elementFromPoint(m.clientX,m.clientY);m!=e&&m!=f&&o()&&
Q(c,"mousemove",p)};var o=function(){if(f.showing){e.__tyntPinItShow=false;f.showing=false;f.className="tyntShIh";setTimeout(function(){f.style.left="-100px"},600);return true}return false};g=c.getElementsByTagName("iframe");for(k=g.length-1;k>=0;k--){j=g[k];try{!(j.src&&j.src.indexOf(location.protocol+"//"+location.hostname)!==0)&&j.getAttribute("nopin")!=="nopin"&&j.nopin!=="nopin"&&a(j.contentWindow)}catch(v){window.console&&console.log("Bad iframe access",v,j)}}};a(window)}},ua=function(a){if(Tynt.sic)return false;
Tynt.sic=true;var b=document.createElement("script"),c=document.getElementsByTagName("script")[0];b.async="async";b.type="text/javascript";a=a;var d={"0":"sic-akamai.33across.com/javascripts/sic.js","1":"sic-akamai.33across.com/1/javascripts/sic.js"},f=Tynt.e||"";if(typeof a==="undefined"||!(a in d))a="0";b.src="http://"+f+d[a];c.parentNode.insertBefore(b,c);return true},ga=function(){var a=h.cookie.match(/tyntSICenable=(\d+?)/);return a?a[1]:false}();ga&&ua(ga);var Pa={viglink:function(){Tynt.vglnk=
{api_url:"//vigapi.tynt.com/api",key:"f1f79f31e313bdb2b382c721aac77807",sub_id:""+ha};window.vglnk_self="Tynt.vglnk";(function(a,b){var c=a.createElement(b);c.type="text/javascript";c.async=true;c.src=("https:"==document.location.protocol?Tynt.vglnk.api_url:"//vig.tynt.com/api")+"/vglnk.js";var d=a.getElementsByTagName(b)[0];d.parentNode.insertBefore(c,d)})(document,"script")},track_selections:function(){var a=na();D(h,"mouseup",function(){var b="";if(!h.selection||!h.selection.createRange)b=getSelection().toString();
else{selection=h.selection.createRange();b=selection.text}b=z(b);if(b.length&&a(b)){b={id:B,g:L(b),wc:Y(b),c:b.slice(0,2E3),t:S,trace_type:2};Ea(b)}})},track_attribution_views:function(){trackAttributionView=true},sic:function(){ua("0")},sic_v1:function(){ua("1")},ss_ci:function(){typeof document.getElementsByClassName==="function"&&document.getElementsByClassName("jcarousel-container").length>0&&Tynt.st("ssbi","jc");var a=function(b,c){if(typeof $!=="undefined"&&typeof $()!=="undefined"&&(typeof $()[b]===
"function"||typeof $[b]==="function")||typeof jQuery!=="undefined"&&typeof jQuery()!=="undefined"&&(typeof jQuery[b]==="function"||typeof jQuery()[b]==="function"))typeof Tynt.st==="function"&&Tynt.st("ssbi",c)};a("bxSlider","bx");a("elastislide","es");a("flexslider","fx");a("nivoSlider","nv")}};A.afterDynamicConfig.push(function(){var a,b=i.p;if(b)for(a=0;a<b.length;a++)typeof Pa[b[a]]==="function"&&Pa[b[a]]();typeof F==="function"&&F("afterCheckModules")});var sb=za+"/ipb.js",va=function(){return h.cookie.indexOf("ty_attributionBlockedByIp=t")!==
-1?true:false},Qa,tb=function(){Qa=setTimeout(function(){F("afterIpBlockCheck",i)},3E3);la(sb)};Tynt.ipb=function(a){clearTimeout(Qa);var b=false;if(Object.prototype.toString.apply(i.ipb)==="[object Array]"){for(var c=0;c<i.ipb.length;c++)if(a===i.ipb[c]){b=true;break}a=b;b=new Date;b.setHours(b.getHours()+1);b="expires="+b.toGMTString();R("ty_attributionBlockedByIp="+(a===true?"t":"f"),b)}F("afterIpBlockCheck",i)};var Ra=(Tynt.e||"")+"ec.tynt.com",ub=(Tynt.e||"")+"sc.tynt.com/script/sc/",vb=["",
"Attribution","Attribution Share Alike","Attribution No Derivatives","Attribution Non-Commercial","Attribution Non-Commercial Share Alike","Attribution Non-Commercial No Derivatives"],wb=["","http://creativecommons.org/licenses/by/3.0","http://creativecommons.org/licenses/by-sa/3.0","http://creativecommons.org/licenses/by-nd/3.0","http://creativecommons.org/licenses/by-nc/3.0","http://creativecommons.org/licenses/by-nc-sa/3.0","http://creativecommons.org/licenses/by-nc-nd/3.0"],ia=null,xb=function(){if(/tynt-mobile-ss-test/.test(location.href))return true;
if(i.ss)if(ca()&&ca()&&N("m"))return true;else if(!ca())return true;return false},yb=function(a){return(a=a.match(/axzz([^?$]*)/))&&a.length==2?a[1]:null},zb=function(a){r(C+"/b/a?g="+a+"&id="+B+"&r="+encodeURIComponent(E(h.referrer))+"&ts="+u(),function(){})},Sa=function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Ab=function(){var a;ia=false;if(typeof window.getSelection==="function")if(typeof document.createRange==="function"){var b=window.getSelection();if(!(typeof b.addRange!==
"function"||typeof b.removeAllRanges!=="function"||typeof b.rangeCount!=="number")){var c=[];for(a=0;a<b.rangeCount;a++)c.push(b.getRangeAt(a));a=document.body.appendChild(document.createElement("div"));a.contentEditable="false";var d=a.appendChild(document.createTextNode("\u00a0\u00a0\u00a0")),f=document.createRange(),e=f.cloneRange();f.setStart(d,0);e.setEnd(d,3);e.setStart(d,2);b.removeAllRanges();b.addRange(f);b.addRange(e);ia=b.rangeCount==2;document.body.removeChild(a);b.removeAllRanges();f.detach();
e.detach();for(a=0;a<c.length;a++)b.addRange(c[a])}}},U=false,Bb=function(a){var b,c="";ia===null&&Ab();if(U)return false;U=true;var d="";if(i.a){var f=M(a);if(typeof trackAttributionView!=="undefined")c='<img src="https://'+C+"/b/l?id="+P()+"&g="+a+'">';a=c+'<a style="color: #003399;" href="';d+=i.ap+" ";if(i.st)d=d+a+f+'">'+Sa(S)+"</a> ";if(i.su)d=d+a+f+'">'+Sa(f)+"</a>";if(i.as.length>0)d=d+"\n<br>"+i.as+" ";if(i.cc>0)d=d+"\n<br>Under Creative Commons License: "+a+wb[i.cc]+'">'+vb[i.cc]+"</a>";
if(i.w||i.f){d+="\n<br>Follow us: ";if(i.w)d=d+'<a href="http://'+Ra+"/b/rw?id="+P()+"&u="+i.w+'" target="_blank">@'+i.w+" on Twitter</a>";if(i.w&&i.f)d+=" | ";if(i.f)d=d+'<a href="http://'+Ra+"/b/rf?id="+P()+"&u="+i.f+'" target="_blank">'+i.f+" on Facebook</a>"}}if(i.el){if(d.length>0)d+="\n<br>";d+=i.el}var e,g;e=q("div",{},{overflow:"hidden",color:"#000000",backgroundColor:"#FFFFFF",textAlign:"left",textDecoration:"none",border:"none"});if(h.selection&&h.selection.createRange){var j=s.scrollLeft||
l.scrollLeft,k=s.scrollTop||l.scrollTop;g=q("div",{},{overflow:"hidden",position:"absolute",left:j+20+"px",top:k+20+"px",width:"1px",height:"1px"});l.insertBefore(g,l.firstChild);var p=h.selection.createRange();e.innerHTML=i.t?d+"<br><br>"+p.htmlText:p.htmlText+"<br><br>"+d;Ia(e);g.appendChild(h.createElement("br"));g.appendChild(e);d=l.createTextRange();d.moveToElementText(e);d.select();setTimeout(function(){l.removeChild(g);if(p.text!==""){p.select();s.scrollLeft=j;l.scrollLeft=j;s.scrollTop=k;
l.scrollTop=k}U=false},0)}else if(ia){b=getSelection();g=q("div",{},{height:0,position:"absolute",top:"-1000px"});g.innerHTML="<br>";if(i.t){l.insertBefore(g,l.firstChild);e.innerHTML=d+"<br><br>"}else{l.appendChild(g);e.innerHTML="<br>"+d+"<br>"}g.appendChild(e);d=h.createRange();d.selectNode(e);b.addRange(d);window.setTimeout(function(){g.parentNode.removeChild(g);U=false},0)}else{b=getSelection();var o=b.getRangeAt(0);d=q("span",{innerHTML:d});if(i.t){d.innerHTML+="<br/><br/>";e.appendChild(d);
e.appendChild(o.cloneContents())}else{e.appendChild(o.cloneContents());d.innerHTML="<br/><br/>"+d.innerHTML;e.appendChild(d)}Ia(e);e.style.width=0.1;e.style.height=0.1;e.style.position="absolute";e.style.top="-1000px";e.style.left="-1001px";e.appendChild(h.createElement("br"));d=e.innerText.length;l.insertBefore(e,l.firstChild);if(e.innerText.length!=d)e.style.overflow="";b.selectAllChildren(e);setTimeout(function(){e.parentNode.removeChild(e);b.removeAllRanges();b.addRange(o);U=false},0)}return true},
Db=function(a,b){var c=true;if(i.a||i.el){var d;d=z(b);d=d.length>=2?aa(d.charAt(0))||aa(d.charAt(d.length-1))||aa(d.charAt(d.length/2)):aa(d);var f;if(f=i.h)a:{f=(f=Cb())?f.className.split(/\s+/):[];for(var e=f.length-1;e>=0;e--)if(i.h[f[e]]!==undefined){f=i.h[f[e]];break a}f=void 0}f=f;if(f!==false&&(d&&b.replace(/\s/g,"").length>=i.aw*2||!d&&Y(b)>=i.aw)||f)if(i.a||i.el){c=Bb(a.g);if(i.a)a.trace_type=0}}return c},Cb=function(){return!h.selection||!h.selection.createRange?function(){var a=getSelection().getRangeAt(0),
b=a.startContainer.nodeType==3?a.startContainer.parentNode:a.startContainer;return b&&z(a.toString())==z(b.textContent)?b:null}:function(){var a=h.selection.createRange(),b=a.duplicate();b.collapse(true);return(b=b.parentElement())&&z(a.text)==z(b.innerText)?b:null}}(),Eb=function(a){var b=a?864E5:-5E3;b=new Date(u()+b);h.cookie="tracerabg="+a+";path=/;expires="+b.toUTCString()},Gb=function(a){var b;a:{b=h.getElementsByTagName("script");for(var c=0;c<b.length;c++)if(/\/show_afs_search\.js/i.test(b[c].src)){b=
true;break a}b=false}if(!b&&Fb(location)){Tynt.b=a||L(location.href);location.replace(location.href+(location.href[location.href.length-1]==="#"?"":"#")+"axzz"+Tynt.b)}},Fb=function(a){if(!(a.hash===""||a.hash==="#"))return false;if(typeof i.ba=="boolean"&&i.ba)i.ba=["/"];else if(!i.ba)return true;for(var b,c=i.ba.length-1;c>=0;c--){b=null;var d=i.ba[c],f=d.indexOf("/");if(f!==0){b=d.slice(0,f);d=d.slice(f)}if(!b||a.host==b)if(d.charAt(d.length-1)=="#"){if(a.pathname.indexOf(d.slice(0,-1))===0)return false}else if(a.pathname==
d)return false}return true},ja=0,Ta;ga=function(){Tynt.sc=function(c){clearTimeout(b);ja=c.fl||0;var d=ka;c=(c=c)||{};if(c.d===true){c=c;K(Tynt.o||{},c)}else{c=Tynt.i||window.tyntVariables||{};K(c,d);c=d;if(!c.ap&&typeof tyntAP!="undefined")c.ap=tyntAP;if(!c.as&&typeof tyntAS!="undefined")c.as=tyntAS}i={a:true,ad:true,aw:8,cc:0,b:false,ap:"Read more:",as:"",st:false,su:true,w:false,f:false,ss:""};K(c,i);if(i.a==="0"||i.a===0)i.a=false;if(i.cc>6)i.cc=0;if(i.aw<8)i.aw=8;if(i.su==="0"||i.su===0)i.su=
false;if(!/^\w{1,15}$/.test(i.w||""))i.w=false;if(!/^[\w.]{2,}$/.test(i.f||""))i.f=false;if(ja>0){i.a=false;i.b=false}!h.cookie.match(/ty_attributionBlockedByIp=[tf]/)&&Object.prototype.toString.apply(i.ipb)==="[object Array]"?tb():F("afterIpBlockCheck",i)};var a=ub+ha+".js",b=setTimeout(function(){Tynt.sc({fl:1})},1E4);Ta=u();la(a)};A.afterIpBlockCheck.push(function(){ja===0&&!va()&&Tynt.m.push(Db);if(i.b&&!va()){var a=yb(location.href);if(a){if("#axzz"+ma(h.cookie,"tracerabg")!=location.hash)if(!(h.referrer?
J(h.referrer).host===J(h.location.hostname).host:false)){zb(a);Ja(2)}}else{Gb(ma(h.cookie,"tracerabg"));Eb(Tynt.b)}}if(xb()&&!va()){if(ba(l).position=="relative")l.style.position="static";Tynt.m.push(lb);X(rb)}if(Tynt.e||Math.random()<0.0010){a=["?is=",ja,"&id=",B,"&rt=",u()-Ta,"&ts=",u()];a=W+a.join("");r(a)}F("afterDynamicConfig",i);X(function(){F("afterDynamicConfigAndDocumentLoaded",i)})});var Ua=function(){var a=h.title.indexOf("#ixzz");if(a>-1)h.title=h.title.substring(0,a);a=h.title.indexOf("#axzz");
if(a>-1)h.title=h.title.substring(0,a)},Hb=function(){for(var a=0;a<Tynt.length;a++)if(Tynt[a]&&Tynt[a].length==22)return Tynt[a];return null},ka=function(a){if(!a)return{};for(var b={},c=a.substring(a.indexOf("?")+1).split("&"),d=0;d<c.length;d++){var f=c[d].split("=");if(f[0].indexOf("amp;")===0)f[0]=f[0].substring(4);b[f[0]]=f[1]}a=a.split("/");a.pop();b.scriptPathUri=a.join("/");return b}(function(){for(var a=h.getElementsByTagName("script"),b=0;b<a.length;b++)if(/\/tracer.*\?/i.test(a[b].src))return a[b].src;
return null}()),ha=ka.user||Hb();if(!ha)throw Error("Error finding Tynt Insight userId. Please check your HTML for errors.");ka.user&&Tynt.push(ka.user);/tracer=test/.test(location.href)&&r(za+"/script/verify/"+ha);(function(){if(/disableTracer=/.test(location.href)){var a=location.href.match(/disableTracer=([^?$]*)/)[1],b=new Date;b.setDate(a&&a=="on"?b.getDate()+365:b.getDate()-2);R("disableTracer="+(a&&a=="on"?"y":"n"),"expires="+b.toUTCString());b=q("div",{id:"TyntLocalOptOut"},{zIndex:"10000",
position:"absolute",top:"10%",left:"10%",width:"80%",height:"80%",backgroundColor:"white",color:"black",textAlign:"center",fontSize:"32px",paddingTop:"10%",border:"1px solid gray"});b.innerHTML="Tynt Insight has been turned "+(a&&a=="on"?"off":"on")+" in this browser.<br>You may close this window.";l.insertBefore(b,l.firstChild)}})();if(!Ha()){if(V){Ua();h.attachEvent("onpropertychange",Ua)}var oa=qa();gb();ga()}if(typeof Va==="undefined")var Va=10;(new Date).getDate()===Va&&function(){var a=document.createElement("script"),
b=document.getElementsByTagName("script")[0];a.async="async";a.type="text/javascript";a.src="http://"+Ya+"/cb.js";b.parentNode.insertBefore(a,b)}();var wa=null,Wa=0,xa=function(){if(typeof document.body.oncopy=="object"&&document.body.oncopy!==null){document.body.oncopy=null;y(13)}else setTimeout(xa,2E3)},Ib=function(){if(typeof stlib!=="undefined"&&typeof stlib.hash!=="undefined"&&typeof stlib.hash.doNotCopy!=="undefined"&&!stlib.hash.doNotCopy){xa();setTimeout(function(){clearInterval(wa)},2E3)}Wa+=
1;Wa>=5&&clearInterval(wa)};A.afterDynamicConfig.push(function(){if(typeof stlib!=="undefined"&&typeof stlib.hash!=="undefined"&&typeof stlib.hash.doNotCopy!=="undefined"&&!stlib.hash.doNotCopy)xa();else{for(var a=false,b=document.getElementsByTagName("script"),c=0;c<b.length;c++)if(b[c].getAttribute("src")&&/sharethis/.test(b[c].src)){a=true;break}if(a)wa=setInterval(Ib,2E3)}typeof F==="function"&&F("afterProtectTynt")})};Tynt.TIL=function(){document.body?Jb():setTimeout(Tynt.TIL,300)}})();Tynt.TIL()};
