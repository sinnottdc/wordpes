<!----header--->
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width">
    <title>PES Draw</title>
    
    <script type="text/javascript"> var template_url = "<?php bloginfo('template_url'); ?>";</script>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<?php wp_head();?> 
</head>

<body>
    <div id="container">
        <!----header--->
       <header>
        <div id="titleposition"><a href="<?php $home = home_url(); echo $home ?>">
          <img class="pesLogo" src="<?php bloginfo('template_url')?>/images/pes.jpg"  width="104" height="80" alt="PES logo">
		<h1><div id="title" >DRAW</div></h1>
        </a></div>
    </header>

    <nav>
    	<?php wp_nav_menu('menu => Main Nav Menu');?>
    </nav>