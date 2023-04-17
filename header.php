<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        
        <title><?= is_singular() ? get_the_title($post) . " - " . get_bloginfo( 'name' ) : get_bloginfo( 'name' ) . " - " . strip_tags(get_bloginfo( 'description' )); ?></title>
        <?php openGraph(); ?>

        <link rel="icon" href="<?= get_template_directory_uri() . "/images/favicon.ico"; ?>" sizes="any"><!-- 32×32 -->
        <link rel="icon" href="<?= get_template_directory_uri() . "/images/logo-ko-circle-purple-min.svg"; ?>" type="image/svg+xml">
        <link rel="apple-touch-icon" href="<?= get_template_directory_uri() . "/images/favicon-apple-touch-icon.png" ?>"><!-- 180×180 -->
        <!--<link rel="manifest" href="/images/manifest.webmanifest";"-->

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@1,600&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">

        <?php wp_head(); ?>
    </head>
    
    <body>
        <header>
            <nav>
                <?php $title_tag = is_front_page() ? 'h1' : 'div'; ?>

                <<?php echo $title_tag; ?> class="logo">
                    <a href="<?php echo esc_url( home_url( '/' ) ) ?>" title="Komuhn">
                        Komuhn
                        <img src="<?= url('/images/logo-ko-circle-purple-min.svg'); ?>" alt="Komuhn">
                    </a>
                </<?php echo $title_tag; ?>>
            </nav>
        </header>

        <main>
