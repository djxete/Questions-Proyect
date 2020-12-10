// /*=========== Variables ========*/

// const btns = [...document.querySelectorAll(".question-btn")];

// /*=========== Add Event Listener and functions ========*/


// btns.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//         //console.log(e.currentTarget);
//         const siblingElement = e.currentTarget.parentElement.parentElement;

//         siblingElement.classList.toggle("show-text");

//     })
// })


//=================== Another way to do it ========

//------ Variables ----

const articles = document.querySelectorAll(".question");

//=========== Add Event Listener and functions ========

articles.forEach(article => {


    let btnArticle = article.querySelector(".question-btn");

    btnArticle.addEventListener("click", () => {

        articles.forEach(question => {
            
            if(question !== article){
                question.classList.remove("show-text")
            }

        article.classList.toggle("show-text");


    })


})

})

