var char = document.body.addEventListener('keypress', function(e){

    var p1 = document.getElementById("asciichar");
    var p2 = document.getElementById("asciivalue");

    p1.innerHTML = e.key  
    p2.innerHTML = e.keyCode;

})