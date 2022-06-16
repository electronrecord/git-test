/*
Create a page with a title and some text, and a button. When we click the button, change the color of the text content to green, and add a text under the button with the content: “now the text is green”. Add this line of text programmatically, not in HTML file.
*/

function handleContentChange () {
  const h1 = document.querySelector('h1')
  const p = document.querySelector('p')
  h1.style.color = 'green'
  p.style.color = 'green'
  const span = document.createElement('h2')
  span.innerText = 'Now the text is green'
  p.appendChild(span)
}


