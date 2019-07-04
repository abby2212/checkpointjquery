document.getElementById("btw1").addEventListener("click",function(){
    
    var x = document.getElementById("TA").style.fontWeight;
    if (x=="normal")
    document.getElementById("TA").style.fontWeight = "bold";
else
document.getElementById("TA").style.fontWeight="normal";})



document.getElementById("btw2").addEventListener("click",function(){
    
    var x = document.getElementById("TA").style.fontStyle;
    if (x=="normal")
    document.getElementById("TA").style.fontStyle="italic";
else
document.getElementById("TA").style.fontStyle="normal";})




function souligne(){
    x=document.forms[0].A.style.textDecoration;
    if (x=="none")
    document.forms[0].A.style.textDecoration="underline";
    else
    document.forms[0].A.style.textDecoration="none";
    console.log(x);
}

function taille()
{y=document.getElementById("myselect");
x=y.options[y.selectedIndex].text;
document.getElementById("TA").style.fontSize=x;
}
function tt(){
   var ahmed=document.getElementById("myselectA");
   var x=ahmed.options[ahmed.selectedIndex].text;
   document.getElementById("TA").style.fontFamily=x;
}
 $(document).ready(function(){
     $(".pic").hover(function(){
         $(this).find("a").css("visibility","visible");
         $(this).find("img").css("opacity",0.5);
     },function(){$(this).find("a").css("visibility","hidden");
     $(this).find("img").css("opacity",1);})
 });


