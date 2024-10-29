/* Theme Toggle */
const themeToggle = document.getElementById("theme-toggle")

themeToggle !== null &&
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light")
  })

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark")
}

/* Mobile Menu */
const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")

menuToggle !== null &&
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("translate-x-96")
    menuToggle.classList.toggle("group-close")
    localStorage.setItem(
      "mobileMenu",
      mobileMenu.classList.contains("translate-x-96") ? "close" : "open"
    )
  })

if (localStorage.getItem("mobileMenu") === "open") {
  mobileMenu.classList.remove("translate-x-96")
  menuToggle.classList.remove("group-close")
}

document.addEventListener("click", (event) => {
  const isClickInsideMenu = mobileMenu.contains(event.target) || menuToggle.contains(event.target)

  if (!isClickInsideMenu) {
    mobileMenu.classList.add("translate-x-96")
    menuToggle.classList.add("group-close")
    localStorage.setItem("mobileMenu", "close")
  }
})

/* MixItUp */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof mixitup === "function") {
    var mixer = mixitup(".container") // Ensure the selector matches your HTML structure
  } else {
    // console.error("MixItUp library is not loaded.")
  }
})
