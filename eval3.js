var nb=parseInt(prompt("entrer un nombre"));
var max=nb;
var min=nb;
while(nb!=0)
nb=parseInt(prompt("entrer un nombre"));
{if(nb<min)
{min=nb}
if(nb>max)
{max=nb}
}
console.log("le max est:"+max);
console.log(" le min est:"+min);
