var estudiantes = [
    {
    "codigo": "01",
    "nombre": "Juan Perez",
    "nota"  : 2
  }, {
    "codigo": "02",
    "nombre": "Ricardo Oyarzo",
    "nota"  : 8
  }, {
    "codigo": "03",
    "nombre": "Diana Paredes",
    "nota"  : 9
  }, {
    "codigo": "04",
    "nombre": "Anais Oyarzo",
    "nota"  : 7
  }, {
    "codigo": "05",
    "nombre": "Pedro Picapiedra",
    "nota"  : 10
  }, {
    "codigo": "06",
    "nombre": "Osvaldo Mora",
    "nota"  : 9
  }, {
    "codigo": "07",
    "nombre": "Jaime Kram",
    "nota"  : 5
  }, {
    "codigo": "08",
    "nombre": "Jose Soto",
    "nota"  : 8
  }, {
    "codigo": "09",
    "nombre": "Maria Cruzat",
    "nota"  : 5
  }, {
    "codigo": "10",
    "nombre": "Francisca Mansilla",
    "nota"  : 4
  }

];

//agregando los eventlistener
document.getElementById('registrarestudiante').addEventListener("click", function(){
  agregarEstudiante();
});
document.getElementById('mostrarpromedio').addEventListener("click", function(){
  calcularPromedio();
});
document.getElementById('mostrarnotamayor').addEventListener("click", function(){
  mayorNota();
});
document.getElementById('mostrarnotamenor').addEventListener("click", function(){
  menorNota();
});

mostrarJSON();


function mostrarJSON() {
    var out = "<p align='center'>Estudiantes</p><table id='tabla'><tr><th>Codigo</th><th>Nombre</th><th>Nota</th><tr>";

    for(var i = 0; i < estudiantes.length; i++) {
       out +=  "<tr id='border_table'><td>" + estudiantes[i].codigo.toString() + "</td>" +
               "<td>" + estudiantes[i].nombre + "</td>" +
               "<td>" + estudiantes[i].nota.toString() + "</td></tr>";

    }
    out += "</table>"

    document.getElementById('listado_estudiantes').innerHTML = out;

}


function calcularPromedio() {
  var suma=0;
  for(var i = 0; i < estudiantes.length; i++) {
     suma += estudiantes[i].nota;
  }
  var promedio = suma/estudiantes.length;
  alert("El promedio es: " + promedio);
}

function mayorNota() {
  var notamayor = [];
  for(var i = 0; i < estudiantes.length; i++) {
      if(i==0){
        notamayor = estudiantes[i];
      } else if(notamayor.nota < estudiantes[i].nota){
        notamayor = estudiantes[i];
      }

    }
    var resultado =  "La Mayor nota es: " + "\n Nota: " + notamayor.nota;

    alert(resultado);
}

function menorNota() {
  var notamenor = [];
  for(var i = 0; i < estudiantes.length; i++) {
      if(i==0){
        notamenor = estudiantes[i];
      } else if(notamenor.nota > estudiantes[i].nota){
        notamenor = estudiantes[i];
      }

    }
  var resultado =  "La Menor nota es: " + "\n Nota: " + notamenor.nota;

  alert(resultado);
}


//funcion que agrega un estudiante al arreglo
function agregarEstudiante(){
  var nota = parseInt(document.getElementById('nota').value);
  var codigo = parseInt(document.getElementById('codigo').value);
  var nombre = document.getElementById('nombre').value;

  if(nombre != "" && nombre != null && validarNumero(nota) && codigo != "" && nombre != null){
    if(codigo)
      var estudiante = {
      "codigo": codigo,
      "nombre": nombre,
      "nota"  : nota
    };

    this.estudiantes.push(estudiante);

    var fila = document.createElement("tr");
    var columna1 = document.createElement("td");
    var columna2 = document.createElement("td");
    var columna3 = document.createElement("td");

    var texto1 = document.createTextNode(codigo);
    var texto2 = document.createTextNode(nombre);
    var texto3 = document.createTextNode(nota.toString());


    columna1.appendChild(texto1);
    columna2.appendChild(texto2);
    columna3.appendChild(texto3);
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);


    document.getElementById('tabla').appendChild(fila);

  }else{
    alert("Error en los campos ingresados favor vuelva a intentar");

  }
//al final se debe limpiar el formulario
      limpiar();
}

function limpiar(){
  document.getElementById('nombre').value = "";
  document.getElementById('nota').value = "";
  document.getElementById('codigo').value = "";
}

//funcion que valida un numero
function validarNumero(numero){
    if(isNaN(numero)){
    return false;
    }else {
      return true;
    }
}
