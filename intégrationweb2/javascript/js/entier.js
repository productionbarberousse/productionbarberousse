/*10. Lire un nombre entier au clavier et afficher le nom du mois correspondant. Si le nombre saisi ne
correspond pas à un mois, affichez le message suivant : « Mois invalide ».*/

var nombre;

var nombre = Number(prompt("Inscrire le numéro du mois "));

if (nombre === 1)
{
    alert("Nous sommes en Janvier");
}
else if (nombre === 2)
{
    alert("Nous sommes en Février ");
}
else if (nombre === 3)
{
    alert("Nous sommes en Mars ");
}
else if (nombre === 4)
{
    alert("Nous sommes en Avril ");
}
else if (nombre === 5)
{
    alert("Nous sommes en Mai ");
}
else if (nombre === 6)
{
    alert("Nous sommes en Juin");
}
else if (nombre === 7)
{
    alert("Nous sommes en Juillet");
}
else if (nombre === 8)
{
    alert("Nous sommes en Août");
}
else if (nombre === 9)
{
    alert("Nous sommes en Septembre");
}
else if (nombre === 10)
{
    alert("Nous sommes en Octobre");
}
else if (nombre === 11)
{
    alert("Nous sommes en Novembre");
}
else if (nombre === 12)
{
    alert("Nous sommes en Décembre");
}
else
{
    alert("Mois invalide")
}