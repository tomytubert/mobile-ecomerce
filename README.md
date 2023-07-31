## RESUMEN

Esta prueba consiste en la creación de una mini-aplicación para comprar dispositivos moviles.
• La aplicación tendrá únicamente dos vistas:
1. Vista principal - Listado de productos
2. Detalles del producto
• La implementación de los diseños queda a libre elección, pero deberá seguir la
estructura que se ha definido en las capturas. Se valorará positivamente el nivel de
detalle de la propuesta.
• Se requiere la utilización de React/Preact para el desarrollo de aplicación y se podra
complementar con otras librerias JS si se estima oportuno.
• Se permite la utilización de JS con ES6, y preferiblemente que no se realize la prueba
con Typescript.
• Se prodrá utilizar un boilerplate template para la creación de la estructura del proyecto.
• La aplicación será una SPA, donde se añadirá el enrutado de la vistas el codigo de
cliente, sin que sea una MPA o la utilización de SSR.
• El proyecto tendrá que contener los siguiente script, para poder gestionar la aplicación:
1. START - Modo desarrollo
2. BUILD - Compilación para modo Producción
3. TEST - Lanzamiento de test
4. LINT - Comprobación de código
• El proyecto deberá presentarse en un repositorio de codigo abierto (Github, Gitlab,
Bitbucket), con la solución al problema. Se quiere que se pueda subir el codigo de
manera evolutiva de manera que se vaya alcanzando hitos.
• En el repositorio hay que incluir un documento README (preferiblemente incluirlo en el
primer commit), donde se incluirá la explicación para ejecutar el proyecto asi como
alguna nota explicativas o información adicional que se consideré necesaria.

## DESCRIPCION DE LAS VISTAS

PLP - Product List Page
• Pagina donde se visualizará la lista de los productos.
• Esta pagina, se mostrarán todos los elementos que nos devuelve la petición del API
• Permitirá el filtrado del contenido en función del criterio de busqueda que el usuario
introduzca
• Al seleccionar un producto, deberá navegar a los detalles del mismo.
• Se mostrarán un maximo de cuatro elementos por fila, y que sea adaptativo segun la
resolución.

PDP - Product Details Page
• Esta pagina de dividirá en dos columnas:
o En la primera se mostrará el componente de la imagen del producto
o En la segunda, se mostrará los detalles y las acciones del producto
• Deberá mostrar un link para navegar de vuelta a la lista de productos.


## DESCRIPCION DE LOS COMPONENTES

Cabecera (HEADER)
• El titulo o el icono de la aplicación, actuará como enlace a la vista principal.
• Se mostrará un breadcrumbs, mostrando la pagina donde se encuentra el usuario asi
como un link para su navegación.
• En la parte derecha de la cabecerá, se mostrará el numero de items que se hayan
añadido al carrito.

Barra de Busqueda (SEARCH)
• Se mostrará un input al usuario, el permitirá la introdución de una cadena de texto.
• El usuario deberá filtra los productos en función del texto introducido, y se comparará
con el Marca y el Modelo de los productos.
• El filtrado, será en tiempo real, es decir, se lanzará una busqueda cada vez que el
usuario cambie los criterios de busqueda.

Elemento lista (ITEM)
• Se mostrará la siguiente información del producto:
o Imagen
o Marca
o Modelo
o Precio

Imagen Producto (IMAGE)
• Se visualizará la imagen del producto

Descripción Producto (DESCRIPTION)
• Se mostrará los detalles asociados a los productos. Se mostrarán al menos los siguientes
atributos:
o Marca
o Modelo
o Precio
o CPU
o RAM
o Sistema Operativo
o Resolucion de pantalla
o Bateria
o Camaras
o Dimensiones
o Peso

## Acciones Producto (ACTIONS)

• Se mostrará dos tipos de selectores, donde el usuario, podra seleccionar el tipo del
producto que quiere añadir a la cesta. Se mostrarán los selectores de opciones para las
siguiente atributos:
o Almacenamiento
o Colores
• Aunque solo exista una opción, se mostrará el selector con la información. Para este
caso de uso, deberá estar seleccionado por defecto.
• Se visualizará un boton de Añadir, donde el usuario, un vez seleccionada las opciones,
añadirá el producto a la cesta.
• Al añadir un producto mediante el API, se requiere mandar la siguiente información:
o El identificador del producto
o El codigo de color seleccionado
o El codigo de la capacidad de almacenamiento seleccionada
• La petición de añadir, devuelve en la respuesta, el numero de productos que hay en la
cesta. Este valor deberá mostrarse en la cabecera de la aplicación en cualquier vista
de la misma. Para ello se requiere persistir el dato.

