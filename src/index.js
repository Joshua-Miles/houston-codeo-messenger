const messagesURL = `http://10.185.1.104:3000/messages`

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  setInterval(function(){
    Message.fetchAllMessages()
  }, 500)

  let form = document.querySelector('#message_form')
  form.addEventListener('click', function(e){
    e.preventDefault()
    messageBox = document.querySelector('#message_input')
    Message.newDBEntry(messageBox.value)
    messageBox.value = ""
  })

})