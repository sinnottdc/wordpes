<?php get_header(); ?>
   <body class="index">
        <main>
            <h1 class="welcomeHeader"><?php the_title()?></h1>
                 <div id="about_description" class="about">
                <?php if (have_posts()) :
                		while (have_posts()) :
                			the_post();
                			the_content();
                		endwhile;
                		endif; ?>
                </div><!-- content end -->
            <img src="<?php bloginfo('template_url'); ?>/images/italy.jpg" width="237" height="135" class="hideMobile"'/>
            <img src="<?php bloginfo('template_url'); ?>/images/pitchours.jpg" width="237" height="135" class="hideMobile"'/>
            <img src="<?php bloginfo('template_url'); ?>/images/pes2015.jpg" width="237" height="135" class="hideMobile"'/>
            <img src="<?php bloginfo('template_url'); ?>/images/stadium.jpg" width="237" height="135" class="hideMobile"'/>
            
        </main>

    </body>
<?php get_footer(); ?>