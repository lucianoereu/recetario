/* constantes y variables */
/* cargamos ingredientes */
let nuevasRecetas = {};
const ingredientePizza = [{
    id: 1,
    ingrediente: "Harina",
    cantidad: 125,
    unidad: "gr"
},
{
    id: 2,
    ingrediente: "agua",
    cantidad: 76,
    "unidad": "gr"
},
{
    id: 3,
    ingrediente: "levadura",
    cantidad: 0.3,
    unidad: "gr"
},
{
    id: 4,
    ingrediente: "sal",
    cantidad: 3,
    unidad: "gr"
}];

/* llamado del dom */
let cantidadPizza = document.getElementById("cantidadPizza");
let totalPizza = document.getElementById("pizza");

/* funcion */
/* calcular y mostrar pizza */
$("#cantidadPizza").on("keyup", function() {
    let pizza = ingredientePizza;
    let total = pizza.map(ingrediente => ingrediente.cantidad * cantidadPizza.value);
    console.log(pizza);
    console.log(total);
    console.log(pizza[0].ingrediente + " " + total[0] + " " + pizza[0].unidad + "<br>" + pizza[1].ingrediente + " " + total[1] + " " + pizza[1].unidad + "<br>" + pizza[2].ingrediente + " " + total[2] + " " + pizza[2].unidad + "<br>" + pizza[3].ingrediente + " " + total[3] + " " + pizza[3].unidad);
});

/* traemos receta pizza */
const btnPizza = document.getElementById('mostrarRecetaPizza')

function mostrarRecetaPizza() {
    /* console.log("mostrar recetas"); */
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "recetas/recetaPizza.txt", true);
    xhttp.send();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status === 200) {
            document.getElementById("recetaPizza").innerHTML = this.responseText;
        }
    }
    $("#recetaPizza").slideToggle();
};
/* usamos boton */
btnPizza.addEventListener("click", mostrarRecetaPizza);