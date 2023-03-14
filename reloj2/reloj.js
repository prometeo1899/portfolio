const   hr=document.getElementById("hr"),
        mt=document.getElementById("mt"),
        tm=document.getElementById("tm"),
        day=document.getElementById("day"),
        date=document.getElementById("date"),
        month=document.getElementById("month"),
        year=document.getElementById ("year"),
        text=document.getElementById("text"),
        ptime=document.getElementById("time"),
        body=document.getElementById("body");

            
    

setInterval(()=>{
    const time= new Date
    let h= time.getHours(),
        m=time.getMinutes(),
        d=time.getDay(),
        f=time.getDate(),
        mo=time.getMonth(),
        y=time.getFullYear();
        

        if(hr.style.visibility==="visible")
            hr.style.visibility="hidden";
         else hr.style.visibility="visible";
         if(mt.style.visibility==="visible")
            mt.style.visibility="hidden";
         else mt.style.visibility="visible";
         if(tm.style.visibility==="visible")
            tm.style.visibility="hidden";
         else tm.style.visibility="visible";

         if( h>=5 && h<=11) {
            body.style.background=`url(https://images3.alphacoders.com/166/166569.jpg)no-repeat center center fixed`;
            body.style.backgroundSize=`cover`}
         else if (h>=12 && h<=18){
            body.style.background=`url(https://www.xtrafondos.com/descargar.php?id=6692&resolucion=2560x1440)no-repeat center center fixed`;
            body.style.backgroundSize=`cover`}
         else body.style.background=`url(https://c.wallhere.com/photos/e0/5e/sky_stars_mountains_space-249181.jpg!d) no-repeat center center fixed`;
              body.style.backgroundSize
            
         

    
        if(h<=9) hr.textContent=`0${h}:`;
        else hr.textContent=`${h}:`;
        if (m<=9) mt.textContent=`0${m}`;
        else mt.textContent=`${m}`;
   
        year.textContent=`${y}.`;
        if(mo==0) month.textContent=`Enero,`
        else if (mo==1) day.textContent=`Febrero,`
        else if (mo==2) month.textContent=` Marzo, `
        else if (mo==3) month.textContent=`Abril,`
        else if (mo==4) month.textContent=`Mayo,`
        else if (mo==5) month.textContent=`Junio,`
        else if (mo==6) month.textContent=`Julio,`
        else if (mo==7) month.textContent=`Agosto,`
        else if (mo==8 )month.textContent=`Septiembre,`
        else if (mo==9) month.textContent=`Octubre,`
        else if (mo==10) month.textContent=`Noviembre,`
        else if (mo==11) month.textContent=`Diciembre,`

        date.textContent=`${f} de `
        day.textContent=`${d}`
        if(d==0) day.textContent=`Dom`
        else if (d==1) day.textContent=`Lun.`
        else if (d==2) day.textContent=`Mar.`
        else if (d==3) day.textContent=`Mie.`
        else if (d==4) day.textContent=`Jue.`
        else if (d==5) day.textContent=`Vie.`
        else if (d==6) day.textContent=`Sab.`
       

        if(h<=11) tm.textContent=`AM`;
        else tm.textContent=`PM`;
        if( h>=5 && h<=11) text.textContent=`"¡Buenos días! Hoy es un día especial, un nuevo comienzo lleno de posibilidades y oportunidades. Permítele a tu mente enfocarse en lo que es positivo, lo que te hace feliz y lo que te llena de energía. `
        else if (h>=12 && h<=18) text.textContent=`Que esta tarde sea el comienzo de un camino lleno de logros, aprendizajes y éxitos, y que te permita vivir plenamente cada momento. ¡Que tengas una excelente tarde llena de energía y motivación!"`
        else text.textContent=`Es hora de decir adiós a otro día, pero no sin antes reconocer todo lo que has logrado y lo lejos que has llegado. Que esta noche puedas dormir en paz, sintiendo la satisfacción de haber dado lo mejor de ti.`
},1000

)
