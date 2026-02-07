//--------fonction pie----------------
export function valeurpie(){
    return Math.PI;
}


//-----------fonction de conversion de valeur d'angle en degre en radian
export function conversionRadian(a){
    const radian = a*(Math.PI)/180;
    return radian;
}
//--------fonction cosinus de x-------------
export function cosinus(x){
    const radian = conversionRadian(x);
    return Math.cos(radian);
}
// -----------fonction sinus de x---------
export function sinux(x){
    const radian = conversionRadian(x)
    return Math.sin(radian);
}
//----------- fonction tangente de x ------------
export function tangente(x){
    const radian = conversionRadian(x);
    return Math.tan(radian);
}
//-----------foncton arc pour le retour des angle en degrée --------------
export function arccos(x){
    let radian = Math.acos(x);
    console.log(radian);
    let angle = (radian*180)/(Math.PI);
    console.log(angle);
    return angle;
}

export function arcsin(x){
    const radian = Math.asin(x);
    let angle = radian*180/(Math.PI);
    return angle;
}

export function arctan(x){
    const radian = Math.atan(x);
    let angle = radian*180/(Math.PI);
    return angle;
}