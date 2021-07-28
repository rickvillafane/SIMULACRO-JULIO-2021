/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/
/*
AUTOR RICARDO VILLAFAÑE
EJ 1
*/


function mostrar() {
   var contador;
   var acumuladorHdd = 0
   var tipo;
   var precio;
   var cantidad;
   var capacidad;
   var banderaPrimeroSSD;
   var banderaPrimeroHDD;
   var ssdBaratoCantidad = 0;
   var ssdBaratoMarca;
   var ssdBaratoPrecio = 0;
   var hddCaroPrecio = 0;
   var hddCaroCapacidad;
   var hddCaroCantidad = 0;

   contador = 0;
   banderaPrimeroSSD = true;
   banderaPrimeroHDD = true;

   for (contador; contador < 5; contador++) {
      tipo = prompt("Ingrese tipo De Disco: 'HDD' 'SSD' 'SSDM2'");
      while (tipo != "HDD" && tipo != "SSD" && tipo != "SSDM2") {
         tipo = prompt("Dato incorrecto, Ingrese nuevamente 'HDD' 'SSD' 'SSDM2'");
      }
      precio = prompt("Ingrese el precio del producto: Rango 5000 - 18000");
      precio = parseFloat(precio);
      while (precio < 5000 || precio > 18000) {
         precio = prompt("Precio incorrecto, ingrese nuevamente: Rango 5000 - 18000 ");
         precio = parseFloat(precio);
      }
      cantidad = prompt("Ingrese Cantidad de Unidades");
      cantidad = parseInt(cantidad);
      while (cantidad <= 0 || cantidad > 50) {
         cantidad = prompt("Dato incorrecto, ingrese nuevamente: Rango 1 - 50");
         cantidad = parseInt(cantidad);
      }
      marca = prompt("Ingrese marca del producto: 'Seagate' 'Western Digital' 'Kingston'");
      while (marca != "Seagate" && marca != "Western Digital" && marca != "Kingston") {
         marca = prompt("Dato incorrecto, Ingrese nuevamente: 'Seagate' 'Western Digital' 'Kingston'");
      }
      capacidad = prompt("Ingrese la capacidad del producto: '250Gb' '500Gb' 1Tb' '2Tb'");
      while (capacidad != "250Gb" && capacidad != "500Gb" && capacidad != "1Tb" && capacidad != "2Tb") {
         capacidad = prompt("Dato incorrecto, ingrese nuevamente: '250Gb' '500Gb' 1Tb' '2Tb' ");
      }
      if (banderaPrimeroSSD == true && tipo == "SSD") {
         ssdBaratoCantidad = cantidad;
         ssdBaratoMarca = marca;
         ssdBaratoPrecio = precio;
         banderaPrimeroSSD = false;
      }
      else {
         if (tipo == "SSD" && precio < ssdBaratoPrecio) {
            ssdBaratoCantidad = cantidad;
            ssdBaratoMarca = marca;
            ssdBaratoPrecio = precio;
         }
      }
      if (banderaPrimeroHDD == true && tipo == "HDD") {
         hddCaroCantidad = cantidad;
         hddCaroCapacidad = capacidad;
         hddCaroPrecio = precio;
         banderaPrimeroHDD = false;
      }
      else {
         if (tipo == "HDD" && precio > hddCaroPrecio) {
            hddCaroCantidad = cantidad;
            hddCaroCapacidad = capacidad;
            hddCaroPrecio = precio;
         }
      }
      if (tipo == "HDD") {
         acumuladorHdd = acumuladorHdd + 1;
      }
   }

   document.write("El SDD mas barato es de marca " + ssdBaratoMarca + " y hay " + ssdBaratoCantidad + " unidades <br>" +
      "El HDD mas caro tiene capacidad de " + hddCaroCapacidad + " y hay " + hddCaroCantidad + " unidades disponibles <br>" +
      "Hay " + acumuladorHdd + " unidades de HDD en total");
}
