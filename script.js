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
const welcomCard = document.querySelector(`#welcome`)



document.querySelector('#searchTrip').addEventListener('submit', function (event) {
    console.log(event)
    event.preventDefault();
    welcomCard.style.display = 'none';

    const dep = document.querySelector("#dep").value
    const arr = document.querySelector("#arr").value
    const date = document.querySelector("#date").value

    fetch(`http://localhost:3000/trips/search/${dep}/${arr}/${date}`, {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

    })
        .then(response => response.json())
        .then(data => {
            if (data.filteredTrips.length > 0) {
                document.querySelector(`#foundTrip`).innerHTML = ""
                for (i = 0; i < data.filteredTrips.length; i++) {
                    const date = new Date(data.filteredTrips[i].date)
                    document.querySelector(`#foundTrip`).innerHTML +=
                        `<div class="row">                   
                            <div class="travels-container">
                                <p class="road">${data.filteredTrips[i].departure} > ${data.filteredTrips[i].arrival} </p>
                                <p class="time">${date.getHours()}:${date.getMinutes()}</p>
                                <p class="price">${data.filteredTrips[i].price}€</p>
                                <button class="book-button">Book</button>
                            </div>
                        </div>`
                }
            } else {
                document.querySelector(`#foundTrip`).innerHTML =
                    `<img id="logo" src="images/notfound.png" />
                    <div id="formGeo"></div>
                    <p class="text" id="txt-welcomeTrip">Trip not found</p>`;
            }
        })
})






