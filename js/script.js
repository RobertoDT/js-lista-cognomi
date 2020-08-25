// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

//1. creo un array di cognomi
var cognomi = [
  "Bianchi",
  "Rossi",
  "Duzioni",
  "Balsano",
  "Verdi"
];

//2. chiedo all'utente di inserire il suo cognome poi lo inserisco nell'array
var cognomeUtente = prompt("Inserisci il tuo cognome");
cognomi.push(cognomeUtente);

//3. stampo la lista ordinata alfabeticamente
cognomi.sort();
console.log(cognomi);

//4. scrivere la posizione in cui il cognome dell'utente si trova
console.log("La posizione del tuo cognome è: " + (cognomi.indexOf(cognomeUtente) + 1));
