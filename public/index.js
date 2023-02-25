const hamburger = document.querySelector(".open")
const sidebar = document.querySelector(".sidebar")
const closeBtn = document.querySelector(".close-btn")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('open')
    sidebar.classList.toggle('hidden')
})

closeBtn.addEventListener("click", () => {
    sidebar.classList.add("hidden")
    hamburger.classList.remove("close")
})