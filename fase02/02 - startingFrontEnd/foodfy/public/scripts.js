const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.card-recipe')

for (let recipe of recipes) {
    
    recipe.addEventListener('click', function(){
        const getPhoto = recipe.getAttribute("id")
        const getTitle = recipe.getElementsByClassName(".title")
        const getMake = recipe.getElementsByClassName("make")

        modalOverlay.classList.add('active');
        const title = document.querySelector('.card-name-food')
        modalOverlay.querySelector('iframe').src = `${getPhoto}` 
    })
}

/* return info */

document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active');
})
