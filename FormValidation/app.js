const popup_btn = document.getElementById("popup_btn")

if(popup_btn.addEventListener){
    popup_btn.addEventListener("click", popup, false)
}

function popup()
{
    const form_container = document.getElementById("popup_form")
    form_container.style.display = "flex"
}

const closeBtn = document.getElementById("formClose")
closeBtn.addEventListener("click", form_close, false)

function form_close(e)
{
    e.preventDefault()
    const form_container = document.getElementById("popup_form")
    form_container.style.display = "none"
}

// Error Display
const submit_btn = document.getElementById("btn_submit")
submit_btn.addEventListener("click", form_validation, false)

function form_validation(e)
{
    e.preventDefault()
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const confirm_password = document.getElementById("confirm_password")
    // console.log(email.value)
    // console.log(password.value)
    // console.log(confirm_password.value)

    // Email Validation
    if(email.value == '')
    {
        const email_error = document.getElementById("email_error")
        email_error.innerHTML = "Please enter Email"
        email_error.style.display = "block"
    }else
    {
        const email_error = document.getElementById("email_error")
        email_error.style.display = "none"
    }

    // Password Validation
    if(password.value == '')
    {
        const password_error = document.getElementById("password_error")
        password_error.innerHTML = "Please enter Password"
        password_error.style.display = "block"
    }else
    {
        const password_error = document.getElementById("password_error")
        password_error.style.display = "none"
    }

    if(confirm_password.value == '')
    {
        console.log("Insode Confirm Password")
        const confirm_password_error = document.getElementById("confirm_password_error")
        confirm_password_error.innerHTML = "Please enter Confirm Password"
        confirm_password_error.style.display = "block"
    }else
    {
        const confirm_password_error = document.getElementById("confirm_password_error")
        confirm_password_error.style.display = "none"
    }

    if(confirm_password.value != password.value)
    {
        const confirm_password_error = document.getElementById("confirm_password_error")
        confirm_password_error.innerHTML = "Confirm Password does not match"
        confirm_password_error.style.display = "block"
    }
}
