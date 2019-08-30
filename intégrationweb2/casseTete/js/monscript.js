/* Script pour le déplacement des images*/

/********* DÉCLARATION DES VARIABLE COMMUNE A TOUS *********/

var clicun;
var clicdeux;
var imageunSRC;
var imagedeuxSRC;
var imageunID;
var imagedeuxID;
var compteur;

/* valeur des variable*/


clicun = true;


/*Le bouton nouvelle partie*/

$("#nouvellepartie").click(function () {
    $('#img1') .attr('src' , 'img/img5.jpg');
    $('#img2') .attr('src' , 'img/img8.jpg');
    $('#img3') .attr('src', 'img/img6.jpg');
    $('#img4') .attr('src' , 'img/img3.jpg');
    $('#img5') .attr('src' , 'img/img7.jpg');
    $('#img6') .attr('src' , 'img/img2.jpg');
    $('#img7') .attr('src' , 'img/img9.jpg');
    $('#img8') .attr('src' , 'img/img1.jpg');
    $('#img9') .attr('src' , 'img/img4.jpg');
    $('#img1').show();
    $('#img2').show();
    $('#img3').show();
    $('#img4').show();
    $('#img5').show();
    $('#img6').show();
    $('#img7').show();
    $('#img8').show();
    $('#img9').show();

})

/*Le bouton recommencer*/
$("#recommencer").click(function () {
    $('#img1') .attr('src' , 'img/img8.jpg');
    $('#img2') .attr('src' , 'img/img4.jpg');
    $('#img3') .attr('src', 'img/img1.jpg');
    $('#img4') .attr('src' , 'img/img6.jpg');
    $('#img5') .attr('src' , 'img/img9.jpg');
    $('#img6') .attr('src' , 'img/img3.jpg');
    $('#img7') .attr('src' , 'img/img5.jpg');
    $('#img8') .attr('src' , 'img/img2.jpg');
    $('#img9') .attr('src' , 'img/img7.jpg');
    $('#img1').show();
    $('#img2').show();
    $('#img3').show();
    $('#img4').show();
    $('#img5').show();
    $('#img6').show();
    $('#img7').show();
    $('#img8').show();
    $('#img9').show();

})

/*Le bouton trincher*/
$("#tricherie").click(function () {
    $('#img1') .attr('src' , 'img/img1.jpg');
    $('#img2') .attr('src' , 'img/img2.jpg');
    $('#img3') .attr('src', 'img/img3.jpg');
    $('#img4') .attr('src' , 'img/img4.jpg');
    $('#img5') .attr('src' , 'img/img5.jpg');
    $('#img6') .attr('src' , 'img/img6.jpg');
    $('#img7') .attr('src' , 'img/img7.jpg');
    $('#img8') .attr('src' , 'img/img8.jpg');
    $('#img9') .attr('src' , 'img/img9.jpg');
    $('#img1').show();
    $('#img2').show();
    $('#img3').show();
    $('#img4').show();
    $('#img5').show();
    $('#img6').show();
    $('#img7').show();
    $('#img8').show();
    $('#img9').show();

})


clicun = true ;

$(".img-fluid").click(function () {
        imageunSRC = this.src;
        imageunID = this.id;
    if (clicun) {
         $("#"+imageunID) .hide();
         $("#"+imageunID) .attr('src' , '');
        clicun=false;
    }

    else {
        imagedeuxID = this.id;
        imagedeuxSRC = this.src;
        $("#"+imageunID) .attr('src' , imagedeuxSRC);
        $("#"+imagedeuxID) .attr('src' , imageunSRC);
        $("#"+imageunID) .show();
        clicun=true;

    }


});









