const   hr= document.getElementById("hr"),
        mt= document.getElementById("mt"),
        sd= document.getElementById("sd"),
        tm= document.getElementById("tm");
        date=document.getElementById("date")
        day=document.getElementById("day");
        mo=document.getElementById("mo");
        year=document.getElementById("year")

setInterval(()=>{
    const time = new Date();
    let h= time.getHours (),
        m= time.getUTCMinutes(),
        d= time.getDate(),
        da=time.getDay(),
        j=time.getUTCMonth(),
        y=time.getFullYear(),
        s= time.getSeconds();

     

        if ( h<=9) hr.textContent= `0${h}:`;
        else hr.textContent=`${h}:`;
        if (m<=9)mt.textContent=`0${m}:`;
        else mt.textContent=`${m}:`;
        if (s<=9)sd.textContent=`0${s}`;
        else sd.textContent=`${s}`;
         if (h>11) tm.textContent= `PM`;
         else tm.textContent=`AM`;
         date.textContent=`${d}   - `;
         if(j<=9)mo.textContent=`0${j+1} -`
        else  mo.textContent=`${j}`;
         year.textContent=`${y}`;
         day.textContent=`${da}`;
         if(da==0) day.textContent=`Domingo`
         else if(da==1) day.textContent=`Lunes`
         else if(da==2) day.textContent=`Martes`
         else if(da==3 )day.textContent=`Miercoles`
         else if(da==4) day.textContent=`Jueves`
         else if(da==5) day.textContent=`Viernes`
         else if(da==6) day.textContent=`Sabado`


  
},


1000)   


