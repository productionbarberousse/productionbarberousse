/*Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant
 total de ses achats est plus grand que 200.00$. Écrire un algorithme qui permet de
calculer et d’afficher la réduction que chaque acheteur a droit, connaissant le montant total des achats.*/

var articleun ;
var articledeux ;
var articletrois ;
var total ;
var reduction ;
var totaldeux ;



var articleun = Number(prompt("Inscrivez le prix du premier article"));
var articledeux = Number(prompt("Inscrivez le prix du deuxièmes article"));
var articletrois = Number(prompt("Inscrivez le prix du troisième articles"));

var total = articleun + articledeux + articletrois ;


if (total >= 200)
{
    var reduction = total * 15 / 100 ;
    var totaldeux = articleun + articledeux + articletrois + reduction;
    alert("Prix de l'article 1 = " + articleun + " \n Prix de l'article 2 = " + articledeux +" \n Prix de l'article 3 = " + articletrois + " \n Le sous-total = " + total +
    " \n Montant de la réduction = " + reduction + " \n Facture total = "+ totaldeux);
}
else
{
    var reduction = 0 ;
    var totaldeux = articleun + articledeux + articletrois + reduction;
    alert("Prix de l'article 1 = " + articleun + " \n Prix de l'article 2 = " + articledeux +" \n Prix de l'article 3 = " + articletrois + " \n Le sous-total = " + total +
        " \n Montant de la réduction = 0 " + " \n Facture total = "+ totaldeux);

}

