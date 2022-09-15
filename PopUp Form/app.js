const popup_btn = document.getElementById("popup_btn")

if(popup_btn.addEventListener){
    popup_btn.addEventListener("click", popup, false)
}

function popup()
{
    const form_container = document.getElementById("popup_form")
    form_container.style.display = "flex"
}

const form = document.getElementById("popupForm")
form.addEventListener("submit", form_clicked, false)

function form_clicked(e)
{
    e.preventDefault()
    const closeBtn = document.getElementById("formClose")
    closeBtn.addEventListener("click", form_close, false)
}

function form_close()
{
    const form_container = document.getElementById("popup_form")
    form_container.style.display = "none"
}