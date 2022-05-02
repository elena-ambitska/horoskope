export function createBDForm() {
    const daySelect = document.getElementById("day"),
        monthSelect = document.getElementById("month"),
        yearSelect = document.getElementById("year"),
        months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        dayNum = 31;

    (function populateMonth() {
        months.map((month) => {
            const option = document.createElement('option');
            option.innerText = month;
            monthSelect.insertAdjacentElement("beforeend", option);

        })
    })()

    function populateDays() {
        for (let i = 1; i <= dayNum; i++) {
            const option = document.createElement("option");
            option.textContent = i;
            daySelect.appendChild(option);
        }
    }

    function populateYears() {
        let year = new Date().getFullYear();
        for (let i = 0; i < 101; i++) {
            const option = document.createElement("option");
            option.textContent = year - i;
            yearSelect.appendChild(option);
        }
    }

    populateDays(monthSelect.value);
    populateYears();

}

