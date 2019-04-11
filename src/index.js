const messagesURL = `http://10.185.1.104:3000/messages`

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  let submitButton = document.querySelector('#message_submit')
  let messageContent = document.querySelector('#message_input')

  const render = function(){
    let ulForMessages = document.querySelector('#messages')
    fetch(messagesURL)
    .then(function(res){
      return res.json();
    })
    .then(function(messages){

    ulForMessages.innerHTML = ""
      messages.forEach(function(message){
        message = new Message(message)
      })
    })
  }
  render()
  setInterval(render, 500)

  submitButton.addEventListener('click', () => {
    event.preventDefault()
    fetch(messagesURL, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        content: messageContent.value
      })
    })
    .then(function(res){
      return res.json()
    })
    .then(function(message){
      message = new Message(message)
    })
  })
  

 
})