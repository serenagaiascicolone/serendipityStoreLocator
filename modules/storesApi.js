import {ce, qs} from './dom-manipulation.js'
import { initMap } from "./map.js"

let apiUrl = '/stores.json'

let myCoords = {
    lat: 42.646184,
    lng: 12.932628,
    zoom: 6
}

async function initApp () {
    try {
        let stores = await fetch(apiUrl)
        .then(res => res.json()) // restituisce un array 'stores' con all'interno degli oggetti (i singoli negozi)
        .then(data => {console.log(data.stores)})
    initMap(myCoords.lat, myCoords.lng, myCoords.zoom)

    } catch(err) {
        console.log(err);
        qs('#map').innerHTML = `
            <h1> Sorry, something went wrong </h1>
        `
    }
}


export {initApp}