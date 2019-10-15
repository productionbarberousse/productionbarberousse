<?php
/* Template Name: atelier */
?>

<?php get_header(); ?>

<!-- Titre principal centré -->
<div class="container-fluid">
    <div class="row align-items-center text-center">
        <div class="col-xl-8 offset-xl-2">
            <h1 class="policeprincipal bleuofficiel policepage">ATELIER DE MASSOTHÉRAPIE</h1>
        </div>
    </div>
</div>
<br>

<!-- section 1 massage -->
<div class="container-fluid pt-5">
    <div class="row gris py-4">
        <div class="col-xl-4 offset-xl-2 pl-xl-4">
            <img class="img-fluid" src="<?php bloginfo('stylesheet_directory'); ?>/img/massagesuedois.jpg" alt="Massage de dos">
        </div>

        <div class="col-xl-4 align-items-center text-center pt-4 policeprincipal">
            <h1 class="vertofficiel h1upgrade">Massage suédois</h1>
            <br>
            <h2>Apprenez expérimentez les techniques de base du massage suédois</h2>
            <br>
            <h2>2 cours de 90 minutes</h2>
            <br>
            <h2>Coût: 45$ taxes inclus</h2>
            <br>
            <a href="" target="_blank"><a class="btn btn-success policeprincipal text-white">S'INSCRIRE</button></a></a>


        </div>
    </div>
</div>

<div class="container-fluid pt-5">
    <div class="row py-4">
        <div class="col-xl-4 offset-xl-2 align-items-center text-center pt-4 policeprincipal">
            <h1 class="bleuofficiel h1upgrade">Massage pour bébé de 0 à 3 ans</h1>
            <br>
            <h2>Apprenez et expérimentez les techniques du massage pour bébé</h2>
            <br>
            <h2>1 cours d'une journée</h2>
            <br>
            <h2>Coût: 60$ taxes inclus</h2>
            <br>
            <a class="pr-5" href="" target="_blank"><a class="btn btn-primary policeprincipal">S'INSCIRE</button></a></a>
        </div>
        <div class="col-xl-4">
            <img class="img-fluid" src="<?php bloginfo('stylesheet_directory'); ?>/img/massagebb.jpeg" alt="Massage de bébé">
        </div>
    </div>
</div>

<?php get_footer(); ?>