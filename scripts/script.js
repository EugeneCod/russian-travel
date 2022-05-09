'use strict'

const buttons_play = document.querySelectorAll('.video__icon-play');
const iframes_wrapper = document.querySelectorAll('.video__iframe-wrapper');
// const iframes = document.querySelectorAll('.video__iframe');
const covers = document.querySelectorAll('.video__cover');

for (let i = 0; i < buttons_play.length; i++) {
  buttons_play[i].addEventListener ('click', function () {
    covers[i].classList.toggle('_active');
    iframes_wrapper[i].classList.toggle('_active');
    // iframes[i].classList.toggle('_active');
    buttons_play[i].classList.toggle('_active');
  });
}
