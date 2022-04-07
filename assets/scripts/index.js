// const menuicon = document.getElementById('menu-icon');
// const menu = document.getElementById('menu');

// menuicon.addEventListener('click', ()=> {
//     if (menu.className === 'hidden-menu') {
//         menu.classList.remove('hidden-menu');
//     }
//     else {
//         menu.classList.add('hidden-menu');
//     }
// })

const menuicon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
menuicon.addEventListener("click", ()=> {
    if (menu.className == 'hidden') {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    }
    // console.log("clicked");
});