SERVICIOS REST (Representational ES Transfer)

es una especie de caja negra de código que expone al exterior unas funciones
Básicamente podría a considerarse un objeto.

Una caja negra, un bloque de código que ofrece una serie de funciones al exterior. ES UNIVERSAL, es decir... están pensadas para que cualquier programa los puedan utilizar.

Nosotros, desde cualquier programa podemos conectarnos y pedir datos de esos programas REST que contienen las funciones o la información que queremos o que buscamos concretamente.

## Estructura de la URL
URL: http://www.myserver.com:8080/myapp/recurso
hasta la primera barra es el dominio
myapp hace referencia al rootcontext
recurso hace referencia a la direccion concreta de la operacion

en el caso de los servicios REST lo normal es que los distintos servicios tengan direcciones distintas.

Para ejecutar, desde un cliente, un servicio REST hay que mandar una llamada HTTP y para eso debo conocer LA DIRECCIÓN EXACTA.

Lo que puede suceder es que cuando llamemos al programa REST necesitemos darle unos parámetros. Y eso, si son muchos datos o muchas cosas tenemos que hacerlo con un JSON.

Cuando esa llamada llega, el programa hace lo suyo con los datos que le has entregado y demás y el REST hace sus operaciones y te devuelve... UN JSON. Es la respuesta del REST.

EN ANGULAR es el comando
HTTPCLIENT el que se encarga de comunicarse con el exterior.




