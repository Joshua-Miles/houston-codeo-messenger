const messagesURL = `http://10.185.1.104:3000/messages`

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  const messageDiv = document.createElement('div')
  messageDiv.id = "message-div"
  const messageUl = document.createElement('ul')
  messageUl.id = "message-list"
  messageDiv.append(messageUl)
  document.body.append(messageDiv)

  fetch(messagesURL)
  .then(res => res.json())
  .then(function(messages) {
    console.log(messages)
    messages.forEach(message => new Message (message))
    Message.renderAll()
  })
})
