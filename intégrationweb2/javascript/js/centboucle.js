/*● Affichez 100 fois dans la console « Je maîtrise les boucles! »*/

/*
var compteur = 0

while (compteur <= 100)
{
    console.log(compteur);
    compteur = compteur +1
}
console.log("je maitrise les boucles");
*/
/*
var compteur = 1000
while (compteur >= 55)
{
    console.log(compteur)
    compteur = compteur-1
}
console.log("youppi")
*/
/*
var compteur = 0

while (compteur <= 10000)
{
    alert(compteur);
    compteur = compteur + 2 ;

}
*/
/*
var compteur = 0 ;
var décompte = 20 ;

while (compteur <= 10)
{
    while (décompte >=2)
    {
        console.log(décompte);
        décompte = décompte -1 ;
    }
    décompte = 20
    compteur = compteur +1 ;

}
*/

/*
var chiffre ;
var nombredezero = 0 ;
var nombreun = 0 ;
var compteur = 0 ;

while (compteur < 10)
{
    chiffre =(Math.floor((Math.random()*2)));
    console.log(chiffre)
    compteur = compteur + 1 ;
        if (chiffre < 1)
        {
          var nombredezero = nombredezero + 1 ;
        }
         else if (chiffre > 0)
        {
          nombreun = nombreun + 1 ;
        }
}

    console.log("le nombre de zéro est " + nombredezero +"\nle nombre de un est " + nombreun);

*/
/*
var chiffrepositif = 0
var chiffrenegatif  = 0
var compteur = 0
var chiffre ;

while (compteur < 5)
{
    var chiffre = Number(prompt("Inscrivez un chiffre"))
    compteur = compteur + 1
        if (chiffre > 0)
        {
            var chiffrepositif = chiffrepositif + 1 ;
        }
        else if (chiffre <= 0)
        {
            var chiffrenegatif = chiffrenegatif + 1 ;
        }

}
alert("Vous avez entrée " + chiffrepositif + " de chiffre positif" + "\n et" + "Vous avez entrée " + chiffrenegatif + " de chiffre négatif");
*/
/*
var chiffrepositif = 0
var chiffrenegatif = 0
var compteur = 0
var chiffre ;

while (compteur < 5)
{
    var chiffre = Number(prompt("Inscrivez un chiffre"))
    compteur = compteur + 1
    if (chiffre <=0)
    {
        chiffrenegatif = chiffrenegatif + chiffre ;
    }
    else if (chiffre > 0)
    {
        chiffrepositif = chiffrepositif + chiffre ;
    }

}
if (chiffrepositif === 0)
{
    alert("Vous avez entrée aucun chiffre possitif" + "\n et" + "La somme est " + chiffrenegatif + " pour les chiffre négatif");
}
else if (chiffrenegatif === 0)
{
    alert("La somme est " + chiffrepositif + "  pour les chiffre positif" + "\n et" + "Vous avez entrée aucun chiffre négatif");
}
else
    {
    alert("La somme est " + chiffrepositif + " pour les chiffre positif" + "\n et \n" + "La somme est " + chiffrenegatif + " pour les chiffre négatif");
}

*/

var userchoice ;
var aichoice ;
var scoreuser = 0 ;
var scoreai  = 0 ;

var compteurs = 0

while (compteurs < 10)
{
    userchoice = Number(prompt("0 ou 1"));
    aichoice = (Math.floor((Math.random()*2)));


    if (userchoice === aichoice)
    {
        scoreuser = scoreuser + 1 ;
    }
    else
    {
        scoreai = scoreai + 1 ;
    }
    compteurs = compteurs + 1 ;

}

alert("Le score est de\n" + scoreuser + " pour le joueur 1 \n" + "et \n" + scoreai + " pour l'ordinateur");









