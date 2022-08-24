let contenedor = document.querySelector(".funcionarios"); //Guardo el contenedor de los funcionarios en una variable.
let funcionarios = document.createDocumentFragment(); //Creo un fragmento HTML interno dentro del JavaScript para usarlo como contenedor provisional.

let infoFuncionarios = [
    ["Claudia Vera","Directora","claudia.vera@luteranopuq.cl", "/funcionarios/Claudia Vera/Claudia Vera.webp"],
    ["Karen Barria","Coordinadora PIE","karen.barria@luteranopuq.cl", "/funcionarios/Karen Barria/Karen Barria.webp"],
    ["Pablo Ríos","Sostenedor","pablo.rios@luteranopuq.cl", "/funcionarios/Pablo Ríos/Pablo Ríos.webp"],
    ["Pedro Levio","Inspector General","pedro.levio@luteranopuq.cl", "/funcionarios/Pedro Levio/Pedro Levio.webp"],
    ["Rocio Morales","Capellán","rocio.morales@luteranopuq.cl", "/funcionarios/Rocío Morales/Rocío Morales.webp"],
    ["Valeria Ampuero","Jefa UTP","valeria.ampuero@luteranopuq.cl", "/funcionarios/Valeria Ampuero/Valeria Ampuero.webp"],
    ["Waldo Abarzúa","Orientador","waldo.abarzúa@luteranopuq.cl", "/funcionarios/Waldo Abarzúa/Waldo Abarzúa.webp"],
    ["Amelia Caucaman","Docente Matemáticas","amelia.caucaman@luteranopuq.cl", "/funcionarios/Amelia Caucaman/Amelia Caucaman.webp"],
    ["Andres Catriao","Docente Inglés","andres.catriao@luteranopuq.cl", "/funcionarios/Andres Catriao/Andres Catriao.webp"],
    ["Carla Perez","Docente Básica","carla.perez@luteranopuq.cl", "/funcionarios/Carla Perez/Carla Perez.webp"],
    ["Claudia Avalos","Docente Básica","claudia.avalos@luteranopuq.cl", "/funcionarios/Claudia Avalos/Claudia Avalos.webp"],
    ["Consuelo Carrillo","Docente Párvulos","consuelo.carrillo@luteranopuq.cl", "/funcionarios/Consuelo Carrillo/Consuelo Carrillo.webp"],
    ["Cristina Contreras","Docente Lenguaje","cristina.contreras@luteranopuq.cl", "/funcionarios/Cristina Contreras/Cristina Contreras.webp"],
    ["Daniela Ojeda","Docente Lenguaje","daniela.ojeda@luteranopuq.cl", "/funcionarios/Daniela Ojeda/Daniela Ojeda.webp"],
    ["Felipe Bravo","Docente Historia","felipe.bravo@luteranopuq.cl", "/funcionarios/Felipe Bravo/Felipe Bravo.webp"],
    ["Filomena Barria","Auxiliar","filomena.barria@luteranopuq.cl", "/funcionarios/Filomena Barria/Filomena Barria.webp"],
    ["Frida Gonzalez","Terapeuta Ocupacional","frida.gonzalez@luteranopuq.cl", "/funcionarios/Frida Gonzalez/Frida Gonzalez.webp"],
    ["Gabriela Etcheverry","Docente Ciencias","gabriela.etcheverry@luteranopuq.cl", "/funcionarios/Gabriela Etcheverry/Gabriela Etcheverry.webp"],
    ["Isabel González","Tecnico en Educacion Parvularia","nora.gonzalez@luteranopuq.cl", "/funcionarios/Isabel González/Isabel González.webp"],
    ["Jessica Alvarado","Auxiliar","jessica.alvarado@luteranopuq.cl", "/funcionarios/Jessica Alvarado/Jessica Alvarado.webp"],
    ["Karen Cárdenas","Docente Historia","karen.cardenas@luteranopuq.cl", "/funcionarios/Karen Cárdenas/Karen Cárdenas.webp"],
    ["Katherine Hernandez","Docente Básica","katherine.hernandez@luteranopuq.cl", "/funcionarios/Katherine Hernandez/Katherine Hernandez.webp"],
    ["Loreto Hernandez","Fonoaudióloga","loreto.hernandez@luteranopuq.cl", "/funcionarios/Loreto Hernandez/Loreto Hernandez.webp"],
    ["Marco Poza","Docente Ciencias","marco.poza@luteranopuq.cl", "/funcionarios/Marco Poza/Marco Poza.webp"],
    ["Mauricio Bahamonde","Docente Teatro","mauricio.bahamonde@luteranopuq.cl", "/funcionarios/Mauricio Bahamonde/Mauricio Bahamonde.webp"],
    ["Norma Carvajal","Asistente","norma.carvajal@luteranopuq.cl", "/funcionarios/Norma Carvajal/Norma Carvajal.webp"],
    ["Nuria Ulloa","Auxiliar","nuria.ulloa@luteranopuq.cl", "/funcionarios/Nuria Ulloa/Nuria Ulloa.webp"],
    ["Oriana Villegas","Finanzas","oriana.villegas@luteranopuq.cl", "/funcionarios/Oriana Villegas/Oriana Villegas.webp"],
    ["Paula Bahamonde","Docente Ed. Fisica","paula.bahamonde@luteranopuq.cl", "/funcionarios/Paula Bahamonde/Paula Bahamonde.webp"],
    ["Rodrigo Oyarzun","Psicopedagogo","rodrigo.oyarzun@luteranopuq.cl", "/funcionarios/Rodrigo Oyarzun/Rodrigo Oyarzun.webp"],
    ["Saul Soto","Inspector Ed. Media","saul.soto@luteranopuq.cl", "/funcionarios/Saul Soto/Saul Soto.webp"],
    ["Soledad Peñaloza","Recaudacion","soledad.penaloza@luteranopuq.cl", "/funcionarios/Soledad Peñaloza/Soledad Peñaloza.webp"],
    ["Teo Rios","Docente Matemáticas","teo.rios@luteranopuq.cl", "/funcionarios/Teo Rios/Teo Rios.webp"],
    ["Valeria Ormazabal","Encargada de personal","valeria.ormazabal@luteranopuq.cl", "/funcionarios/Valeria Ormazabal/Valeria Ormazabal.webp"],
    ["Veronica Arancibia","Docente Párvulos","veronica.arancibia@luteranopuq.cl", "/funcionarios/Veronica Arancibia/Veronica Arancibia.webp"],
    ["Viviana Cheuque","Contabilidad","viviana.cheuque@luteranopuq.cl", "/funcionarios/Viviana Cheuque/Viviana Cheuque.webp"],
    ["Walezka Sepúlveda","Encargada del CRA","waleska.sepulveda@luteranopuq.cl","/funcionarios/Walezka Sepúlveda/Walezka Sepúlveda.webp"]
]; //Este es un array donde estará la información de los funcionarios.

