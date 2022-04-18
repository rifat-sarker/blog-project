const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListenerJ('click',()=>{
    if(menu.className === 'hidden'){
        menu.classlist.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
});