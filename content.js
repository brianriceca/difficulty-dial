// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

// This is the content script for the extension
// Note there is also a content.css file

// Grab the entire document body
// This gets an array even though it's likely just one thing
var everything = document.getElementsByTagName("body");
console.log('word redactor extension running');

for (var i = 0; i < everything.length; i++) {
  // Look at the full content
  var txt = everything[i].innerHTML;
  //var s = "test the <img the> the";

  // This is a way of splitting up by tags.
  var tokens = txt.split(/(<.*?>)/);
  for (var j = 0; j < tokens.length; j++) {
    // Ignore anything that is a tag
    if (tokens[j].charAt(0) !== '<') {
      // Now replace the word "the" with "the" spanned with the class "redact"
      tokens[j] = tokens[j].replace(/\bthe\b/gi,'<span class="redact">the</span>');
    }
  }
  // Put everything back in
  everything[i].innerHTML = tokens.join('');
}
// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

// This is the content script for the extension

// It only runs on github.com as indicated in manifest.json
// "content_scripts": [
//   {
//     "matches": [
//       "http://github.com/*",
//       "https://github.com/*"
//     ],
//     "js": ["content.js"]
//   }
// ],


// Look for all elements that are an "avatar" or "gravatar"
var avatars = document.getElementsByClassName('avatar');
var gravatars = document.getElementsByClassName('gravatar');
var qlcodeblocks = document.getElementsByClassName('qlcodeblocks');

// Call swapImg() for all of these DOM elements
// for (var i = 0; i < avatars.length; i++) {
//   swapImg(avatars[i]);
// }

for (var i = 0; i < qlcodeblocks.length; i++) {
  var codeblockcontents = qlcodeblocks[i].innerHTML;

  // This is a way of splitting up by tags.
  var tokens = txt.split(/(<.*?>)/);
  for (var j = 0; j < tokens.length; j++) {
    // Ignore anything that is a tag
    if (tokens[j].charAt(0) !== '<') {
      // Now replace the word "the" with "the" spanned with the class "redact"
      tokens[j] = tokens[j].replace(/\b[a-zA-Z]+\b/gi,'<span class="redact">$&</span>');
    }
  }
  // Put everything back in
  qlcodeblocks[i].innerHTML = tokens.join('');
  qlcodeblocks[i].innerHTML += '<input type="button" class="ddial" value="Reveal"/>';
}

// Change the image to a file that is part of this extension
// The file must be made available in manifest.json
//   "web_accessible_resources": [
  // Split it up
  var words = txt.split(/\s+/);
  // Reverse the array
  words = words.reverse();
  // Join it back together
  txt = words.join(' ');
  // Set the new text and change the background-color
  descriptions[k].innerHTML = txt;
  descriptions[k].style['background-color'] = '#F0C';
}
