/*5. Lire un degré de température. Si la température est comprise entre -40 et -10 écrire
« HAAAAAAAAA! Il fait froid». Sinon, écrire « Enfin une belle journée! ».*/

var température ;

var temperature = Number(prompt("Quel température fait-il"));

if ((temperature >= -40) && (temperature <= -10))
{
    alert("Il fait froid");
}
else
{
    alert("enfin une belle journée");
}