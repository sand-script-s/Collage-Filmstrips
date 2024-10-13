let backgrounddiv = document.getElementById('backgrounddiv');
let backgroundArr = ['scripts/backgrounds/wall.jpg','scripts/backgrounds/bricks.jpg','scripts/backgrounds/stone.jpg','scripts/backgrounds/sand.jpg'];

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let scrollHeightVar = document.body.scrollHeight;
    let viewportHeight = window.innerHeight;

    let imageIndex = Math.floor((scrollPosition / (scrollHeightVar - viewportHeight)) * backgroundArr.length);

    let urlVar = 'url(' + backgroundArr[imageIndex] + ')';

    backgrounddiv.style.backgroundImage = urlVar;

})