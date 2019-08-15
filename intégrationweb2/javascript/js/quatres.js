/*4. Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si
le deuxième nombre est différent de zéro. Par contre si ce nombre est zéro inscrivez le
message suivant :‘Division par zéro interdite.’, si ce nombre n’est pas zéro vous devez
imprimer le résultat.*/

var nombre1 ;
var nombre2 ;
var resultat ;

var nombre1 = Number(prompt("premier chiffre"));
var nombre2= Number(prompt("deuxière chiffre"));
var resultat = nombre1/nombre2 ;

if (nombre2 === 0)
{
    alert("Division par zéro interdite");
}
else
{

    alert("la réponse = " + resultat) ;
}