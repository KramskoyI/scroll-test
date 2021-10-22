const linkList = document.getElementById('linkList');
const scrollTop = 300;
const goTopBtn = document.querySelector('.back_to_top');
const one = document.getElementById('one');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);
linkList.addEventListener('click', function(event){
    let id = event.target.getAttribute('data-section');
    let paragraph = document.getElementById(id);
    paragraph.scrollIntoView( {block: "start", behavior: "smooth"});
});

function trackScroll() {
    if (window.pageYOffset >= scrollTop) {
        goTopBtn.classList.add('back_to_top-show');
    } else { goTopBtn.classList.remove('back_to_top-show');
    }
}
 function backToTop() {
    one.scrollIntoView( {block: "start", behavior: "smooth"});
};

