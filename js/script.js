//'use strict'
let progress = 0;

// This a comment
function increaseProgressBar() {
  if (progress < 100) {
    progress += 14.29;
    document.getElementById("myProgressBar").style.height = progress + "%";
  }
}
