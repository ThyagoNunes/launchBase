const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click',function(){
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active');


        if(modalOverlay.classList.contains('active') == true ) {
            document.querySelector('.maximize-modal').addEventListener('click', function(){
                modalOverlay.classList.add('active');
                modalOverlay.classList.add('maximize'); 
            })
            document.querySelector('.minimize-modal').addEventListener('click', function(){
                modalOverlay.classList.add('active');
                modalOverlay.classList.add('minimize'); 
            })
        }


        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${videoId}`
    })
}

document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active');
    modalOverlay.classList.remove('maximize');
    modalOverlay.classList.remove('minimize');
})

document.querySelector('.maximize-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active');
    modalOverlay.classList.remove('maximize');
    modalOverlay.classList.remove('minimize');
})

document.querySelector('.minimize-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('minimize');
})


