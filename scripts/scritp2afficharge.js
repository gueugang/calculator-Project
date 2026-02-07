//-----------------importation des fonction-----------------
import * as fonctions from "./fonctionssimple.js";
import *as trigo from "./fonctionTrigonometrique.js"

//------------recuperation du display------------------
const display = document.getElementById('display');
const history = document.getElementById('history')

//ckld
const keybut = document.querySelectorAll('.keybut');
const clear = document.getElementById('clear');
const sup = document.getElementById('sup');
const equal = document.getElementById('equal');
const cos = document.getElementById('cos');
const sin = document.getElementById('sin');
const tan = document.getElementById('tan');
const rad = document.getElementById('rad');
const pie = document.getElementById('pie');
const snd = document.getElementById('2nd');
const racinecarre = document.getElementById('racinecarree');
const racinecubiqu = document.getElementById('racinecubique');
//const racineniemm = document.getElementById('racineniemme');
const valeurabsolu = document.getElementById('valeurabsolu');
const factoriell = document.getElementById('fatoriel');
const carre = document.getElementById('carree');
const curb = document.getElementById('curbe');
const invers = document.getElementById('inverse');
const ln = document.getElementById('ln');
const log = document.getElementById('log');


const regex = /^(\d+)([+\-*/%(D√AC^])(\d+)$/;
const regex1 = /^(\d+)([(()])(\d+)$/;


keybut.forEach(button => {
    button.addEventListener("click", () => {
//--------recuperation des entrer et afficharge a l'ecran--- ++formatage des donnees pour l'utilisation-----
        display.value +=button.dataset.value;
        
        const result = display.value.match(regex);
            if(result){

//------transformation de la premiere chaine en un nombre ---------

                const a = Number(result[1]);
                
                const signe = result[2];
//--------transformation de la premiere chaine en un nombre ---------
                const b = Number(result[3]);
                console.log(b)
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
                                    
                    //------------manqu la division a part entiere------------------
                                    break;
                                case "D":
                                    resultat = fonctions.divisionEntier(a, b);
                                    break
                                case "√":
                                    resultat = fonctions.racineniemme(b, a);
                                    break
                    //---------------arrangement--------------------
                                case "A":
                                    if(a > b){
                                        resultat = fonctions.arrangement(b, a);
                                    }else{
                                    resultat = fonctions.arrangement(a, b);
                                    }
                                    break
                    //-----------------combinaison--------------------
                                case "C":
                                    if(a > b){
                                        resultat = fonctions.combinaison(b, a);
                                    }else{
                                        resultat = fonctions.combinaison(a, b);
                                    }
                                    break
                    //-------------------puisance n-------------------
                                case "^":
                                    resultat = fonctions.puissance(a, b);
                                    break


                                };
                            
                               
                                
                                
//----------------afficharge a l'historique-----------------------------------
                             history.innerHTML = `<br><p> ${a}${signe}${b}</p>`;
                                display.value = resultat;
                            
                    }catch{
                    //    try{
                        
                    //     const expression = display.value.replace(/\s/g, "");
                    //     history.innerHTML = `<br><p> ${expression}`;
                    //     display.value = `= ${eval(expression)}`;
                        
                     //}catch{
                        display.value = "Erreur";
                    // }
                     }
                });

                

            }
            
                // equal.addEventListener("click", () => {
                //     try{
                        
                //         const expression = display.value.replace(/\s/g, "");
                //         history.innerHTML = `<br> ${expression}`;
                //         display.value = `= ${eval(expression)}`;
                        
                //     }catch{
                //         display.value = "Erreur";
                //     }

                // });
            
        
        
        
    });
});
// -------------------carree-------------------
carre.addEventListener("click", () =>{
    history.innerHTML = `<br> ${display.value}`;
    display.value = fonctions.square(Number(display.value.slice(0, -1)));
})
curb.addEventListener("click", () =>{
    history.innerHTML = `<br> ${display.value}`;
    display.value = fonctions.curbe(Number(display.value.slice(0, -2)));
})
//---------------valeur absolu-----------------
valeurabsolu.addEventListener("click", ()=> {
    history.innerHTML = `<br> ${display.value}`;
    const resultat = fonctions.valeurAbsolue(Number(display.value.slice(0, -3)))
    display.value = resultat;
})
//-----------racinecarree----------
racinecarre.addEventListener("click", () => {
    history.innerHTML = `<br> ${display.value}`;
    const resultat = fonctions.racinecarree(Number(display.value.slice(0, -1)));
    display.value = resultat;
    console.log(resultat);
})
racinecubiqu.addEventListener("click", () =>{
    const p = document.createElement("p");
    p.innerHTML = ` ${display.value}`;
    history.appendChild(p);
    const resultat = fonctions.racinecubique(Number(display.value.slice(0, -1)));
    display.value = resultat;
})
// racineniemm.addEventListener("click", () => {
//     console.log(display.value.slice(1, 0));

