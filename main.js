function handleSubmit (ev) {
  ev.preventDefault()
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  console.log(email.value)
  console.log(password.value)
}
