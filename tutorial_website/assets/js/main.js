const toggle_nav = () => {
    const nav = document.getElementById("nav")
    if (nav.className == "nav") {
        nav.className += " responsive"
    } else {
        nav.className = "nav"
    }
}