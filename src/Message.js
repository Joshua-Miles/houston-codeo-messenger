class Message {

  constructor(message){
    const messageList = document.querySelector('#messages')

      this.message = message

      const messageOnList = document.createElement('li')

      const messageId = document.createElement('p')
      messageId.innerText = `Message ID: ${message.id}`

      const messageContent = document.createElement('p')
      messageContent.innerText = `Content: ${message.content}`
      messageList.append(messageOnList, messageId, messageContent)
  }

  static create(message){
    fetch ('http://10.185.1.104:3000/messages',{
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        content: message
      })
    })
    .then(function(response){
      return response.json()
    })
    .then(function(response){
      new Message(response)
    })

}
}
