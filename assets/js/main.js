//lista della spesa tramite array
const shoppinglist = [
    'pane',
    'latte di riso',
    'ceci',
    'lenticchie',
    'riso',
]

const buyItem = prompt("Che cosa vuoi comprare?")

// faccio un ciclo while all'interno dell'array
//se l'item è disponibile lo stampo a schermo
let i = 0;
let takeItem = false;

while (i < shoppinglist.length) {
    
    const item = shoppinglist[i];

    if (item === buyItem) {
        takeItem = true
    }

    i++
}

const ulElement = document.querySelector("ul")
console.log(ulElement);
if (takeItem) {
    //stampi a schermo
    ulElement.innerHTML = buyItem;
}else{
    //stampi a schermo "mi dispiace non è disponibile"
    ulElement.innerHTML = "Mi dispiace il prodotto non è disponibile"
}