## RECURSOS
Integración API
Para poder realizar la prueba, se requiere integrar con un API para la gestión de los datos.
El dominio del API será el mismo para todos los Endpoints, y será el siguiente:
https://2gm2eu9uuw.us-east-1.awsapprunner.com/

Las definiciones de los Endpoints son los siguientes:

• Obtener el listado de productos
Path
GET /api/product
Response
[ { id: 0001, ...}, { id: 0002, ...} ]

• Obtener el Detalle de producto
Path
GET /api/product/:id
Response
{ id: 0001, ... }

• Añadir producto a la cesta
Path
POST /api/cart
Body
{ id: 0001, colorCode: 1, storageCode: 2}
Response
{ count: 1 }

## Persistencia de datos
Se requiere, añadir un almacenaje en cliente de los datos que se reciban desde el API. Lo que
se quiere ofrecer es un sistema de cacheo, para no se realicen cada vez peticiones al API. Por
ellos, se require definir la siguiente funcionalidad:
• Se almacenará la información cada vez que se solicite al servicio del API
• Se guardará dicha información, y tendrá una expiración de 1 hora, una vez excedido dicho tiempo, deberá revalidarse la información
• Se podrá utilizar cualquier metodo de storage para almacenar dicha información, ya sea del navegador o en memoria, pero siempre en cliente.

----------------------------------------

## COMPONENTS
Todos los componentes tienen un archivo styles.js donde creo los componentes estilados con style-components.

* Breadcumps
* Cart
* Description
* Header 
* Icons
 - Bag
* Item
* List
* Loading
* Search

## Breadcrumps 
Este componente solo se renderiza cuando accedemos a la vista detallada del producto. Ahí, compara el poductId del params con la id del Array de productos que obtiene de useData() que viene de un contexto. De esta forma, encuentra el id del producto y renderiza el modelo.

## Cart
Renderiza la cantidad de productos guardados en el contexto de Cart en Header.

## Description
Renderiza la información detallada de cada producto en ItemPage.

## Header
Renderiza el logo de la app más Breadcrumps y Cart.

## Icons/Bag
Es un icono svg pasado a componente que se renderiza en Cart.

## Item
Renderiza la información de los productos del array de datos. Este tiene un link a la página detallada.

## List
Renderiza una lista de Item recibida por props de app.jsx.

## Loading
Spinner para mostrar mientras se realizan los fetch y no hay datos.

## Search
Es un input type text que recibe dos props. El handlechange y el value del componente padre que es app.jsx. 

## VIEWS

* Home
* ItemPage

## Home / app.jsx

Primero hace un fetch de los datos si el expirationTime guardado en el localStorage es mayor al Date.now(), además de traerse los
datos del contexto useData().

También tiene un state filterBy para controlar el valor del input Search. La constante dataFiltered guarda los productos filtrados y se los envia a List.

## ItemPage

Primero hace un fetch del producto con el id de params y guardo los datos en el estado product y la primera opción del color y del almacenamiento en selectedDetails.

Hay un handlechange que actualiza el estado selectedDetails con los select de almacenamiento y color. Lo que hace es buscar el objeto de la opción dentro del estado de producto comparando los code.

Por útlimo, cuando el usuario lo añade al carrito, se ejecuta handleSubmit. Este primero hace un fetch POST de los datos escogidos. Al resolverse esa promesa lanza un dispatch para actualizar los datos del useCart.

## CONTEXT
En los contextos hay creados dos en cada uno. Uno me guarda los datos y otro el dispatch para actualizar esos datos.

* cartContext
* dataContext
* rootContext

## cartContext
Como acciones está ADD_PRODUCT que añade el payload a cart.

## dataContext
Al crearse hace un fetch para obtener el array de datos a la vez que guarda en el localStorage el tiempo de expirationTime.
Tenemos dos acciones, FETCH_DATA que se lanza en el useEffect de este contexto, y UPDATE_DATA que actualiza data con el payload y el expirationTime.