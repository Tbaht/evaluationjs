var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

var prenom=prompt("entrer un prenom");
var pos =tab.indexOf(prenom);
for(i=pos;i<tab.lentgh;i++)
{tab[i]=tab[i++];
tab[tab.lentgh-1]="";}
console.log(tab);