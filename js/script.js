var open = document.getElementById("open");
var close = document.getElementById("close");
var side = document.getElementById("sidebar");

// Show Sidebar
open.onclick = function(){
    side.style.left = "0";
}

// Hide Sidebar
close.onclick = function(){
    side.style.left = "-250px";
}

// Show Top-Button if scroll > 30px
var topBtn = document.getElementById("top");
window.onscroll = function(){
    if (scrollY > 30) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When click on Top-Button go to the top smoothly
topBtn.onclick = function(){
    window.scrollTo({
        top : 0 ,
        behavior : "smooth"
    })
}