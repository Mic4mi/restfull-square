==============================================================================================
Para comenzar a trabajar con una aplicación empleando nodeJS+express
==============================================================================================
>> Instalar -> npm init -> crear el pack JSON.
>> npm install:
    * body-parser -> "parsea" las APIs para que se vean como un objeto
    * express
    * ejs -> Para poder leer EJS
    * mongoose -> Para trabajar con mongoDB escribiendo en JS
    PARA QUE MONGOOSE NO TIRE ERROR instalar npm install mongoose@5.1.7 --save
    * method-override -> HTML sólo procesa peticiones GET y POST. Con esto, podemos simular
    otro tipo de peticiones como PUT y DELETE. 
    * express-sanitizer -> Sirve para evitar que el usuario ejecute scripts en la web
-----------------------------------------------------------------------------------------------
Luego de npm install apps --save SIEMPRE. 

==========================================================
Plantilla SETUP APP
==========================================================
// setup aplication -> instalar paquetes
var bodyParser = require("body-parser"),
    express = require("express"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    app = express();

// APP CONFIG.
mongoose.connect("mongodb://localhost/restful_blog_app");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer()); --> SIEMPRE VA DESPUÉS DE BODYPARSER
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");


==========================================================
Plantilla LOCALHOST:PORT
==========================================================
app.listen(3000, function () {
    console.log("El servidor de YelpCamp empezó!");
});

==========================================================
Contenido básico de una app
==========================================================
>> Package JSON
>> app.js 
>> public -> Carpeta que contiene hojas de estilo, archivos de js, etc.
>> views -> contiene los archivos EJS
>> partials -> Esta dentro de la carpeta views. Contiene el header y el footer.

==========================================================
INCLUDE PARTIALS
==========================================================
header -> <%- include("partials/header") %>
footer -> <%- include("partials/footer") %>