// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

// This is the content script for the extension
// Note there is also a content.css file

function toggle (element) {
  if (element.childNodes[0].innerHTML == "Hide") {
    element.childNodes[0].innerHTML = "Reveal"
  } else {
    element.childNodes[0].innerHTML = "Hide";
  }
}

var qlcodeblocks = document.getElementsByClassName('qlcodeblocks');

console.log('Brian\'s schlocky extension running');

for (var i = 0; i < qlcodeblocks.length; i++) {
  // Look at the full content
  var txt = qlcodeblocks[i].innerHTML;
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
  qlcodeblocks[i].innerHTML = tokens.join('');
  qlcodeblocks[i].innerHTML += '<input type="button" class="ddial" value="Reveal"/> onclick(toggle(this))';
}
