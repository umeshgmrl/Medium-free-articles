// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://medium.com/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(document.location.href == "https://medium.com/") return;
    if(document.location.href.includes('https://medium.com/?source=post_page')) return;
    fetch(document.location.href, { credentials: 'omit'}).then(res => res.text()).then(html => {
        document.open();
        document.write(html);
        document.close();
    });
})();
