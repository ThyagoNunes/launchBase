const modalOverlay = document.querySelector(".modal-overlay")
const titleOverlay = document.querySelector(".title")
const makeOverlay = document.querySelector(".make")
const recipes = document.querySelectorAll(".card-recipe")

for (let recipe of recipes) {

        recipe.addEventListener('click', function(){

        const getPhoto = recipe.getAttribute("id")
        const getTitle = recipe.getAttribute("id")
        const getMake = recipe.getAttribute("id")

        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `${getPhoto}`
        titleOverlay.querySelector('iframe').src = `${getTitle}`
        
    })
}
document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active');
})


/* document.getElementsByClassName('title').innerHTML = `${nameFood}`;
document.getElementsByClassName('.make').innerHTML = `${makeFor}`;

var x = document.getElementById("myAnchor").getAttribute("target");
const titleFood = recipe.getElementById("c-title")
const nameMakeFor = recipe.getElementById("c-make")

const showTitle = showTitle.innerHTML=`${titleFood}`
const showNameCreatorRecipe = showTitle.innerHTML=`${nameMakeFor}`

modalOverlay.querySelector('iframe').src = `${showTitle}` 

var p = document.getElementById("p1");
p.innerText="Texto Qualquer"; 
document.getElementsByClassName('results').innerHTML = 'Hello World!'; */