<?php include 'includes/header.php';?>

        <div class="center_button"> 
            <button onclick="playPause()">Přehrát/Zastavit</button><span class="velikost_videa">Velikost videa:</span> 
            <button onclick="makeBig()">Velké</button>
            <button onclick="makeNormal()">Normální</button>
            <button onclick="makeSmall()">Malé</button>
            <br>
            <span class="vyber_kapitoly">Výběr konkrétní části videa:</span>
            <button onclick="chapter1(); summonText1();">Procesor</button> 
            <button onclick="chapter2(); summonText2();">Základní deska</button>
            <button onclick="chapter3(); summonText3();">Grafická karta</button>
            <button onclick="chapter4(); summonText4();">Operační paměti</button>
            <button onclick="chapter5(); summonText5();">Pevné disky</button>
            <button onclick="chapter6(); summonText6();">SSD disk</button>
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