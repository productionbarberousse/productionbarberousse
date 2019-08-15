/*8. Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé. Affichez son
salaire. (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées.
Une semaine de travail normale est de 40 heures.*/

var tauxhoraire ;
var heuretravaille ;
var heureregulier ;
var tempssup ;
var tauxsupp ;
var salairebrut ;

var tauxhoraire = Number(prompt("Combien gagné vous de l'heure"));
var heuretravaille = Number(prompt("Combien d'heure avec vous travaillez"));
var tauxsupp = tauxhoraire*2 ;

if (heuretravaille > 40)
{
    var tempssup = heuretravaille - 40 ;
    var heureregulier = heuretravaille - tempssup ;
    var salairebrut = heureregulier * tauxhoraire + tempssup * tauxsupp;
    alert("Vous avez travaille " + heureregulier + " en temps régulier " + "\n Vous avez fait " + tempssup + " en temps supplémentaire" + "\n Pour un salaire total de " + salairebrut);
}
else
{
    var salairebrut = heuretravaille*tauxhoraire;
    alert("Vous avez gagné "+ salairebrut);
}