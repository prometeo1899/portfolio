var piezas= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
desordenar();
pintarPuzzle();
var num_click=0
var primer_click=0


function desmarcarTodas(){
for(var i=0; i<20;i++){
    document.getElementById("img_"+i).style.border=null
}
}
function seleccionar(casilla){
    num_click=num_click+1;
    if( num_click==1){
        primer_click=casilla
    }
    desmarcarTodas();
    document.getElementById("img_"+casilla).style.border="solid 2px black";
    
    if(num_click==2){
       var segundo_click=casilla;
       var contenido= piezas[primer_click];
       piezas[primer_click]=piezas[segundo_click];
       piezas[segundo_click]=contenido;
       num_click=0;
       pintarPuzzle();
       desmarcarTodas();
       var correcto=comprobarCorrecto();
       if(correcto==true){
        alert("TERMINADO EXITOSAMENTE")
       }
      
     
      
    }
 
}
function comprobarCorrecto(){
    var correcto=true;
for( var i =0; i<=19;i++){
        if (piezas[i]!=i){
       correcto=false;
        }
  
    }
    return correcto;
}
function desordenar(){
   piezas=piezas.sort(function(){return Math.random() - 0.5});
    console.log(piezas)
}
function pintarPuzzle(){
    for(var casilla=0; casilla <=19;casilla++){
        var imagen=piezas[casilla]
        console.log(imagen)
        document.getElementById("img_"+casilla).src="./imagenes/"+imagen+".jpg"
    }

}
