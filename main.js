const form = document.getElementById("form");

function handleSubmit(e){
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    console.log(data);
}

form.addEventListener('submit', handleSubmit);