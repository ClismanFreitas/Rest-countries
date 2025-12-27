const baseURL = `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital`
const pais = document.querySelector(".paises")

const search = async(renderizar) => {
    const response = await fetch(baseURL)
    const data = await response.json()
    renderizar(data)
}

const renderizar = async(paises) => {
    console.log(paises);
    const filtrado = paises.slice(0,8)
    console.log(filtrado);
    pais.innerHTML = filtrado.map(p => `
        <div class="pais">
            <img src=${p.flags.png} alt="${p.name.common}" width="100"/>
            <div class="fuba">
                <h3>${p.name.common}</h3>
                <p>Population: ${p.population.toLocaleString("pt-BR")}</p>
                <p>Regiao: ${p.region}</p>
                <p>Capital: ${p.capital?.[0] || "N/A"}</p>
            </div>
        </div>
    `).join("")
}


search(renderizar)
