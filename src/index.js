const messagesURL = `http://10.185.1.104:3000/messages`

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  const messagesList = document.querySelector('#messages')
  const newMessageForm = document.querySelector('#message_form')
  
  
  setInterval(function(){
    fetch(messagesURL)
    .then(function(res){
      return res.json()
    })
    .then(function(messages){
      messagesList.innerHTML = null
      messages.forEach(function(message) {
        const fetchedMessage = new Message(message.content, messagesList)
        fetchedMessage.displayMessage()
      });
    })}, 500)
  

  newMessageForm.addEventListener('submit', function(e){
    e.preventDefault()
    const content = newMessageForm.message.value
    fetch(messagesURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: newMessageForm.message.value
      })
    })
    .then(function(res){
      return res.json();
    })
    .then(function(){
      const newMessage = new Message(content, messagesList)
      newMessage.displayMessage()
    })  
  })
  // setInterval(loadMessages, 500)
})

