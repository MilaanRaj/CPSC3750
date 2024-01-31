let buttonRed = document.getElementById('buttonRed');

buttonRed.addEventListener('click',function() {
    let bgColor = document.getElementById('bgColor');
    bgColor.style.background = "red";
})

let buttonGreen = document.getElementById('buttonGreen');

buttonGreen.addEventListener('click',function() {
    let bgColor = document.getElementById('bgColor');
    bgColor.style.background = "green";
})
let buttonBlue = document.getElementById('buttonBlue');

buttonBlue.addEventListener('click',function() {
    let bgColor = document.getElementById('bgColor');
    bgColor.style.background = "blue";
})

var clickRed = 0; 
var clickGreen = 0;
var clickBlue = 0;


function ClickcounterRed()
{
    clickRed = clickRed + 1;
    document.getElementById('count1').innerHTML = clickRed;
}

function ClickcounterGreen()
{
    clickGreen = clickGreen + 1;
    document.getElementById('count2').innerHTML = clickGreen;
}

function ClickcounterBlue()
{
    clickBlue = clickBlue + 1;
    document.getElementById('count3').innerHTML = clickBlue;
}

var hoverRed = 0;
var hoverGreen = 0;
var hoverBlue = 0;

function onHoverRed()
{
    hoverRed++;
    document.getElementById('hover1').innerHTML = hoverRed;
}

function onHoverGreen()
{
    hoverGreen++;
    document.getElementById('hover2').innerHTML = hoverGreen;
}

function onHoverBlue()
{
    hoverBlue++;
    document.getElementById('hover3').innerHTML = hoverBlue;
}


