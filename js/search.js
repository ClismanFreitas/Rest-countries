const searchFilter = document.querySelector('#input')
const pais = document.querySelector(".paises")
import { detalhes } from "./detals.js"

searchFilter.addEventListener("input", async (event) => {
    const url = `https://restcountries.com/v3.1/name/${event.target.value}?fields=name,flags,population,region,capital`
    const response = await fetch(`${url}`)
    const data = await response.json()
    searchPaises(data)
})

const searchPaises = (data) => {
    const filtrando = data.slice(0, 8)
    const inicio = pais.innerHTML = filtrando.map(p => `
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
}

