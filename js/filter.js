const filtro = document.querySelectorAll("li")
const pais = document.querySelector(".paises")
import { detalhes } from "./detals.js"

filtro.forEach(item => {
    item.addEventListener("click", async () => {
        const url = `https://restcountries.com/v3.1/region/${item.textContent}`
        const response = await fetch (`${url}`)
        const data = await response.json()
        const cortado = data.slice(0,8)
        const inicio = pais.innerHTML = cortado.map(p => `
        <article class="pais" data-nome="${p.name.common}">
            <img src=${p.flags.png} alt="${p.name.common}" width="100"/>
            <div class="details">
                <h3>${p.name.common}</h3>
                <p>Population: <span>${p.population.toLocaleString("pt-BR")}</span></p>
                <p>Region: <span>${p.region}</span></p>
                <p>Capital: <span>${p.capital?.[0] || "N/A"}</span></p>
            </div>
        </article>
    `).join("")
    detalhes(inicio)
    })
})