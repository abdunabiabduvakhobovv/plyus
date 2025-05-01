const form = document.getElementById('form')
const son = document.querySelector('.son') 
const input = document.querySelector('input')
const plyus = document.getElementById('kopaytir')
const minus = document.getElementById('ayir')

let number

input.addEventListener("input", (e) => {
  number = e.target.value
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  son.innerHTML = number
  input.value = ''
})

plyus.addEventListener("click", () => {
  number = Number(son.innerHTML) + 1
  son.innerHTML = number
})


minus.addEventListener("click" , () => {
    number = Number(son.innerHTML) -1
    son.innerHTML = number
})






