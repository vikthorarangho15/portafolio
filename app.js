/* funcion cambiar imagen de carrito de compras*/

const ca_imagen = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');

const shoeBg = document.querySelector('.imagen');

let primera_imagen = "blue";
let animationEnd = true;


function cambiarimagen(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    
    

    if (color == primera_imagen) return;

    ca_imagen.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');
    gradient.classList.add('first');
   

    primera_imagenimagen = color;
    animationEnd = false;

    
}


ca_imagen.forEach(c => c.addEventListener('click', cambiarimagen));

/*let x = window.matchMedia("(max-width: 1000px)");*/




