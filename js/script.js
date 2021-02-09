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