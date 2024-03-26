const scriptURL = 'https://script.google.com/macros/s/AKfycbyVC5Wi0MHUxejUskmAy4UfwCIETri9v4STvjBTn_2yRPlba5EyoSODX5wBdIxtsWs6JQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Inregistrat cu succes!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})