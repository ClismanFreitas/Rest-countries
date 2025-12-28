import { detalhes } from "./detals.js"
const pais = document.querySelector(".paises")

export const renderizar = async(paises) => {
    const filtrado = paises.slice(0,8)
    pais.innerHTML = filtrado.map(p => `
        <div class="pais" data-nome="${p.name.common}">
            <img src=${p.flags.png} alt="${p.name.common}" width="100"/>
            <div class="fuba">
                <h3>${p.name.common}</h3>
                <p>Population: ${p.population.toLocaleString("pt-BR")}</p>
                <p>Regiao: ${p.region}</p>
                <p>Capital: ${p.capital?.[0] || "N/A"}</p>
            </div>
        </div>
    `).join("")
    detalhes()
}