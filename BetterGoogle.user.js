// ==UserScript==
// @name        Better Google
// @namespace   awesome-userscripts.github.io
// @match       *://www.google.*/*
// @grant       none
// @version     1.3
// @author      snowcatridge10
// @description 5/20/2021, 12:24:31 PM
// ==/UserScript==

var css = "body { background: whitesmoke; }"
var style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
