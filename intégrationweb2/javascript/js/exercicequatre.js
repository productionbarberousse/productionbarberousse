/*Calculer le salaire brut d’un employé. Il est payé à l’heure et les données
concernant le taux horaire et le nombre d’heures travaillées sont fournies en
entrée.*/

var salairebrut;
var tauxhoraire;
var nombreheure;

var tauxhoraire = Number(prompt("Combien de l'heure gagnez-vous"));
var nombreheure = Number(prompt("Combien d'heure avez-vous travaillé"));

var salairebrut = tauxhoraire * nombreheure

alert("Votre salaire brut pour la semaine est de " + salairebrut);