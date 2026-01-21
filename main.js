const form = document.getElementById("form");
const dismiss = document.getElementById("dismiss");

function handleSubmit(e){
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    console.log(data.email);

    if(data.email === "" || !data.email.includes('@')){
        document.getElementById('error').style.display = "inline";
        document.getElementById('email').style.backgroundColor = "hsl(1, 100%, 90%)";
        document.getElementById('email').style.color = "hsl(4, 100%, 67%)";
        document.getElementById('email').style.borderColor = "hsl(4, 100%, 67%)";
    }
    else if(data.email.includes('@')){
        document.getElementById("success").style.display = "block";
        document.getElementById('error').style.display = "none";
        form.style.display = "none";
    }
}

function onDismiss(e){
    document.getElementById('success').style.display = "none";
    form.style.display = "block";
}

dismiss.addEventListener('click', onDismiss);
form.addEventListener('submit', handleSubmit);