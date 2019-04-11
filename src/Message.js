class Message {

  constructor(message){
    const messageList = document.querySelector('#messages')
    const messageCollection = document.querySelector('#messages')
    const container = document.querySelector('.container')

      this.message = message

      const messageOnList = document.createElement('li')
      messageCollection.append(messageOnList)

      const messageId = document.createElement('p')
      messageId.innerText = `Message ID: ${message.id}`
      // messagesOnList.append(messageId)

      const messageContent = document.createElement('p')
      messageContent.innerText = `Content: ${message.content}`
      // messagesOnList.append(messageContent)
      container.append(messageOnList, messageId, messageContent)
  }

}
