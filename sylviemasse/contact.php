<?php
/* Template Name: Contact */
?>

<?php get_header(); ?>

<div class="container-fluid photobg2 img-fluid">
    <div class="row align-items-center h-100">
        <div class="col-xl-10 offset-xl-1 pt-5 text-white">
            <h1 class="policeprincipal policepage text-center"> La massothérapie plus qu'un moment de détente</h1>
        </div>
        <div class="col-xl-6 offset-xl-2 py-3">

            <br>
            <h3 class="text-white policeprincipal">Description de la cliente et de sa passion pour la massothérapie et ce qui la motive à offrir ce service. Domi ampla progrediar velut comicus urbis dicitur cuncta
                periculi dicitur velut post dicitur tamquam silices post spatia civitatis post ne ne ampla quod familiarium praedatorios basternis periculi quidam publicos civitatis.
            </h3>
        </div>
        <div class="col-xl-2 py-3 d-none d-lg-block">
            <img class="img-fluid" src="<?php bloginfo('stylesheet_directory'); ?>/img/Sylvie%20Massé.jpg" alt="Photo de la propriétaire">
            
        </div>
    </div>
</div>

<div class="container-fluid pt-5 align-items-center">
    <div class="col-xl-6 offset-xl-3 align-items-center">
        <?php if( have_posts() ) : ?>

            <?php while (have_posts()) : the_post(); ?>

                <article>

                    <?php the_content(); ?>

                </article>

            <?php endwhile; ?>

        <?php else: ?>
            <p>Aucun article disponible!</p>
        <?php endif; ?>

    </div>
</div>

<?php get_footer(); ?>