var audio = new Audio("https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/viper.mp3");
var container = document.getElementById("elapsed-container");
var elapsed = document.getElementById("elapsed");
var playPause = document.getElementById('play');
var aNow = document.getElementById("aNow");
var aTime = document.getElementById("aTime");

var timeString = (secs) => {
    // HOURS, MINUTES, SECONDS
    let ss = Math.floor(secs),
        hh = Math.floor(ss / 3600),
        mm = Math.floor((ss - (hh * 3600)) / 60);
    ss = ss - (hh * 3600) - (mm * 60);

    // RETURN FORMATTED TIME
    if (hh>0) { mm = mm<10 ? "0"+mm : mm; }
    ss = ss<10 ? "0"+ss : ss;
    return hh>0 ? `${hh}:${mm}:${ss}` : `${mm}:${ss}` ;
  };

audio.addEventListener("loadedmetadata", () => {
    aNow.innerHTML = timeString(0);
    aTime.innerHTML = timeString(audio.duration);
  });

  // (C3) UPDATE TIME ON PLAYING
  audio.addEventListener("timeupdate", () => {
    aNow.innerHTML = timeString(audio.currentTime);
  });

function progress_animation() {
	var rect = container.getBoundingClientRect();
  var percentage = audio.currentTime / audio.duration;
  elapsed.style.width = (percentage * rect.width) + "px";
  
  window.requestAnimationFrame(progress_animation);
};

document.getElementById("play").onclick = function(){
	if(audio.paused){
    audio.play();
    playPause.classList.add('pause')
    playPause.classList.remove('play')


    }else{
    audio.pause();
    playPause.classList.add('play')
    playPause.classList.remove('pause')



    }
  window.requestAnimationFrame(progress_animation);
}