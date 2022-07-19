# Aplicación del Clima con Node.js

En esta aplicación podemos consultar el pronostico de cualquier lugar del mundo, ya que al ingresar una ciudad, se toma las cordenadas y devuelve un listado de 5 ciudades aproximadas.

Elegimos una ciudad y retorna la temperatura actual, minima y maxima, con una breve descripción (si esta solieado, nublado, nieve, etc), la fecha actual en la que se realizó la consulta a la API. Esta aplicación se realizo con: 


* Node.js
* Axios
* Inquirer
* Dotenv
* Color
* Date and Time.



# Cómo ejecutar la aplicación?


```
git clone https://github.com/leandroquiroga/app-weather-node.git

cd app-weater-node

yarn start

```



# Funcionabilidades ⚙️

## Menú principal 
En el menú principal podemos escojer las siguiente opciones: 


![menu-principal](https://user-images.githubusercontent.com/80013958/179821864-c886a3e3-953e-4664-bd89-b6b153d8bd9f.png)


En donde vamos a poder elegir buscar una ciudad para saber su temperatura, ver nustro historial de busqueda o salir de aplicación. 

## Buscar una ciudad
Si seleccionamos la opción de buscar el clima de una ciudad no va a pedir ingresar el nombre de la ciudad: 


![buscar-ciudad](https://user-images.githubusercontent.com/80013958/179822128-f2a71c1d-192d-4918-ac4b-0eb3e148f0a4.png)


Luego de ingresar la ciudad, nos muestra una lista de 5 ciudades aproximadas a lo que se ingreso: 

![Listado-ciudades](https://user-images.githubusercontent.com/80013958/179822153-ace11eb6-4d3a-4085-9582-967bd6379fbb.png)

Y seleccionamos la correcta: 

![ciudad-seleccionada](https://user-images.githubusercontent.com/80013958/179822162-5a745f48-fc40-484d-aabe-f56ede3eb373.png)


## Datos del Clima
Una vez seleccionada la ciudad podemos ver la informacion del clima en dicha ciudad. 

![resultados-clima](https://user-images.githubusercontent.com/80013958/179822181-ce5dbe50-71a4-465b-8859-c122ac7bded9.png)

## Historial
En el historial tendremos una listado de las ultimas 6 ciudades buscadas, si volvemos a buscar una ciudad que está en el historial, esta no se vuelve a guardar. 

![listado-historial](https://user-images.githubusercontent.com/80013958/179822199-0d70d02f-7317-4c8a-8125-ce6adcf92524.png)


# Contacto 📫
- [Linkedin](https://www.linkedin.com/in/leanquiroga95/)
- [Email](mailto:leandroquiroga9514@gmail.com)

# Autor 👤
Realizado con ❤️ por [Leandro Quiroga](https://github.com/leandroquiroga);
