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
const ppremierLigne = document.getElementById('ppremierLigne');
const autreLigne = document.getElementById('autreLigne');

// recuperation des bouton pour gerer l'ajout des boutons au clavier
const racineCarree = document.getElementById('racinecarree');
const ajout = document.getElementById('ajout');
const inverse = document.getElementById('inverse');
const addkey = document.getElementById('addkey');
const pie = document.getElementById('pie');
const exponentiel = document.getElementById('exponentiel');

//ajout devennement pour l'ajout des boutons 

addkey.addEventListener('click', (e) =>{
    

    racineCarree.classList.remove("hidden");
    ajout.classList.remove("hidden");
    inverse.classList.remove("hidden");
    pie.classList.remove("hidden");
    exponentiel.classList.remove("hidden");
    premierLigne.classList.remove("hidden");
    deuxiemeLigne.classList.remove("hidden");
    ppremierLigne.classList.remove("hidden");
    autreLigne.classList.remove("hidden");
    clavier.classList.remove("h-[44vh]")
    clavier.classList.add("h-[69vh]")
    
    
    addkey.addEventListener('click', (e) =>{
   

        racineCarree.classList.add("hidden");
        ajout.classList.add("hidden");
        inverse.classList.add("hidden");
        pie.classList.add("hidden");
        exponentiel.classList.add("hidden");
        ppremierLigne.classList.add("hidden");
        premierLigne.classList.add("hidden");
        deuxiemeLigne.classList.add("hidden");
        autreLigne.classList.add("hidden");
        clavier.classList.add("h-[44vh]")
        clavier.classList.remove("h-[69vh]")
        
        addkey.addEventListener('click', (e) =>{
    

            racineCarree.classList.remove("hidden");
            ajout.classList.remove("hidden");
            inverse.classList.remove("hidden");
            pie.classList.remove("hidden");
            exponentiel.classList.remove("hidden");
            premierLigne.classList.remove("hidden");
            deuxiemeLigne.classList.remove("hidden");
            ppremierLigne.classList.remove("hidden");
            autreLigne.classList.remove("hidden");
            clavier.classList.remove("h-[44vh]")
            clavier.classList.add("h-[69vh]")
            
            
            addkey.addEventListener('click', (e) =>{
        

                    racineCarree.classList.add("hidden");
                    ajout.classList.add("hidden");
                    inverse.classList.add("hidden");
                    pie.classList.add("hidden");
                    exponentiel.classList.add("hidden");
                    ppremierLigne.classList.add("hidden");
                    premierLigne.classList.add("hidden");
                    deuxiemeLigne.classList.add("hidden");
                    autreLigne.classList.add("hidden");
                    clavier.classList.add("h-[44vh]")
                    clavier.classList.remove("h-[69vh]")
                    
                    

                }, 3000);

        }, 3000);  

    }, 3000);

}, 3000);  

