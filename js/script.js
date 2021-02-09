var myVideo = document.getElementById("video1"); 
            
            function playPause() { 
              if (myVideo.paused) 
                myVideo.play(); 
              else 
                myVideo.pause(); 
            } 
            
            function makeBig() { 
                myVideo.width = 1200; 
            } 
            
            function makeSmall() { 
                myVideo.width = 720; 
            } 
            
            function makeNormal() { 
                myVideo.width = 1080; 
            } 
            
            function chapter1() { 
                myVideo.currentTime = 244;
            } 
            function chapter2() { 
                myVideo.currentTime = 126;
            } 
            function chapter3() { 
                myVideo.currentTime = 106;
            } 
            function chapter4() { 
                myVideo.currentTime = 50;
            } 
            function chapter5() { 
                myVideo.currentTime = 566;
            } 
            function chapter6() { 
                myVideo.currentTime = 38;
            } 

        function summonText0(){
                        document.getElementById("text_kapitola").innerHTML = "Kapitola: Procesor";
                    }
                    function summonText1(){
                        document.getElementById("text_kapitola").innerHTML = "Kapitola: Základní deska";
                    }
                    function summonText2(){
                        document.getElementById("text_kapitola").innerHTML = "Kapitola: Grafická karta";
                    }
                    function summonText3(){
                        document.getElementById("text_kapitola").innerHTML = "Kapitola: Operační paměti";
                    }
                    function summonText4(){
                        document.getElementById("text_kapitola").innerHTML = "Kapitola: Pevné disky";
                    }
                    function summonText5(){
                        document.getElementById("text_kapitola").innerHTML = "Kapitola: SSD disk";
                    }        