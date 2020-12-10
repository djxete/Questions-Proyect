//=========== Variables ========

const btns = [...document.querySelectorAll(".question-btn")];

//=========== Add Event Listener and functions ========


btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        //console.log(e.currentTarget);
        const siblingElement = e.currentTarget.parentElement.parentElement;

        siblingElement.classList.toggle("show-text");

    })
})





