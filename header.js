// Including the Header

body = document.querySelector("body");

let temporalHeader = document.createElement("HEADER");

temporalHeader.classList.add("header")

temporalHeader.innerHTML =`
    <a  href="/index.html" class="heading">
        <img src="/sources/Images/shields/Escudo_colegio.webp" alt="Escudo colegio luterano de Punta Arenas" class="heading__image">
        <div class="heading__text">
            <p class="heading__text-1">Colegio Luterano</p>
            <p class="heading__text-2">Punta Arenas</p>
        </div>
    </a>

    <div class="menuBtn">

        <i class="fas fa-bars"></i>

    </div>

    <nav class="menuContainer">
        <ul class="menu">
            <li class="menu__li"><a href="/index.html" class="nonStyleLink"><i class="fa-solid fa-house"></i> Inicio</a></li>
            <li class="menu__li containerSubMenu">
                <a href="#" class="subMenuBtn nonStyleLink">¿Quienes somos?<i class="fa-solid fa-angle-down subMenuBtn__icon"></i></a>
                <ul class="subMenu">
                    <li class="subMenu__li"><a href="/misionYVision/misionYVision.html" class="nonStyleLink">Misión y Visión</a></li>
                    <li class="subMenu__li"><a href="/working.html" class="nonStyleLink">Historia</a></li>
                    <li class="subMenu__li"><a href="https://www.youtube.com/watch?v=x2YgY6dfnL8" target="_blank" class="nonStyleLink">Iglesia Evangélica Luterana</a></li>
                    <li class="subMenu__li"><a href="/working.html" class="nonStyleLink">Información</a></li>
                    <li class="subMenu__li"><a href="/sources/documents/pdf/PEI Colegio Luterano.pdf" target="_blank" class="nonStyleLink">Proyecto Educativo Institucional</a></li>
                </ul>
            </li>
            <li class="menu__li containerSubMenu">
                <a href="#" class="subMenuBtn nonStyleLink">Reglamento Interno<i class="fa-solid fa-angle-down subMenuBtn__icon"></i></a>
                <ul class="subMenu">
                    <li class="subMenu__li"><a href="/sources/documents/pdf/Manual De Convivencia 2022.pdf" class="nonStyleLink">Reglamento interno y manual de convivencia 2022</a></li>
                    <li class="subMenu__li"><a href="/sources/documents/pdf/Protocolo de actuación maltrato de adulto a alumno.pdf" class="nonStyleLink">Protocolo de actuación maltrato de adulto a alumno</a></li>
                    <li class="subMenu__li"><a href="/sources/documents/pdf/Plan de gestión convivencia escolar 2022.pdf" class="nonStyleLink">Plan de gestión convivencia escolar 2022</a></li>
                    <li class="subMenu__li"><a href="/sources/documents/pdf/PEI Colegio Luterano.pdf" class="nonStyleLink">Proyecto educativo institucional</a></li>
                    <li class="subMenu__li"><a href="/sources/documents/pdf/Reglamento de Evaluación y Promoción Escolar 2022.pdf" class="nonStyleLink">Reglamento de evaluación y promoción escolar 2022</a></li>
                    <li class="subMenu__li"><a href="/sources/documents/pdf/Reglamento de Admisión y Matrículas 2023.pdf" class="nonStyleLink">Reglamento de admisión y matrículas 2023</a></li>
                    <li class="subMenu__li"><a href="/sources/documents/pdf/Reglamento de Becas 2023.pdf" class="nonStyleLink">Reglamento de becas 2023</a></li>
                </ul>
            </li>
            <li class="menu__li"><a href="/funcionarios/funcionarios.html" class="nonStyleLink">Equipo de trabajo</a></li>
            <li class="menu__li"><a href="/sources/documents/documents.html" class="nonStyleLink">Documentos</a></li>
            <li class="menu__li"><a href="/news/news.html" class="nonStyleLink">Noticias</a></li>
            <li class="menu__li"><a href="/videos.html" class="nonStyleLink">Videos</a></li>
            <li class="menu__li"><a href="/contacto.html" class="nonStyleLink">Contacto</a></li>
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