class Message {
  constructor(messageObject) {
    this.content = messageObject.content
    allMessages.push(this)
  }

  renderMessage() {
    const messageList = document.querySelector('#message-list')
    const messageLi = document.createElement('li')
    messageLi.textContent = this.content
    messageList.append(messageLi)
  }

  static renderAll() {
    Message.all().forEach(message => message.renderMessage())
  }

  static all () {
    return allMessages
  }
}

allMessages = []
