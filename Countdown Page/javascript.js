var timer = document.getElementById('timer');

 var a = setInterval(function(){
    var i = timer.innerHTML;
    console.log(i);
    i -= 1;
    timer.innerHTML = i;
    timer.style.fontSize = i * 100 +'px';
    if(i % 2 === 0)
    {
        timer.style.backgroundColor = "Red";
    }
    else
    {
        timer.style.backgroundColor = 'green'
    }

    if(i === 0)
    {
        clearInterval(a);
    }
}, 1000);