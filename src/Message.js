class Message {
  constructor(messageObject) {
    this.content = messageObject.content
    allMessages.push(this)
  }

  renderMessage() {
    const messageList = document.querySelector('#message-list')
    const messageLi = document.createElement('li')
    messageLi.textContent = this.content
    if (messageLi.textContent !== "") {messageList.prepend(messageLi)} //filters out empty messages
  }

  static renderAll() {
    const messageList = document.querySelector('#message-list')
    messageList.innerHTML = ''
    allMessages.forEach(message => message.renderMessage())
  }

  static wipeAll() {
    allMessages = []
  }
}

let allMessages = []
