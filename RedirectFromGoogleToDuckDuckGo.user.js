// ==UserScript==
// @name         Redirect from Google to DuckDuckGo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect from Google to DuckDuckGo
// @author       snowcatridge10
// @match        https://www.google.com/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = "http://duckduckgo.com";
})();
