const messagesURL = `http://10.185.1.104:3000/messages`

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  const messageDiv = document.createElement('div')
  messageDiv.id = "message-div"
  const messageUl = document.createElement('ul')
  messageUl.id = "message-list"
  messageDiv.append(messageUl)
  document.body.append(messageDiv)

  setInterval(function(){
    fetch(messagesURL)
    .then(res => res.json())
    .then(function(messages) {
      Message.wipeAll()
      messages.forEach(message => new Message (message))
      Message.renderAll()
    })
  }, 500)

  document.addEventListener('submit', function(e) {
    e.preventDefault()
    const inputField = document.querySelector('#message_input')
    const newContent = {content: inputField.value}
    inputField.value = ""
    const newMessage = new Message (newContent)
    Message.renderAll()
    fetch('http://10.185.1.104:3000/messages', {
      method: "POST",
      body: JSON.stringify(newContent),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  })
})
