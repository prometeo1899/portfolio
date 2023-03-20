const width=600;
const height=600;
var clicks=0
let $text=document.getElementById("text")
let $contenedor1=document.getElementById("contenedor1")
let $contenedor2=document.getElementById("contenedor2")
let $contenedor3=document.getElementById("contenedor3")
let $contenedor4=document.getElementById("contenedor4")
let $map_mini1=document.getElementById("map_mini1")
let $map_mini2=document.getElementById("map_mini2")
let $map_mini3=document.getElementById("map_mini3")
let $map_mini4=document.getElementById("map_mini4")
let $central1=document.getElementById("central1")
let $body =document.getElementById("body")
let $map=document.getElementById("map")
let target={
    x: randomNumber(width),
    y:randomNumber(height)
   }

   $map_mini1.addEventListener('click' ,function(){
    var audio= new Audio("start.m4a")
    audio.play();

    $contenedor1.style.visibility="visible"
        $contenedor2.style.visibility="hidden"
        $contenedor3.style.visibility="hidden"
        $contenedor4.style.visibility="hidden"
        $central1.style.border="3px solid white"
        $central1.style.boxShadow="none"
        $text.style.color="white"
        $text.innerText="Encuentra el objeto escondido:"
        
   })
   $map_mini2.addEventListener('click' ,function(){
    var audio= new Audio("start.m4a")
    audio.play();
    $central1.style.border="3px solid white"
    $central1.style.boxShadow="none"
    $text.style.color="white"
    $text.innerText="Encuentra el objeto escondido:"
 
    $contenedor2.style.visibility="visible"
    $contenedor1.style.visibility="hidden"
    $contenedor3.style.visibility="hidden"
    $contenedor4.style.visibility="hidden"
    
})
$map_mini3.addEventListener('click' ,function(){
    var audio= new Audio("start.m4a")
    audio.play();
    $central1.style.border="3px solid white"
    $central1.style.boxShadow="none"
    $text.style.color="white"
    $text.innerText="Encuentra el objeto escondido:"
   
    $contenedor3.style.visibility="visible"
    $contenedor1.style.visibility="hidden"
    $contenedor2.style.visibility="hidden"
    $contenedor4.style.visibility="hidden"
    
})
$map_mini4.addEventListener('click' ,function(){
    var audio= new Audio("start.m4a")
    audio.play();
    $central1.style.border="3px solid white"
    $central1.style.boxShadow="none"
    $text.style.color="white"
    $text.innerText="Encuentra el objeto escondido:"
   
    $contenedor4.style.visibility="visible"
    $contenedor1.style.visibility="hidden"
    $contenedor3.style.visibility="hidden"
    $contenedor2.style.visibility="hidden"
    
})
   $map.addEventListener('click' ,function(e){
    clicks++;
   
   var audio =new Audio("click.m4a")
   audio.play();


    let distance=obtenerDistancia(e,target);
    let estadodistancia=estadoDistancia(distance);
    if(distance<=40){
        $contenedor1.style.boxShadow="0 0 15px 5px red"
        $central1.style.border="none"
        $text.style.color="red"}
    else if(distance<=60){
        $central1.style.boxShadow="0 0 15px 5px rgb(234, 84, 14)"
        $central1.style.border="none"
        $text.style.color="rgb(234, 84, 14)"}
    else if(distance<=100){
            $central1.style.boxShadow="0 0 15px 5px yellow"
            $central1.style.border="none"
            $text.style.color="yellow"}
                else if(distance<=130){
                    $central1.style.boxShadow="0 0 15px 5px rgb(75,213,216)"
                    $central1.style.border="none"
                    $text.style.color="rgb(75,213,216)"}
                    else if(distance<=170){
                        $central1.style.boxShadow="0 0 15px 5px rgb(59, 127, 254)"
                        $central1.style.border="none"
                        $text.style.color="rgb(59, 127, 254)"}
                        else if(distance<=210){
                            $central1.style.boxShadow="0 0 15px 5px rgb(14, 79, 200)"
                            $central1.style.border="none"
                            $text.style.color="rgb(14, 79, 200)"}
                            else{
                                $central1.style.boxShadow="0 0 15px 5px white"
                                $central1.style.border="none"
                                $text.style.color="white"}
                            
                    
    $text.innerText=`${estadodistancia}`


   
})
   
   function obtenerDistancia(e,target){
    let diffx=e.offsetX-target.x;
    let diffy=e.offsetY-target.y;
    return Math.sqrt((diffx*diffx)+(diffy*diffy))
    
} 




function randomNumber(a){
  return Math.floor(Math.random()*a)
}

function estadoDistancia(a){
    if (a<=20){
        document.body.style.backgroundImage=" url('https://usagif.com/wp-content/uploads/gif/confetti-8.gif' ) " ;
        var audio =new Audio("win.m4a")
        audio.play();
        setTimeout(() => {
            alert (`Has encontrado el objeto en ${clicks} clicks FELICITACIONES`)

        location.reload();
        }, 1000);
   
    }
    if (a<40){
        return "Hirviendo"

    }
    else if( a<60){
        return"Muy Caliente"
    }
    else if( a<100){
        return"Caliente"
    }
    else if( a<130){
        return" Tivio"
    }
    else if( a<170){
        return"Frio"
    }
    else if( a<210){
        return"Muy Frio"
    }
    else {
        return "Congelado"
     
    }

    

}


