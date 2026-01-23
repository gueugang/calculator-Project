//recuperation du clavier
const clavier = document.getElementById('clavier');
//recuperation des Lignes du clavier
const premierLigne = document.getElementById('premierLigne');
const deuxiemeLigne = document.getElementById('deuxiemeLigne');
const troisiemeLigne = document.getElementById('troisiemeLigne');
const quartriemelinge = document.getElementById('quartriemeLigne');
const cinquiemeLigne = document.getElementById('cinquiemeLigne');
const sixiemeLigne = document.getElementById('sixiemeLigne');
const septiemeLigne = document.getElementById('septiemeLigne');

// recuperation des bouton pour gerer l'ajout des boutons au clavier
const racineCarree = document.getElementById('racinecarree');
const factoriel = document.getElementById('factoriel');
const equation = document.getElementById('equation');
const addkey = document.getElementById('addkey');
const pie = document.getElementById('pie');
const exponentiel = document.getElementById('exponentiel');

//ajout devennement pour l'ajout des boutons 

addkey.addEventListener('click', (e) =>{
    

    racineCarree.classList.remove("hidden");
    factoriel.classList.remove("hidden");
    equation.classList.remove("hidden");
    pie.classList.remove("hidden");
    exponentiel.classList.remove("hidden");
    premierLigne.classList.remove("hidden");
    deuxiemeLigne.classList.remove("hidden");
    
    addkey.addEventListener('click', (e) =>{
   

    racineCarree.classList.add("hidden");
    factoriel.classList.add("hidden");
    equation.classList.add("hidden");
    pie.classList.add("hidden");
    exponentiel.classList.add("hidden");
    premierLigne.classList.add("hidden");
    deuxiemeLigne.classList.add("hidden");
    

}, 1000)

}, 2000);  

