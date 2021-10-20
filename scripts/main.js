const first = document.getElementById('first');
const second = document.getElementById('second');
const three = document.getElementById('three');
const fourth = document.getElementById('fourth');
const fifth = document.getElementById('fifth');

first. onclick = function(){
    const one = document.getElementById('one');
    one.scrollIntoView(true);
    window.scrollBy(0, -60);
};

second. onclick = function(){
    const two = document.getElementById('two');
    two.scrollIntoView(true);
    window.scrollBy(0, -60);
};

third. onclick = function(){
    const three = document.getElementById('three');
    three.scrollIntoView(true);
    window.scrollBy(0, -60);
};

fourth. onclick = function(){
    const four = document.getElementById('four');
    four.scrollIntoView(true);
    window.scrollBy(0, -60); 
};

fifth. onclick = function(){
    const five = document.getElementById('five');
    five.scrollIntoView( {block: "start", behavior: "smooth"});
    window.scrollBy(0, -60); 
};
