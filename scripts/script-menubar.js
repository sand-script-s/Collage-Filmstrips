const hamburgerdiv = document.getElementById('hamburgerdiv');
const sliderdiv = document.getElementById('sliderdiv');

const toplinespan = document.getElementById('toplinespan');
const middlelinespan = document.getElementById('middlelinespan');
const bottomlinespan = document.getElementById('bottomlinespan');

let displayswitch = 0;

hamburgerdiv.addEventListener('click', event => {
    
    if (displayswitch === 1) {
        sliderdiv.classList.remove('slider-visible');
        sliderdiv.classList.add('slider-hidden');
        displayswitch = 0;

        toplinespan.classList.remove('top_line-state-2');
        toplinespan.classList.add('top_line-state-1');
        middlelinespan.classList.remove('middle_line-state-2');
        middlelinespan.classList.add('middle_line-state-1');
        bottomlinespan.classList.remove('bottom_line-state-2');
        bottomlinespan.classList.add('bottom_line-state-1');

    } else {
        sliderdiv.classList.remove('slider-hidden');
        sliderdiv.classList.add('slider-visible');
        displayswitch = 1;

        toplinespan.classList.remove('top_line-state-1');
        toplinespan.classList.add('top_line-state-2');
        middlelinespan.classList.remove('middle_line-state-1');
        middlelinespan.classList.add('middle_line-state-2');
        bottomlinespan.classList.remove('bottom_line-state-1');
        bottomlinespan.classList.add('bottom_line-state-2');
    }

});

//------------------------------------------------------------------------------------------

$(document).ready(function(){
    //jquery for toggle sub menus

    $('.sub-button').click(function() {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.svgprop').toggleClass('rotate');
    })

})