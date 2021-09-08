<!DOCTYPE html>

<html lang="fr">

    <head>

        <meta charset="utf-8">

        <title>NORDCINÉ</title>

        <script src="https://kit.fontawesome.com/6fc130a6aa.js" crossorigin="anonymous"></script>

        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="base.css">

        <link rel="stylesheet" href="header.css">
        
        <link rel="stylesheet" href="info.css">

        <link rel="stylesheet" href="nav.css">

        <link rel="stylesheet" href="search_box.css">

        <link rel="stylesheet" href="fleche.css">

        <link rel="stylesheet" href="button_map.css">

        <?php

        $bdd = new PDO("mysql:host=localhost;dbname=cinemas;charset=utf8", "root", ""); 

        $requete = $bdd->query("SELECT nom, lien FROM cinemas ORDER BY id DESC");

        if(isset($_GET['q']) AND !empty($_GET['q'])) {

            $q = htmlspecialchars($_GET['q']);

            $requete = $bdd->query("SELECT nom, lien FROM cinemas WHERE nom LIKE '%".$q."%' ORDER BY id DESC");

        }

        ?>

    </head>

    <body>

        <div class="header">

            <div class="header_texture"></div>

            <div class="header_mask">

                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">

                    <path d="M0 100 L 0 0 C 25 100 75 100 100 0 L 100 100" fill="#fff"></path>

                </svg>

            </div>

            <div class="container">

                <div class="all_nav">

                    <h1 class="logo_nav">NORDCINÉ</h1>

                    <nav>

                        <a href="accueil.html"><i class="fas fa-house-user"></i> Accueil</a>
                
                        <a href="bibliotheque.html"><i class="fas fa-book"></i> Bibliothèque</a>
                
                        <a href="cinemas.php"><i class="fas fa-ticket-alt"></i> Cinémas</a>
                
                        <!--<a href="Login.html"><i class="fas fa-sign-in-alt"></i> Connexion</a>-->
                
                        <div class="animation start-cinemas"></div>
                
                    </nav>

                    <div class="toggle_nav"></div>

                </div>

                <div class="header_slogan">

                    <h1 class="header_slogan_title">PARCE QUE DANS L'CH'NORD ON AIME LE CINEMA !</h1>

                </div>

                <form method="GET" class="cine_search_form">
                        
                    <input class="cine_search_box" type="search" name="q" placeholder="Ecrivez un cinéma..."/>

                        <button type="submit" class="cine_search_box_btn" value=""><i style="color: #ca2424" class="fas fa-search"></i></button>

                    </input>

                </form>

                <form class="cine_button_map">

                    <a href="carte.html" class="button_map"><i style="color: white" class="fas fa-map"></i> Voulez vous voir la carte ?</a>

                </form>

                <div class="info_container">

                    <?php if($requete->rowCount() > 0) { ?>

                    <ul>

                        <?php while($a = $requete->fetch()) { ?>

                            <li style="color: black; font-weight: 700; font-size: 20px; padding-top: 20px; "><a style="text-decoration: none; color: black; " href="<?= $a['lien'] ?>" target="_blank" ><?= $a['nom'] ?></a></li>

                        <?php } ?>

                    </ul>

                    <?php } else { ?>

                        <h3 class="info_subtitle">Aucun résultat pour : <?= $q ?> ... </h3>

                    <?php } ?>

                </div>

            </div>

        </div>

        <button class="fleche">
            
            <i class="fas fa-arrow-up"></i>

        </button>

        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

        <script src="app.js"></script>

        <script src="fleche.js"></script>
    </body>
 
</html>