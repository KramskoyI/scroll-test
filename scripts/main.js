const linkList = document.getElementById('linkList');
const first = document.getElementById('first')

linkList.addEventListener('click', function(){
    let data = event.target.getAttribute('data-section');
    let id = data;
    let paragraph = document.getElementById(id);
    paragraph.scrollIntoView( {block: "start", behavior: "smooth"});
    
});

//button scrol up  
function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
    }
}
function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -60);
        setTimeout(backToTop, 0);
    }
}
let goTopBtn = document.querySelector('.back_to_top');
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);
