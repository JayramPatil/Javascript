const calc = document.querySelector('.calculator');
const buttons = document.querySelector('.keyboard');
const display = document.getElementById('dis');
let OpCount = 0;
let LastKey = null;

buttons.addEventListener('click',function(e){
    const key = e.target;
    const action =key.dataset.action;
    if(e.target.matches('button'))
    {        
        if(action === 'add' || action === 'substract' || action === 'multiply' || action === 'divide')
        {
            if(LastKey != '+' && LastKey != '-' && LastKey != '*' && LastKey != '/')
            {
                Array.from(key.parentNode.children).forEach(k => k.classList.remove('pressed'));
                key.classList.add('pressed');
                OpCount++;
                if(OpCount == 1)
                {
                    calc.dataset.firstNumber = display.textContent;
                    calc.dataset.operator = action;
                }
                else
                {
                    calc.dataset.firstNumber = preCalculate(calc.dataset.firstNumber,calc.dataset.operator); 
                    console.log(calc.dataset.firstNumber);
                    calc.dataset.secondNumber = 0;
                    calc.dataset.operator = action;
                }
                (display.textContent == '0')?Display('0'+ key.textContent):Display(key.textContent);

                LastKey = key.textContent;
            }
        }
        else if(action === 'clear')
        {
            Array.from(key.parentNode.children).forEach(k => k.classList.remove('pressed'));

            display.textContent = '0';

            LastKey = null;
        }
        else if(action === 'dot')
        {
            if(LastKey != '+' && LastKey != '-' && LastKey != '*' && LastKey != '/')
            {
                if(display.textContent == '0')
                {
                    Display('0.');
                }
                else
                {
                    Display('.');
                }
                LastKey = key.textContent;
            }
        }
        else if(action === 'equalto')
        {
            if(LastKey != '+' && LastKey != '-' && LastKey != '*' && LastKey != '/')
            {
                OpCount = 0;
                Array.from(key.parentNode.children).forEach(k => k.classList.remove('pressed'));
                Display(key.textContent);
                calc.dataset.firstNumber = Operation(calc.dataset.operator,calc.dataset.firstNumber);
                display.textContent = calc.dataset.firstNumber;

                LastKey = key.textContent;
            }
        }
        else{
            Display(key.textContent);
            LastKey = key.textContent;

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
function Operation(operator,first){
    if(operator == 'add'){
        let Arr = display.textContent.split('+').pop();
        return parseInt(first) + parseInt(Arr[0]);
    }
    else if(operator == 'substract'){
        let Arr = display.textContent.split('-').pop();
        return parseInt(first) - parseInt(Arr[0]);
    }
    else if(operator == 'multiply'){
        let Arr = display.textContent.split('*').pop();
        return parseInt(first) * parseInt(Arr[0]);
    }
    else if(operator == 'divide'){
        let Arr = display.textContent.split('/').pop();
        return parseInt(first) / parseInt(Arr[0]);
    }
}
function preCalculate(first,operator){
    if(operator == 'add'){
        let Arr = display.textContent.split('+').pop();
        return parseInt(first) + parseInt(Arr[0]);
    }
    else if(operator == 'substract'){
        let Arr = display.textContent.split('-').pop();
        return parseInt(first) - parseInt(Arr[0]);
    }
    else if(operator == 'multiply'){
        let Arr = display.textContent.split('*').pop();
        return parseInt(first) * parseInt(Arr[0]);
    }
    else if(operator == 'divide'){
        let Arr = display.textContent.split('/').pop();
        return parseInt(first) / parseInt(Arr[0]);
    }
}
