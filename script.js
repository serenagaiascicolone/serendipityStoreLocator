import {qs, ce} from './modules/dom-manipulation.js'
import { getStores } from './modules/storesApi.js';
import { initMap } from './modules/map.js';




getStores()
let map;
let myCoords = {
  lat: 42.646184,
  lng: 12.932628
}

let infoWindowContent = `
  <div>
    <h2>La mia azienda</h2>
  </div>
`

