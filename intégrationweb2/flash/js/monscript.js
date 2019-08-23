var compteur;
compteur = 0;

$("#boutonGauche").click(function() {
    compteur = compteur - 50;
    $('#flashID').css("left" ,compteur);
});

$('#boutonDroite').click(function() {
    compteur = compteur - 50;

});

$( "#boutonChangerImage" ).click(function() {
    var image ;
    var compteur ;

    compteur = 0;

    image = $('#flashID').attr('src');

    if((image === "img/flash.jpg") && (compteur < 1)){
        $('#flashID') .attr( 'src' , 'img/flash2.jpg');
    }
    else {
        $('#flashID') .attr( 'src' , 'img/flash.jpg');
    }
    compteur = compteur

});

$( "#boutonEnleverImage" ).click(function() {
    $('#flashID').fadeOut();

});
$( "#boutonAjouterImage" ).click(function() {
    $('#flashID').fadeIn();

});

$( "#boutonAjouterAttribut" ).click(function() {
    $('#flashID').attr("alt" , "photo de flash");

});
$( "#boutonAjouterTitre" ).click(function() {
    $('#flashID').before("<h1>FLASH JQUERY</h1>");

});


