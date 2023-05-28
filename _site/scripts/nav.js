window.addEventListener('load', function() {
    var navBar = document.querySelector('.nav_bar');
    navBar.style.display = 'block';
});

window.addEventListener('scroll', function() {
var nav = document.querySelector('.items_nav');
if (window.scrollY > 0) {
    nav.classList.add('scrolled');
} else {
    nav.classList.remove('scrolled');
}
});