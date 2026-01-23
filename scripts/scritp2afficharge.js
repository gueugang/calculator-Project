//recuperation du display
const display = document.getElementById('display');

//ckld
const keybut = document.querySelectorAll('.keybut');
const clear = document.getElementById('clear');
const sup = document.getElementById('sup');
const equal = document.getElementById('equal');
keybut.forEach(button => {
    button.addEventListener("click", () => {
        display.value +=button.dataset.value;
    });
});

clear.addEventListener("click", () => {
    display.value = "";
});

equal.addEventListener("click", () => {
    try{
        const expression = display.value.replace(/\s/g, "");
        display.value = `= ${eval(expression)}`;
    }catch{
        display.value = "erreur";
    }

});