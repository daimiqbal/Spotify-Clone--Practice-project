console.log("Welcome to Music Mania")
let audioElement = new Audio('1.mp3');
audioElement.play();


let playPauseButton = document.getElementById('play-pause');
let progressBar = document.getElementById('myProgressBar');


audio.ontimeupdate = function() {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
};

playPauseButton.onclick = function() {
    if (audio.paused) {
        audio.play();
        playPauseButton.className = 'fas fa-3x fa-pause-circle';
    } else {
        audio.pause();
        playPauseButton.className = 'fas fa-3x fa-play-circle';
    }
};


progressBar.onclick = function(e) {
    let percent = e.offsetX / this.offsetWidth;
    audio.currentTime = percent * audio.duration;
    progressBar.value = percent / 100;
};
