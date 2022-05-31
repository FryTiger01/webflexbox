let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".icon-humberger__menu")
let menuBtnI = document.querySelector(".icon-humberger__menu i")

menuBtn.addEventListener("click",function(){
    if (menuBtnI.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuBtnI.classList = "fa fa-times"
    } else{
        menu.style.left = "-256px"
        menuBtnI.classList = "fa fa-bars"
    }
})