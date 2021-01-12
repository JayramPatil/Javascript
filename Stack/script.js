var mar = 10;
var i = 2
var push = document.getElementById('push');
var pop = document.getElementById('pop');
var c = document.getElementById('secDiv');
var Top = document.getElementById('top');
var topN = document.getElementById('topN');


push.addEventListener('click', function(){

    var elem = document.getElementById('element');

    if(c.offsetHeight > mar+60 && mar != 10){

        var d = document.createElement('div');

        d.className = elem.className;
        d.id = mar;
        d.style.marginBottom =  mar + "px";
        d.textContent = i++;
        Top.style.marginBottom = (mar+60) + "px";
        topN.style.marginBottom = (mar+70) + "px";

        mar += 60;

        c.appendChild(d);
    }
    else if(mar == 10){
        topN.style.marginBottom = (mar+70) + "px";
        Top.style.marginBottom = (mar+60) + "px";
        elem.style.backgroundColor = "white";
        elem.textContent = "1";
        mar+=60
    }
    else
    {
        alert("Stack Is Full !!! Cant Insert New Element Because Stack Is Already Full.");

    }
})

pop.addEventListener('click', function(){

    var elem = document.getElementById('element');

    mar -= 60;

    if(0 < mar-60 ) {

        var d = document.getElementById(mar.toString());
        d.textContent = "";
        Top.style.marginBottom = mar + "px";
        topN.style.marginBottom = (mar+10) + "px";
        i--;
        c.removeChild(d);
        console.log(d.style.marginBottom);

    }
    else if(mar == 10){
        elem.style.backgroundColor = "lightcoral";
        elem.textContent = "";
        mar = 10;
        Top.style.marginBottom = mar + "px";
        topN.style.marginBottom = (mar+10) + "px";
    }
    else{
        alert("Stack Is Empty !!! Cant POP Any Element Because Stack Is Already Empty.");
        mar = 10;

    }
})
