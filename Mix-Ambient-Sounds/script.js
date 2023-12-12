let isPlaying = false; // boolean flag
// my mistake : THAT IT WASN'T OUTSIDE THE FUNCTION

window.addEventListener("keydown", function (e) {
  // look through the document for an audio file and put it inside a variable
  // then we can use pause() and play() to change that audio's state
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // instead of selecting an element, we can select a div[] or a .key[] in this case
  // we have the class="key" in each of the divs in HTML
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

  // toggle the 'playing' active class when the audio is playing

  audio.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );

  if (!isPlaying) {
    key.classList.add("playing");
  } else {
    key.classList.remove("playing");
  }

  if (e.keyCode === 49) {
    isPlaying ? audio.pause() : audio.play();

    isPlaying = !isPlaying;
    return !isPlaying;
  }

  if (e.keyCode === 50) {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
    return !isPlaying;
  }

  if (e.keyCode === 51) {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
    return !isPlaying;
  }

  if (e.keyCode === 52) {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
    return !isPlaying;
  }

  if (e.keyCode === 53) {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
    return !isPlaying;
  }

  if (e.keyCode === 54) {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
    return !isPlaying;
  }

  if (e.keyCode === 55) {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
    return !isPlaying;
  }

  if (e.keyCode === 56) {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
    return !isPlaying;
  }

  if (e.keyCode === 57) {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
    return !isPlaying;
  }

  if (e.keyCode === 58) {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
    return !isPlaying;
  }
});

//   if (!audio) return; // this will automatically end the function if no audio was found

// const pause = document.getElementById("pauseAll");

// pause.addEventListener("keydown", function (e) {
//   const pauseBtn = document.querySelector(e.keyCode);

//   if (e.keyCode === 32 && isPlaying) {
//     audio.pause();
//   }
// });
