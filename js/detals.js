export const detalhes = () => {
    const cards = document.querySelectorAll(".pais")
    cards.forEach(card => {
        card.addEventListener("click", async() => {
            const selecionado = card.dataset.nome
            const urlDetail = await fetch(`https://restcountries.com/v3.1/name/${selecionado}`)
            const data = await urlDetail.json()
            console.log(data);
        })
    })
}