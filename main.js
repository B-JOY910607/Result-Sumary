const mainScore = document.querySelector('.main-score');

function randomNumber(){var generatedNumber=Math.floor(Math.random()*100);
mainScore.textContent = generatedNumber;
}

var counter = setInterval(randomNumber, 100);
setTimeout(function clear(){
    clearInterval(counter)
    mainScore.textContent = 76;
}, 1000)





