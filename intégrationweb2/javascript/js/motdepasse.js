/*9. Faire un programme qui lit un nom d’utilisateur et un mot de passe. Si le nom d’utilisateur est “admin” et le
mot de passe “12345”, affichez le message suivant : « Bonjour [nom de l’utilisateur] ». Si les informations ne
sont pas correctes, affichez le message suivant : « Votre nom d’utilisateur ou votre mot de passe est invalide ».*/

var username ;
var password ;

var username = prompt("Inscrire votre nom d'utilisateur");
var password = prompt("Votre mot de passe ");

if ((username === "admin") && (password === "12345"))
{
    alert("Bonjour " + username);
}
else
{
    alert("Votre nom d'utilisateur ou votre mots de passe est invalide");
}