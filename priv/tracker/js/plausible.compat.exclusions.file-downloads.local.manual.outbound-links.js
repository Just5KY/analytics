!function(){"use strict";var t,e,r,u=window.location,c=window.document,s=c.getElementById("plausible"),f=s.getAttribute("data-api")||(t=s.src.split("/"),e=t[0],r=t[2],e+"//"+r+"/api/event");function d(t){console.warn("Ignoring Event: "+t)}function a(t,e){try{if("true"===window.localStorage.plausible_ignore)return d("localStorage flag")}catch(t){}var r=s&&s.getAttribute("data-include"),a=s&&s.getAttribute("data-exclude");if("pageview"===t){var i=!r||r&&r.split(",").some(o),n=a&&a.split(",").some(o);if(!i||n)return d("exclusion rule")}function o(t){return u.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=t,l.u=e&&e.u?e.u:u.href,l.d=s.getAttribute("data-domain"),l.r=c.referrer||null,l.w=window.innerWidth,e&&e.meta&&(l.m=JSON.stringify(e.meta)),e&&e.props&&(l.p=e.props);var p=new XMLHttpRequest;p.open("POST",f,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(l)),p.onreadystatechange=function(){4===p.readyState&&e&&e.callback&&e.callback()}}var i=window.plausible&&window.plausible.q||[];window.plausible=a;for(var n=0;n<i.length;n++)a.apply(this,i[n]);var o=1;function l(t){if("auxclick"!==t.type||t.button===o){var e,r=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),a=r&&r.href&&r.href.split("?")[0];if((e=r)&&e.href&&e.host&&e.host!==u.host)return p(t,r,"Outbound Link: Click",{url:r.href});if(function(t){if(!t)return!1;var e=t.split(".").pop();return m.some(function(t){return t===e})}(a))return p(t,r,"File Download",{url:a})}}function p(t,e,r,a){var i=!1;function n(){i||(i=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented){var r=!e.target||e.target.match(/^_(self|parent|top)$/i),a=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return r&&a}}(t,e)?plausible(r,{props:a}):(plausible(r,{props:a,callback:n}),setTimeout(n,5e3),t.preventDefault())}c.addEventListener("click",l),c.addEventListener("auxclick",l);var g=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],v=s.getAttribute("file-types"),w=s.getAttribute("add-file-types"),m=v&&v.split(",")||w&&w.split(",").concat(g)||g}();