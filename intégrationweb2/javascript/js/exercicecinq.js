/*Lire le nom et l’âge d’un individu, puis convertir son âge en jours
(approximatif). Imprimer un message incluant son nom pour l’informer du
nombre de jours vécus.*/

var nom;
var ageannee;
var agejour;

var nom = prompt("Inscrivez votre prénom et nom");
var ageannee = Number (prompt("Votre âge"));

var agejour = ageannee * 365

alert(nom + " votre âge en jour est de "+agejour);