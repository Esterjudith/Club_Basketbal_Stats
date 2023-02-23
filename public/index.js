// Get the hamburger menu icon and the mobile links
const hamburger = document.querySelector(".hamburger-menu")

const mobileLinks = document.querySelector(".mobile-links")

//Add a click listener to the hamburger icon
hamburger.addEventListener("click", () => {
    //toggle the 'active' class on the hamburger icon
    console.log("clicked")
    hamburger.classList.toggle('active')

    //toggle the 'hidden' class on the mobile links. 
    mobileLinks.classList.toggle('hidden')
})