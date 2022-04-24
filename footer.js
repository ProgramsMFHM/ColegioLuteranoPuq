// Including the footer

body = document.querySelector("body");

let temporalFooter = document.createElement("FOOTER");

temporalFooter.classList.add("footer")

temporalFooter.innerHTML =`
    <div class="socialMedia">
            
        <div class="socialMedia__network">
            <a href="https://www.facebook.com/Colegio-Luterano-de-Punta-Arenas-110910395603597/" target="0_blank" class="nonStyleLink">
                <i class="fab fa-facebook"></i>
                <p>Facebook</p>
            </a>
        </div>

        <div class="socialMedia__network">
            <a href="https://goo.gl/maps/Y8bUwNEFcvtpjchEA" target="0_blank" class="nonStyleLink">
                <i class="fas fa-map"></i>
                <p>Ubicación</p>
            </a>
        </div>

        </div>

        <div class="schoolMotto">
        <p>"La Educación de los hijos es un servicio a y para Dios."</p>
        <div class="shields">

            <a href="https://www.facebook.com/Iglesia-Evang%C3%A9lica-Luterana-en-Magallanes-129087137102459" target="0_blank">
                <img src="/sources/Images/shields/Escudo-IELMA.webp" alt="Escudo Iglesia Evangélica Luterana en Magallanes">
            </a>

            <a href="https://ielch.cl/" target="0_blank">
                <img src="/sources/Images/shields/Escudo-IELCH.webp" alt="Escudo Iglesia Evangélica Luterana en Chile">
            </a>

        </div>

    </div>
`;

body.appendChild(temporalFooter)