// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let kmPassenger = parseInt(prompt("Quanti km vuoi percorrere?"));
let agePassenger = parseInt(prompt("Quanti anni hai?"));
let priceRate = 0.21;
let ticketPrice = kmPassenger * priceRate;
let underAgeDiscount = 0.2;
let seniorDiscount = 0.4;

let outputPrice;

if(agePassenger < 18) {
  outputPrice = ticketPrice - (ticketPrice * underAgeDiscount);
}else if (agePassenger > 65) {
  outputPrice = ticketPrice - (ticketPrice * seniorDiscount);
}else {
  outputPrice = ticketPrice;
}

document.getElementById("output").innerHTML = `Il prezzo del tuo biglietto è ${outputPrice.toFixed(2)}&euro;`;