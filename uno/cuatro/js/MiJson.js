var miJson = [
  {
    'codigo' : '001',
    'nombre' : 'Calculo'
  },
  {
    'codigo' : '002',
    'nombre' : 'Física'
  },
  {
    'codigo' : '003',
    'nombre' : 'Algoritmo'
  }
];

function leerJSON(json) {
    var out="";
    var i;
    for (var i = 0; i < json.length; i++) {
      alert('Codigo:'+json[i].codigo+'-' + 'Nombre:'+json[i].nombre);
    }
}

leerJSON(miJson);
