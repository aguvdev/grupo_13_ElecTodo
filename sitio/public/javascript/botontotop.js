mybutton = document.getElementById("gototop-btn");
window.onscroll = () => {
    scrollFunction()
};

let scrollFunction = () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}