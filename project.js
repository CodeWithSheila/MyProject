let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');   
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
window.onscroll = ()=>{
    searchBtn.classlist.remove('fa-times');
    searchBar.classlist.remove('active');
}

menu.addEventListener('click', ()=> {
    menu.classList.toogle('fa-times');
    navbar.classList.toogle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classlist.toggle('fa-times');
    searchBar.classlist.toggle('active');

});
formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
})
formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
})