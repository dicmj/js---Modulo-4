
        // definición de variables
        var titulo; 
        var contenido; 
        var nombreUsuario;
        var rol;
        var clave;      
        var Empleados = [
                    {Nombre: "Daniel", Apellido: "Civarolo", Edad: 38},
                    {Nombre: "Ignacio", Apellido: "Civarolo", Edad: 45},
                    {Nombre: "Osvaldo", Apellido: "Civarolo", Edad: 74}
                ];
        var tabla;
        
        // cuerpo de la aplicación
        
        rol = window.prompt("Ingrese su rol: " );
        if (rol == "admin" || rol == "recursos")
        {
            clave = window.prompt("Ingrese su clave: ");
            if (clave == 1234)
            {
                nombreUsuario = window.prompt("Ingrese su nombre de usuario: ");
                tabla = document.getElementById("tabla");
                refrescarTabla();
                console.table(Empleados);
                //contenido = "<tr><th>Nombre</th> <th>Apellido</th> <th>Edad</th></tr>"; 
                //for(var i = 0; i < Empleados.length; ++i)
                //{
                //    contenido += "<tr><td>" + Empleados[i].Nombre + "</td>" + "<td>" + Empleados[i].Apellido + "</td>" + "<td>" + Empleados[i].Edad + "</td></tr>";
                //}
                //tabla.innerHTML = contenido;
            }
            else
            {
                window.location.href = "error.html";
            }
        }
        else
        {
                window.location.href = "error.html";
        }
        
        function agregarEmpleado()
        {
            // variables
            var nombre1, apellido1, edad1;

            // vinculo las variables con los elementos HTML
            nombre1 = document.getElementById("nombre");            
            apellido1 = document.getElementById("apellido");            
            edad1 = document.getElementById("edad");

            // agrego a la matriz los datos ingresados
            Empleados.push({"Nombre": nombre1.value, "Apellido": apellido1.value, "Edad": edad1.value}); // value tomo el contenido del input

            // limpio los inputs
            nombre1.value = " ";            
            apellido1.value = " ";
            edad1.value = " ";

            refrescarTabla();
        }

        function refrescarTabla()
        {
            contenido = "<tr><th>Nombre</th> <th>Apellido</th> <th>Edad</th></tr>"; 
                for(var i = 0; i < Empleados.length; ++i)
                {
                    contenido += "<tr><td>" + Empleados[i].Nombre + "</td>" + "<td>" + Empleados[i].Apellido + "</td>" + "<td>" + Empleados[i].Edad + "</td></tr>";
                }
                tabla.innerHTML = contenido;
                console.table(Empleados);
               
        }
    