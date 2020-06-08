const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.card-recipe')

for (let recipe of recipes) {
        recipe.addEventListener('click', function(){
        const getPhoto = recipe.getAttribute("id")
/*      const nameFood = recipe.querySelector('.title')
        const makeFor = recipe.querySelector('.make')  */
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `${getPhoto}` 
        document.querySelector('.title').innerHTML = `${nameFood}`;
        document.querySelector('.make').innerHTML = `${makeFor}`;
        
    })
}
document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active');
})
