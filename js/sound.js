const soundState = {
  "cursorHover": false
}

const toggleSoundState = (state) => {
  soundState.cursorHover = state;
}

const playCursorSound = (e) => {
  if(!e.target.classList.contains("js-sound-cursor") || e.target.classList.contains("selected") || soundState.cursorHover) return;
  var audio = new Audio('/sound/cursor.mp3');
  audio.play();
  toggleSoundState(true);
}

const playMenuOpenSound = (e) => {
  var audio = new Audio('/sound/openMenu.mp3');
  audio.volume = 0.4;
  audio.play();
}

const playAlarmSound = (e) => {
  var audio = new Audio('/sound/alarm.mp3');
  audio.volume = 0.4;
  audio.play();
}

const playCancelSound = (e) => {
  var audio = new Audio('/sound/cancel.mp3');
  audio.volume = 0.8;
  audio.play();
}

const setCursorSoundTrigger = () => {
  const cursorSoundTriggers = document.querySelectorAll(".js-sound-cursor");
  cursorSoundTriggers.forEach((trigger) => {
    trigger.addEventListener("mouseover", playCursorSound);
    trigger.addEventListener("mouseleave", () => {
      toggleSoundState(false);
    });
  });
}

setCursorSoundTrigger();