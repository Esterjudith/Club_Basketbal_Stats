const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})



let image = document.querySelector(".col-4 img")
gsap.from(image, {
    ScrollTrigger: {
        trigger: image,
        start: "top top",
    },
    x: 700,
    duration: 5
})

