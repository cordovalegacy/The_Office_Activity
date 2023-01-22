var header = document.querySelector('h1')
var quote = document.getElementById('quote')
var jim_1 = document.getElementById('jim-1')
var jim_2 = document.getElementById('jim-2')
var correctJim = document.getElementById('correct-jim')
var incorrectJim = document.getElementById('incorrect-jim')
var chili = document.getElementById('chili')
var spilledChili = new Image()
var mug = document.getElementById('mug-input')
var mugText = document.getElementById('mug-text')

function switchText(element){
    header.innerText = "The Office"
}

function switchQuote(){
    quote.innerText = '"THE WORST THING ABOUT PRISON, WAS THE DEMENTORS!"'
    quote.style.color = "red"
    quote.style.fontWeight = "bolder"
    quote.style.fontStyle = "italic"
    quote.style.textAlign = "left"
}

function jimOrJim(id){
    if (id === 1){
        correctJim.style.display = "block"
        incorrectJim.style.display = "none"
    }else if(id === 2){
        correctJim.style.display = "none"
        incorrectJim.style.display = "block"
    }
}

function spillChili(){
    chili.src = "assets/chili.png"
}

function writeOnMug(){
    mugText.innerText = mug.value
}