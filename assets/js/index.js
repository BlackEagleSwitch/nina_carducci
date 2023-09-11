const btn_filter = document.querySelectorAll('.btn-filter');

for (let button of btn_filter) {
    button.addEventListener('click', () => {        
        rebootButtonStyle();                
        button.classList.add('actif');
        rebootGallery(button.id);
    });
}

function rebootGallery(actif) {
    const allPicture = document.querySelectorAll('.gallery-item');

    for (let picture of allPicture) {
        picture.style.display = 'none';
        
        if(actif === "all" || actif === picture.children[0].id) {
            picture.style.display = 'block';
        }
    }
}

function rebootButtonStyle() {
    for (let btn of btn_filter) {
        btn.classList.remove('actif');
    }
}