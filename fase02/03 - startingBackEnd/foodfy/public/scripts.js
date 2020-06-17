const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.card-recipe')

for ( let recipe of recipes ) {
    recipe.addEventListener("click", function(){
        const recipeId = recipe.getAttribute("id")
        window.location.href = `/recipes/:${recipeId}`
/*         window.location.href = `/:${recipeId}` */
    })
}



