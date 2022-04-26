$(document).ready(function(){
    
  
    $("#info").html('Información básica <br> <img src="img/basic.png" id="info">');
    
    $("#hobby").html('Hobbies <br> <img src="img/hobby.png" id="hobby"> ');
    $("#music").html('Musica<br> <img src="img/music.png" id="music">');
    $("#food").html('Comida Favorita <br> <img src="img/food.png" id="food">');
    $("#place").html('Lugares Favoritos <br> <img src="img/place.png" id="place">');
    $("#future").html('Planes Futuros <br> <img src="img/future.png" id="future">');
        
    $(".grid-item").click(function(e){  
        let aspecto = (e.target.id);
        console.log(aspecto);

   let contenidoModal = {
        infoM: {
            texto: "Mi nombre es Ricardo Antonio Herrera Villatoro, nací el \n\
                15 de noviembre de 1998. Actualmente tengo 23 años y estoy \n\
                estudiando Ingeniería Industrial en la Universidad de San Carlos \n\
                de Guatemala (2018) y llevando el Técnico de Desarrollo de Software en \n\
                la Universidad Galileo (2021). Siempre me gustó la tecnología y todo lo que se puede \n\
                llegar a hacer con ella por lo que es el área en la que quisiera desarrollarme \n\
                profesionalmente. ",
            imagen: "img/photo.jpg"
        },
        hobbyM: {
            texto: "En mi tiempo libre me gusta ver series y jugar videojuegos y también leo un poco \n\
                para tener un hábito de lectura. Principalmente miro anime y me gustan los géneros \n\
                de aventura, acción y ciencia ficción; en la computadora juego principalmente League\n\
                of Legends y Genshin Impact.",
            imagen: "img/genshin.jpg"
        },
        musicM: {
            texto:"Principalmente escucho Pop, música alternativa, soft-rock y un poco de Rap\n\
                   tanto en inglés como español. Esucho también bastante música instrumental o \n\
                   relajante mientras hago tareas / trabajo para concentrarme mejor. Mis artistas/bandas\n\
                   favoritas son Kings of Leon, Harry Styles, Coldplay y Drake.",
            imagen:"img/coldplay.jpg",
        },
        foodM: {
            texto:"Mi tipo de comida favorita es la comida de mar como el pescado, los mariscos, \n\
                   cangrejos, entre otros. En especial el Sushi de restaurantes como Mr. Sushi o \n\
                   Sushi Itto. Mi postre favorito es el pastel de Amapola y mi bebida favorita es la horchata.",
            imagen:"img/sushi.jpg"
        },
        placeM: {
            texto:"Nunca he viajado fuera del país, pero mi lugar favorito a visitar sería Japón, \n\
                   debido a que es un país muy interesante que tiene tanto tecnología de primera como \n\
                   tradiciones. comida deliciosa y lugares muy hermosos los cuales visitar. ",
            imagen:"img/japon.jpg"
        },
        futureM: {
            texto:"Siempre me ha interesado el análisis de datos e información por lo que quisiera aprender más \n\
                    acerca de temas como Big Data y Machine Learning porque son temas bastante interesantes y que \n\
                    seguirán siendo prevalentes en los años que vienen y que se seguirán actualizando conforme \n\
                    las necesidades de las personas. Por lo que quisiera seguir estudiando ya sea con una maestría \n\
                    o estudios propios para aprender todos estos temas tan intersantes. ",
            imagen:"img/ml.jpg"
        }
    };
    
   
   
   let modal =  $("#myModal");
   let span =  $(".close");
   let contenido = $(".modal-content");
   console.log("contenido es");
   console.log(contenido[0]);
   
   switch(aspecto){
        case "info":
            contenido.find("p").text(contenidoModal.infoM.texto);
            contenido.find("img").attr("src", contenidoModal.infoM.imagen);
            contenido.find("img").css({"display": "block","margin-left": "auto",
                                        "margin-right": "auto", "width": "25%"});
           contenido.css({"background-color":"#ff0e35"});
                
            break;
        case "hobby":
            contenido.find("p").text(contenidoModal.hobbyM.texto);
            contenido.find("img").attr("src", contenidoModal.hobbyM.imagen);
            contenido.find("img").css({"display": "block","margin-left": "auto",
                                        "margin-right": "auto", "width": "50%"});
            contenido.css({"background-color":"#e15ced"});
            break;
        case "food":
            contenido.find("p").text(contenidoModal.foodM.texto);
            contenido.find("img").attr("src", contenidoModal.foodM.imagen);
            contenido.find("img").css({"display": "block","margin-left": "auto",
                                        "margin-right": "auto", "width": "50%"});
            contenido.css({"background-color":"#e9b62e"});
            break;
        case "place":
            contenido.find("p").text(contenidoModal.placeM.texto);
            contenido.find("img").attr("src", contenidoModal.placeM.imagen);
            contenido.find("img").css({"display": "block","margin-left": "auto",
                                        "margin-right": "auto", "width": "50%"});
            contenido.css({"background-color":"#92aaf5"});
            break;
        case "music":
            contenido.find("p").text(contenidoModal.musicM.texto);
            contenido.find("img").attr("src", contenidoModal.musicM.imagen);
            contenido.find("img").css({"display": "block","margin-left": "auto",
                                        "margin-right": "auto", "width": "50%"});
             contenido.css({"background-color":"#f070d5"});
            break;
        case "future":
            contenido.find("p").text(contenidoModal.futureM.texto);
            contenido.find("img").attr("src", contenidoModal.futureM.imagen);
            contenido.find("img").css({"display": "block","margin-left": "auto",
                                        "margin-right": "auto", "width": "50%"});
            contenido.css({"background-color":"#33e77c"});
                break;
   }
 
  
  
   modal.css("display", "block");
   span.click(function(){
      modal.css("display", "none");
   });
   
    $("#contenido").click(function(e){
        if (modal.is(":visible")){
            console.log("hide");
        }
  
   });
   
        
            
   
        
 });
    
});
