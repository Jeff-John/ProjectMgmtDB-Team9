var ajax = new XMLHttpRequest();
var method = "GET";
var url = "data.php";
var asynchronous = true;
var desc;
var count = 0;
ajax.open(method, url, asynchronous);

ajax.send();

ajax.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    var data = JSON.parse(this.responseText);

    for (var a = 0; a < data.length; a++) 
    {
      desc = data[a].task_desc;
      
      let tasks = desc;
      function generateTableTasks(tableTasks) {
        if (count == 0) {
          let head = tableTasks.insertRow().insertCell();
          head.appendChild(document.createTextNode("Tasks"))
          head.className = "TasksHead"          
        }
        let cell = tableTasks.insertRow().insertCell();
        cell.appendChild(document.createTextNode(tasks));
        }
      
      
      let tableTasks = document.querySelector("table.Tasks");
      generateTableTasks(tableTasks);
      count++;
    }
  }
}
count = 0;