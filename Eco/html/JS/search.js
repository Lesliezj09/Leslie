window.onload=function()
{
    var btn=document.getElementById('btn');
    var texts=document.getElementById('texts');
    var content=document.getElementById('content');

    var str=content.innerHTML;


    console.log(str);
    btn.onclick=function(){

        var val=texts.value;
        if (val=="")
        {
            alert("Search...");
        }
        else
        {
            content.innerHTML=str.split(val).join('<span id="Stress">'+val+'</span>');
        }


    }
}
