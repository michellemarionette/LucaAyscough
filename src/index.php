<!doctype html>

<html leng="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>Luca Ayscough</title>
        <link rel="icon" type="image/png" href="./assets/favicon.png">
        <meta name="description" content="Online Portfolio of Composer/Producer Luca Ayscough.">
        <meta name="author" content="Luca Ayscough">
        
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
        
        <?php include "./includes/css.php" ?>
    </head>

    <body>
        <?php include "./includes/menu_icon.php" ?>
        <?php include "./includes/header.php"; ?>

       
        <div class="container" id="container">
            <?php
                if($_GET["page"] == "work"){
                    include "./pages/work.php";
                }
                else if($_GET["page"] == "discography"){
                    include "./pages/discography.php";
                }
                else if($_GET["page"] == "gravity"){
                    include "./pages/gravity.php";
                }
                else{
                    include "./pages/home.php";
                }

                include "./includes/footer.php";
            ?>
        </div>
    </body>

    <?php include "./includes/javascript.php" ?>
</html>