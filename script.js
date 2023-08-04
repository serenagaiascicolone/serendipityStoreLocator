import {qs, ce, qsa} from './modules/dom-manipulation.js'
import { initApp } from './modules/storesApi.js';
import { setFilter } from './modules/storesUI.js';
// import {createMarkerDetails} from './modules/markers.js'

// config.js:
initApp()
let storesContainer = qs('#stores-list');

// tutti i bottoni di categoria e li trasformo in array 
let buttons = Array.from (qsa('.category-buttons-container button'));
let categoryFiltersContainer = qs('.category-buttons-container');

// non mi piace qui dovrebbe stare in storesUI.js 
// per cambiare classe ai pulsanti cliccati
categoryFiltersContainer.addEventListener('click', (e) => {
    let pressedButton = e.target.closest('button')
    if (pressedButton) {
        pressedButton.classList.add('active');
        // devo capire quali button non sono stati cliccati per togliere la classe active 
        // filter restituirà un array con i pulsanti che non sono pressedButton, ovvero quelli che non sono stati cliccati
        let otherButtons = buttons.filter(button => button !== pressedButton);
        otherButtons.forEach(button => button.classList.remove('active')); // tornano allo stato originario

       setFilter(pressedButton.dataset.filter)
    }
})



export {storesContainer, categoryFiltersContainer, buttons}
