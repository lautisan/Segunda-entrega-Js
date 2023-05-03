const pizzas = [
    {
        id:1,
        nombre:'Primavera',
        ingredientes:['salsa de tomate','tomates en rodajas', 'mozzarella','huevo duro','provolone','oregano','aceituna'],
        precio : 1100,
    },
    {
        
        id:2,
        nombre:'Mozzarella',
        ingredientes:['salsa de tomate','queso mozzarella','aceitunas verdes'],
        precio:800,
    },
    {
        id:3,
        nombre:'Rúcula con jamón crudo',
        ingredientes:['salsa de tomate','mozzarella','jamón crudo','rúcula fresca','tomates secos','queso parmesano'],
        precio:1100,
    },
    {
        id:4,
        nombre:'Especial',
        ingredientes:['salsa de tomate','jamón cocido','mozzarella','pimiento rojo asado'],
        precio:950,
    },
    {
        id:6,
        nombre:'4 Quesos',
        ingredientes:['salsa de tomate','queso mozzarella','queso sardo','queso roquefort','queso pategrás','aceitunas verdes'],
        precio:1100,
    },
    {
        id:7,
        nombre:'Napolitana',
        ingredientes:['salsa de tomate','mozzarella','tomates frescos','aceitunas verdes'],
        precio:900,
    },
    {
        id:8,
        nombre:'Fugazzeta',
        ingrediente:['salsa de tomate','cebolla','mozzarella','aceitunas negras'],
        precio:950,
    },
    {
        id:9,
        nombre:'Calabresa',
        ingredientes:['salsa de tomate','queso mozzarella','longaniza calabresa en rodajas','queso provolone rallado','aceitunas verdes'],
        precio:950,
    },
];

//Traigo los elementos de html
const input = document.querySelector('.input-value');
const pizzaList = document.querySelector('.value-list');
const btn = document.querySelector('.btn');



const addNumber = e => {
    e.preventDefault();
    
}



 document.getElementById("btn").addEventListener("click", function(){
    const valor = document.getElementById("input-value").value.trim();
     const pizza = pizzas.find(pizza => pizza.id == valor);
    
     if(pizza){
        return pizzaList.innerHTML=`<h2>Nombre: ${pizza.nombre}</h2>
                <h4>Precio: $${pizza.precio}</h4>`
     }else{
        alert("no existe esa pizza");
     }
    
 });

 
  
