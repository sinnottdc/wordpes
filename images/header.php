<!----header--->
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width">
    <title>PES Draw</title>
    
    <script type="text/javascript"> var template_url = "<?php bloginfo('template_url'); ?>";// 
</script>
    <script src="<?php bloginfo('template_url');?>/js/jquery-1.11.1.js"></script>
    <link href="<?php bloginfo('stylesheet_url');?>" type="text/css" rel="stylesheet" />
    <link href="<?php bloginfo('stylesheet_url');?> rel="stylesheet" />
	<link href="<?php bloginfo('stylesheet_url');?> rel="stylesheet" />
	<link href="<?php bloginfo('stylesheet_url');?> rel="stylesheet" />
    <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	 
</head>

<body>
    <div id="container">
        <!----header--->
       <header>
        <div id="titleposition"><a href="index.php">
          <img src="<?php header_image();?>"  width="<?php echo get_custom_header() -> width;?>" height="<?php echo get_custom_header()->height;?>" alt="" class="pesLogo">
		<h1><div id="title" >DRAW</div></h1>
        </a></div>
    </header>

    <nav>
    	<?php wp_nav_menu('menu => Main Nav Menu');?>
    </nav>