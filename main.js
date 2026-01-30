const form = document.getElementById("form");
const dismiss = document.getElementById("dismiss");
const emailInput = document.getElementById('email');

function handleSubmit(e){
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    if(validateEmail(data.email)){
        document.getElementById('error').style.display = "none";
        emailInput.style.backgroundColor = "white";
        emailInput.style.color = "black";
        emailInput.style.borderColor = "hsl(0, 0%, 58%)";
        emailInput.value = "";
        document.getElementById("card").style.display = "none";
        document.getElementById("success").style.display = "block";
        document.getElementById("emailText").textContent = data.email;
    }
}

function onDismiss(e){
    document.getElementById('success').style.display = "none";
    document.getElementById("card").style.display = "flex";
}

function handleText(email){
    if(validateEmail(email)){
        document.getElementById('error').style.display = "none";
        emailInput.style.backgroundColor = "white";
        emailInput.style.color = "black";
        emailInput.style.borderColor = "hsl(0, 0%, 58%)";
    }else{
        document.getElementById('error').style.display = "inline";
        emailInput.style.backgroundColor = "hsl(1, 100%, 90%)";
        emailInput.style.color = "hsl(4, 100%, 67%)";
        emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    }
}

function validateEmail(email){
    return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

dismiss.addEventListener('click', onDismiss);
form.addEventListener('submit', handleSubmit);