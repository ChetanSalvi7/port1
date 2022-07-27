var textWrapper = document.querySelector('.blast-root .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.blast-root .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.blast-root',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });