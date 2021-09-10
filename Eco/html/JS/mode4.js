var button=document.getElementById('button');
var buttonstyle = document.querySelector('.buttonstyle');
var body = document.getElementById('body');
var temp = 1;


button.addEventListener('click',function(){

    if(temp==1){
        this.className = 'aftermodified';
        temp=0;
        buttonstyle.style. border= '2px solid  rgb(255,255,255)';
        body.style. backgroundColor= 'rgb(44, 46, 85)';
        body.style.color = 'white';
    }else{
        this.className = 'control';
        temp=1;
        buttonstyle.style. border= '2px solid black';
        body.style. backgroundColor= 'white';
        body.style.color = 'black';
    }
})