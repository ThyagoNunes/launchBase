const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for ( let card of cards ){
    card.addEventListener('click',function(){
        const course = card.getAttribute("id")
        modalOverlay.classList.add('active');

        if(modalOverlay.classList.contains('active') == true){
            document.querySelector('.maximize-modal').addEventListener('click', function(){
                modalOverlay.classList.add('maximize')  
            })
           
        }

        if(modalOverlay.classList.contains('active') == true){
            document.querySelector('.maximize-modal').addEventListener('click', function(){
                modalOverlay.classList.add('maximize')  
                    document.querySelector('.close-modal').addEventListener('click', function(){
                        modalOverlay.classList.remove('maximize')
                        modalOverlay.classList.remove('active')  
                    })
            })
            document.querySelector('.minimize-modal').addEventListener('click', function(){
                modalOverlay.classList.add('minimize')    
            })
        }
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${course}`
    })
}


document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active');
    modalOverlay.classList.remove('maximixe');
    modalOverlay.classList.remove('minimize');
})

document.querySelector('.maximize-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('maximize');
    modalOverlay.classList.remove('active');
    modalOverlay.classList.remove('minimize');
})

document.querySelector('.minimize-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('minimize');
    modalOverlay.classList.remove('active');
    modalOverlay.classList.remove('maximixe');
})