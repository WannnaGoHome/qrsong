const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.querySelector('.progress-bar');

let isPlaying = false;
let progress = 0;
let interval;

playPauseBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    playPauseBtn.src = 'icons/pause.png';
    interval = setInterval(() => {
      progress += 0.5;
      if (progress > 100) progress = 0;
      progressBar.style.width = `${progress}%`;
    }, 200);
  } else {
    playPauseBtn.src = 'icons/play.png';
    clearInterval(interval);
  }
});

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
