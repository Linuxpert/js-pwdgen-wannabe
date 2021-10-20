//Chiedi all'utente il suo nome
let nome = prompt("Scrivi il tuo nome");
//Chiedi all'utente il suo cognome
let cognome = prompt("Scrivi il tuo cognome");
//Chiedi all'utente il suo colore preferito
let colore = prompt("Scrivi il tuo colore preferito");
//compila la sua password
const numero = 21;
console.log(nome, cognome, colore);
document.getElementById("password").innerHTML = `${"La password assegnata è: " + nome + cognome + colore + numero}`