for (const funcionario of infoFuncionarios) { //Este for se repetirá tantas veces como elementos tenga el array "infoFuncionarios". La variable "Funcionario" contendrá la información de cada funcionario en cada iteración.

    let infoFuncionario = document.createElement("ARTICLE"); //Creo un elemento Article HTML delntro del JavaScript
    infoFuncionario.classList.add("funcionario");


    infoFuncionario.innerHTML =`

        <img src="${funcionario[3]}" class="funcionario__image" alt="${funcionario[0]}">

        <div class="funcionario__text">

            <p class="funcionario__name"><i class="fa-solid fa-user funcionario__name__icon"></i>${funcionario[0]}</p>

            <p class="funcionario__position"><i class="fa-solid fa-briefcase funcionario__position__icon"></i>${funcionario[1]}</p>

            <a class="funcionario__mail" href="mailto:${funcionario[2]}"><i class="fa-solid fa-at funcionario__mail__icon"></i>${funcionario[2]}</a>

        </div>`; //Desde la línea 22 hasta la 38 estoy creando el contenido que irá dentro del "Article que creé en la línea 20". Las partes azules representan variables [0] es el nombre del funcionario. [1] es el cargo, [2] Es el correo y [3] es la ruta donde se encuentra su imágen.

    funcionarios.appendChild(infoFuncionario); //Añadimos el artículo como un hijo del elemeto "funcionarios" cosa que se hará múltiples veces.
}

contenedor.appendChild(funcionarios); //Añado todo "funcionarios" como hijo de "contenedor".
