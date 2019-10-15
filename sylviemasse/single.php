<?php get_header(); ?>

<div id="contenu" class="container">
    <section class="full-width">

        <?php if( have_posts() ) : ?>

            <?php while (have_posts()) : the_post(); ?>

                <article>
                    <h3><?php the_title(); ?></h3>
                    <?php the_category(); ?></a></p>
                    <?php the_post_thumbnail(); ?>
                    <?php the_content(); ?>

                </article>

            <?php endwhile; ?> //Fin du while

        <?php else: ?>
            <p>Aucun article disponible!</p>
        <?php endif; ?>


    </section>


</div>

<?php get_footer(); ?>
