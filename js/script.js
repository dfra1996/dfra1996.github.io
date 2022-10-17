//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}
//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };
//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 1) {
        document.getElementById("php").classList.add("barra-progreso4");
        document.getElementById("js").classList.add("barra-progreso4");
        document.getElementById("bd").classList.add("barra-progreso4");
        document.getElementById("html").classList.add("barra-progreso4");
        document.getElementById("git").classList.add("barra-progreso4");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}
// Formulario de contacto HTML
const $form = document.querySelector('#form')
const $buttonMailTo = document.querySelector('#contact')

$form.addEventListener('submit',handlesubmit)

function handlesubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailTo.setAttribute('href', `mailto:xx.duvanxx@hotmail.com?subject=Nombre: ${form.get('name')} Email: ${form.get('email')}&body=${form.get('msn')}`)
    $buttonMailTo.click()
}
// Fin Formulario de contacto HTML