const messagesURL = `http://10.185.1.104:3000/messages`

document.addEventListener('DOMContentLoaded', () => {
  console.log('% DOM Content Loaded and Parsed!', 'color: magenta')
    fetch(messagesURL)
    .then(function(res){
    return res.json()
    })
   .then(function(messages){
       let box = document.querySelector('#messages')
       console.log(messages)
       messages.forEach(function(message){
      let msg = document.createElement('li')
       let content = message.content
       let newmsg = new Message(content)
       msg.innerText = content
        box.append(msg)                                                             })
  })

 
})