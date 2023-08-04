import {qs, ce, qsa} from './dom-manipulation.js'
import {categoryFiltersContainer, buttons} from '../script.js'





// CONTROLLER: FILTER 
let stores = []

function setStores (storesList) {
    stores = storesList;
    
}

function setFilter (value) {
    console.log(value)
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
    
    storeContainer.addEventListener('click', () => {
        console.log('zoom sulla mappa')
    })
})
}




export {showStores, setStores, setFilter }
