import {qs, ce} from './modules/dom-manipulation.js'

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

// funzione che viene chiamata come callback al caricamento dello script di Google Maps
function initMap() {
  // Creiamo un mappa, passando le coordinate per centrarla
  map = new google.maps.Map(document.querySelector("#map"), {
    center: myCoords,
    zoom: 6,
  });

  // Creiamo una infowindow
  const infowindow = new google.maps.InfoWindow({
    content: infoWindowContent,
    ariaLabel: "La mia azienda",
  });

  // Creiamo 2 markers
  let marker2 = new google.maps.Marker({
    position: myCoords,
    map: map,
  });

  let marker = new google.maps.Marker({
    position:  { lat: 43.646184, lng: 10.932628 },
    map: map,
  });

  // Su un marker, aggiungiamo il listener per collegare il marker alla infowindow
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;

