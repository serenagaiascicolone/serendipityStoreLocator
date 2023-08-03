let map, infoWindow; 



// funzione che viene chiamata dopo la fetch, dopo aver ricevuto tutta la lista di negozi
// 
function initMap(lat, lng, zoom) {
    // Creiamo un mappa, passando le coordinate per centrarla
    map = new google.maps.Map(document.querySelector("#map"), {
      center: {
        lat,
        lng
      },
      zoom, // anzichè zoom: zoom; 
    });
    // crea una infowindow vuota 
     infoWindow = new google.maps.InfoWindow();
    return map;  
}



// funzione che collega la info window al maker  
// Su un marker, aggiungiamo il listener per collegare il marker alla infowindow
// sintassi di google: quando clicco sulla mappa attivo il marker e creo l'evento click che andrà ad aprire la infowindow e creerò il contenuto
function bindInfoWindow (marker, content) {
    google.maps.event.addListener(marker, "click", () => {
        infoWindow.setContent(content)
        infoWindow.open(map, marker);
      });

}


export {initMap, bindInfoWindow}  