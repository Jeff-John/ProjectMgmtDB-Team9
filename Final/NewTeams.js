let chatLog = [
  "According to all known laws of aviation,",
  "there is no way a bee should be able to fly.",
  "Its wings are too small to get its fat little body off the ground.",
  "The bee, of course, flies anyway",
  "because bees don't care what humans think is impossible.",
  "Yellow, black. Yellow, black. Yellow, black. Yellow, black.",
    "According to all known laws of aviation,",
  "there is no way a bee should be able to fly.",
  "Its wings are too small to get its fat little body off the ground.",
  "The bee, of course, flies anyway",
  "because bees don't care what humans think is impossible.",
  "Yellow, black. Yellow, black. Yellow, black. Yellow, black.",
    "According to all known laws of aviation,",
  "there is no way a bee should be able to fly.",
  "Its wings are too small to get its fat little body off the ground.",
  "The bee, of course, flies anyway",
  "because bees don't care what humans think is impossible.",
  "Yellow, black. Yellow, black. Yellow, black. Yellow, black.",
    "According to all known laws of aviation,",
  "there is no way a bee should be able to fly.",
  "Its wings are too small to get its fat little body off the ground.",
  "The bee, of course, flies anyway",
  "because bees don't care what humans think is impossible.",
  "Yellow, black. Yellow, black. Yellow, black. Yellow, black.",
  "Ooh, black and yellow! Let's shake it up a little."
]

console.log(+ new Date())
let scale = 5;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundTo(x, y){ return Math.round(x / y) * y }

let users = [
  "Bob", "Susan", "Steve", "Frank", "Ann", "Gill", "Ross", "Jennifer",
  "Bob2", "Susan2", "Steve2", "Frank2", "Ann2", "Gill2", "Ross2", "Jennifer2"]
let events = [ "Monte Falco", "Casentinesi", "Kilimanjaro"]

function generateUsers() {
  let min = roundTo(Math.round((+ new Date() - 86400000)/60000), scale)
  let max = roundTo(Math.round((+ new Date() + 86400000)/60000), scale)
  let dic = {}
  for (let user of users){
    dic[user] = []
    for (let event of events)
      dic[user].push([
        roundTo(getRandomInt(min, max), scale),
        roundTo(getRandomInt(30, 280), scale),
        event])
  }

  console.log("dddddddddddddddddddddddddddddddddddddddddddd")
  console.log(+ new Date())
  return [dic, min, max]

}


let tasks = ["Monte Falterona", "Monte Falco", "Casentinesi", "kilimanjaro"]

/////////////////////////////////////////////////////////////////////////////////

function genTasks(){
  let vp = document.querySelector("div.viewport");
  let i = 0
  for (const task of taskList) {

      let gen = generateUsers();
      let userValues = gen[0]
      let min = gen[1]
      let max = gen[2]

    i += 1
    let div = document.createElement("div")
    div.className = `TeamPage${i}`
    div.id = `TeamPage`
    div.style.position = "absolute"

    let colabTable = document.createElement("table")
    let tasksTable = document.createElement("table")
    let chatTable = document.createElement("table")
    let back = document.createElement("div")
    colabTable.className = `Colab`
    tasksTable.className =`Tasks`
    chatTable.className = `Chat`
    back.className = `BackDiv`
    generateTableTasks(tasksTable, tasks)
    generateTableChat(chatTable, chatLog);
    generateTableColab(colabTable, userValues, min, max, 5);
    div.appendChild(colabTable)
    div.appendChild(tasksTable)
    div.appendChild(chatTable)
    div.appendChild(back)
    vp.appendChild(div)
  }

}

genTasks()
openCal()
run()

const scrollContainerColab = document.querySelector("table.Colab");
scrollContainerColab.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainerColab.scrollLeft += evt.deltaY*3;
});

function genCalSubList(){
    let drop = document.querySelector("select.calTeam");
    for (const i of taskList){
      let opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = i;
      console.log(i)
      drop.add(opt);
    }
}

genCalSubList()
