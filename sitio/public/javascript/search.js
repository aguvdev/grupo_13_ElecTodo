const searchy = document.getElementById('searchy');
const searchinput = document.getElementById('searchinput');
const nombre = /^[a-zA-ZÀ-ÿ0-9\s]{1,16}$/;

searchy.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nombre.test(searchinput.value)) {
    /* console.log("funciona") */
    searchy.submit()
  } /* else {
    console.log("no funca pa")
  } */

});
