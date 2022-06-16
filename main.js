/*
Create a select tag with three options (cars make). When selecting a value, show that value in a span situated under the select tag. The span will be created with JS.
*/

const cars = ['audi', 'bmw', 'mercedes']
const select = document.querySelector('select')
const main = document.querySelector('main')
const span = document.createElement('span')
main.appendChild(span)


cars.forEach(function (car) {
  const option = document.createElement('option')
  option.value = car
  option.innerText = car
  select.appendChild(option)
})

select.addEventListener('change', function (ev) {
  console.log(ev.target.value)
})
