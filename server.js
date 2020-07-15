let result = 0;
let buffer = "0";
let operator = null;

const screen = document.querySelector('.input');

document.getElementById('calc-buttons').addEventListener('click',function(event){
    buttonClick(event.target.innerText);
});

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    change_screen()
}

function handleNumber(value){
    if(buffer === '0'){
        buffer = value
    }
    else{
        buffer += value
    }
}

function handleSymbol(value){
    switch(value){
        case 'C':
            result = 0;
            operator = null;
            buffer = '0';
            break;
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }
            else{
                buffer = buffer.substring(0,buffer.length-1);
            }
            break;
        case '=':
            if(operator === null){
                return;
            }
            perform_operation(parseInt(buffer));
            operator = null;
            buffer = ''+ result;
            result = 0;
            break;
        default:
            handleMath(value);
            break;
    }
}

function handleMath(value){
    if(buffer === '0'){
        return;
    }
    const intBuffer = parseInt(buffer)
    if(result === 0){
        result = intBuffer;
    }
    else{
        perform_operation(intBuffer);
    }
    buffer = '0';
    operator = value;
}

function perform_operation(value){
    if(operator==='+'){
        result += value;
    }
    else if(operator==='-'){
        result -= value;
    }
    else if(operator==='×'){
        result *= value;
    }
    else{
        result /= value;
    }
    
}

function change_screen(){
    screen.innerText = buffer;
}