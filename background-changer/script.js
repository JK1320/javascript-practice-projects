const btn = document.getElementById("btn");
const text = document.getElementById("text"); 


btn.addEventListener("click", ()=> {
    document.body.style.background = randomBg();
    text.innerText = randomBg();
});


function randomBg(){
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}