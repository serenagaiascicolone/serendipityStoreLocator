import { bindInfoWindow } from "./map.js";
import { showStores } from "./storesUI.js";
let markers = []
let markerClusterer = ''
function addMarkers(map, stores) {
    stores.forEach(store => { // per ogni negozio creo un marker:
        // console.log(store)
        let marker = new google.maps.Marker({ // copiato il marker che era nella funzione initMap 
            animation: google.maps.Animation.DROP,
            position:  store.coords ,
            map, // utilizzo la shorthand anzichè scrivere map:map
          });
          bindInfoWindow (marker, createMarkerDetails(store))
          // inserisco i marker nell'array inizializzato nel global scope  in modo da poterlo prendere da qualsiasi parte (ad esempio in makerCluster)
          markers.push(marker);
    });
    // fuori dal ciclo creiamo un cluster: raggruppamento dei marker   
    markerClusterer = new MarkerClusterer(map, markers, {
        gridSize: 50,// quanti markers vado a raggruppare in un solo pallino
        imagePath: // stile del pallino
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });    
}

// quando clicco sul marker comparirà la info window con tutte le informazioni sul negozio 
function createMarkerDetails (store) {
    return  `
    <h3>${store.name}</h3>
    <address>${store.address}</address>
    <p> <i class="fa-regular fa-envelope" style="color: #f2a444;"></i> ${store.email}</p>
    <p><i class="fa-solid fa-phone" style="color: #f2a444;"></i> ${store.phone}</p>
    <a href="https://www.google.it/maps?saddr=My+Location&daddr=${store.coords.lat},${store.coords.lng}" target="_blank">Directions</a>`
}

// raggruppamento dei markers: in modo tale che se in una località ci sono più negozi i markers non vengano mostrati tutti attaccati ma raggruppati in uno e in questo viene mostrato il numero di negozi presenti in quell'area
// funzionalità di google maps: cluster 
export {addMarkers, createMarkerDetails}