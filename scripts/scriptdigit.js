const key = document.querySelectorAll('.key');
const firstDigit =document.getElementById('firstDigit');
const secondDigit = document.getElementById('secondDigit');
const digit = localStorage.getItem("digit");

    key.forEach(button => {
        button.addEventListener("click", () => {
            localStorage.setItem("digit", button.dataset.value);
            
            window.history.back();
            
        });
    });
    
    