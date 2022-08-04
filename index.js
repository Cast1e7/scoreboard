let homescore = 0
let guestscore = 0
let homescoreEl = document.getElementById("homescore-el")
let guestscoreEl = document.getElementById("guestscore-el")
let plus1home = document.getElementById("plus1home")
let plus2home = document.getElementById("plus2home")
let plus3home = document.getElementById("plus3home")
let plus1guest = document.getElementById("plus1guest")
let plus2guest = document.getElementById("plus2guest")
let plus3guest = document.getElementById("plus3guest")

homescoreEl.textContent = homescore
guestscoreEl.textContent = guestscore

function addhome(n) {
    homescore += n
    homescoreEl.textContent = homescore
}

function addguest(n) {
    guestscore += n
    guestscoreEl.textContent = guestscore
}
