const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.card-recipe')

for (let recipe of recipes) {
    recipe.addEventListener('click', function(){
        const getId = recipe.getAttribute("id")
        modalOverlay.classList.add('active');
       /*  document.getElementById("img").src = `${getId}.png`
        document.write("<img src=/assets/`${getId}` ") */
    })
}

document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active');
})
