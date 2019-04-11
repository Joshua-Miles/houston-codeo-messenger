class Message {

    constructor(message){
        const ul = Message.ul
        const li = document.createElement('li')
        ul.append( li )
        li.append( message.content )
    }

    static render(){
        const ul = Message.ul
        fetch(messagesURL)
            .then( response => response.json() )
            .then( messages => {
                ul.innerHTML = ''
                messages.forEach( message => 
                    new Message(message)
                )
            })    
    }

    static create(content){
        
        const message = { 
            content: content
        }

        new Message(message)
    
        fetch(messagesURL, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify(message)
        })
    }

}