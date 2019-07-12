/*Faites un programme qui lit le nom d’un article et son prix de
détail.Votre programme doit afficher le prix de gros (66% du prix
de détail) ainsi que le profit attendu.*/

var produit;
var prix;
var prixgros;

var produit = prompt("Inscrire le nom du produit");
var prix = prompt("Inscrire le prix affiché sans le signe de dollars");

var prixgros = (prix * 66)/100

alert("Le prix de détails pour "+produit + " est de " + prixgros + "$")

