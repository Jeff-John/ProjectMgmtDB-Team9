var ajax = new XMLHttpRequest();
var method = "GET";
var url = "data.php";
var asynchronous = true;
var colabevent = [];
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
      colabevent.push(data[a].task_desc);
    }
  }
}