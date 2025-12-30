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
        <div class="pais" data-nome="${p.name.common}">
            <img src=${p.flags.png} alt="${p.name.common}" width="100"/>
            <div class="details">
                <h3>${p.name.common}</h3>
                <p>Population: ${p.population.toLocaleString("pt-BR")}</p>
                <p>Regiao: ${p.region}</p>
                <p>Capital: ${p.capital?.[0] || "N/A"}</p>
            </div>
        </div>
    `).join("")
    detalhes(inicio)
}