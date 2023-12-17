// Elemtni di interesse
const element = document.getElementById('password');
console.log(password);
let endpass = 21;



// Elementi che dipendono dall'utente

const firstName = prompt('Il tuo nome?');
console.log(firstName);
const Surname = prompt('Il tuo cognome?');
console.log(Surname);
const Color = prompt('Il tuo colore preferito?');
console.log(Color);

// Costruisco la password

const pass = firstName + Surname + Color + endpass;
console.log(endpass);

element.innerHTML = '<strong>' + pass + '</strong>';