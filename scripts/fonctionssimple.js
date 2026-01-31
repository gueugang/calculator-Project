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
    return a
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

