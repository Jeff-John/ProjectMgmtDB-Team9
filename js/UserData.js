
function rf(names) { return names[Math.floor(Math.random() * names.length)] }
  let len = 100

function genTable(){
  let dict = {}
  let heads = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso"]
  let nums = Array.range(0, 100)
  let strs = ["Bob", "Susan", "Steve", "Frank", "Ann",
              "Gill", "Ross", "Jennifer","Bob2", "Susan2",
              "Steve2", "Frank2", "Ann2", "Gill2",
              "Ross2", "Jennifer2"]


  let vals = [nums, strs]
  for (const _ of Array.range(0, 30)) {
    let head = rf(heads)
    let arr = []
    let x = rf(vals)
    for (const _ of Array.range(0, len))
      arr.push(rf(x))
    dict[head] = arr
  }
  return dict
}

function genTableHeadDat(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let entry of Object.entries(data)) {
    let th = document.createElement("th");
    let text = document.createTextNode(entry[0]);
    th.appendChild(text);
    row.appendChild(th);
  }}

function makeTableDat(table, data=genTable()){
  genTableHeadDat(table, data)
  for (let i of Array.range(0, len)) {
    let row = table.insertRow();

    for (let entry of Object.entries(data)) {
      let cell = row.insertCell();
      cell.appendChild(document.createTextNode(entry[1][i]));
    }}}

function run(){
  let table = document.querySelector("table.UserData")
  makeTableDat(table, genTable())
}
