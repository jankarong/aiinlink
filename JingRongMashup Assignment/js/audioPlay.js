const playButton = document.getElementById('playButton');
const music = document.getElementById('music');

playButton.addEventListener('click', function () {
    if (music.paused) {
        music.play();
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-pause-circle');
    } else {
        music.pause();
        playButton.classList.remove('fa-pause-circle');
        playButton.classList.add('fa-circle-play');
    }
});