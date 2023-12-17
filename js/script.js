// Elemtni di interesse
const element = document.getElementById('password');
let endpass = 21;


// Elementi che dipendono dall'utente

const firstName = prompt('Il tuo nome?');
console.log(firstName);
const Surname = prompt('Il tuo cognome?');
console.log(Surname);
const Color = prompt('Il tuo colore preferito?');
console.log(Color);

// Costruisco la password

endpass = firstName + Surname + Color + endpass
console.log(endpass)

element.innerText = endpass