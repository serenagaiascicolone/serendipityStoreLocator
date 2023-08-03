import { initMap } from "./map.js"

let apiUrl = '/stores.json'

function getStores () {
    fetch(apiUrl)
    .then(res => res.json()) // restituisce un array 'stores' con all'interno degli oggetti (i singoli negozi)
    .then(data => {console.log(data.stores)})
    .then(initMap())
}


export {getStores}