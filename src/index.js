const messagesURL = `http://10.185.1.104:3000/messages`;

const render = function() {
  messageList = document.getElementById("messages");
  fetch(`${messagesURL}`)
    .then(response => {
      return response.json();
    })
    .then(messageData => {
      messageList.innerHTML = " ";
      messageData.forEach(message => {
        li = document.createElement("li");
        li.textContent = message.content;
        messageList.append(li);
      });
    });
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("%c DOM Content Loaded and Parsed!", "color: magenta");
  messageBox = document.getElementById("message_input");
  submit = document.querySelector("#message_form").children[1];
  render();

  submit.addEventListener("click", e => {
    e.preventDefault;
    fetch(`${messagesURL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: messageBox.value
      })
    })
      .then(response => {
        return response.json();
      })
      .then(messageData => {
        return messageData;
      })
      .then(render());
  });

  setInterval(render, 500);
});
