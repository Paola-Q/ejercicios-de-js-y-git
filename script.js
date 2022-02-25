
// const nombre = "Paola Quiroz";

// let edad = 17;
// let condicion = edad >= 18;
// let condicion2 = nombre === "Paola Quiroz";

//  console.log("condicion =>", condicion);
//  console.log("condicion2 =>", condicion2);

// // if(condicion || condicion2)
// if(condicion)  {
//     console.log(`Entra en la primera condicion`)
// } else{
//     console.log(`Entra en la segunda condicion`)
// }

// console.log("mi nombre es: " + nombre + " y tengo una edad de: " + edad + " años");

//  edad = 28;

// console.log("mi nombre es: " + nombre + " y tengo una edad de: " + edad + " años");

// let variable = false;
// variable = true;

// const number = 20;
// console.log(number === "20");

// let edad = 16;
// edad > 18 ? console.log(" es mayor de edad")  : console.log("es menor de edad");

// const arreglo = ["Paola", "Ilan", "Brandon", "Dann"];

// console.log("arreglo => ", arreglo);

// for (let indice = 0; indice < arreglo.length; indice++){
//     console.log(`El nombre de la persona es ${arreglo[indice]}`);
// }

// arreglo.forEach((nombre) =>
// console.log(`El nombre de la persona es ${nombre}`));

// let contador = true;

// while (contador < 1000){
//     console.log(contador);

//     contador = contador + 1;
// }


// for(let indice = 0; indice < 10; indice++){
//código
// if(indice === 2){
//     console.log("2");
//     break;
// }
// console.log("otro codigo");
// // console.log(` EL valor de indice es = ${indice}`);
// }

// console.log("se termino el for");

function saludar(nombre){
    console.log(`Hola ${nombre}, ¿Como estas?`);
}
// saludar("Paola", "Quiroz");
// saludar("Martha", "Rodriguez");

const persona1 = {
    nombre: "Paola",
    apellido: "Quiroz",
    edad: 27,
};
const persona2 = {
    nombre: "Xayuri",
    apellido: "Vega",
    edad: 26,
};
const arregloPersonas = []
const admitirPaso = (persona) => {
    if (persona.edad >= 18){
        console.log(`Puedes pasar ${persona.nombre} ${persona.apellido}`);
     } else {
        console.log(`Mo puedes pasar ${persona.nombre} ${persona.apellido}`);  
     }

};
 arregloPersonas.forEach((persona) =>{
     admitirPaso(persona);
 });

 function alerta(){
     alert("Bienvenido a la página");
 }
 (()()(()))