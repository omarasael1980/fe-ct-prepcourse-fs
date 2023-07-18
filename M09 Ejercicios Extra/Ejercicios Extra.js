/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arreglo = Object.keys(objeto)
   let valor =null
   let nuevoArreglo = []
   arreglo.map(o =>{
     valor = objeto[o] 
   
     nuevoArreglo.push([o, valor])
   })
   return nuevoArreglo
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const repeticiones = {};
   const letras =  string.split('').sort()
    letras.map(letra=>{
     Object.keys(repeticiones).some(x=>x==letra)? repeticiones[letra]+=1 : repeticiones[letra]=1
     console.log(repeticiones)
    })
    
   return repeticiones
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
    var minusculas =[]
    var mayusculas =[]
    var letras =string.split("")
    letras.map(letra =>{
    letra == letra.toUpperCase() ? mayusculas.push(letra):   minusculas.push(letra) 
    
  })
    var m=mayusculas.join("")
    m+=minusculas.join("")
return  m

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ")
   var nuevaPalabra = []
    
   palabras.map(palabra =>{
     var nuevoArreglo =[]
     var letras = palabra.split("")
     letras.map(letra =>{
       nuevoArreglo.unshift(letra)
     })
     nuevaPalabra.push(nuevoArreglo.join(""))
   })
   return nuevaPalabra.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeros =  numero.toString().split("")
   var alReves = []
   numeros.map(num =>{
     alReves.unshift(num)
   })
   var num2 =  parseInt(alReves.join(""),10)
  
  return  numero === num2 ? "Es capicua": "No es capicua"
   

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   string  = string.replace("a","")
   string  = string.replace("b","")
   string  = string.replace("c","")
 
    return string
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a, b) {
      return  a.length-b.length
    })
    return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var coincide = []
   array1.map(e=>{
     array2.includes(e) ? coincide.push(e) : false
   })
   return coincide
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
