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
    //alert("Forwarding you to redditsave.com");
    window.location.href = `https://redditsave.com/info?url=${window.location.href}`
  }
};
