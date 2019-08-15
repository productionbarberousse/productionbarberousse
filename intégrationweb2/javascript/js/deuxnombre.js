

var nombreun ;
var nombredeux ;

var nombreun = Number(prompt("Inscrivez un premier chiffre"));
var nombredeux = Number(prompt("Inscrivez un deuxième chiffre"));

if (nombreun > nombredeux)
{
    alert("Le plus grand nombre est " + nombreun);
}
else
{
    alert("Le plus grand nombre est " + nombredeux);
}