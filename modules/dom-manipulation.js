// esempio di funzione "utility": prende un selettore e restituisce l'elemento del DOM
function qs(selector) {
  return document.querySelector(selector);
}

function ce (element){
  return document.createElement(element)
}

export {qs, ce}
