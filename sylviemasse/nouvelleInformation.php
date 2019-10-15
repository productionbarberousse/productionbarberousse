<?php
/* Template Name: ajout d'Information supplémentaire */
?>

<?php get_header(); ?>

<div class="container-fluid img-fluid">
    <div class="row align-items-center h-100">
        <div class="col-xl-10 offset-xl-1 pt-5 bleuofficiel">
            <h1 class="policeprincipal policepage text-center"> <?php if( have_posts() ) : ?>

                    <?php while (have_posts()) : the_post(); ?>

                        <article>

                            <?php the_title(); ?>

                        </article>

                    <?php endwhile; ?>

                <?php else: ?>
                    <p>Aucun article disponible!</p>
                <?php endif; ?></h1>
        </div>

        <div class="col-xl-5 offset-xl-2 py-3">

            <br>
            <h3 class="policeprincipal vertofficiel"> <?php if( have_posts() ) : ?>

                    <?php while (have_posts()) : the_post(); ?>

                        <article>

                            <?php the_content(); ?>

                        </article>

                    <?php endwhile; ?>

                <?php else: ?>
                    <p>Aucun article disponible!</p>
                <?php endif; ?>
            </h3>
        </div>

        <div class="col-xl-3 py-3 d-none d-lg-block">
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
    </div>
</div>


<?php get_footer(); ?>