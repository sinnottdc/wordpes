<?php

if (function_exists('register_nav_menus')){
	register_nav_menus(
			array (
					'main_nav' => 'Main Navigation Menu'
			)
	);
}

//enable post thumbnails

$args = array (
		'height' => 80,
		'width' => 104,
		'default_image' => get_template_directory_uri() . '/images/pes.jpg',
);

add_theme_support('custom-header', $args);



//add scipts and styles
function dcs_scripts_style(){
	
wp_deregister_script('jquery');

wp_register_script('jqueryown', get_template_directory_uri() . '/js/jquery-1.11.1.js', '', '', false);
wp_enqueue_script('jqueryown');

wp_register_script('scroll-top', get_template_directory_uri() . '/js/scrollTopButton.js','', '', true);
wp_enqueue_script('scroll-top');

wp_register_script('scroll', get_template_directory_uri() . '/js/scroll.js','', '', true);
wp_enqueue_script('scroll');

if (is_page_template('euro.php'))  {
	wp_register_script('euro', get_template_directory_uri() . '/js/euro.js','', '', true);
	wp_enqueue_script('euro');
}

if (is_page_template('world.php')) {
	wp_register_script('world', get_template_directory_uri() . '/js/world.js','', '', true);
	wp_enqueue_script('world');
	
}
	
//wp_deregister_script('jquery');


wp_register_style('style', get_template_directory_uri(). '/style.css');
wp_register_style('font', 'http://fonts.googleapis.com/css?family=Oswald');

wp_enqueue_style('style');
wp_enqueue_style('font');

}
add_action('wp_enqueue_scripts', 'dcs_scripts_style');

?>