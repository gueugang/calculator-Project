//---------importation des fonction-----
import * as fonctions from "./fonctionssimple.js";
import *as trigo from "./fonctionTrigonometrique.js"

//recuperation du display
const display = document.getElementById('display');
const history = document.getElementById('history')

//ckld
const keybut = document.querySelectorAll('.keybut');
const clear = document.getElementById('clear');
const sup = document.getElementById('sup');
const equal = document.getElementById('equal');
const regex = /^(\d+)([+\-*/%(])(\d+)$/;
const regex1 = /^(\d+)([(])(\d+)$/;


keybut.forEach(button => {
    button.addEventListener("click", () => {
        //--------recuperation des entrer et afficharge a l'ecran--- ++formatage des donnees pour l'utilisation-----
        display.value +=button.dataset.value;
        // if(button.dataset.value== "+"){
        //     let a = display.value.slice(0, -1);
        //     console.log(`a = ${a}`);
        //     var position = display.value.length;
        //     console.log( position);
        // }
        
        const result = display.value.match(regex);
        const trigono =display.value.match(regex1);
        // console.log(trigono);
        // if (trigono){
        //     const angl = Number(trigono[3]);
        //     console.log(angl);
        // }

            if(result){

//------transformation de la premiere chaine en un nombre ---------

                const a = Number(result[1]);
                
                const signe = result[2];
//--------transformation de la premiere chaine en un nombre ---------
                const b = Number(result[3]);
                equal.addEventListener("click", () => {
                        try{
                            let resultat ;
                            switch(signe) {
                                case "+":
                                    resultat = fonctions.somme(a, b);
                                console.log(a, "signe", signe, b);
                                //a supprimer ligne 42 et 44 et utiliser la ligne 42 pour l'afficharge de l'historique
                                console.log("reslt", resultat);

                                
                                break
                                case "-":
                                    resultat = fonctions.soustration(a, b);
                                    
                                    break
                                case "*":
                                    resultat = fonctions.multiplication(a, b);
                                    
                                    break;
                                case "/":
                                    resultat = fonctions.division(a, b);
                                    
                                    break
                                case "%":
                                    resultat = fonctions.modulo(a, b);
                                    console.log(a%b);
                                    
                                    //manque la division a part entiere
                                    break;
                                case "(":
                                    console.log(b);

                                }

                                // history.textContent = `<br> ${a}${signe}${b}`;
                                display.value = resultat;
                            
                        }catch{
                            display.value = "erreur";
                        }
                });

                

            }
        
        
        
    });
});





sup.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});
clear.addEventListener("click", () => {
    display.value = "";
});

// equal.addEventListener("click", () => {
//     try{
        
//         const expression = display.value.replace(/\s/g, "");
//         display.value = `= ${eval(expression)}`;
        
//     }catch{
//         display.value = "erreur";
//     }

// });
// let radian  = 60*(Math.PI)/180;
// let angle = Math.asin(Math.sin(radian))*180/(Math.PI)
// console.log(angle);
// console.log(`cos =  Math.cos(radian)`);
// console.log(`tann = ${Math.tan(radian)}`);
console.log(3%2);