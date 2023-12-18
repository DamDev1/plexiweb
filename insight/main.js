const showNav = document.querySelector(".showNav")



alert("hello")

document.querySelector(".close").addEventListener("click", () => {
    showNav.classList.remove("active")
})

document.querySelector(".toggle").addEventListener("click", () => {
    showNav.classList.toggle("active")
    alert("hello")
})
