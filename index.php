<?php include 'includes/header.php';?>

        <div class="center_button"> 
            <button id="togglePlay">Přehrát/Zastavit</button><span class="velikost_videa">Velikost videa:</span> 
            <button id="makeBig">Velké</button>
            <button id="makeNormal">Normální</button>
            <button id="makeSmall">Malé</button>
            <br>
            <span class="vyber_kapitoly">Výběr konkrétní části videa:</span>
            <button id="procesor">Procesor</button> 
            <button id="motherBoard">Základní deska</button>
            <button id="gpu">Grafická karta</button>
            <button id="ram">Operační paměti</button>
            <button id="hdd">Pevné disky</button>
            <button id="ssd">SSD disk</button>
        </div>
            <br>
            <video class="center" controls id="video1" width="1080">
              <source src="video.mp4" type="video/mp4">
              <source src="video.mp4" type="video/ogg">
              Váš prohlížeč nepodporuje HTML video.
            </video>
            <div id="text_kapitola">Video obsahuje komentář a podkresovou hudbu, zapněte si prosím zvuk!
            </div>

            <?php include 'includes/footer.php';?>
        <script src="js/script.js"></script>

    <body>
</html>