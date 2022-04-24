let mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("main").style.marginLeft = "85px";
    mini = true;
  }
}

let taskList = ["Project 1", "Project 2","Project 3","This","That"]

function closeAll(){
    document.querySelector("div.calPage").style.visibility = "hidden";
    document.querySelector("div.UserData").style.visibility = "hidden";
    document.querySelector("div.Profile").style.visibility = "hidden";
    for (const [task, value] of taskList.entries())
      document.querySelector(`div.TeamPage${task+1}`).style.visibility = "hidden";
}

function openDat(){closeAll(); document.querySelector("div.UserData").style.visibility = "visible";}
function openCal() {closeAll(); document.querySelector("div.calPage").style.visibility = "visible";}
function openTeam() {closeAll(); document.querySelector("div.TeamPage1").style.visibility = "visible";}
function openPro() {closeAll(); document.querySelector("div.Profile").style.visibility = "visible";}

function openi(i){document.querySelector(`div.TeamPage${i}`).style.visibility = "visible";
}

function generateTableTaskList(tableTaskList) {
  let i = 0;
  for (const task of taskList) {
    i+=1
    let cell = tableTaskList.insertRow().insertCell();
    cell.appendChild(document.createTextNode(task))
    cell.className = `${i}`
    cell.onclick = function (){
      closeAll()
      openi(cell.className)
  }
  }
  let cell = tableTaskList.insertRow().insertCell();
    cell.appendChild(document.createTextNode("New Task"))
    cell.className = "NewTask"
}

let tableTaskList = document.querySelector("table.TaskList");
generateTableTaskList(tableTaskList);


