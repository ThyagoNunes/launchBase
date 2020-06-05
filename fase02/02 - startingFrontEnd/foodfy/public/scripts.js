const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.card-recipe')
const infos = document.querySelector('.modal')

for (let recipe of recipes) {
        recipe.addEventListener('click', function(){
        const getPhoto = recipe.getAttribute("id")
        const getIdPhot = recipe.getElementsByClassName('recipe.id')
        document.querySelector()
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `${getPhoto}` 
    })
}

for (let info of infos) {
        info.addEventListener('click', function(){
        const getTitle = recipe.getAttribute("id")
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `${getPhoto}` 
    })
}


document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active');
})
