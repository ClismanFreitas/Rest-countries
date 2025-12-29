const pais = document.querySelector(".paises")
const search = document.querySelector(".search")
const region = document.querySelector("#region")
const btnBack = document.querySelector(".btn-back")



export const detalhes = (inicio) => {
    const cards = document.querySelectorAll(".pais")
    cards.forEach(card => {
        card.addEventListener("click", async (e) => {
            const selecionado = card.dataset.nome
            const urlDetail = await fetch(`https://restcountries.com/v3.1/name/${selecionado}`)
            const data = await urlDetail.json()
            search.classList.add("esconder")
            region.classList.add("esconder")
            btnBack.classList.remove("esconder")
            console.log(data);
            const resultado = data.map(seleçao => {
                pais.innerHTML = `deu certo`
            })
        })
    })
    btnBack.addEventListener("click", () => {
        pais.innerHTML = inicio
        search.classList.remove("esconder")
        region.classList.remove("esconder")
        btnBack.classList.add("esconder")
        detalhes(inicio)
    })
}









