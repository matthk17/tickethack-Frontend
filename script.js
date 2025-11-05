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
const arr = document.querySelector("#arr").value
const date = document.querySelector("#date").value

console.log(date)

fetch(`http://localhost:3000/trips/search/${dep}/${arr}/${date}`, {

    method: 'POST',

    headers: { 'Content-Type': 'application/json' },

})
 .then(response => response.json())
 .then(data => {
   console.log(data.filteredTrips.length);
   document.querySelector(`#welcomeTrip`).innerHTML +=
       `<div class="row">                   
           <div class="travels-container">
               <p class="road">${data.filteredTrips[0].departure} > ${data.filteredTrips[0].arrival} </p>
               <p class="time">${data.filteredTrips[0].date}</p>
               <p class="price">${data.filteredTrips[0].price}</p>
               <button class="book-button">Book</button>
           </div>
       </div>`
  })
 });







