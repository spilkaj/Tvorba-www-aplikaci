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
        let video = document.getElementById("video1")

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
        video.addEventListener("timeupdate",function(){
            this.view.updateTitle();
        }.bind(this))
        
    }
    togglePlay(){
        let myVideo = document.getElementById("video1")
        if (myVideo.paused){ 
                myVideo.play(); 
        }else{ 
                myVideo.pause();
        }    
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
    updateTitle(){
        let video = document.getElementById("video1");
        let title = document.getElementById("text_kapitola");
        if(video.currentTime >= 244 && video.currentTime <= 310){
            title.innerHTML = "Kapitola: Procesor"
        }else if(video.currentTime >= 126 && video.currentTime <= 201){
            title.innerHTML = "Kapitola: Základní deska"
        }else if(video.currentTime >= 106 && video.currentTime <= 124){
            title.innerHTML = "Kapitola: Grafická karta"
        }else if(video.currentTime >= 50 && video.currentTime <= 67){
            title.innerHTML = "Kapitola: Operační paměti"
        }else if(video.currentTime >= 566 && video.currentTime <= 624){
            title.innerHTML = "Kapitola: Pevný disk"
        }else if(video.currentTime >= 38 && video.currentTime <= 49){
            title.innerHTML = "Kapitola: SSD"
        }else{
            title.innerHTML = ""
        }

    }
}
const app = new Controler(new Model(),new View());

