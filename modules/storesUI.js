import {qs, ce, qsa} from './dom-manipulation.js'
import {categoryFiltersContainer, buttons} from '../script.js'
import { storesContainer } from '../script.js'
import {refreshMarkers, addMarkers} from './markers.js'
import { initMap, getMap, setMap } from './map.js'
import {myCoords} from './storesApi.js'

// CONTROLLER: LOGICA FILTER

//PIPELINE = PARTIAMO DALL'ARRAY STORES DOVE TROVIAMO TUTTI I NEGOZI E ARRIVIAMO AGLI STORES FILTRATI, IN MEZZO A QUESTO PERCORSO (LINE) CI SARANNO DELLE FUNZIONI INTERMEDIE CON UNA LOGICA ALL'INTERNO ED UN RETURN (NEGOZIO FILTRATO), OVVERO OGNI FUNZIONE AVRA UN ELENCO E RESTITUISCE UN ALTRO ELENCO. Ci sarà un array unico (stores) e ogni funzione si prende un pezzettino di questo array

let stores = [] 


// oggetto = stato dell'applicazione
let filterParams = { // due filtri: per categoria (button) e per ciò che digiterà l'utente nell'input
    category: 'all', // stato iniziale dell'applicazione
    searchTerm: '', // value dell'input, in base a ciò che digita l'utente nell'input cambierà il valore di category
}



// funzione che viene passata sia ai buttons di categoria sia all'input
function setStores (storesList) {
    stores = storesList;

    
}

function setFilter (filter, value) { // chiamata all'interno dell'addEventListener del contenitore dei buttons (script.js)
    console.log(filter, value)
    updateFilterParam(filter, value)
   let filteredStores = applyFilter (); // la variabile sarà uguale a ciò che ritorna in applyFilter, ovvero l'array con i vari negozi filtrati per categoria;
   updateshowStores(filteredStores, storesContainer) //updateStoresList (aggiorna il dom)
   let map = getMap() // funzione per importare la mappa dentro la funzione, altrimenti il browser non sa cosa sia 
   refreshMarkers (map, filteredStores) // chiamo la funzione e passo la mappa e i negozi filtrati (stores)
}

// funzione che aggiorna l'oggetto filterParam
function updateFilterParam (filter, value) {
    filterParams = {
        ...filterParams, // spread operator: copio i valori dell'oggetto filterParams e ne aggiorno solo uno (searchTerm)
        [filter]: value // la proprietà che si chiama come il filtro avrà un valore pari a quello che mi arriva (es: clicco il button smartphone, in setFilter arriverà tale scelta, che la passerà ad update che ricrea l'oggetto filterParams con category: smartphone)

    }
}

// applichiamo il filtro (parte dall'array stores per arrivare all'elenco di negozi filtrato)
function applyFilter () {
let filteredStores = stores; // inizialmente l'elenco filtrato contiene tutti i negozi (array stores)
// filtro per categoria
if(filterParams.category !== 'all') {
    // filtro: filtro l'array passando come parametro i singoli negozi e chiedendo se la proprietà categorie di ogni singolo negozio incluse la categoria che è stata cliccata dall'utente (filterParams)
    filteredStores = filteredStores.filter (
        store => store.categories.includes(filterParams.category)
    )
}
// filtro per input
if(filteredStores.searchTerm !== '') { // se il campo è vuoto non voglio applicare nessun filtro 
    filteredStores = filteredStores.filter (
        store => 
        store.name.toLowerCase().includes(filterParams.searchTerm) ||
        store.address.toLowerCase().includes(filterParams.searchTerm)

    )
}




// valore filtrato => filteredStores

return filteredStores

}

// VIEW: MODIFICHE DOM 
function showStores (stores, container) { //updateStoreList 
    stores.forEach(store => {
    let storeContainer = ce('article');
    // storeContainer.innerHTML = createContentFn;
    let nameContainer = ce('h3');
    let addressContainer = ce('address');
    let iconEmail = ce ('a');
    let emailContainer = ce('p');
    let iconPhone = ce ('a');
    let phoneContainer = ce('p');
    let directionaryButton = ce ('a');

    nameContainer.textContent = store.name;
    addressContainer.textContent = store.address;
    emailContainer.textContent = store.email;
    phoneContainer.textContent = store.phone;
    directionaryButton.textContent = 'Directionary'
    
    iconEmail.innerHTML = `<i class="fa-regular fa-envelope" style="color: #f2a444;"></i>`
    iconPhone.innerHTML = `<i class="fa-solid fa-phone" style="color: #f2a444;"></i>`
    
    emailContainer.prepend (iconEmail);
    phoneContainer.prepend (iconPhone);
    storeContainer.append(nameContainer, addressContainer,emailContainer, phoneContainer, directionaryButton)

    container.append (storeContainer);

    directionaryButton.classList.add('directionary-button')
    directionaryButton.setAttribute('href',`https://www.google.it/maps?saddr=My+Location&daddr=${store.coords.lat},${store.coords.lng}`)
    directionaryButton.target = '_blank'; 
    

    storeContainer.addEventListener('click', () => 
    setMap(store.coords.lat, store.coords.lng, 15)
   )
})
}

function updateshowStores (filteredStores, container){
container.innerHTML = ''; // svuoto il container quando clicco su una delle categorie 
showStores(filteredStores, container) // lo riempio con i soli articles dei negozi filtrati
}


export {showStores, setStores, setFilter}
