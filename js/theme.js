const theme = document.querySelector(".tema")
const html = document.documentElement
const lua = "images/lua-crescente-dark.png"
const sol =  "images/brilho-do-sol.png"

theme.innerHTML = `<img src=${sol} alt=""> Light Mode`

theme.addEventListener("click", () => {
    if(html.dataset.theme === "dark"){
        html.dataset.theme = "light"
        theme.innerHTML = `<img src=${lua} alt=""> Dark Mode`
    } else {
        html.dataset.theme = "dark"
        theme.innerHTML = `<img src=${sol} alt=""> Light Mode`
    }
})

