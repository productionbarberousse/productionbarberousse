/*3. Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot
« BONJOUR » et si tel n’est pas le cas écrire « BONSOIR ».*/


var nombre1 ;
var nombre2 ;

var nombre1 = Number(prompt("Incrivez un premier chiffre svp"));
var nombre2 = Number(prompt("Inscrivez un deuxième chiffre svp"));

if (nombre1 > 9 && nombre2 >9)
{
    alert("Bonjour");
}
else
{
    alert("bonsoir")
}