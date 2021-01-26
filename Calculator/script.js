const calc = document.querySelector('.calculator');
let buttons = document.querySelector('.keyboard');
let display = document.getElementById('dis');


buttons.addEventListener('click',function(e){
    const key = e.target;
    const action =key.dataset.action;
    if(e.target.matches('button'))
    {
        console.log(action);
        if(action === 'add' || action === 'substract' || action === 'multiply' || action === 'divide')
        {
            Array.from(key.parentNode.children).forEach(k => k.classList.remove('pressed'));
            Display(key.textContent);
            key.classList.add('pressed');
            calc.dataset.operator = action;
        }
        else if(action === 'clear')
        {
            Array.from(key.parentNode.children).forEach(k => k.classList.remove('pressed'));

            display.textContent = '';
        }
        else if(action === 'dot')
        {

        }
        else if(action === 'equalto')
        {
            Array.from(key.parentNode.children).forEach(k => k.classList.remove('pressed'));
            Display(key.textContent);
            Operation(calc.dataset.operator);
        }
        else{
            Display(key.textContent);
        }
        
    }
})
function Display(value)
{
    if(display.textContent == '0'){
        display.textContent = value;
    }
    else{
        display.textContent = display.textContent + value;
    }
}
function Operation(operator){
    if(operator == 'add'){
        let Arr = display.textContent.split('+');
        display.textContent = parseInt(Arr[0]) + parseInt(Arr[1]);
    }
    else if(operator == 'substract'){
        let Arr = display.textContent.split('-');
        display.textContent = parseInt(Arr[0]) - parseInt(Arr[1]);
    }
    else if(operator == 'multiply'){
        let Arr = display.textContent.split('NaN');
        display.textContent = parseInt(Arr[0]) * parseInt(Arr[1]);
    }
    else if(operator == 'divide'){
        let Arr = display.textContent.split('%');
        display.textContent = parseInt(Arr[0]) % parseInt(Arr[1]);
    }
}