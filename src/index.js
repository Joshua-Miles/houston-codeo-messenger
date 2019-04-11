const messagesURL = `http://10.185.1.104:3000/messages`
function create(message){
  fetch(messagesURL, {
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify({
      content: message
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('% DOM Content Loaded and Parsed!', 'color: magenta')
  const form = document.querySelector('#message_form')
  function chat(){
    fetch(messagesURL)
    .then(function(res){
    return res.json()
    })
   .then(function(messages){
       let box = document.querySelector('#messages')
       box.innerHTML = ''
       messages.forEach(function(message){
       let msg = document.createElement('li')
       let content = message.content
       let newmsg = new Message(content)
       msg.innerText = content
       box.append(msg)                                                           
      })
    })
  }
  chat()
  form.addEventListener('submit', (e) => {  
    e.preventDefault()
    let message = document.querySelector('#message_input')
    create(message.value)
    chat()
    message.value = ''
  })
  setInterval(chat,500)
})