function hovereffect(idname) {
    document.getElementById(idname).style.fontWeight = "900";
}
function nohover(idname) {
    document.getElementById(idname).style.fontWeight = "100";
}

//random bg for home   
const home = document.getElementById('home');
const images =
    [
        "linear-gradient(rgba(225, 0, 255, 0.178),rgba(0, 0, 0, 0.363)),url('rsc/1.jpg')",
        "linear-gradient(rgba(172, 0, 106, 0.233),rgba(0, 0, 0, 0.5)),url('rsc/2.jpg')",
        "linear-gradient(rgba(32, 190, 0, 0.212),rgba(0, 0, 0, 0.363)),url('rsc/3.jpg')",
        "linear-gradient(rgba(0, 0, 0, 0.219),rgba(0, 0, 0, 0.719)),url('rsc/4.jpg')",
        "linear-gradient(rgba(97, 124, 0, 0.363),rgba(0, 0, 0, 0.719)),url('rsc/5.jpg')",
        "linear-gradient(rgba(252, 255, 46, 0.37),rgba(0, 0, 0, 0.319)),url('rsc/6.jpg')",
        "linear-gradient(rgba(0, 0, 0, 0.322),rgba(0, 0, 0, 0.349)),url('rsc/7.jpg')",
        "linear-gradient(rgba(0, 0, 0, 0.363),rgba(0, 0, 0, 0.363)),url('rsc/8.jpg')",
        "linear-gradient(rgba(0, 119, 255, 0.281),rgba(212, 0, 255, 0.274)),url('rsc/9.jpg')",
        "linear-gradient(rgba(255, 187, 0, 0.089),rgba(0, 0, 0, 0.6)),url('rsc/10.jpg')"
    ];
var i = Math.floor(Math.random() * images.length);
home.style.backgroundImage = images[i];

//for scrolling
window.onscroll = () => {
    const nav = document.querySelector('#navi');
    const bod = document.getElementsByTagName('body');
    if (this.scrollY > 610 && this.scrollY < 1100)
        nav.className = 'scroll';
    else if (this.scrollY > 1100 && this.scrollY < 2000)
        nav.className = 'scroll2';
    else if (this.scrollY > 2000 && this.scrollY < 3000)
        nav.className = 'scroll3';
    else if (this.scrollY > 3000)
        nav.className = 'scroll4';
    else
        nav.className = '';
};
