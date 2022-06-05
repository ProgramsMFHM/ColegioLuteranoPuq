let contenedor = document.querySelector(".new__container"); //Guardo el contenedor de las noticias en una variable.
let noticias = document.createDocumentFragment(); //Creo un fragmento HTML interno dentro del JavaScript para usarlo como contenedor provisional.

const infoNoticias = [

    // ["Título de la noticia", "Descripción de la Noticia", "Ruta de la noticia", "Información de Foto"]
    // ["", "", "", ``]

    ["Trilogía Musical (Dia Nacional de las Artes)","EEn el marco de haberse celebrado el día nacional de las artes,se presentaron tres corrientes musicales en el colegio luterano junto a los profesores que imparten éstas disciplinas", "/news/2022/Mayo/diaNacionalDeLasArtes.html", `src="/sources/Images/Colegio/Celebraciones/Dia de las artes 2022/Bronces y Maderas 1.webp" style="object-position: center 40%;" alt="Orquesta Brass Luther Colegio Luterano" class="new__principalImage"`],

    ["Saludo día internacional del trabajador","El directorio de la <b>IELMA</b> saluda a los trabajadores y trabajadoras del <b>Colegio Luterano</b> por el día internacional del trabajador.","/sources/documents/informative-images/Saludo día del Trabajador 2022.webp", `src="/sources/Images/Imágen_colegio.webp" alt="Día internacional del trabajador"`],

    ["Día del Libto en el Colegio Luterano","El <b>Colegio Luterano</b> celebra a lo grande el día del libro con la reapertura de la <b>Biblioteca CRA</b> y la actividad: '<b>Murales: Tipos de mundo y literatura</b>'.","/news/2022/Abril/diaDelLibro.html", `src="/sources/Images/Colegio/Celebraciones/Día del libro 2022/Día del libro 2022 Biblioteca CRA.webp" style="object-position: center 60%;" alt="Estudiantes en Biblioteca CRA" style="object-position: center 65%;"`],

    ["Bingo en el Condominio de Viviendas Tuteladas","El Ministerio de Diaconía de la Iglesia Evangélica Luterana en Magallanes junto al profesor jefe <b>Rodolfo Muñoz</b>, estudiantes y apoderados del 4° año medio de nuestro Colegio realizaron una visita recreativa y de acompañamiento al Condominio de Viviendas Tuteladas para personas mayores en la Comuna de Punta Arenas.","/news/2022/Abril/bingoCondominioDeViviendasTuteladas.html", `src="/sources/Images/Colegio/Colegio-luterano-en-el-exterior/Bingo Condominio De Viviendas Tuteladas.webp" style="object-position: center 40%;" alt="Bingo en el Condominio de Viviendas Tuteladas" style="object-position: center 65%;"`],

    ["Inicio de la semana del libro en el Colegio Luterano","El 22 de Abril ad portas del Día internacional del libro, los Chicos y Chicas del Taller de Teatro del Colegio Luterano, con la orientación del profesor <b>Mauricio Bahamondes</b>, dieron vida a diversos personajes de la Literatura.","/news/2022/Abril/inicioSemanaDelLibro.html", `src="/sources/Images/Colegio/Celebraciones/Actores Inicio Semana del Libro.webp" style="object-position: center 15%;" alt="Participantes del taller de teatro (2022)"`],

    ["Funcionarios y Estudiantes en actividad por la Semana Santa (2022)", "Actividad espiritual y socioemocional en torno a la reflexion de semana santa con funcionarias, funcionarios y estudiantes del Colegio Luterano.", "/news/2022/Abril/semanaSanta.html", `src="/sources/Images/Colegio/Reuniones-y-cultos/Actividad Semana Santa Profesores 1.webp" alt="Funcionarios en actividad de Semana Santa"`],

    ["Visita del Conejo de Pacua al Colegio Luterano. (2022)", "Visita del conejito de pascua a los estudiantes de prekinder a segundo básico.", "/news/2022/Abril/conejoDePascua.html", `src="/sources/Images/Colegio/Celebraciones/Conejo de Pascua Colegio Luterano 2022 1.webp" alt="Conejo de pascua en el Colegio Luterano"`],

    ["Nuevo centro de Estudiantes del Colegio Luterano.", "Les presentamos al nuevo centro de estudiantes elegido en nuetro colegio.", "/news/2022/Abril/centroDeEstudiantes.html", `src="/sources/Images/Colegio/Grupos/Consejo de Estudiantes 2022 1.webp" style="object-position: center 31%;" alt="Centro de Estudiantes Colegio Luterano (2022)"`],

    ["Culto de instalación de nuevas funcionarias en el Colegio Luterano", "El domingo 6 de Marzo del 2022 la <b>Iglesia Evangélica Luterana en Magallanes (IELMA)</b> ofició en el culto eucarístico la instalación de las nuevas funcionarias del  <b>Colegio Luterano</b>.", "/news/2022/Marzo/nuevasFuncionarias.html", `src="/sources/Images/Colegio/Reuniones-y-cultos/nuevasFuncionarias.webp" alt="Nuevas Funcionarias Colegio Luterano"`]

]; //Este es un array donde estará la información de las noticias.



