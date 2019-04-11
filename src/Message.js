const messagesURL = `http://10.185.1.104:3000/messages`;

class Message {
  constructor(content) {
    this.content = content;
    if (this.content !== "" && this.content !== null) this.post();
  }

  static getList() {
    return fetch(`${messagesURL}`).then(response => {
      return response.json();
    });
  }

  post() {
    fetch(`${messagesURL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: this.content
      })
    });

    const messageList = document.getElementById("messages");
    li = document.createElement("li");
    li.textContent = this.content;
    messageList.append(li);
  }
}
