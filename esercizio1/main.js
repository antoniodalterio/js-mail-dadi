'use strict';

/* 
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

1. creare una variabile array con le email accettate
2. chiedere all'utente tramite prompt di inserire la sua email
3. creare un ciclo che controlli il contenuto dell'array

   - SE l'email che ha scritto l'utente è presente nell'array

     - Stampa l'email

   - ALTRIMENTI SE l'email che ha scritto l'utente non è presente nell'array
     - tramite allert avverti l'utente che l'email è sbagliata

*/

let utenteMail = prompt('scrivi la tua mail');
const archivioMail = [
  'pippo@mail.com',
  'tizio@mail.com',
  'caio@mail.com',
  'antonio@mail.com',
  'franco@mail.com',
  'gino@mail.com',
];

for (let mail = 0; mail < archivioMail.length; mail++) {
  if (utenteMail === archivioMail[mail]) {
    alert(utenteMail);
    console.log(utenteMail);
    break;
  } else if (utenteMail !== archivioMail[mail]) {
  }
}
