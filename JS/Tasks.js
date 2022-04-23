
let tasks = ["Monte Falterona", "Monte Falco", "Casentinesi", "kilimanjaro"]


function generateTableTasks(tableTasks) {
  let head = tableTasks.insertRow().insertCell();
  head.appendChild(document.createTextNode("Tasks"))
  head.className = "TasksHead"
  for (const task of tasks) {
    let cell = tableTasks.insertRow().insertCell();
    cell.appendChild(document.createTextNode(task))
  }}


let tableTasks = document.querySelector("table.Tasks");
generateTableTasks(tableTasks);

