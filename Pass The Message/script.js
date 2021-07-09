let textBox = document.getElementById('text')
let btn = document.getElementById('btn')
let lastMsg = document.getElementById('lastmsg')
let warning = document.getElementById('warning')

btn.addEventListener('click',function(){
    console.log(textBox.value)
    if(textBox.value != "")
    {
        lastMsg.textContent = textBox.value
        textBox.value = ""
    }
    else
    {
        warning.style.display = "block"
        setTimeout(() => {
            warning.style.display = "none"
        }, 2000);      
    }
})
