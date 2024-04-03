const scriptURL = 'https://script.google.com/macros/s/AKfycbzbz1E7Y2Pk3R98pw-mZBJwX7rPBIIBKndRYL4zWgJ8MO42aiE4lkQulB-8_ZsFFrLx9Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Inregistrat cu succes!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Eroare!', error.message))
})