/*
Create a page with a title and button. When the button is clicked more than once, toggle the text content and the colour.

*/

const h1 = document.querySelector('h1')

const titles = {
  current: h1.innerText,
  new: 'New text',
  state: 'current'
}

function handleToggle () {
  if (titles.state === 'current') {
    h1.innerText = titles.new
    h1.style.color = 'red'
    titles.state = 'new'
  } else {
    h1.innerText = titles.current
    h1.style.color = 'black'
    titles.state = 'current'
  }
}
