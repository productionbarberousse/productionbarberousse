<?php
function add_theme_scripts() {
    wp_enqueue_style( 'default-style-css', get_stylesheet_directory_uri(). '/style.css');
    wp_enqueue_style( 'boostrapstyle', get_stylesheet_directory_uri(). '/css/bootstrap.css');
    wp_enqueue_style( 'animatestyle', get_stylesheet_directory_uri(). '/css/animate.css');
    wp_enqueue_style( 'monstyle', get_stylesheet_directory_uri(). '/css/styles.css');

    wp_enqueue_script ('wowscript',get_template_directory_uri() . '/js/wow.js');
    wp_enqueue_script ('jquery',get_template_directory_uri() . '/js/jquery-3.3.1.js');
    wp_enqueue_script ('boostrapscript',get_template_directory_uri() . '/js/bootstrap.js');
}

add_action( 'wp_enqueue_scripts', 'add_theme_scripts');

register_nav_menu( 'primary', __( 'Primary Menu', 'Description du menu' ) );

require get_template_directory() . '/bootstrap-navwalker.php';

add_theme_support('post-thumbnails');

