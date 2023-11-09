'use strict';

const computerNumero = Math.round(Math.random() * 5) + 1;
const utenteNumero = Math.round(Math.random() * 5) + 1;
alert('ti è uscito' + ' ' + utenteNumero);
alert('al computer è uscito' + ' ' + computerNumero);

if (utenteNumero > computerNumero) {
  alert('hai vinto');
} else if (utenteNumero < computerNumero) {
  alert('hai perso, il computer ha vinto');
} else if (utenteNumero === computerNumero) {
  alert('pareggio');
}
