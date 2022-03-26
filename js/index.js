var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

btn[0].onclick = function () {
    var mq = window.matchMedia( "(max-width: 600px)" );
    if (mq.matches){
        slide.style.transform = "translateX(0px)";
    }else {
        slide.style.transform = "translateX(0px)";

    }
    for (i=0; i < 3; i++) {
        btn[i].classList.remove("active");
    }  
    this.classList.add("active");
}
btn[1].onclick = function () {
    var mq = window.matchMedia( "(max-width: 600px)" );

    if (mq.matches){
        slide.style.transform = "translateX(-390px)";
    }else {
        slide.style.transform = "translateX(-1600px)";

    }
    for (i=0; i < 3; i++) {
        btn[i].classList.remove("active");
    }  
    this.classList.add("active");

}
btn[2].onclick = function () {
    var mq = window.matchMedia( "(max-width: 600px)" );
    if (mq.matches){
        slide.style.transform = "translateX(-805px)";
    }else {
        slide.style.transform = "translateX(-3200px)";

    }
    for (i=0; i < 3; i++) {
        btn[i].classList.remove("active");
    }  
    this.classList.add("active");

}
