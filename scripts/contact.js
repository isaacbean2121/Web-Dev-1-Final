var button = document.getElementById("submit-button");

button.addEventListener('click', changePage);

function changePage() {

    var pageContent = document.getElementById("contact-page")

    pageContent.innerHTML = "Thank you for your message!";    
}
