$('#flashID').css("position" , "relative");
var compteur;
compteur = 0;

$("#boutonGauche").click(function() {
    compteur = compteur - 50;
    $('#flashID').css("left" ,compteur);
});

$("#boutonDroite").click(function() {
    compteur = compteur + 50;
    $('#flashID').css("left" ,compteur);

});
var image;
var compteur2;
compteur2 = 0;

image = $('#flashID').attr('src');

$( "#boutonChangerImage" ).click(function() {

    if((image === "img/flash.jpg") && (compteur2 < 1)){
        $('#flashID') .attr( 'src' , 'img/flash2.jpg');

    }
    else {
        $('#flashID') .attr( 'src' , 'img/flash.jpg');

    }
    compteur2 = compteur2 + 1;

});

$( "#boutonEnleverImage" ).click(function() {
    $('img').fadeOut();

});
$( "#boutonAjouterImage" ).click(function() {
    $('img').fadeIn();

});

$( "#boutonAjouterAttribut" ).click(function() {
    $('#flashID').attr("alt" , "photo de flash");

});
var compteur3;
compteur3 = 0;
$( "#boutonAjouterTitre" ).click(function() {

    if (compteur3 < 1)
        $('#flashID').before("<h1>FLASH JQUERY</h1>");
        compteur3 = compteur3 +1 ;

});
$( "#boutonDupliquer" ).click(function() {
    $('#flashID').after("<img id=\"flashID\" class=\"flashClass\" src=\"img/flash.jpg\" width=\"200px\"/>");

});

$( "#boutonRalentir" ).click(function() {
    $('#flashID').remove();

});


$( "#boutonTeleport" ).click(function () {
    if ($('#flashID').attr('src') === "img/flash.jpg"){
        $('#flashID').removeAttr('src');
        $('#teleport').attr('src' , 'img/flash.jpg');
    }
    else {
        $('#flashID') .attr( 'src' , 'img/flash.jpg');
        $('#teleport') .removeAttr('src');
    }

});





$("#boutonVitesseSupreme").click(function() {
    var supremevitesse = setInterval(disparaitreFlash, 500);

});

function disparaitreFlash() {
    $('#flashID').toggle();
   
}
$("#boutonStoptoute").click(function(){
    $("flashID").clearInterval(supremevitesse);

});






$("#boutonNuke").click(function () {
    $('body').html("<img class=\"flashClass\" src=\"img/bombe.jpg\"/>")

});




