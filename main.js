const form = document.getElementById("form");
const dismiss = document.getElementById("dismiss");

function handleSubmit(e){
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    console.log(data.email);

    if(data.email.includes('@')){
        document.getElementById("success").style.display = "block";
        form.style.display = "none";
    }
}

function onDismiss(e){
    document.getElementById('success').style.display = "none";
    form.style.display = "block";
}

dismiss.addEventListener('click', onDismiss);
form.addEventListener('submit', handleSubmit);