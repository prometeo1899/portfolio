var state= `press-key`;
var patron=[];
var level=0;
var indexPlayerPatron=0;



var title= document.getElementById('title');
var red= document.getElementById('red');
var green= document.getElementById('green');
var blue= document.getElementById('blue');
var yellow= document.getElementById('yellow');
var button=[red,green,blue,yellow]



document.addEventListener(`keypress`, starGame)
red.addEventListener('click' ,buttonPress)
green.addEventListener('click' ,buttonPress)
blue.addEventListener('click' ,buttonPress)
yellow.addEventListener('click' ,buttonPress)


function starGame(){
    if(state===`press-key`|| state==='gameover'){
        newlevel()
    }
}
function newlevel(){
    state='waitting-patron'
    setTimeout(()=>{
        level=level+1;
        title.innerText= `Nivel-`+level;
        var nextColor=Math.floor(Math.random() *4);
        var nextButton=button[nextColor];

        lightButton(nextButton);
    

        indexPlayerPatron=0
        patron.push(nextButton)
        
        state='waitting-player'
    },500)

}
function lightButton(button){
    button.classList.add("active");
    setTimeout(()=>{
    button.classList.remove("active")
},400
    )

}
function lightButtonn(button){
    button.classList.add("activo");
    setTimeout(()=>{
    button.classList.remove("activo")
},100
    )

}
function buttonPress(event){
    if( state==='waitting-player'){
        var button=event.target;
        if( button===patron[indexPlayerPatron]){
            indexPlayerPatron=indexPlayerPatron+1;
            lightButtonn(button);
            if( indexPlayerPatron===patron.length){
            newlevel();}
        }
        else{
            state='gameover'
            title.innerText='GAME OVER'
            level=0
        } 
    }
}