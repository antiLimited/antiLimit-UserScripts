// ==UserScript==
// @name        Video Save - reddit.com
// @namespace   Violentmonkey Scripts
// @match       https://www.reddit.com/*
// @grant       none
// @version     1.0
// @author      antiLimit
// @description 4/21/2022, 11:49:43 AM
// ==/UserScript==

document.onkeyup = function(e) {
  if (e.which == 45) {
    // alert("Forwarding you to rapidsave.com");
    // window.location.href = `https://rapidsave.com/info?url=${window.location.href}`
    window.open(`https://rapidsave.com/info?url=${window.location.href}`,`_blank`);
  }
};
