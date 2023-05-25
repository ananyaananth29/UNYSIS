function validateForm(event) {
    "use strict";
    event.preventDefault();
    const form = document.getElementById("create-page");
    if(!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
        return false;
    }
    return submitForm();
}

function submitForm() {
    console.log("Get Form Content");
    const nameField = document.getElementById("name");
    const nameValue = nameField.value;
    console.log("nameValue :>> ",nameValue);
    clearForm();
    return true;
}

function clearForm() {
    const nameField = document.getElementById("name");
    nameField.value = "";

    const form = document.getElementById("create-page");
    form.classList.remove("was-validated");
}