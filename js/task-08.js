const form = document.querySelector(".login-form");

const onFormSubmit = event => {

    event.preventDefault()
    const formElements = event.target.elements;
    const email = formElements.email.value
    const password = formElements.password.value
    if (email === "" || password === "") {
        return alert("Всі поля повинні бути заповнені!")
    }
       
   console.log({ email, password });
   form.reset();
}
form.addEventListener("submit", onFormSubmit)