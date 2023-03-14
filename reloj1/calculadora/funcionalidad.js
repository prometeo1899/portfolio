
let pantalla=document.getElementById("pantalla");

const borrar= ()=>{
    pantalla.value=``;
}
const mostrar=(n)=>{
    pantalla.value+=n
}
const calcular=()=>{
    pantalla.value=eval(pantalla.value);
}