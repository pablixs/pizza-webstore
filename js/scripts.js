
let barButton = document.getElementById('bar-btn');
let menuShow = document.getElementById('hide-box');
barButton.onclick = function () {
    menuShow.classList.toggle("show")
};


window.addEventListener("scroll", function () {
    let headerObj = document.querySelector('header')
    let nav = document.getElementById('nav-box')
    let btn = document.querySelectorAll('.btn-nav')
    let bar = document.getElementById('bar-btn')
    let searchIcon = document.getElementById('search-icon')
    let search = document.getElementById('nav-search')
    if (window.scrollY > (headerObj.offsetTop + headerObj.offsetHeight)) {
        for (var i = 0; i < btn.length; i++) {
            btn[i].classList.add('btn-nav-color');
        }
      
        nav.classList.add("colored-nav")
        bar.classList.add("btn-nav-color-bar")
        search.classList.add("nav-color-search")
        searchIcon.classList.add("color")
        menuShow.classList.add("show-box-color")
    } else if (window.scrollY < (headerObj.offsetTop + headerObj.offsetHeight)) {
        for (var i = 0; i < btn.length; i++) {
            btn[i].classList.remove('btn-nav-color');
        }
        nav.classList.remove("colored-nav")
        bar.classList.remove("btn-nav-color-bar")
        search.classList.remove("nav-color-search")
        searchIcon.classList.remove("color")
        menuShow.classList.remove("show-box-color")

    }
});


/* Hover effects */
// let productGrid = document.getElementsByClassName('products-grid')

// for (let i= 0; i < productGrid.length; i++){
//     productGrid[i].onmouseover= () => {
//         productGrid[i].classList.toggle("hover")
//     } 
//     // productGrid[i].classList.toggle("hover")
// }

