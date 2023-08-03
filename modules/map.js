let map;
// funzione che viene chiamata come callback al caricamento dello script di Google Maps
function initMap(lat, lng, zoom) {
    // Creiamo un mappa, passando le coordinate per centrarla
    map = new google.maps.Map(document.querySelector("#map"), {
      center: {
        lat,
        lng
      },
      zoom, // anzichè zoom: zoom; 
    });
  
    // Creiamo una infowindow
  //   const infowindow = new google.maps.InfoWindow({
  //     content: infoWindowContent,
  //     ariaLabel: "La mia azienda",
  //   });
  
    // Creiamo 2 markers
  //   let marker2 = new google.maps.Marker({
  //     position: myCoords,
  //     map: map,
  //   });
  
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
  
  
export {initMap}  