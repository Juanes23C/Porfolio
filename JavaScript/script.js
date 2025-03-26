let menuVisible = false;

//Función para mostrar u ocultar el menu

//Mostrar menu
function mostrarOcultarMenu (){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//Ocultar menu
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//Animación de Skills
function cargaDeSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("mongo");
        habilidades[6].classList.add("jmeter");
        habilidades[7].classList.add("git");
        habilidades[8].classList.add("node");
        habilidades[9].classList.add("angular");
        habilidades[10].classList.add("boostrap");
        habilidades[11].classList.add("comunicacion");
        habilidades[12].classList.add("escucha");
        habilidades[13].classList.add("trabajo");
        habilidades[14].classList.add("liderazgo");
        habilidades[15].classList.add("creatividad");
        habilidades[16].classList.add("dedicacion");

    }
}

//Detección de scroll para identificar el punto de animación
window.onscroll = function(){
    cargaDeSkills();
}