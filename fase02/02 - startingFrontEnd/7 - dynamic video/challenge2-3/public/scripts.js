const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click',function(){
        const videoId = card.getAttribute("id")

        modalOverlay.classList.add('active')

       if (modal.classList.contains('active') == true ){
        modalOverlay.classList.remove('active');
       }

        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${videoId}`
    })
}

document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active');
})

document.querySelector('.maximize-modal').addEventListener('click',function(){
    modalOverlay.classList.contains('maximize');
})