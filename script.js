const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.querySelector('.progress-bar');
const audioPlayer = document.getElementById('audioPlayer');

let isPlaying = false;

// Update progress bar
audioPlayer.addEventListener('timeupdate', () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseBtn.src = 'icons/play.png';
  } else {
    audioPlayer.play();
    playPauseBtn.src = 'icons/pause.png';
  }
  isPlaying = !isPlaying;
});

// Reset when song ends
audioPlayer.addEventListener('ended', () => {
  isPlaying = false;
  playPauseBtn.src = 'icons/play.png';
  progressBar.style.width = '0%';
});

// Button hover effects
document.querySelectorAll('.control-btn').forEach(btn => {
  btn.addEventListener('mousedown', () => {
    btn.style.transform = 'scale(0.9)';
  });
  btn.addEventListener('mouseup', () => {
    btn.style.transform = 'scale(1)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});