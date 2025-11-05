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
    document.querySelector(`#welcomeTrip`).innerHTML +=
        `<div class="row">                   
            <div class="travels-container">
                <p class="road">Paris > Lyon </p>
                <p class="time">16:30</p>
                <p class="price">136€</p>
                <button class="book-button">Book</button>
            </div>
        </div>`
})