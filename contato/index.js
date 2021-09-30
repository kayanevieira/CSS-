const form = document.getElementById("form");
const inputSubmit = document.getElementById("submit-id");

form.addEventListener("submit", function(event){
    console.log("enviado");
    const messageGreen = document.getElementById("d-none");
    const elements = document.getElementsByName('input');
    inputSubmit.disabled = true;
    elements.forEach(element => {
        element.classList.add('input-class');
        element.style.border = "2px solid green";
        messageGreen.style.display = "flex";
        console.log(element.value);
    })
    event.preventDefault();

})