function newsPage(){

    for (const noticia of infoNoticias) { //Este for se repetirá tantas veces como elementos tenga el array "infoNoticias". La variable "noticia" contendrá la información de cada noticia en cada iteración.

        let infoNoticia = document.createElement("A"); //Creo un elemento A HTML delntro del JavaScript
        infoNoticia.classList.add("gallery__item", "nonStyleLink", "pagePrevew");
        infoNoticia.setAttribute("href", `${noticia[2]}`);
        infoNoticia.setAttribute("target", "_blank");

        infoNoticia.innerHTML =`

            <div class="pagePrevew__description">
                <p>
                    ${noticia[1]}
                </p>
            </div>

            <img ${noticia[3]} class="gallery__image">

            <p class="gallery__text">${noticia[0]}</p>`; 

        noticias.appendChild(infoNoticia); //Añadimos el artículo como un hijo del elemeto "noticias" cosa que se hará múltiples veces.
    }

    contenedor.appendChild(noticias); //Añado todo "noticias" como hijo de "contenedor".
}

function newsSlider(){

    for (let i = 0; i<4; i++) {

        let noticia = infoNoticias[i];
        let infoNoticia = document.createElement("A"); 
        infoNoticia.classList.add("slider__item");
        infoNoticia.setAttribute("href", `${noticia[2]}`);
        infoNoticia.setAttribute("target", "_blank");

        infoNoticia.innerHTML =`

            <img ${noticia[3]} class="slider__image">
                    
            <div class="slider__information">

                <h3 class="slider__title">${noticia[0]}</h3>

                <p class="slider__text">${noticia[1]}</p>

            </div>`

        noticias.appendChild(infoNoticia);
    }

    contenedor.appendChild(noticias);
    
}

function lastNews(){

    let lastNewsTitle = document.createElement("H2");
    lastNewsTitle.classList.add("subtitle")
    noticias.appendChild(lastNewsTitle);
    let lastNewsContainer = document.createElement("DIV");
    lastNewsContainer.classList.add("gallery");
    lastNewsTitle.innerHTML = "Últimas noticias";

    for (let i = 0; i<3; i++) {

        let noticia = infoNoticias[i];
        let infoNoticia = document.createElement("A");
        infoNoticia.classList.add("gallery__item", "nonStyleLink", "pagePrevew");
        infoNoticia.setAttribute("href", `${noticia[2]}`);

        infoNoticia.innerHTML =`

            <div class="pagePrevew__description">
                <p>
                    ${noticia[1]}
                </p>
            </div>

            <img ${noticia[3]} class="gallery__image">

            <p class="gallery__text">${noticia[0]}</p>`; 

        lastNewsContainer.appendChild(infoNoticia);
    }

    noticias.appendChild(lastNewsContainer);

    contenedor = document.querySelector(".new__body");

    contenedor.appendChild(noticias);

}