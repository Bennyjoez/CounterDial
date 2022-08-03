const inputScreen = document.querySelector('input') 

//setting the default values
inputScreen.value = "0";
inputScreen.style.color = "yellow"


//setting increase button
const increase = document.querySelector('#increase');

increase.addEventListener('click', function(e){
    e.preventDefault();
    //should take the value in the box and add one to it
    let loggedValue = parseInt(inputScreen.value);

    const newValue = loggedValue + 1;
    inputScreen.value = newValue;

    const valueOnScreen = newValue

    if(Math.sign(valueOnScreen) == 1) {
        inputScreen.style.color = "black"
    }
    else if(Math.sign(valueOnScreen) == -1){
        inputScreen.style.color = "red";
    }
    else {
        inputScreen.style.color = "yellow"
    }
})


//setting reset button
const reset = document.querySelector('#reset');

reset.addEventListener('click', function(e){
    e.preventDefault();
    inputScreen.value = "0";
    inputScreen.style.color = "yellow";
})


//setting the decrease button
const decrease = document.querySelector('#decrease')

decrease.addEventListener('click', function(e){
    e.preventDefault()
    let loggedValue = parseInt(inputScreen.value);
    const newValue = loggedValue - 1;
    inputScreen.value = newValue;

    const valueOnScreen = newValue;

    if(Math.sign(valueOnScreen) == 1) {
        inputScreen.style.color = "black"
    }
    else if(Math.sign(valueOnScreen) == -1){
        inputScreen.style.color = "red";
    }
    else {
        inputScreen.style.color = 'yellow'
    }
})

