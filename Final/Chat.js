
// function resetTable(){
//   while(tableChat.hasChildNodes())
//     tableChat.removeChild(tableChat.firstChild);
//   generateTableTasks(tableChat);
//
// }

let chatBox = document.createElement("input")
chatBox.className = "TypeHere"
chatBox.onkeydown = function(e){
   if(e.key === 'Enter'){
     chatLog.push(chatBox.value)
     console.log(chatBox.value)
     // resetTable()
     chatBox.value = ""
   }
};

function generateTableChat(tableChat) {
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

function addToChatLog() {
  let boxvalue = document.getElementById("TypeHere").value;
  chatLog.push(boxvalue);
  return false;
}
