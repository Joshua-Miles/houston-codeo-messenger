const messagesURL = `http://10.185.1.104:3000/messages`
// const message = new Message('103', 'I love tacos with special sauce')

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  const fetchMessages = function(){
    fetch(messagesURL)
      .then(function(response){
        return response.json()
      })
      .then(function(messages){
        messages.forEach(function(message){
          new Message(message)
        })
      })
  }

  fetchMessages()

const messageForm = document.querySelector('#message_form')
messageForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const messageInput = document.querySelector('#message_input')
  Message.create(messageInput.value)
  messageForm.reset()
})




})
