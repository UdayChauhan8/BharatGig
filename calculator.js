let display= document.getElementById('display')

function appenddisplay(value) {
    display.value += value;
}

function cleardisplay(){
    display.value= ' ';
}

function calculate(){
    // let expression = display.value;

    try{
        
        display.value=eval(display.value);

    }
    catch (error){
        display.value="error";
        console.error(error);

    }
}