
function generateTableTasks(tableTasks, tasks) {
  let head = tableTasks.insertRow().insertCell();
  head.appendChild(document.createTextNode("Tasks"))
  head.className = "TasksHead"
  for (const task of tasks) {
    let cell = tableTasks.insertRow().insertCell();
    cell.appendChild(document.createTextNode(task))
  }}

