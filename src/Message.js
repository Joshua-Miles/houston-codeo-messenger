class Message {
    constructor(details){
        this.details = details
        this.postMessage(this)
    }

    postMessage(message){
        let board = document.querySelector('#messages')
        let messagePost = document.createElement('li')
        messagePost.innerText = message.details["content"]
        board.append(messagePost)
    }

    static deletePosts(){
        let lis = document.querySelectorAll('li')
        lis.forEach( (li) => li.remove() )
    }

    static fetchAllMessages(){
        fetch('http://10.185.1.104:3000/messages')
        .then( (res) => res.json() )
        .then(function(messages){
            Message.deletePosts()
            messages.forEach( (message) => new Message(message))
        })
    }

    static newDBEntry(message){
        fetch('http://10.185.1.104:3000/messages',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: message
            })
        })
    }

}