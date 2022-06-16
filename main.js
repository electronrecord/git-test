function handleSubmit (ev) {
  ev.preventDefault()
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  console.log(email.value)
  console.log(password.value)
}

// const form = document.querySelector('form')
// form.addEventListener('submit', function () {
//   const email = document.getElementById('email')
//   const password = document.getElementById('password')
//   console.log(email.value)
//   console.log(password.value)
// })
