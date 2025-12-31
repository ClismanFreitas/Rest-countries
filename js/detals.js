const pais = document.querySelector(".paises")
const search = document.querySelector(".search")
const region = document.querySelector(".filter")
const btnBack = document.querySelector(".btn-back")
const paisSelecionado = pais.classList.contains("pSelecionado")

export const detalhes = (inicio) => {
    const cards = document.querySelectorAll(".pais")
    cards.forEach(card => {
        card.addEventListener("click", async () => {
            const selecionado = card.dataset.nome
            const urlDetail = await fetch(`https://restcountries.com/v3.1/name/${selecionado}`)
            const data = await urlDetail.json()
            console.log(data);
            const border = data[0].borders || []
            let bordersHTML = ""

            if (border.length === 0) {
                bordersHTML = `<span class="border">None</span>`
            } else {
                const response = await fetch(
                    `https://restcountries.com/v3.1/alpha?codes=${border.join(",")}`
                )
                const borderCountries = await response.json()

                bordersHTML = borderCountries.map(country => `
                    <div class="border-item">${country.name.common}</div>`).join("")
            }

            if (!paisSelecionado) {
                pais.classList.remove("paises")
                pais.classList.add("pSelecionado")
            }
            search.classList.add("esconder")
            region.classList.add("esconder")
            btnBack.classList.remove("esconder")
            data.forEach(seleçao => {
                pais.innerHTML = `
                <main class="container">
                    <div class="imagem-detalhe">
                        <img src="${seleçao.flags.png}"/>
                    </div>
                    
                    <article class="informacaoPais">
                        <h1>${seleçao.name.common}</h1>
                        <div class="info">
                            <div class="infoEsquerda">
                                <p>
                                    <b>Native Name:</b>
                                    <span>
                                        ${Object.values(seleçao.name.nativeName)[0].official}
                                    </span>
                                </p>
                                <p>
                                    <b>Population:</b>
                                    <span>
                                        ${seleçao.population.toLocaleString("pt-BR")}
                                    </span>
                                </p>
                                <p>
                                    <b>Region:</b>
                                    <span>
                                        ${seleçao.region}
                                    </span>
                                </p>
                                <p>
                                    <b>Sub Region:</b>
                                    <span>
                                        ${seleçao.subregion}
                                    </span>
                                </p>
                                <p>
                                    <b>Capital:</b>
                                <span>
                                    ${seleçao.capital}
                                </span>
                                </p>
                            </div>
                            <div class="infoDireita">
                                <p>
                                    <b>Top Level Domain:</b>
                                    <span>
                                        ${seleçao.tld}
                                    </span>
                                </p>
                                <p>
                                    <b>Currencies:</b>
                                    <span>
                                        ${Object.values(seleçao.currencies)[0].name}
                                    </span>
                                </p>
                                <p>
                                    <b>Languages:</b>
                                    <span>
                                        ${Object.values(seleçao.languages)}
                                    </span>
                                </p>
                            </div>
                            </div>
                        <div class="countries">
                            <p>
                                <b>Border Countries:</b>
                            </p>
                            <div class="border-list">
                                ${bordersHTML}
                            </div>
                        </div>
                    </article>
                </main>`
            })

        })
    })

    btnBack.addEventListener("click", () => {
        pais.innerHTML = inicio
        search.classList.remove("esconder")
        region.classList.remove("esconder")
        btnBack.classList.add("esconder")
        if (!paisSelecionado) {
            pais.classList.remove("pSelecionado")
            pais.classList.add("paises")
        }
        detalhes(inicio)
    })
}









