const form = document.getElementById("form");
const dismiss = document.getElementById("dismiss");
const emailInput = document.getElementById('email');

function handleSubmit(e){
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    if(data.email === "" || !data.email.includes('@')){
        document.getElementById('error').style.display = "inline";
        emailInput.style.backgroundColor = "hsl(1, 100%, 90%)";
        emailInput.style.color = "hsl(4, 100%, 67%)";
        emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    }
    else if(data.email.includes('@')){
        document.getElementById('error').style.display = "none";
        emailInput.style.backgroundColor = "white";
        emailInput.style.color = "black";
        emailInput.style.borderColor = "hsl(0, 0%, 58%)";
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
    if(email.includes('@')){
        document.getElementById('error').style.display = "none";
        emailInput.style.backgroundColor = "white";
        emailInput.style.color = "black";
        emailInput.style.borderColor = "hsl(0, 0%,58%)";
    }
}

dismiss.addEventListener('click', onDismiss);
form.addEventListener('submit', handleSubmit);