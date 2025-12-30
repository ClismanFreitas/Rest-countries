const pais = document.querySelector(".paises")
const search = document.querySelector(".search")
const region = document.querySelector(".filter")
const btnBack = document.querySelector(".btn-back")
const paisSelecionado = pais.classList.contains("pSelecionado")

export const detalhes = (inicio) => {
    const cards = document.querySelectorAll(".pais")
    cards.forEach(card => {
        card.addEventListener("click", async (e) => {
            if (!paisSelecionado) {
                pais.classList.remove("paises")
                pais.classList.add("pSelecionado")
            }
            const selecionado = card.dataset.nome
            const urlDetail = await fetch(`https://restcountries.com/v3.1/name/${selecionado}`)
            const data = await urlDetail.json()
            console.log(data);
            const borders = data[0].borders || []
            console.log(borders);
            search.classList.add("esconder")
            region.classList.add("esconder")
            btnBack.classList.remove("esconder")
            data.forEach(seleçao => {
                pais.innerHTML = `
                <main class="container">
                    <div class="imagem-detalhe">
                        <img src="${seleçao.flags.png}"/>
                    </div>
                    <div class="informacaoPais">
                        <div>
                            <h1>${seleçao.name.common}</h1>
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
                            <p class="borderCountries">
                                <b>Border Countries:</b>
                                <span></span>
                                <span></span>
                                
                             </p>
                        </div>
                        <div class="b">
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
            pais.classList.add("paises")
            pais.classList.remove("pSelecionado")
        }
        detalhes(inicio)
    })
}









