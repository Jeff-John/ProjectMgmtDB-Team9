
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
    alert(JSON.parse(JSON.stringify(this.responseText)));
    //var data = ajax.responseText;
    //var jsonResponse = JSON.parse(JSON.stringify(data));
   // var jsonResponse = JSON.parse(data);
    //console.log(jsonResponse);
    let parsed = (JSON.parse(JSON.stringify(this.responseText)));
    //var data = parsed.replace(/^\[(.+)\]$/,'$1');
    console.log(parsed);
    var data = JSON.parse(this.responseText);
    console.log(data);
    //var html = "";
    for (var a = 0; a < data.length; a++) 
    {
      desc = data[a].task_desc;
      console.log(desc);
      //alert(desc);
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

//let tasks = [desc, "Monte Falco", "Casentinesi", "kilimanjaro"]

/*
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
*/
