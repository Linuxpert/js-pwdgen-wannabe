//Chiedi all'utente il suo nome
let nome = prompt("Scrivi il tuo nome");
console.log(nome);
//Chiedi all'utente il suo cognome
let cognome = prompt("Scrivi il tuo cognome");
console.log(cognome);
//Chiedi all'utente il suo colore preferito
let colore = prompt("Scrivi il tuo colore preferito");
console.log(colore);
//compila la sua password
const numero = 21;

document.getElementById("password").innerHTML = `${"La password assegnata è: " + nome + cognome + colore + numero}`