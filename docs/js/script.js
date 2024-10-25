const themeToggle = document.getElementById("theme-toggle")

themeToggle !== null &&
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light")
  })

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark")
}

const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")

menuToggle !== null &&
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("translate-x-96")
    menuToggle.classList.toggle("group-close")
    localStorage.setItem(
      "mobileMenu",
      mobileMenu.classList.contains("translate-x-96") ? "open" : "close"
    )
  })

if (localStorage.getItem("mobileMenu") === "close") {
  mobileMenu.classList.remove("translate-x-96")
  menuToggle.classList.remove("group-close")
}

document.addEventListener("DOMContentLoaded", function () {
  if (typeof mixitup === "function") {
    var mixer = mixitup(".container") // Ensure the selector matches your HTML structure
  } else {
    // console.error("MixItUp library is not loaded.")
  }
})
