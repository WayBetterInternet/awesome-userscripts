// ==UserScript==
// @name        Better Google Classroom
// @namespace   awesome-userscripts.github.io
// @match       *://classroom.google.com/*
// @grant       none
// @version     2.0
// @author      era2010-coder
// @description Userscript to make google classroom better
// ==/UserScript==

var css = "body { background: whitesmoke; }"
var style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

var css2 = "div { background: whitesmoke; }"
var style2 = document.createElement("style");
style2.type = "text/css";
style2.appendChild(document.createTextNode(css2));
document.head.appendChild(style2);
