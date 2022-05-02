export function getData() {
    const div = document.querySelector(".main");
    const getData = () => {
        return fetch("https://swapi.dev/api/people/1/")
            .then((response) => response.json());
    }

    const btn = document.querySelector(".get-data");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        getData();

        const data = getData();
        data.then(result => {
            const text = `<div>Имя: ${result.name}</div>
               <div>Рост: ${result.height}</div>
                <div>Вес: ${result.mass}</div>
                <div>Пол: ${result.gender}</div>
                <div>Цвет глаз: ${result.eye_color}</div>`
            div.insertAdjacentHTML("beforeend", text)
        })
    })
}

