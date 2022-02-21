const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-container");
const subMenuButtons = document.querySelectorAll(".submenu-btn");

menuButton.addEventListener("click", () =>{

    menu.classList.toggle("show-menu");

})

    for (let i = 0; i < subMenuButtons.length; i++) {
        subMenuButtons[i].addEventListener("click",()=>{
            if(window.innerWidth < 1577){
                const subMenu = subMenuButtons[i].nextElementSibling;
                const height = subMenu.scrollHeight;

                if(subMenu.classList.contains("desplegar")){
                    subMenu.classList.remove("desplegar");
                    subMenu.removeAttribute("style");
                }
                else{
                    subMenu.classList.add("desplegar");
                    subMenu.style.height = height+"px";
                }
            }            
        })
    }