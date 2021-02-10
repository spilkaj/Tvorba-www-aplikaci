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
        let kapitolaProcesor = document.getElementById("procesor")
        let kapitolaMotherBoard = document.getElementById("motherBoard")
        let kapitolaGpu = document.getElementById("gpu")
        let kapitolaRam = document.getElementById("ram")
        let kapitolaHdd = document.getElementById("hdd")
        let kapitolaSsd = document.getElementById("ssd")

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
        kapitolaProcesor.addEventListener("click",function(){
            this.goTo("244");
        }.bind(this))
        kapitolaMotherBoard.addEventListener("click",function(){
            this.goTo("126");
        }.bind(this))
        kapitolaGpu.addEventListener("click",function(){
            this.goTo("106");
        }.bind(this))
        kapitolaRam.addEventListener("click",function(){
            this.goTo("50");
        }.bind(this))
        kapitolaHdd.addEventListener("click",function(){
            this.goTo("566");
        }.bind(this))
        kapitolaSsd.addEventListener("click",function(){
            this.goTo("38");
        }.bind(this))
        
    }
    togglePlay(){
        let myVideo = document.getElementById("video1")
        if (myVideo.paused) 
                myVideo.play(); 
        else 
                myVideo.pause();
    }
    goTo(time){
        let myVideo = document.getElementById("video1")
        myVideo.currentTime = time;
    }
}    
class Model{

}
class View{
    changeWidth(width){
        let video = document.getElementById("video1");
        video.width = width;
    }
}
const app = new Controler(new Model(),new View());

