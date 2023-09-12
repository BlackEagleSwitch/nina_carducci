const itemGallery = document.querySelectorAll('.item-column');
const btn_filter = document.querySelectorAll('.nav-link');

for (let button of btn_filter) {
    button.addEventListener("click", () => {
        rebootStyle_btnFilter();   
        button.classList.add('active', 'active-tag'); 
        reloadGallery(button.dataset.imagesToggle);
    });
}

function rebootStyle_btnFilter() {
    for (let button of btn_filter) {
        button.classList.remove('active', 'active-tag');
    }
}

function reloadGallery(categoryGallery) {
    for (let item of itemGallery) {
        item.style.display = 'none';
        const categoryItem = item.children[0].dataset.galleryTag;

        if(categoryGallery === "all" 
        || categoryGallery === categoryItem) {
            item.style.display = 'block';
        }
    }
}