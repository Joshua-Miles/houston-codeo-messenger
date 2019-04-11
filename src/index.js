document.addEventListener("DOMContentLoaded", () => {
  const buildListItem = function(message) {
    if (message.content !== "" && message.content !== null) {
      li = document.createElement("li");
      li.textContent = message.content;
      return li;
    }
  };

  const renderMessages = function() {
    const messageList = document.getElementById("messages");
    Message.getList().then(msgData => {
      messageList.innerHTML = "";
      msgData.forEach(msg => {
        messageList.append(buildListItem(msg));
      });
    });
  };

  const submitMessage = function() {
    const messageBox = document.getElementById("message_input");
    new Message(messageBox.value);
    messageBox.value = "";
  };

  console.log("%c DOM Content Loaded and Parsed!", "color: magenta");
  const form = document.querySelector("#message_form");
  renderMessages();

  form.addEventListener("submit", e => {
    e.preventDefault();
    submitMessage();
  });

  setInterval(renderMessages, 500);
});
