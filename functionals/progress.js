import resultTemplate from "../templates/results.html?raw";
import {getData} from "./renderResults";

const stages = [
    "Анализ введенных данных",
    "Коррекция астрологического знака",
    "Расчет вариаций ответов",
    "Генерация предсказания",
    "Сохранение результата",
    "Поиск свободного оператора",
    "Начала озвучки и записи аудио-сообщения"
]

export function renderField() {
    const ul = document.querySelector(".list");

    stages.map(stage => {
        const li = `<li>${stage}......<span class="state">В очереди</span></li>`
        ul.insertAdjacentHTML('beforeend', li)
    })
    updateState();
}

let currentStage = 0;

export const updateState = () => {
    const ul = document.querySelector(".list"),
        finished = document.querySelector(".finished"),
        update = document.querySelector(".update");

    ul.children[currentStage].querySelector(".state").innerText = "Выполнено!";
    ul.children[currentStage].querySelector(".state").style.color = "green";
    currentStage++;

    if (currentStage === stages.length) {
        update.style.display = "none";
        finished.style.display = "block";
        setTimeout(()=>{
            document.querySelector(".main").insertAdjacentHTML("beforeend", resultTemplate);
            getData();
        },300)
        return;
    }

    setTimeout(() => {
        updateState();

    }, 500)

}

