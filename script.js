// Boutons:
// - Tickethack => Direction page d'acceuil
// - Cart => dirtection page cart
// - Booking => direction page booking
// Fonctions:
// - Page accueil => Recherche du trajet vers le backend
// - Page acceuil => Afficher l'absence de trip ds le backend
// - Page cart => Afficher le trip selectionne
// - Page cart => Suppression d'un trip
// - Page booking => Afficher le trip purchase de la page cart
// - Page booking => Enregistrer le trip booking dans la BDD



document.querySelector('#searchButton').addEventListener('click', function () {
    document.querySelector(`#logo`).remove()
    document.querySelector(`#formGeo`).remove()
    document.querySelector(`#txt-welcomeTrip`).remove()

const dep = document.querySelector("#dep").value
console.log(dep)
const arr = document.querySelector("#arr").value

fetch(`http://localhost:3000/trips/search/${dep}/${arr}`, {

    method: 'POST',

    headers: { 'Content-Type': 'application/json' },

})
 .then(response => response.json())
 .then(data => {
    for (i=0; i<data.filteredTrips.length; i++){
    const date = new Date (data.filteredTrips[i].date)
    document.querySelector(`#welcomeTrip`).innerHTML +=
       `<div class="row">                   
           <div class="travels-container">
               <p class="road">${data.filteredTrips[i].departure} > ${data.filteredTrips[i].arrival} </p>
               <p class="time">${date.getHours()} : ${date.getMinutes()}</p>
               <p class="price">${data.filteredTrips[i].price}€</p>
               <button class="book-button">Book</button>
           </div>
       </div>`
  }})})






