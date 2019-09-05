/* Script pour le déplacement des images*/

/********* DÉCLARATION DES VARIABLE COMMUNE A TOUS *********/

var clicun;
var imageunSRC;
var imagedeuxSRC;
var imageunID;
var imagedeuxID;
var compteur;


/* valeur des variable*/

compteur = 0;
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
    $('#photocontainer').attr('src' , '');
    $('#victoire').html("")
    compteur = 0;


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
    $('#photocontainer').attr('src' , '');
    $('#victoire').html("")
    compteur = 0;


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
    $('#photocontainer').attr('src' , '');
    $('#victoire').html("")


})


clicun = true ;

        $(".img-fluid").click(function () {

            if (clicun) {
                imageunSRC = this.src;
                imageunID = this.id;
                 $("#"+imageunID) .hide();
                clicun=false;
            }

            else {
                imagedeuxID = this.id;
                imagedeuxSRC = this.src;
                $("#"+imageunID) .attr('src' ,imagedeuxSRC);
                $("#"+imagedeuxID) .attr('src' ,imageunSRC);
                $("#"+imageunID) .show();
                clicun=true;
                compteur = compteur + 1;
                $('#décomptre').html(compteur);
                victoire();

            }

        });

function victoire() {
        if($('#img1').attr('src') === ("http://localhost:63342/productionbarberousse/int%C3%A9grationweb2/casseTete/img/img1.jpg")){
            if($('#img2').attr('src') === ("http://localhost:63342/productionbarberousse/int%C3%A9grationweb2/casseTete/img/img2.jpg")){
                if($('#img3').attr('src') === ("http://localhost:63342/productionbarberousse/int%C3%A9grationweb2/casseTete/img/img3.jpg")){
                    if($('#img4').attr('src') === ("http://localhost:63342/productionbarberousse/int%C3%A9grationweb2/casseTete/img/img4.jpg")){
                        if($('#img5').attr('src') === ("http://localhost:63342/productionbarberousse/int%C3%A9grationweb2/casseTete/img/img5.jpg")) {
                            if($('#img6').attr('src') === ("http://localhost:63342/productionbarberousse/int%C3%A9grationweb2/casseTete/img/img6.jpg")){
                                if($('#img7').attr('src') === ("http://localhost:63342/productionbarberousse/int%C3%A9grationweb2/casseTete/img/img7.jpg")){
                                    if($('#img8').attr('src') === ("http://localhost:63342/productionbarberousse/int%C3%A9grationweb2/casseTete/img/img8.jpg")){
                                        if($('#img9').attr('src') === ("http://localhost:63342/productionbarberousse/int%C3%A9grationweb2/casseTete/img/img9.jpg")){
                                            $('#img1').hide();
                                            $('#img2').hide();
                                            $('#img3').hide();
                                            $('#img4').hide();
                                            $('#img5').hide();
                                            $('#img6').hide();
                                            $('#img7').hide();
                                            $('#img8').hide();
                                            $('#img9').hide();
                                            $('#photocontainer').attr('src' , 'img/victore.jpg');
                                            $('#victoire').html("VICTOIRE")



                                        }
                                    }
                                }
                             }
                        }
                    }
                }
            }
        }
}



/*

*/
