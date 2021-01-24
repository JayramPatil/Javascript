var display = document.getElementById('text');
var img = document.getElementById('img');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('buy');

var heart = document.getElementById('heart');

var c1 = document.getElementById('colour1');
var c2 = document.getElementById('colour2');
var c3 = document.getElementById('colour3');
var c4 = document.getElementById('colour4');

var t;
var a;
function f(){
    var time = new Date();

    display.textContent = (time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds());
    t = setTimeout(() => {
        f();
    }, 1000);
}
function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function h(){
    var random = getRandomInteger(80,100);

    display.textContent = random;
    a = setTimeout(() => {
        size();
        h();
    }, 1000);
}
var c,d=18;
function size(){
    if(d > 20){
        d = 18;
    }
    heart.style.width = d + '%';
    d++;

}

btn1.addEventListener('click', function (){
    heart.style.visibility = 'hidden';
    f();
    clearTimeout(a);
})
btn2.addEventListener('click', function (){
    heart.style.visibility = 'visible';
    h();
    clearTimeout(t);

})
function border(){
    c1.style.borderColor = "black";
    c2.style.borderColor = "black";
    c3.style.borderColor = "black";
    c4.style.borderColor = "black";
}

c1.addEventListener('click', function (){
    img.src = "https://i.imgur.com/PTgQlim.png";
    border();
    c1.style.borderColor = "white";
})
c2.addEventListener('click', function (){
    img.src = "https://i.imgur.com/iOeUBV7.png";
    border();
    c2.style.borderColor = "white";
})
c3.addEventListener('click', function (){
    img.src = "https://i.imgur.com/Mplj1YR.png";
    border();
    c3.style.borderColor = "white";
})
c4.addEventListener('click', function (){
    img.src = "https://i.imgur.com/xSIK4M8.png";
    border();
    c4.style.borderColor = "white";
})
btn3.addEventListener('click', function (){
    alert("All Products Are Out Of Stock..... \nSo Dont Click Buy Now Button   : )")
})

f();
