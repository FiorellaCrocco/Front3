const users = [
    {
      "apodo": "Nepeta",
      "email": "nepetalover123@gmail.com",
      "mascotas": [
        { "nombre": "Luna", "edad": 3, "color": "blanco y negro" },
        { "nombre": "Simba", "edad": 1, "color": "naranja" },
        { "nombre": "Mia", "edad": 5, "color": "gris" }
      ]
    },
    {
      "apodo": "CatLady",
      "email": "catlady999@yahoo.com",
      "mascotas": [
        { "nombre": "Tom", "edad": 2, "color": "gris y blanco" },
        { "nombre": "Lucas", "edad": 4, "color": "negro" }
      ]
    },
    {
      "apodo": "GatitoFeliz",
      "email": "gatitofeliz22@hotmail.com",
      "mascotas": [
        { "nombre": "Cleo", "edad": 1, "color": "marrón" },
        { "nombre": "Toby", "edad": 6, "color": "blanco" },
        { "nombre": "Nina", "edad": 2, "color": "negro y blanco" }
      ]
    },
    {
      "apodo": "ElGatoNegro",
      "email": "elgatonegro@outlook.com",
      "mascotas": [
        { "nombre": "Oreo", "edad": 3, "color": "negro y blanco" },
        { "nombre": "Milo", "edad": 7, "color": "naranja" }
      ]
    },
    {
      "apodo": "GatitoTierno",
      "email": "gatitotierno5555@gmail.com",
      "mascotas": [
        { "nombre": "Pelusa", "edad": 2, "color": "gris" },
        { "nombre": "Kitty", "edad": 4, "color": "blanco y negro" },
        { "nombre": "Loki", "edad": 1, "color": "marrón y blanco" }
      ]
    },
    {
      "apodo": "CatQueen",
      "email": "catqueen8888@hotmail.com",
      "mascotas": [
        { "nombre": "Fluffy", "edad": 5, "color": "blanco y gris" },
        { "nombre": "Sasha", "edad": 2, "color": "marrón y blanco" }
      ]
    },
    {
      "apodo": "Nepeta",
      "email": "nepetaalegre7@yahoo.com",
      "mascotas": [
        { "nombre": "Punky", "edad": 3, "color": "naranja" },
        { "nombre": "Zoe", "edad": 1, "color": "blanco" },
        { "nombre": "Simón", "edad": 4, "color": "negro" }
      ]
    },
    {
      "apodo": "GatoMimoso",
      "email": "gatomimoso55@gmail.com",
      "mascotas": [
        { "nombre": "Leo", "edad": 2, "color": "blanco" },
        { "nombre": "Coco", "edad": 3, "color": "negro y blanco" }
      ]
    }
  ]

/*   ### Ejercicio 1

- **Muestra por consola:**

  1- El `email` del primer Usuario.

  2- El `apodo` del tercer Usuario.

  3- El color de la segunda `mascota` del tercer Usuario.

--- */

console.log("****** EJERCICIO 1 ******");

console.log("1- " + users[0].email);

console.log("2- " + users[2].apodo);

console.log("3- " + users[1].mascotas[1].color);

/* ### Ejercicio 2

- **Usando desestructuracion:**

  1- Extrae en variables el primer y cuarto elemento.

  2- Extrae en variables `email` y `mascotas` del primer elemento.

--- */

console.log("****** EJERCICIO 2 ******");

const [first, , , fourth] = users;
console.log("1- ", first, "\n",fourth);

const {email, mascotas} = first;
console.log("2- ", email, "\n mascotas: ", mascotas);


/* ### Ejercicio 3

- **Spread operator:**

  - Haz una copia de las `mascotas` obtenidas arriba y agregale la mascota

    `{ "nombre": "Nami", "edad": 2, "color": "negro" }`

    *(Usar console log para verificar que no se modifico el original)*

--- */

console.log("****** EJERCICIO 3 ******");

const copia = [...mascotas, { nombre: 'Nami', edad: 2, color: 'negro' }]

console.log(copia)

/* ### Ejercicio 4

- **String builder**

  - Crea una funcion que reciba por props un objeto con las siguientes keys: **name**, **cantMascotas** y que retorne un *string* con el siguiente formato:

    `"El Usuario {name} tiene {cantMascotas} mascotas"`

--- */

 console.log("****** EJERCICIO 4 ******");

 const example = {
  "apodo": "Nepeta",
  "email": "nepetalover123@gmail.com",
  "mascotas": [
    { "nombre": "Luna", "edad": 3, "color": "blanco y negro" },
    { "nombre": "Simba", "edad": 1, "color": "naranja" },
    { "nombre": "Mia", "edad": 5, "color": "gris" }
  ]
};

function mascotasUsuario({apodo, mascotas})  {
  return `El Usuario ${apodo} tiene ${mascotas.length} mascotas`;
}

console.log(mascotasUsuario(example));

/* ### Ejercicio 5

- **Array functions**

  1- Usando la operacion `filter`, crea un array con los Usuarios que tengan **mas** de 1 mascota.

  2- Usando la operacion `map` y la funcion del ejercicio 4, crea un array de strings con el nombre y la cantidad de mascotas de cada Usuario filtrado anteriormente. Ej:

    ```js
    [
      "El Usuario Gaby tiene 3 mascotas",
      "El Usuario Morgi tiene 5 mascotas"
    ]
    ```

  3- Usando la operacion reduce devuelve la cantidad total de mascotas. */

console.log("****** EJERCICIO 5 ******");

let variasMascotas = users.filter((usuario) => usuario.mascotas.length > 1)
console.log("1-", variasMascotas);


let arrayMascotas = variasMascotas.map((usuario) => {
  return mascotasUsuario(usuario)
})
console.log("2- ", arrayMascotas);

let totalMascotas = users.reduce((acc,user) => {
  return acc + user.mascotas.length
}, 0)

console.log("3- ", totalMascotas);