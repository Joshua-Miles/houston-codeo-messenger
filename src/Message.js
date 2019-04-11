
class Message{
    constructor(text) {
        this.text = text
        this.addMessage()
        console.log(this)
    }

    addMessage() {
        let ulForMessages = document.querySelector('#messages')
        let li = document.createElement('li')
        //console.log(message)
        li.innerText = this.text['content']
        if (this.text['content'] !== "" && this.text['content'] !== null){
            ulForMessages.append(li)
            
        }
    }
}