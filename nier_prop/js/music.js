const MUSIC = [
  {
    file: "/music/1.mp3",
    title: "Grandma (Destruction)"
  },
  {
    file: "/music/2.mp3",
    title: "A Beautiful Song"
  },
  {
    file: "/music/3.mp3",
    title: "Emil (Despair)"
  },
  {
    file: "/music/4.mp3",
    title: "Vague Hope - Cold Rain"
  },
  {
    file: "/music/5.mp3",
    title: "Emil (Sacrifice)"
  },
  {
    file: "/music/6.mp3",
    title: "Blissful Death"
  }
  ];

const musicPlayer = document.querySelector(".js-music-player");
const musicTitle = musicPlayer.querySelector(".js-music-title");
const musicStatus = musicPlayer.querySelector(".js-music-status");

let currentAudio;
let musicTracker;
let isPlaying = false;

const playMusic = () => {
  musicStatus.classList.remove('inactive');
  currentAudio.play();
  isPlaying = true;
  trackMusicTime();
}

const selectMusic = () => {
  const ranNum = Math.floor(Math.random() * MUSIC.length);
  const selectedMusic = MUSIC[ranNum];
  musicTitle.innerText = selectedMusic.title;
  currentAudio = new Audio(selectedMusic.file);
  currentAudio.volume = 0.2;
}

const stopMusic = () => {
  musicStatus.classList.add('inactive');
  currentAudio.pause();
  isPlaying = false;
  clearInterval(musicTracker);
}

const triggerMusicPlay = () => {
  isPlaying ? stopMusic() : playMusic();
}

const trackMusicTime = () => {
  let progress;
  musicTracker = setInterval(()=> {
    progress = currentAudio.currentTime / currentAudio.duration;

    if (progress >= 0.95 && currentAudio.volume > 0.03) {
      currentAudio.volume -= 0.03;
    }

    if (progress >= 1) {
      stopMusic();
      selectMusic();
      playMusic();
    }
  }, 1000);
}

musicPlayer.addEventListener("click", (e) => {
  const musicShifter = e.target.closest(".js-music-shifter");
  if (musicShifter) {
    stopMusic();
    selectMusic();
    playMusic();
  }
});

musicStatus.addEventListener("click", triggerMusicPlay);

selectMusic();