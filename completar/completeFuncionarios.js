let contenedor = document.querySelector(".funcionarios"); //Guardo el contenedor de los funcionarios en una variable.
let funcionarios = document.createDocumentFragment(); //Creo un fragmento HTML interno dentro del JavaScript para usarlo como contenedor provisional.

let infoFuncionarios = [
    ["Nombre","Cargo","correodeejemplo@gmail.com", "/sources/Images/perfilDeRelleno.webp"],
    ["Nombre","Cargo","correodeejemplo@gmail.com", "/sources/Images/perfilDeRelleno.webp"],
    ["Nombre","Cargo","correodeejemplo@gmail.com", "/sources/Images/perfilDeRelleno.webp"]
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
