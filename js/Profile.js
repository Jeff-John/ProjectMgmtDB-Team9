

function generateTableAllTasks(tableTasks, tasks) {
  let head = tableTasks.insertRow().insertCell();
  head.appendChild(document.createTextNode("All Tasks"))
  head.className = "TasksHead"
  for (const task of tasks) {
    let cell = tableTasks.insertRow().insertCell();
    cell.appendChild(document.createTextNode(task))
  }}

let allTasks = document.querySelector("table.AllTasks")
generateTableAllTasks(allTasks, tasks)

