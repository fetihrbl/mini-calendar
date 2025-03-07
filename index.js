document.addEventListener("DOMContentLoaded", () => {
    const monthNameEl = document.getElementById("month-name");
    const dayNameEl = document.getElementById("day-name");
    const dayNumEl = document.getElementById("day-number");
    const yearEl = document.getElementById("year");


    function updateDate(locale = "en") {
        const date = new Date();

        monthNameEl.textContent = date.toLocaleString(locale, { month: "long" });
        dayNameEl.textContent = date.toLocaleString(locale, { weekday: "long" });
        dayNumEl.textContent = date.getDate();
        yearEl.textContent = date.getFullYear();
    }
    updateDate();

    setInterval(updateDate, 1000);
})