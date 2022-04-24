

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

function generateTableColab(tableColab, userValues, min, max, scale=5) {

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
          cell.onclick = function (){openTeamSub()}

      }}}}



function TeamSub(){
    let box = document.querySelector("div.TeamInput")
    box.style = "visibility: hidden;"
}

function openTeamSub(){
  console.log("sssss")
  document.querySelector("div.TeamInput").style = "visibility: visible;";}
