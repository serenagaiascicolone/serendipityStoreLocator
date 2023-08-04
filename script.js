import {qs, ce} from './modules/dom-manipulation.js'
import { initApp } from './modules/storesApi.js';
import { initMap } from './modules/map.js';
import { showStores } from './modules/storesUI.js';
import {createMarkerDetails} from './modules/markers.js'
initApp()
let storesContainer = qs('#stores-list');




export {storesContainer}
