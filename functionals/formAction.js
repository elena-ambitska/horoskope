import birthdayForm from "../templates/birthday-form.html?raw";
import firstPage from "../templates/firstPage.html?raw";
import comfortableForm from "../templates/comfortable-form.html?raw";
import insomniaForm from "../templates/insomnia-form.html?raw";
import feels from "../templates/feels.html?raw";
import featureForm from "../templates/feature-form.html?raw"
import resultTemplate from "../templates/results.html?raw";
import progressTemplate from "../templates/progress.html?raw";
import {renderField, updateState} from "./progress";
import {validationForm} from "./formValidation";
import {createBDForm} from "./createBDForm";
import {getZodiacSign} from "./getZodiacSign";

const pages = [
    () => {
        document.querySelector(".main").insertAdjacentHTML("beforeend", firstPage)
    },
    () => {
        document.querySelector('.main').insertAdjacentHTML("beforeend", comfortableForm)
    },
    () => {
        document.querySelector('.main').insertAdjacentHTML("beforeend", insomniaForm)
    },
    () => {
        document.querySelector('.main').insertAdjacentHTML("beforeend", feels)
    },
    () => {
        document.querySelector('.main').insertAdjacentHTML("beforeend", featureForm)
    },
    () => {
        document.querySelector('.main').insertAdjacentHTML("beforeend", birthdayForm)
        createBDForm();

    },
    () => {
        document.querySelector('.main')
            .insertAdjacentHTML("beforeend", progressTemplate);
        renderField()
    },
    () => {
        document.querySelector(".main").insertAdjacentHTML("beforeend", resultTemplate);
        updateState();
    },

];

let currentPage = 6;

const renderPage = () => {

    const mainField = document.querySelector(".main");
    mainField.innerHTML = "";
    pages[currentPage]();

    const btnNextPage = document.querySelector(".next-page");
    if (btnNextPage) {
        btnNextPage.addEventListener("click", (e) => {
            e.preventDefault()
            currentPage++;
            renderPage()
        })
    }
    const radios = document.querySelectorAll("input");
    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            validationForm();
        })
    })
    const selects = document.querySelectorAll('select');
    selects.forEach(select =>{
        select.addEventListener("change", ()=>{
            validationForm();
            getZodiacSign();
        })
    })

    validationForm();
}

renderPage();