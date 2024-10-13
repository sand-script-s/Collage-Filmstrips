let backgrounddiv = document.getElementById('backgrounddiv');
let backgroundArr = ['scripts/backgrounds/wall.jpg','scripts/backgrounds/bricks.jpg','scripts/backgrounds/stone.jpg','scripts/backgrounds/sand.jpg'];

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let scrollHeightVar = document.body.scrollHeight;
    
    let tolerance = 50; /* Tolerance for dynamic viewvports */
    let viewportHeight = window.innerHeight + tolerance;

    let imageIndex = Math.floor((scrollPosition / (scrollHeightVar - viewportHeight)) * backgroundArr.length);

    let urlVar = 'url(' + backgroundArr[imageIndex] + ')';

    backgrounddiv.style.backgroundImage = urlVar;

})