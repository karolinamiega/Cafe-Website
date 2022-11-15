var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;
  
function fadeIn() {
    setInterval(show, 100);
}
  
function show() {
    var body = document.getElementById("body");
    opacity = Number(window.getComputedStyle(body)
        .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.15;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 1,
        perMove: 1,
        pagination: boolean = false,
        gap: '1em',
      } );
      
      splide.mount();
  } );

var aboutUs = document.querySelector('#about-us');
var findUs = document.querySelector('#find-us');
var aboutUsSec = document.querySelector('#about-us-sec');
var findUsSec = document.querySelector('#find-us-sec');

aboutUs.addEventListener('click', scrollTwo);
findUs.addEventListener('click', scrollThree);
aboutUsSec.addEventListener('click', scrollTwo);
findUsSec.addEventListener('click', scrollThree);

function scrollTwo(){
    let elem = document.querySelector('.blurp');
    elem.scrollIntoView({behavior: "smooth"});
}
function scrollThree(){
    let elem = document.querySelector('.about-us');
    elem.scrollIntoView({behavior: "smooth"});
}
let showOnPx = 100;
let backToTopButton = document.querySelector(".back-to-top")

let scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);

  function goToTop(){
    let goElem = document.querySelector('body');
    goElem.scrollIntoView({behavior:"smooth"});
  };

  var burgerMenu = document.getElementById('burger-menu');

  var overlay = document.getElementById('menu');
  
  burgerMenu.addEventListener('click', function() {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  }); 