/*Écrire un algorithme qui calcule la note finale d’un étudiant. Cette note est dérivée des trois notes suivantes : note à l’examen de mi-session qui
compte pour 30% de la note finale, note de l’examen de fin session qui
compte pour 50% et la note de laboratoire qui compte pour 20%.
Lire les quatre éléments d’information suivants : le nom de l’étudiant, la
note de laboratoire, la note de l’examen de mi-session et la note de
l’examen de fin de session. Toutes les notes lues sont sur 100. Imprimer
le nom suivi des trois notes lues qui ont été ramenées sur le pourcentage
demandé ci-dessus, et de la note finale. Le tout sur des lignes différentes
accompagné de messages clairs.*/

var nom;
var labnote;
var misessionnote;
var finsessionnote;
var labnotepc;
var misessionnotepc;
var finsessionnotepc;
var notetotal;

var nom = prompt("Inscrivez votre nom");
var labnote = prompt("Inscrivez votre note de laboratoire");
var misessionnote = prompt("Inscrivez votre note de mi-session");
var finsessionnote = prompt("Inscrivez votre note de l'examen final");

var labnotepc = labnote*0.20
var misessionnotepc = misessionnote*0.30
var finsessionnotepc = finsessionnote*0.5
var notetotal = labnotepc + misessionnotepc + finsessionnotepc

alert(nom + "\nNote de laboratoire " + labnotepc +"%\n" + "Note de mi-session " + misessionnotepc + "%\n" + "Note de fin de session "+ finsessionnotepc + "%\n" + "Note final " + notetotal);