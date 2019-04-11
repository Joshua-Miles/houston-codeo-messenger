const messagesURL = `http://10.185.1.104:3000/messages`
document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  
  const form = document.querySelector('#message_form')
  const input = document.querySelector('#message_input')
  form.addEventListener('submit', e => {
    e.preventDefault()
    Message.create(input.value)
    input.value = ''
  })

  setInterval(() => {
    Message.render()
  }, 500)

  Message.ul = document.querySelector('#messages')
})