import { bindInfoWindow } from "./map.js";
let markers = []

function addMarkers(map, stores) {
    stores.forEach(store => { // per ogni negozio creo un marker:
        console.log(store)
        let marker = new google.maps.Marker({ // copiato il marker che era nella funzione initMap 
            animation: google.maps.Animation.DROP,
            position:  store.coords ,
            map, // utilizzo la shorthand anzichè scrivere map:map
          });
          bindInfoWindow (marker, createMarkerDetails(store))
    });
    // quando clicco sul marker comparirà la info window con tutte le informazioni sul negozio 
   
}

export {addMarkers}