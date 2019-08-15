/*Lire une lettre au clavier.
○ Si la lettre est 'w', écrire Avancer.
○ Si la lettre est 'a', écrire Gauche.
○ Ajouter 's' et 'd'.
○ Si c'est autre chose, écrire un message d'erreur.*/

var letter ;

var letter = prompt("Inscrire la touche");

if (letter === "w")
{
    alert("avancer");
}
else if (letter === "a")
{
    alert("gauche");
}

else if (letter === "d")
{
    alert("droite");
}
else if (letter === "s")
{
    alert("bas");
}
else
{
    alert("commande non reconnu");
}