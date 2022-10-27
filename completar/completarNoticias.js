let contenedor = document.querySelector(".new__container"); //Guardo el contenedor de las noticias en una variable.
let noticias = document.createDocumentFragment(); //Creo un fragmento HTML interno dentro del JavaScript para usarlo como contenedor provisional.

const infoNoticias = [

    // ["Título de la noticia", "Descripción de la Noticia", "Ruta de la noticia", "Información de Foto"]
    // ["", "", "", ``]

    ["Jornada de Retiro y Convivencia Escolar -  2º  Medio",`El 25 de octubre la <b>Capellán</b> del Colegio realizó la Jornada de <i>Retiro y Convivencia Escolar</i> con <i>2º Medio</i> <b>“Eres tu o soy yo?”</b>.`, "/news/2022/Octubre/RetiroYConvivenciaEscolar2Medio.html", `src="/sources/Images/Colegio/Actividades-de-integración/Convivencia escolar 2M 2022/Curso completo.webp" alt="2° Medio, Convivencia escolar" style="object-position: center 31%;"`],
    
    ["Jornadas de Rehabilitación Magallanes - 2022",`En el marco de la<b> 35° versión de las Jornadas por la Rehabilitación</b>, liderada por el <i>Club de Leones Punta Arenas Cruz del Sur</i>, los distintos estamentos que componen la comunidad <b>Colegio Luterano</b>, se hicieron presentes el sábado 22 de octubre, para hacer entrega de la suma recaudada, fruto del trabajo, la unidad y el espíritu solidario que nos caracteriza.`, "/news/2022/Octubre/JornadasDeRehabilitación.html", `src="/sources/Images/Colegio/Colegio-luterano-en-el-exterior/Jornadas de Rehabilitación Magallanes (35)/Colegios.webp" alt="Presentación de los colegios en las jornadas de rehabilitación" style="object-position: center 25%;"`],

    ["Jornada de Retiro y Convivencia Escolar -  7º  Básico",`El 08 de septiembre, se realizó la <i>"Jornada de Retiro y Convivencia Escolar"</i>, con 7º  Básico su y profesora Jefe <b>Paula Bahamonde</b>.`, "/news/2022/Septiembre/RetiroYConvivenciaEscolar7Básico.html", `src="/sources/Images/Colegio/Actividades-de-integración/Convivencia escolar 7B 2022/Curso completo.webp" alt="7° Básico, Convivencia escolar"`],

    ["Colegio Luterano en la Feria de Matemáticas organiazda por el Charles Darwin","Una delegación del colegio luterano junto a la docente <b>Amelia Caucamán</b> participaron en la <i>'Feria de matemáticas'</i> organizada por el establecimiento educativo <b>Charles Darwin</b>.", "/news/2022/Septiembre/DesfileBernardoOHiggins.html", `src="/sources/Images/Colegio/Colegio-luterano-en-el-exterior/Feria de Matemáticas Darwin 2022/premio.webp" style="object-position: center 30%;" alt="Reconocimiento obtenido en la feria"`],

    ["Bunkasai, Festival Cultural Luterano","El Colegio Luterano junto a la Biblioteca del establecimiento realizo el dia sábado 27 de Agosto un <b>festival cultural</b> denominado <b>BUNKASAI</b>, el cual contó con la participación activa de toda la comunidad escolar.", "/news/2022/Agosto/Bunkasai.html", `src="/sources/Images/Colegio/Celebraciones/Bunkasai 2022/otganizadores.webp" style="object-position: center 20%;" alt="Organizadores del eventoo junto con miembros del stand de la Alianza Espada"`],

    ["Conmemoración del 244° Aniversario del Natalicio del Libertador Bernardo O’Higgins","Luego de varios años, el Colegio Luterano fue invitado a participar el 20 de agosto del Desfile Institucional con motivo de la Conmemoración del <b>244° Aniversario</b> del Natalicio del <b>Libertador Bernardo O’Higgins Riquelme</b>.", "/news/2022/Agosto/DesfileBernardoOHiggins.html", `src="/sources/Images/Colegio/Colegio-luterano-en-el-exterior/244 Desfile por el natalicio de Bernardo OHiggins/abanderados.webp" style="object-position: center 40%;" alt="Abanderados del desfile"`],

    ["XVI Aniversario del Colegio Luterano - Culto de Acción de Gracias","La <b>Iglesia Evangélica Luterana en Magallanes</b> junto con la <b>Comunidad Educativa del Colegio Luterano</b>, se reunió este domingo 03 de julio en el Culto de Acción de Gracias para celebrar el <b>XVI Aniversario del Colegio</b>.", "/news/2022/Julio/CultoAniversario.html", `src="/sources/Images/Colegio/Celebraciones/Aniversario 16 Colegio Luterano 2022/Predicación.webp" style="object-position: center 48%;" alt="Predicación del domingo" style="object-position: center 65%;"`],

    ["Canastas de invierno para el sector de Agua Fresca","El <b>Ministerio de Diaconía</b> de la <b>Iglesia Evangélica Luterana</b> en conjunto con la <b>Comunidad Educativa del Colegio Luterano</b> realizó el día sábado 25 de Junio la <i>entrega de Canastas de Invierno - 2022</i> a personas mayores y familias del sector de <i>Agua Fresca</i> y <i>Punta Prat</i>.", "/news/2022/Junio/entregaDeCanastasAguaFresca.html", `src="/sources/Images/Colegio/Colegio-luterano-en-el-exterior/2022 Canastas de Invierno (terreno).webp" style="object-position: center 55%;" alt="Entrega canastas de invierno 2022"`],

    ["Colegio Luterano celebra y conmemora el Día Nacional de los Pueblos Indígenas","Con un emotivo acto, la comunidad del Colegio Luterano, conmemoró y celebró el Día Nacional de los Pueblos Indígenas el día miércoles 22 de junio.", "/news/2022/Junio/diaNacionalDeLosPueblosOriginarios.html", `src="/sources/Images/Colegio/Celebraciones/Día Nacional de los Pueblos Indígenas 2022/Presentadores.webp" style="object-position: center 40%;" alt="Presentadores del evento por el día nacional de los pueblos indígenas"`],

    ["Trilogía Musical (Dia Nacional de las Artes)","En el marco de haberse celebrado el día nacional de las artes,se presentaron tres corrientes musicales en el colegio luterano junto a los profesores que imparten éstas disciplinas", "/news/2022/Mayo/diaNacionalDeLasArtes.html", `src="/sources/Images/Colegio/Celebraciones/Dia de las artes 2022/Bronces y Maderas 1.webp" style="object-position: center 40%;" alt="Orquesta Brass Luther Colegio Luterano"`],

    ["Saludo día internacional del trabajador","El directorio de la <b>IELMA</b> saluda a los trabajadores y trabajadoras del <b>Colegio Luterano</b> por el día internacional del trabajador.","/sources/documents/informative-images/Saludo día del Trabajador 2022.webp", `src="/sources/Images/Imágen_colegio.webp" alt="Día internacional del trabajador"`],

    ["Día del Libro en el Colegio Luterano","El <b>Colegio Luterano</b> celebra a lo grande el día del libro con la reapertura de la <b>Biblioteca CRA</b> y la actividad: '<b>Murales: Tipos de mundo y literatura</b>'.","/news/2022/Abril/diaDelLibro.html", `src="/sources/Images/Colegio/Celebraciones/Día del libro 2022/Día del libro 2022 Biblioteca CRA.webp" style="object-position: center 60%;" alt="Estudiantes en Biblioteca CRA" style="object-position: center 65%;"`],

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