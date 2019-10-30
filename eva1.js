var TOT,PORT,PAP,REM;

var QTECOM=parseInt(prompt("saisir la quantité commandée"));

var PU=parseInt(prompt("saisir le prix unitaire"));

TOT=QTECOM*PU;

      if(TOT>500){PORT=0;}

      else{PORT=Math.max((0.02*TOT),6);}



      if(TOT<=100){REM=0;}            

             else if(TOT<=200){REM+=0.05*TOT;}

                   else{REM=0.1*TOT;}

                   }

  

   

PAP=TOT+PORT-REM;

console.log(TOT);

console.log(PORT);

console.log(REM);


console.log("le prix à payer est:"+" "+PAP);

​

​