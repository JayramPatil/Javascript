var char = document.body.addEventListener('keypress', function(e){

    var p = document.getElementById("ascii");

    p.innerHTML = e.key + " " + e.keyCode;

})