//     console.log(display.value.slice(-4,0));
//     display.value = "ok";
// })
//----------------factorielle--------------------
factoriell.addEventListener("click", () => {
    const p = document.createElement("p");
    p.innerHTML = ` ${display.value}`;
    history.appendChild(p);
    const resultat = fonctions.factorielle(display.value.slice(0, -1));
    display.value = resultat;
})
//-------------inverse-----------
invers.addEventListener("click", () =>{
    history.innerHTML = `<br> ${display.value}`;
    display.value  = fonctions.inverse(Number(display.value.slice(0,-3)));
    
})

//--------------------calcul des cosinus et sinus-------------------
cos.addEventListener("click", () => {
    history.innerHTML = `<br> ${display.value}`;
    const resultat = trigo.cosinus( Number(display.value.slice(0,-3)));
    display.value = resultat;
    console.log(resultat);
});
//---------------calcule de sinus------------------
sin.addEventListener("click", () => {
    history.innerHTML = `<br> ${display.value}`;
    const resultat = trigo.sinux(Number(display.value.slice(0,-3)));
    display.value = resultat;
    console.log(resultat);
});
//-----------calcul tangante---------
tan.addEventListener("click", () => {
    history.innerHTML = `<br> ${display.value}`;
    const resultat = trigo.tangente(Number(display.value.slice(0,-3)));
    display.value = resultat;
    console.log(resultat);
});
//--------------conversion de  degre en radian---------------------
rad.addEventListener("click", () => {
    history.innerHTML = `<br> ${display.value}`;
    const radiann = trigo.conversionRadian(Number(display.value.slice(0,-3)));
    display.value = radiann;
});
//-------------valeur de pie-------------

pie.addEventListener("click", () => {
    history.innerHTML = `<br> ${display.value}`;
    display.value = trigo.valeurpie();
});
//---------------calcule de arc----------------------- 
snd.addEventListener("click", () => {
    cos.addEventListener("click", () =>{
        history.innerHTML = `<br> ${display.value}`;
        let resultat =  trigo.arccos(parseFloat(String(display.value.slice(0,-6))));
        console.log(parseFloat(display.value));
        display.value = resultat;
    });
});
//------------calcul de arcsin------------
snd.addEventListener("click", () => {
    sin.addEventListener("click", () =>{
        history.innerHTML = `<br> ${display.value}`;
        let resultat =  trigo.arcsin(Number(display.value.slice(0,-6)));
        display.value = resultat;
    });
});
//------------calcul de arctan--------------
snd.addEventListener("click", () => {
    tan.addEventListener("click", () =>{
        history.innerHTML = `<br> ${display.value}`;
        let resultat =  trigo.arctan(Number(display.value.slice(0,-6)));
        display.value = resultat;
    });
});

//-----------ln(x)-----------------------
ln.addEventListener("click", () => {
    history.innerHTML = `<br> ${display.value}`;
    display.value = fonctions.ln(Number(display.value.slice(0, -2)))
})
//-------------log (x)-----------------------------
log.addEventListener("click", () => {
    history.innerHTML = `<br> ${display.value}`;
    display.value = fonctions.log(Number(display.value.slice(0, -3)))
})




sup.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});
clear.addEventListener("click", () => {
    history.innerHTML = `<br> ${display.value}`;
    display.value = "";
});


// let radian  = 45*(Math.PI)/180;
// let coss = Math.cos(radian);
//  let angle = Math.asin(Math.sin(radian))*180/(Math.PI)
// console.log(coss,angle);
// // console.log(`cos =  Math.cos(radian)`);
// // console.log(`tann = ${Math.tan(radian)}`);
// console.log(3%2);