import { renderizar } from "./render.js"
const baseURL = `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital`


const search = async(renderizar) => {
    const response = await fetch(baseURL)
    const data = await response.json()
    renderizar(data)
}


search(renderizar)
