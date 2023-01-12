let displayEl= document.getElementById('display');
let buttonEl= document.querySelectorAll('.button');

let string= "";

Array.from(buttonEl).forEach((button) => {
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML == "=")  {
                string= eval(string)
                displayEl.value= string
        }   
        else if(e.target.innerHTML == "AC")  {

                string= ""
                displayEl.value= string
        }
        else if (e.target.innerHTML== "DE"){
             string= string.toString().slice(0,-1)
             displayEl.value=string

        }
        else{
            string= string + e.target.innerHTML;
            displayEl.value= string
        }     
       
    })
}) 