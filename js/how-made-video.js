// const poster = document.querySelector(".how-made-poster");
// poster.addEventListener("click", removePoster);

// function removePoster() {
//   poster.classList.add("how-made-poster-active");
//   document.querySelector("#how-made-poster-video").src += "?autoplay=1";
// }

(() => {
  const refs = {
    pushPlay: document.querySelector('[data-how-made-push-play]'),
    hide: document.querySelector('[data-how-made-hide]'),
  };

  refs.pushPlay.addEventListener('click', togglePoster);

  function togglePoster() {
      refs.hide.classList.toggle('how-made-is-hidden');

  }
})();