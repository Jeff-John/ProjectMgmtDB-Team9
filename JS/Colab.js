console.log(+ new Date())
let scale = 5;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundTo(x, y){ return Math.round(x / y) * y }

var ajax = new XMLHttpRequest();
var method = "GET";
var url = "names.php";
var asynchronous = true;
var names;
var count = 0;
ajax.open(method, url, asynchronous);

ajax.send();

ajax.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200)
  {
    var data = JSON.parse(this.responseText);
    for (var a = 0; a < data.length; a++) {
      names = data[a].employee_fname;
      //console.log(names);
      let users = names;
      let events = colabevent;
      console.log(colabevent);
      function generateUsers() {
        let min = roundTo(Math.round((+ new Date() - 86000000)/60000), scale)
        let max = roundTo(Math.round((+ new Date() + 86000000)/60000), scale)
        let dic = {}
        dic[users] = []
        dic[users].push([
            roundTo(getRandomInt(min, max), scale),
            roundTo(getRandomInt(30, 280), scale),
            events])
        console.log(roundTo(getRandomInt(min, max), scale))
        return [dic, min, max]
      }
      let gen = generateUsers();
      let userValues = gen[0]
      let min = gen[1]
      let max = gen[2]
      
      function checkArr(arr, x){
        for (let i of arr) {
          if (i[0] === x)
            return i
        }
        return false
      }
      
      Array.range = (s=0, e) => Array.from({length: (e - s)}, (v, k) => k + s);
      function range2(arr, y){
        let arr2 = []
        for (let i = 0; i < arr.length; i+=scale)
          arr2.push(arr[i])
        console.log(arr2)
        return arr2
      }
      
      function generateTableColab(tableColab) {
        let timeframe = range2(Array.range(min-30, max+1), scale)
        for (const [key, value] of Object.entries(userValues)) {
          let row = tableColab.insertRow();
          let head = row.insertCell()
          head.appendChild(document.createTextNode(key))
          head.className = "head"
      
          let skip = 0
      
          for (let sec of timeframe) {
      
            if (skip > 0)
              skip -= 1
            else {
              let vals = checkArr(value, sec)
              let cell = row.insertCell()
      
              if (vals) {
                cell.appendChild(document.createTextNode(vals[2]))
                cell.setAttribute('colspan', vals[1])
                cell.className = "test"
                skip = vals[1]-1
             }
              else
                cell.appendChild(document.createTextNode(""))
            }}}}
      
      let tableColab = document.querySelector("table.Colab");
      generateTableColab(tableColab);
      
      const scrollContainerColab = document.querySelector("table.Colab");
      scrollContainerColab.addEventListener("wheel", (evt) => {
          evt.preventDefault();
          scrollContainerColab.scrollLeft += evt.deltaY*3;
      });      
    }
  }
}




let users = [
  "admin", "Susan", "Steve", "Frank", "Ann", "Gill", "Ross", "Jennifer",
  "Bob2", "Susan2", "Steve2", "Frank2", "Ann2", "Gill2", "Ross2", "Jennifer2"]
let events = [ "Monte Falco", "Casentinesi", "Kilimanjaro"]
/*
function generateUsers() {
  let min = roundTo(Math.round((+ new Date() - 86000000)/60000), scale)
  let max = roundTo(Math.round((+ new Date() + 86000000)/60000), scale)
  let dic = {}
  for (let user of users){
    dic[user] = []
    for (let event of events)
      dic[user].push([
        roundTo(getRandomInt(min, max), scale),
        roundTo(getRandomInt(30, 280), scale),
        event])
  }
  console.log(roundTo(getRandomInt(min, max), scale))
  return [dic, min, max]
}
*/
/*
let gen = generateUsers();
let userValues = gen[0]
let min = gen[1]
let max = gen[2]

function checkArr(arr, x){
  for (let i of arr) {
    if (i[0] === x)
      return i
  }
  return false
}

Array.range = (s=0, e) => Array.from({length: (e - s)}, (v, k) => k + s);
function range2(arr, y){
  let arr2 = []
  for (let i = 0; i < arr.length; i+=scale)
    arr2.push(arr[i])
  console.log(arr2)
  return arr2
}

function generateTableColab(tableColab) {
  let timeframe = range2(Array.range(min-30, max+1), scale)
  for (const [key, value] of Object.entries(userValues)) {
    let row = tableColab.insertRow();
    let head = row.insertCell()
    head.appendChild(document.createTextNode(key))
    head.className = "head"

    let skip = 0

    for (let sec of timeframe) {

      if (skip > 0)
        skip -= 1
      else {
        let vals = checkArr(value, sec)
        let cell = row.insertCell()

        if (vals) {
          cell.appendChild(document.createTextNode(vals[2]))
          cell.setAttribute('colspan', vals[1])
          cell.className = "test"
          skip = vals[1]-1
       }
        else
          cell.appendChild(document.createTextNode(""))
      }}}}

let tableColab = document.querySelector("table.Colab");
generateTableColab(tableColab);

const scrollContainerColab = document.querySelector("table.Colab");
scrollContainerColab.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainerColab.scrollLeft += evt.deltaY*3;
});
*/