const video = document.querySelector("#video");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timestamp = document.querySelector("#timestamp");

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatepalyIcon);
video.addEventListener("pause", updatepalyIcon);
video.addEventListener("timeupdate", updateeProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);

function stopVideo(event) {
  video.currentTime = 0;
  video.pause();
}

function updateeProgress(event) {
  progress.value = (video.currentTime / video.duration) * 100;
}

function updatepalyIcon(event) {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x">';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x">';
  }
}

function toggleVideoStatus(event) {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
