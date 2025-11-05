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



























































// const data = {
//     departure : dep,
//     arrival : arr,
//     date: date
// }

dep = "Marseille"
arr = "Lyon"

fetch(`http://localhost:3000/trips/search/${dep}/${arr}`, {

    method: 'POST',

    headers: { 'Content-Type': 'application/json' },

})
 .then(response => response.json())
 .then(data => {
   console.log(data);
 });

