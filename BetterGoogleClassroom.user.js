// ==UserScript==
// @name        Better Google Classroom
// @namespace   awesome-userscripts.github.io
// @match       *://classroom.google.com/*
// @grant       none
// @version     2.5
// @author      snowcatridge10
// @description Userscript to make google classroom better
// ==/UserScript==

var css = "body { background: whitesmoke; }"
var style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
