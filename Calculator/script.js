let buttons = document.querySelector('.keyboard')
let display = document.getElementById('dis')


buttons.addEventListener('click',function(e){
    let i = e.target;
    console.log(i.textContent);
    if(display.textContent == '0'){
        display.textContent = i.textContent;

    }
    else if(i.textContent == 'AC')
    {
        display.textContent = '';
    }
    else if(i.textContent == '=')
    {
        Operation('*');
    }
    else{
        display.textContent = display.textContent + i.textContent;
    }
})

function Operation(operator){
    if(operator == '+'){
        let Arr = display.textContent.split('+');
        display.textContent = parseInt(Arr[0]) + parseInt(Arr[1]);
    }
    else if(operator == '-'){
        let Arr = display.textContent.split('+');
        display.textContent = parseInt(Arr[0]) + parseInt(Arr[1]);
    }
    else if(operator == '*'){
        let Arr = display.textContent.split('&times;');
        display.textContent = parseInt(Arr[0]) * parseInt(Arr[1]);
    }
    else if(operator == '+'){
        let Arr = display.textContent.split('+');
        display.textContent = parseInt(Arr[0]) + parseInt(Arr[1]);
    }
}