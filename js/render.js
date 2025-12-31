import { detalhes } from "./detals.js"
const pais = document.querySelector(".paises")
const botao = document.querySelector(".filter")
const elementos = document.querySelector(".filter-list")

export const renderizar = async(paises) => {
    botao.addEventListener("click",() => {
        const botaoEstaAberto = elementos.classList.contains("esconder")
        if(botaoEstaAberto){
            elementos.classList.remove("esconder")
        } else {
            elementos.classList.add("esconder")
        }
    })
    const filtrado = paises.slice(0,8)
    const inicio = pais.innerHTML = filtrado.map(p => `
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