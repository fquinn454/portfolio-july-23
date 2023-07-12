const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSsections = document.querySelector('.main-content');

function pageTransitions(){
    // button click active class
    for(let i = 0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', (event) =>{
            document.querySelector('active-btn').classList.remove('active-btn');
            event.target.classList.add('active-btn');
        })
    }

    // Sections active
    allSsections.addEventListener('click', (event) =>{
        const id = event.target.dataset.id;
        if(id){
            // remove selected from the other buttons
            sectBtn.forEach((btn) => {
                btn.classList.remove('active-btn');
            });
    
            event.target.classList.add('active-btn');

            sections.forEach((section) =>{
                section.classList.remove('active');
            });
            
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
        
}

pageTransitions();