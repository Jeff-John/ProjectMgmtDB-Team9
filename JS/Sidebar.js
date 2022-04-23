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

function openCal() {
  document.querySelector("div.calPage").style.visibility = "visible";
  document.querySelector("div.TeamPage").style.visibility = "hidden";
}

function openTeam() {
  document.querySelector("div.calPage").style.visibility = "hidden";
  document.querySelector("div.TeamPage").style.visibility = "visible";
}


taskList = ["Project 1", "Project 2","Project 3","This","That"]

function generateTableTaskList(tableTaskList) {
  for (const task of taskList) {
    let cell = tableTaskList.insertRow().insertCell();
    cell.appendChild(document.createTextNode(task))
  }}

let tableTaskList = document.querySelector("table.TaskList");
generateTableTaskList(tableTaskList);


