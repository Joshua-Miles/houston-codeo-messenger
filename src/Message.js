class Message {
    constructor(content, messagesList){
        this.content = content
        this.messagesList = messagesList
    }

    displayMessage(){
        const messageLi = document.createElement('li')
        messageLi.innerText = this.content
        this.messagesList.append(messageLi)
    }
}

