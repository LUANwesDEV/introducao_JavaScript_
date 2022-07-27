var currentNumberWrapper = document.getElementById ("currentNumber");
var currentNumber = 0;


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber >= 10){
        currentNumberWrapper.innerHTML = "So vai até o numero 10"
    }else if (currentNumber >= 0){
        currentNumberWrapper.style.color = "black"
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0){
        currentNumberWrapper.style.color = "red"
    }

}