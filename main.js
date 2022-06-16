/*
Create a list of items with drinks
(tea, coffee, etc), and when each item is clicked,
we should log in the console the value
(the drink name).
*/

const drinks = ['tea', 'beer', 'lemonade', 'water']

const ul = document.createElement('ul')

drinks.forEach(function (drink) {
  const li = document.createElement('li')
  li.innerText = drink
  ul.appendChild(li)
})

const main = document.querySelector('main')
main.appendChild(ul)

ul.addEventListener('click', function (ev) {
  console.log(ev.target.innerText)
})
