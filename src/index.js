const messagesURL = `http://10.185.1.104:3000/messages`

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

setInterval( () => {
  const fetchMessages = function(){
    fetch(messagesURL)
      .then(function(response){
        return response.json()
      })
      .then(function(messages){
        let messageList = document.querySelector('#messages')
        while(messageList.hasChildNodes()){
          messageList.removeChild(messageList.firstChild)
        }
        messages.forEach(function(message){
          new Message(message)
        })
      })
    }
    fetchMessages()
  }, 500)




const messageForm = document.querySelector('#message_form')
messageForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const messageInput = document.querySelector('#message_input')
  Message.create(messageInput.value)
  messageForm.reset()
})
})
