const menu_page = document.getElementById("menu");
const background_blur = document.getElementById("background_blur");

function open_menu() {
    menu_page.classList.add("show");
    menu_page.classList.remove("hide");
    background_blur.style.visibility = "visible";
}

function blur_background() {
    setTimeout(() => {
        menu_page.classList.add("hide");
        menu_page.classList.remove("show");
        background_blur.style.visibility = "hidden";
    }, 100);
}

const plants = document.querySelectorAll('.plant');

plants.forEach(plant => {
    plant.addEventListener('click', (e) => {
        const el = e.currentTarget;
        const id = el.dataset.id;
        window.location.href = `../Plant/Plant.html?id=${id}`;
    });
});