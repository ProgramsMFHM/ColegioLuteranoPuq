const menuButton = document.querySelector(".menuBtn");
const menu = document.querySelector(".menuContainer");
const subMenuButtons = document.querySelectorAll(".subMenuBtn");

menuButton.addEventListener("click", () =>{

    menu.classList.toggle("showMenu");

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