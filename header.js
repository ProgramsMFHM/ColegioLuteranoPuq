// Including the Header

body = document.querySelector("body");

let temporalHeader = document.createElement("HEADER");

temporalHeader.classList.add("header")

temporalHeader.innerHTML =`
    <a  href="/index.html" class="heading">
        <img src="/sources/Images/shields/Escudo_colegio.webp" alt="Escudo colegio luterano de Punta Arenas" class="heading__image">
        <div class="heading__text">
            <h1 class="heading__text-1">Colegio Luterano</h1>
            <p class="heading__text-2">Punta Arenas</p>
        </div>
    </a>

    <div class="menuBtn">

        <i class="fas fa-bars"></i>

    </div>

    <nav class="menuContainer">
        <ul class="menu">
            <li class="menu__li"><a href="/index.html"><i class="fa-solid fa-house"></i> Inicio</a></li>
            <li class="menu__li containerSubMenu">
                <a href="#" class="subMenuBtn">¿Quienes somos?<i class="fa-solid fa-angle-down subMenuBtn__icon"></i></a>
                <ul class="subMenu">
                    <li class="subMenu__li"><a href="/misionYVision/misionYVision.html">Misión y Visión</a></li>
                    <li class="subMenu__li"><a href="/working.html">Historia</a></li>
                    <li class="subMenu__li"><a href="/working.html">Iglesia Evangélica Luterana</a></li>
                    <li class="subMenu__li"><a href="/working.html">Información</a></li>
                    <li class="subMenu__li"><a href="/sources/documents/pdf/PEI-colegio-luterano.pdf" target="0_blank">Proyecto Educativo Institucional</a></li>
                </ul>
            </li>
            <li class="menu__li"><a href="/funcionarios/funcionarios.html">Equipo de trabajo</a></li>
            <li class="menu__li"><a href="/sources/documents/documents.html">Documentos</a></li>
            <li class="menu__li"><a href="/news/news.html">Noticias</a></li>
            <li class="menu__li"><a href="/working.html">Contacto</a></li>
        </ul>
    </nav>
`;

body.appendChild(temporalHeader);

// Creating the responsive menu function

const menuButton = document.querySelector(".menuBtn");
const menu = document.querySelector(".menuContainer");
const subMenuButtons = document.querySelectorAll(".subMenuBtn");

menuButton.addEventListener("click", () =>{menu.classList.toggle("showMenu");})

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