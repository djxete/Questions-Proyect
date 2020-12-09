//=========== Variables ========
const plusIcon = [...document.querySelectorAll(".plus-icon")];
const minusIcon = [...document.querySelectorAll(".minus-icon")];
console.log(minusIcon);
const questionsText= [...document.querySelectorAll(".question-text")];
//console.log(questionsText);

//======== Add Event Listener ==========
let numeroArray = 0;




plusIcon.forEach(icon =>{
    icon.addEventListener("click",()=>{
        sacarTexto(numeroArray);
        numeroArray++;
    })
})

minusIcon.forEach(iconMinus =>{
    iconMinus.addEventListener("click", ()=>{
        cambiarIcono(numeroArray);
    })
})


const sacarTexto = function(elemento){
    questionsText[numeroArray].style.display = "block";

}

const cambiarIcono = function(elemento){
    elemento.style.display = "block";
}