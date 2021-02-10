class Controler {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.addOnListenControls();
  }
  addOnListenControls() {
    let togglePlay = document.getElementById("togglePlay");
    let makeBig = document.getElementById("makeBig");
    let makeNormal = document.getElementById("makeNormal");
    let makeSmall = document.getElementById("makeSmall");
    let kapitolaProcesor = document.getElementById("procesor");
    let kapitolaMotherBoard = document.getElementById("motherBoard");
    let kapitolaGpu = document.getElementById("gpu");
    let kapitolaRam = document.getElementById("ram");
    let kapitolaHdd = document.getElementById("hdd");
    let kapitolaSsd = document.getElementById("ssd");
    let video = document.getElementById("video1");

    togglePlay.addEventListener(
      "click",
      function () {
        this.togglePlay();
      }.bind(this)
    );
    makeBig.addEventListener(
      "click",
      function () {
        this.view.changeWidth("1200");
      }.bind(this)
    );
    makeNormal.addEventListener(
      "click",
      function () {
        this.view.changeWidth("1080");
      }.bind(this)
    );
    makeSmall.addEventListener(
      "click",
      function () {
        this.view.changeWidth("720");
      }.bind(this)
    );
    kapitolaProcesor.addEventListener(
      "click",
      function () {
        this.goTo("244");
      }.bind(this)
    );
    kapitolaMotherBoard.addEventListener(
      "click",
      function () {
        this.goTo("126");
      }.bind(this)
    );
    kapitolaGpu.addEventListener(
      "click",
      function () {
        this.goTo("106");
      }.bind(this)
    );
    kapitolaRam.addEventListener(
      "click",
      function () {
        this.goTo("50");
      }.bind(this)
    );
    kapitolaHdd.addEventListener(
      "click",
      function () {
        this.goTo("566");
      }.bind(this)
    );
    kapitolaSsd.addEventListener(
      "click",
      function () {
        this.goTo("38");
      }.bind(this)
    );
    video.addEventListener(
      "timeupdate",
      function () {
        this.view.updateTitle();
      }.bind(this)
    );
  }
  togglePlay() {
    let myVideo = document.getElementById("video1");
    if (myVideo.paused) {
      myVideo.play();
    } else {
      myVideo.pause();
    }
  }
  goTo(time) {
    let myVideo = document.getElementById("video1");
    myVideo.currentTime = time;
  }
}
class Model {}
class View {
  changeWidth(width) {
    let video = document.getElementById("video1");
    video.width = width;
  }
  updateTitle() {
    let video = document.getElementById("video1");
    let title = document.getElementById("text_kapitola");
    if (video.currentTime >= 244 && video.currentTime <= 310) {
      title.innerHTML = "Kapitola: Procesor";
    } else if (video.currentTime >= 126 && video.currentTime <= 201) {
      title.innerHTML = "Kapitola: Základní deska";
    } else if (video.currentTime >= 106 && video.currentTime <= 124) {
      title.innerHTML = "Kapitola: Grafická karta";
    } else if (video.currentTime >= 50 && video.currentTime <= 67) {
      title.innerHTML = "Kapitola: Operační paměti";
    } else if (video.currentTime >= 566 && video.currentTime <= 624) {
      title.innerHTML = "Kapitola: Pevný disk";
    } else if (video.currentTime >= 38 && video.currentTime <= 49) {
      title.innerHTML = "Kapitola: SSD";
    } else {
      title.innerHTML = "";
    }
  }
}
const app = new Controler(new Model(), new View());

showtask();
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function () {
  addtaskinputval = addtaskinput.value;
  let video = document.getElementById("video1");
  if (addtaskinputval.trim() != 0) {
    let webtask = localStorage.getItem("localtask");
    if (webtask === null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(webtask);
    }
    taskObj.push({
      task_name: addtaskinputval,
      completeStatus: false,
      videoTime: Math.round(video.currentTime),
    });
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value = "";
  }
  showtask();
});

function showtask() {
  let webtask = localStorage.getItem("localtask");
  if (webtask === null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webtask);
  }
  let html = "";
  let addedtasklist = document.getElementById("addedtasklist");
  taskObj.forEach((item, index) => {
    if (item.completeStatus == true) {
      taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
    } else {
      taskCompleteValue = `<td class="displayNote">${item.task_name}</td>`;
    }
    var minutes = Math.floor(item.videoTime / 60);
    var seconds = item.videoTime % 60;
    var formatted =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
    html += `<tr class="noteRow">
                    <th scope="row">${index + 1}</th>
                    ${taskCompleteValue}
                    <td>${formatted}</td>
                    <td><button type="button" class="notesBtn btnEdit " onclick="edittask(${index})" class="text-primary">
                    Upravit
                    </button></td>
                    <td><button type="button" class="notesBtn btnDeleteAll " onclick="deleteitem(${index})" class="text-danger">
                    Smazat
                    </button></td>
                    
                </tr>`;
  });
  addedtasklist.innerHTML = html;
}

function edittask(index) {
  let saveindex = document.getElementById("saveindex");
  let addtaskbtn = document.getElementById("addtaskbtn");
  let savetaskbtn = document.getElementById("savetaskbtn");
  saveindex.value = index;
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);

  addtaskinput.value = taskObj[index]["task_name"];
  addtaskbtn.style.display = "none";
  savetaskbtn.style.display = "block";
}

let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function () {
  let addtaskbtn = document.getElementById("addtaskbtn");
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  let saveindex = document.getElementById("saveindex").value;

  for (keys in taskObj[saveindex]) {
    if (keys == "task_name") {
      taskObj[saveindex].task_name = addtaskinput.value;
    }
  }

  savetaskbtn.style.display = "none";
  addtaskbtn.style.display = "block";
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  addtaskinput.value = "";
  showtask();
});

function deleteitem(index) {
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  taskObj.splice(index, 1);
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  showtask();
}
let addedtasklist = document.getElementById("addedtasklist");
addedtasklist.addEventListener("click", function (e) {
  
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);

  let mytarget = e.target;
  if (mytarget.classList[0] === "text-success") {
    let mytargetid = mytarget.getAttribute("id");

    mytargetpresibling =
      mytarget.parentElement.previousElementSibling.previousElementSibling;

    for (keys in taskObj[mytargetid]) {
      if (keys == "completeStatus" && taskObj[mytargetid][keys] == true) {
        taskObj[mytargetid].completeStatus = false;
      } else if (
        keys == "completeStatus" &&
        taskObj[mytargetid][keys] == false
      ) {
        taskObj[mytargetid].completeStatus = true;
      }
    }

    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
  }
});