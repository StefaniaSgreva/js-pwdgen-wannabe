/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
poi chiedi la sua età
Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)
*/
const userName = prompt('What is your name ?');
const userSurname = prompt('What is your surname ?');
const userFavColor = prompt('What is your favorite color ?');
const userAge = prompt('How old are you ?');
const welcome = `
<span class="new-password">${userName}${userSurname}${userFavColor}${userAge}</span>
`;

const element = document.getElementById('password');

element.innerHTML = welcome;