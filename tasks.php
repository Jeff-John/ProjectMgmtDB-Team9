<script>
//call ajax
    var ajax = new XMLHttpRequest();
    var method = "GET";
    var url = "data.php";
    var asynchronous = true;

    ajax.open(method, url, asynchronous);

    //sending ajax request
    ajax.send();

    //receiving response from data.php
    ajax.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            //alert(this.responseText);
            //converting JSON back to array
            var data = JSON.stringify(this.responseText);
            console.log(data);


            let tasks = data[0][1];

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

            
        }
    }

</script>