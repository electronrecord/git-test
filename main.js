/*
Create a page with a simple title and a text underneath, plus a button. When button is clicked, change the content of the text, and also change the url by adding /contact at the end, without refreshing the page, all with JS.
*/

function handleChanges () {
  const h1 = document.querySelector('h1')
  const p = document.querySelector('p')
  h1.innerText = 'Contact'
  p.innerText = 'Here you can contact us!'
  window.history.pushState('page2', 'Title', '/contact');
}
