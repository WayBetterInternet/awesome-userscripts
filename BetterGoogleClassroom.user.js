// ==UserScript==
// @name        Better Google Classroom
// @namespace   awesome-userscripts.github.io
// @match       *://classroom.google.com/*
// @grant       none
// @version     2.2
// @author      era2010-coder
// @description Userscript to make google classroom better
// ==/UserScript==

var css = "body { background: whitesmoke; }"
var style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

var css2 = "body {margin: 0;font-family: Arial, Helvetica, sans-serif;}.navbar {  overflow: hidden;  background-color: #333;  position: fixed;  bottom: 0;  width: 100%;}.navbar a {  float: left;  display: block;  color: #f2f2f2;  text-align: center;  padding: 14px 16px;  text-decoration: none;  font-size: 17px;}.navbar a:hover {  background: #f1f1f1;  color: black;}.navbar a.active {background-color: #04AA6D;color: white;}.main {  padding: 16px;  margin-bottom: 30px;}"
var style2 = document.createElement("style");
style2.type = "text/css";
style2.appendChild(document.createTextNode(css2));
document.head.appendChild(style2);

var bottomNav = "<style></style></head><body><div class='navbar'><a href="#home" class="active">Home</a><a href='#news'>News</a><a href='#contact'>Contact</a></div><div class='main'><h1>Bottom Navigation Bar</h1><p>Some text some text some text.</p></div></body></html>";
var div = document.createElement("div");
div.appendChild(document.createTextNode(bottomNav));
document.body.appendChild(div);
