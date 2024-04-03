const scriptURL = 'https://script.google.com/macros/s/AKfycby054krGwU2i_W1HqGhJZvZe5qOnN2VKNgsifj4ysLkMKYJX7JgP1jUN_6bGRpDGRd_5A/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Inregistrat cu succes!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Eroare!', error.message))
})