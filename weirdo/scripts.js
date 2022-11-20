window.onscroll = function() {myFunction()};
var randomColor = Math.floor(Math.random()*16777215).toString(16);

function getRandomColor(){
    return  Math.floor(Math.random()*16777215).toString(16);
}
function myFunction() {
    console.log('hit')
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const body =   document.getElementById("text-overlay");
    console.log('body',body)
body.style.border = `5px dotted #${getRandomColor()}`;
}

