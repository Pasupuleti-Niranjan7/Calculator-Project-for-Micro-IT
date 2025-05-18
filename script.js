

let input = document.getElementById('display'); 
let buttons =document.querySelectorAll('button');

let array = Array.from(buttons);

array.forEach(button => {        
    button.addEventListener('click', (e) => {

        if(e.target.innerHTML == '=') {
            if(input.value[0] == '*' || input.value[0] == '/') {
                input.value = 'Error';
            } 
            else if(input.value[0] == '0' && input.value[1] == '+' || input.value[0] == '0' && input.value[1] == '-' || input.value[0] == '0' && input.value[1] == '*' || input.value[0] == '0' && input.value[1] == '/') {
                input.value = '0';
            }
            else {
                input.value = eval(input.value);
            }
        }
        
        else if(e.target.innerHTML == 'AC') {
            input.value = "";
        } 

        else if(e.target.innerHTML == 'DEL') {
            input.value = input.value.slice(0, -1);
        }
        
        else {
            input.value += e.target.innerHTML
        } 
        
    })
});

