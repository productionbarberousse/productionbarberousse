<?php
/* Template Name: Ajout service */
?>

<?php get_header(); ?>

<!-- Titre principal centré -->
<div class="container-fluid">
    <div class="row align-items-center text-center">
        <div class="col-xl-8 offset-xl-2 col-10 offset-1">
            <?php if( have_posts() ) : ?>

                <?php while (have_posts()) : the_post(); ?>

                    <article>
                        <h1 class="policeprincipal bleuofficiel policepage"><?php the_title(); ?></h1>
                    </article>

                <?php endwhile; ?>

            <?php else: ?>
                <p>Aucun article disponible!</p>
            <?php endif; ?>
        </div>
    </div>
</div>
<br>

<!-- section 1 massage -->
<div class="container-fluid pt-5">
    <div class="row">
        <div class="col-xl-4 offset-xl-2 col-12">
            <?php if( have_posts() ) : ?>

                <?php while (have_posts()) : the_post(); ?>

                    <article>

                        <img class="img-fluid" src="<?php the_post_thumbnail(); ?>

                    </article>

                <?php endwhile; ?>

            <?php else: ?>
                <p>Aucun article disponible!</p>
            <?php endif; ?>
        </div>

        <div class="col-xl-4 align-items-center text-center pt-4 policeprincipal">
            <?php if( have_posts() ) : ?>

                <?php while (have_posts()) : the_post(); ?>

                    <article>
                        <h2 class="policeprincipal vertofficiel policepage"><?php the_content(); ?></h2>



                    </article>

                <?php endwhile; ?>

            <?php else: ?>
                <p>Aucun article disponible!</p>
            <?php endif; ?>

            <br>
            <a href="" target="_blank"><a class="btn btn-success policeprincipal text-white">PRENDRE RENDEZ VOUS</button></a></a>
            <a class="pr-5" href="" target="_blank"><a class="btn btn-primary policeprincipal">EN VENTE ICI</button></a></a>

        </div>
    </div>
</div>



<br>

<?php get_footer(); ?>