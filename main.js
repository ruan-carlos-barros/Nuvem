/* Função que transita para o banner, no caso para baixo */
function bottomzero() {
    var banner2 = document.querySelector(".banner-2"); /* Seleciona o banner-2 */
    banner2.scrollIntoView({ behavior: "smooth"});  /* Atributo: scrollIntoView || duas opções: smooth e auto || auto: sem animação || smooth: com animação */
}

let cont = 0

function transitar() {    
    if (cont == 0) {
        document.querySelector(".seg").src=("/assets/Ellipse 7.png");
        document.querySelector(".roxa").src=("/assets/Ellipse 8.png");
        document.querySelector(".tec").src=("/assets/Ellipse 8.png");
        UX();
        cont++;
    } else if (cont == 1) {
        document.querySelector(".tec").src=("/assets/Ellipse 7.png");
        document.querySelector(".roxa").src=("/assets/Ellipse 8.png");
        document.querySelector(".seg").src=("/assets/Ellipse 8.png");
        Artificial();
        cont++;
    };
}

function transitarContra() {
    if (cont == 2) {
        document.querySelector(".tec").src=("/assets/Ellipse 8.png");
        document.querySelector(".roxa").src=("/assets/Ellipse 8.png");
        document.querySelector(".seg").src=("/assets/Ellipse 7.png");
        UX();
        cont--;
    } else if (cont == 1) {
        document.querySelector(".roxa").src=("/assets/Ellipse 7.png");
        document.querySelector(".seg").src=("/assets/Ellipse 8.png");
        document.querySelector(".tec").src=("/assets/Ellipse 8.png");
        FrontEnd();
        cont--;
    }
}


function FrontEnd() {
    document.querySelector(".banner-cursos-titulo").innerHTML = "Front-End";
    document.querySelector(".banner-cursos-texto").innerHTML = 
    "Desenvolva experiências com <br> HTML, CSS e JavaScript. <br> Aprenda boas práticas do <br> desenvolvimento web.";
    document.querySelector(".img1").src=("/assets/Frontend.jpg");

    document.querySelector(".clicar").textContent = "HTML";
    document.querySelector(".clicar").href = "/Aulas/past_html/HTML.html";
    document.querySelector(".clicar").style.backgroundImage = "url(/assets/S.png), url(/assets/bolinha_numero.png)";

    document.querySelector(".css-clicar").textContent = "CSS";
    document.querySelector(".css-clicar").href = "/Aulas/past_css/CSS.html";
    document.querySelector(".css-clicar").style.backgroundImage = "url(/assets/C.png), url(/assets/bolinha_numero.png)";

    document.querySelector(".javascript-clicar").textContent = "JavaScript";
    document.querySelector(".javascript-clicar").href = "/Aulas/past_java/JAVASCRIPT.html";
    document.querySelector(".javascript-clicar").style.backgroundImage = "url(/assets/J.png), url(/assets/bolinha_numero.png)";

}

function UX() {
    document.querySelector(".banner-cursos-titulo").innerHTML = "UX e Design";
    document.querySelector(".banner-cursos-texto").innerHTML = 
    "Crie diferentes layouts para <br> plataformas digitais. Construa <br> e expanda seu conhecimento <br> nas principais áreas:";


    document.querySelector(".clicar").textContent = "UI";
    document.querySelector(".clicar").href = "/Aulas/past_ui/UI.html";
    document.querySelector(".clicar").style.backgroundImage = "url(/assets/UI.png), url(/assets/bolinha_numero.png)";

    document.querySelector(".css-clicar").textContent = "UX";
    document.querySelector(".css-clicar").href = "UX.html";
    document.querySelector(".css-clicar").style.backgroundImage = "url(/assets/UX.png), url(/assets/bolinha_numero.png)";

    document.querySelector(".javascript-clicar").textContent = "Design Gráfico";
    document.querySelector(".javascript-clicar").href = "Design.html";
    document.querySelector(".javascript-clicar").style.backgroundImage = "url(/assets/DG.png), url(/assets/bolinha_numero.png)";
}

function Artificial() {
    document.querySelector(".banner-cursos-titulo").innerHTML = "Inteligência Artificial";
    document.querySelector(".banner-cursos-texto").innerHTML = 
    "Mergulhe com profundidade no <br> universo da Inteligência <br> Artificial aplicada a diferentes áreas";
       
    document.querySelector(".clicar").textContent = "IA programação";
    document.querySelector(".clicar").href = "/Aulas/past_ia/IA.html";
    document.querySelector(".clicar").style.backgroundImage = "url(/assets/IAP.png), url(/assets/bolinha_numero.png)";

    document.querySelector(".css-clicar").textContent = "IA para Criativos";
    document.querySelector(".css-clicar").href = "";
    document.querySelector(".css-clicar").style.backgroundImage = "url(/assets/IAC.png), url(/assets/bolinha_numero.png)";

    document.querySelector(".javascript-clicar").textContent = "IA para UX";
    document.querySelector(".javascript-clicar").href = "";
    document.querySelector(".javascript-clicar").style.backgroundImage = "url(/assets/IPU.png), url(/assets/bolinha_numero.png)";
}