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

function resetTable(){
  while(tableChat.hasChildNodes())
    tableChat.removeChild(tableChat.firstChild);
  generateTableTasks(tableChat);

}

let chatBox = document.createElement("input")
chatBox.className = "TypeHere"
chatBox.onkeydown = function(e){
   if(e.key === 'Enter'){
     chatLog.push(chatBox.value)
     console.log(chatBox.value)
     resetTable()
     chatBox.value = ""
   }
};

function generateTableTasks(tableChat) {
  let head = tableChat.insertRow().insertCell();
  head.appendChild(document.createTextNode("Discussion Board"))
  head.className = "ChatHead"
  for (const chat of chatLog) {
    let cell = tableChat.insertRow().insertCell();
    cell.appendChild(document.createTextNode(chat))
  }
  let TypeHere = tableChat.insertRow().insertCell();

  TypeHere.appendChild(chatBox)
  TypeHere.className = "TypeHere"
  tableChat.scrollTo(10,1000)
}



let tableChat = document.querySelector("table.Chat");
generateTableTasks(tableChat);

function addToChatLog() {
  boxvalue = document.getElementById("TypeHere").value;
  chatLog.push(boxvalue);
  return false;
}
