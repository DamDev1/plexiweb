const showNav = document.querySelector(".showNav")

document.querySelector(".close").addEventListener("click", () => {
    showNav.classList.remove("active")
})

document.querySelector(".toggle").addEventListener("click", () => {
    showNav.classList.toggle("active")
})

window.onscroll = function () {
    var scrolled = document.documentElement.scrollTop;

    if (scrolled > 50) {
        document.querySelector(".logoContainer").style.opacity = "0"
    } else {
        document.querySelector(".logoContainer").style.opacity = "1"
    }
}