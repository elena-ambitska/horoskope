export const validationForm = () => {
    const btn = document.querySelector(".next-page"),
        radio = document.querySelectorAll("input[type='radio']"),
        selects = document.querySelectorAll("select"),
        message = document.querySelector(".message");
    let isValid = true;

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            btn.style.display = "block";
        }
    }

    for (let i = 0; i < selects.length; i++) {

        if (selects[i].value) {
            selects[i].style.color = "blue";
        } else {
            isValid = false;
            selects[i].style.color = "black";
        }
    }

    if (isValid) {
        message.style.display = "none";
        btn.style.display = "block";
    } else {
        message.style.display = "block";
        btn.style.display = "none";
    }
}

