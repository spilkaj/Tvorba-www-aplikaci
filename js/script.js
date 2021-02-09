var myVideo = document.getElementById("video1"); 
            
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
class Controler{
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.addOnListenControls();
    }
    addOnListenControls(){
        let togglePlay = document.getElementById("togglePlay")
        let makeBig = document.getElementById("makeBig")
        let makeNormal = document.getElementById("makeNormal")
        let makeSmall = document.getElementById("makeSmall")

        togglePlay.addEventListener("click",function(){
            this.togglePlay();
        }.bind(this))
        makeBig.addEventListener("click",function(){
            this.view.changeWidth("1200");
        }.bind(this))
        makeNormal.addEventListener("click",function(){
            this.view.changeWidth("1080");
        }.bind(this))
        makeSmall.addEventListener("click",function(){
            this.view.changeWidth("720");
        }.bind(this))
    }
    togglePlay(){
        let myVideo = document.getElementById("video1")
        if (myVideo.paused) 
                myVideo.play(); 
        else 
                myVideo.pause();
    }
}    
class Model{

}
class View{
    changeWidth(width){
        let video = document.getElementById("video1");
        video.width = width
    }
}
const app = new Controler(new Model(),new View());

