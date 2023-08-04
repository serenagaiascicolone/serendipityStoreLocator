// esempio di funzione "utility": prende un selettore e restituisce l'elemento del DOM
function qs(selector) {
  return document.querySelector(selector);
}

function ce (element){
  return document.createElement(element)
}

function qsa (selectors) {
  return document.querySelectorAll(selectors)
}

export {qs, ce, qsa}
