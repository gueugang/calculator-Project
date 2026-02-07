 export function somme(a, b){
    return a+b;
}

export function soustration(a, b){
    return a-b;
}

export function division(a, b){
    return a/b;
}

export function multiplication(a, b){
    return a*b;
}

export function modulo(a, b){
    
    return a%b;
}

export function valeurAbsolue(a){
    if(a<0){
        return -1*a;
    }else{
        return a;
    }
}
//--------fonction de division a par entier-----------------
export function divisionEntier(a, b){
    return Math.trunc(a/b);
}
//----------fonctiond'elevation d'un nombre au carree------------
export function square(a){
    return a*a;
}
export function curbe(a){
    return a*a*a;
}
export function puissance(x, n){
    let puis = 1;
    for(let i = 0; i< n; i++){
        puis = puis*x;
    }
    return puis;
}
//------------fonction exponentielle----------
export function exponentiel(x){
    let exp = Math.exp(x);
    return exp;
}

//---------export function ln(x)-------------
export function ln(x){
    let value = Math.log(x);
    return value;
}
//---------export function log(x)-------------
export function log(x){
    let value = Math.log10(x);
    return value;
}
//---------fonction racine 
export function racinecarree(a){
    if(a > 0){
    return Math.sqrt(a);
    }else{
        display.value= Erreur;
    }
}
//------racine cubique-------------
 export function racinecubique(a){
    return Math.cbrt(a);
 }
//-------------racine niemme------------
 export function racineniemme(a, n){
    return Math.pow(a, 1/n);
 }


 //----------fonction-- factorielle------------
 export function factorielle(n){
    if(n === 1 || n === 0){
        return 1;
    }else{
        let facto = n;
        for(let i= 1; i < n; i++){
            facto = facto*(n-i);
        }
        return facto;
    }
 }
//-------------------fonction arrangement--------------------------
export function arrangement(a,b){
    if(a === 0){
        return 1;
    }
    if(a ===1 ){
        return b;
    }
    return factorielle(b)/factorielle(b-a);
}
//------------fonctioncombinaison-------------------
 export function combinaison(a, b){
    if(a === 0){
        return 1;

    }
    if(a===1){
        return(b);
    }else{
        return arrangement(a, b)/factorielle(a);
    }
 }
 //--------------------inverse -------------------------
 export function inverse(a){
    return 1/a;
 }