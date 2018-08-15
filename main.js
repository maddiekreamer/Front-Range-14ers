var myForm = document.querySelector("#myForm");
var form = document.querySelector('form')
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var checkbox = document.querySelector("#checkbox");

    myForm.addEventListener("submit", function (event) {
        event.preventDefault()
        if (email.value && password.value && checkbox.checked || email.value && password.value) {
            window.alert("Success!");
        } else {
            window.alert("Error!");
        }
    })

console.log(form)
form.addEventListener("submit", function (e) {
    console.log('sumbit')
    e.preventDefault()
    let userEmail = document.getElementById('email').value;
    console.log(userEmail)
    localStorage.setItem("email", userEmail);
})