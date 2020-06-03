const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.card-recipe')

for (let recipe of recipes) {
    recipe.addEventListener('click', function(){
        const getPhoto = recipe.getAttribute("id")
        const getTitle = recipe.titleRecipe.getAttribute("id")
        const getMaker = recipe.makeFor.getAttribute("id")
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `${getPhoto}`
        modalOverlay.querySelector('iframe').src = `${getTitle}`
        modalOverlay.querySelector('iframe').src = `${getMaker}`

    })
}

document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active');
})
