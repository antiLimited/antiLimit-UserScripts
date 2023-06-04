// ==UserScript==
// @name        RapidSave - reddit.com
// @namespace   Violentmonkey Scripts
// @match       https://www.reddit.com/*
// @grant       none
// @version     1.1
// @author      antiLimit
// @description 5/3/2023, 10:33:43 PM
// ==/UserScript==

document.onkeyup = function(e) {
  if (e.which == 45) {
    // alert("Forwarding you to rapidsave.com");
    // window.location.href = `https://rapidsave.com/info?url=${window.location.href}`
    window.open(`https://rapidsave.com/info?url=${window.location.href}`,`_blank`);
  }
};
