let calarr = ["Monte Falterona", "Monte Falco", "Casentinesi", "kilimanjaro"]
let calarr2 = ["Falterona", "Falco"]


let mountains = [
  { Sunday: null, Monday: null, Tuesday: null, Wednesday: calarr2,
    Thursday: calarr, Friday: calarr, Saturday: calarr2 },
  { Sunday: calarr2, Monday: calarr, Tuesday: calarr, Wednesday: null,
    Thursday: calarr2, Friday: null, Saturday: calarr },
  { Sunday: calarr2, Monday: null, Tuesday: null, Wednesday: calarr2,
    Thursday: calarr, Friday: calarr, Saturday: null },
  { Sunday: null, Monday: calarr2, Tuesday: calarr, Wednesday: null,
    Thursday: calarr, Friday: null, Saturday: calarr },
  { Sunday: calarr2, Monday: null, Tuesday: calarr, Wednesday: calarr,
    Thursday: calarr2, Friday: null, Saturday: null }
];

let travel = 0// Fix me: 6 week months don't fit

Date.monthDays= function(){
    const d1 = new Date();
    let d= new Date(d1.getFullYear(), d1.getMonth()+1+travel, 0);
    return d.getDate();
}

Date.start= function(){
    const d = new Date();
    let d1= new Date(d.getFullYear(), d.getMonth()+travel, 0);
    let day = d1.getDay()+1
    if (day === 7) day = 0;
    return day;
}

let date_start = Date.start()
let date_end = Date.monthDays()
console.log(date_start, date_end)


function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }}

function test(cell, event){
  let rect = event.getBoundingClientRect();
  console.log(rect.top, rect.right, rect.bottom, rect.left);
  cell.style = "background: orange"

  let overlay = document.querySelector("div.overlay");
  overlay.style.cssText = `
  display: inherit;
  top: ${rect.top-80}px;
  left: ${rect.right}px;
`;

  overlay.appendChild(document.createTextNode(event.innerHTML));
}

function makeEvents(array, date) {
    let list = document.createElement('table');
    list.className = "events";

    let row = list.insertRow();
    let cell = row.insertCell();
    cell.appendChild(document.createTextNode(date));
    cell.className = "date"
    cell.onclick = function (){openCalSub()};


    for (key in array) {
      if (key != null) {
      let row = list.insertRow();
      let cell = row.insertCell();
        cell.appendChild(document.createTextNode(array[key]));

        cell.onclick = function () {test(cell, this);}

      }}
    return list;
}


function generateTable(table, data) {
  let date = -date_start
  for (let element of data) {
    let row = table.insertRow();

    for (key in element) {
      date += 1
      let cell = row.insertCell();

      if (date>0 && date <= date_end) cell.appendChild(makeEvents(element[key], date));
    }}}


let table = document.querySelector("table.calendar");
let data = Object.keys(mountains[0]);
generateTableHead(table, data);
generateTable(table, mountains);


function calSub(){
  let text = document.querySelector("input.calText")
  let date = document.querySelector("input.calDate")
  let time1 = document.querySelector("input.calTimeFrom")
  let time2 = document.querySelector("input.calTimeTo")
  let calTeam = document.querySelector("select.calTeam")

  console.log(date.valueAsDate)

  text.value = "";
  let box = document.querySelector("div.CalInput")
  box.style = "visibility: hidden;";
}

function openCalSub(){ document.querySelector("div.CalInput").style = "visibility: visible;" }
