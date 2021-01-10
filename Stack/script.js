var mar = 10;
var i = 2
var push = document.getElementById('push');
var pop = document.getElementById('pop');
var c = document.getElementById('secDiv');

push.addEventListener('click', function(){

    var elem = document.getElementById('element');

    if(c.offsetHeight > mar+60 && mar != 10){

        var d = document.createElement('div');

        d.className = elem.className;
        d.id = mar;
        d.style.marginBottom =  mar + "px";
        d.textContent = i++;

        mar += 60;

        c.appendChild(d);
    }
    else if(mar == 10){

        elem.style.backgroundColor = "white";
        elem.textContent = "1";
        mar+=60
    }
})

pop.addEventListener('click', function(){

    var elem = document.getElementById('element');

    mar -= 60;

    if(0 < mar-60 ) {

        var d = document.getElementById(mar.toString());
        d.textContent = "";
        i--;
        c.removeChild(d);

    }
    else{

        elem.style.backgroundColor = "lightcoral";
        elem.textContent = "";
        mar = 10;
    }
})
