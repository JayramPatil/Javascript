var btn = document.getElementById('btn-click');
var bg = document.querySelector('header div');

function button(){
    bg.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
}

btn.onclick = button;

btn.addEventListener('mouseover', button);