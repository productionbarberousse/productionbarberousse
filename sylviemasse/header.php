<!-- Site web de Massothérapie familial - Sylvie Massé
    Programmé par Olivier Normandin
    Début projet : 12-09-2019
    Début de la page : 12-09-2019
    Dernière mise à jour : 14-10-2019 -->


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="UTF-8">
    <title>Massothérapie familiale - Sylvie Massé</title>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">

    <link rel="icon" type="image/png" href="<?php bloginfo('stylesheet_directory'); ?>/img/logo.png">
    <?php wp_head(); ?>
    <script>
        new WOW().init();
    </script>
</head>
<body>

<!--Header avec logo et menu-->
<nav class="navbar navbar-expand-lg">
    <a class="navbar-brand"><img class="imagelogo" type="image/png" src="<?php bloginfo('stylesheet_directory'); ?>/img/logo%20+%20signature%20coté.png" alt="Logo Sylvie Massé"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content"
            aria-controls="navbar-content" aria-expanded="false" aria-label="<?php esc_html_e( 'Toggle Navigation', 'theme-textdomain' ); ?>">
        <span <i class="fas fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar-content">
        <?php
        wp_nav_menu( array(
            'theme_location' => 'primary', // Defined when registering the menu
            'container' => false,
            'depth' => 2,
            'menu_class' => 'navbar-nav ml-auto',
            'walker' => new Bootstrap_NavWalker(), // This controls the display of the Bootstrap Navbar
            'fallback_cb' => 'Bootstrap_NavWalker::fallback', // For menu fallback
        ) );
        ?>
    </div>
</nav>
