const daysContainer = document.querySelector('#monthsContainer');
const date = new Date();
const monthIndex = date.getMonth();
const months = [
    "January", "February", "March", "Abril", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

window.addEventListener('DOMContentLoaded', function () {
    displayHeaderCalendar();
});

function displayHeaderCalendar() {
    document.querySelector('#calendarMonth').innerHTML = months[monthIndex];
    document.querySelector('#calendarDate').innerHTML = new Date().toDateString();
    displayDates();
};

function displayDates() {
    // getting the index of the weekday for the first day as reference for place the last 5 days
    const currentDayIndex = date.getDay();

    const lastDay = new Date(date.getFullYear(), monthIndex + 1, 0).getDate();
    const firstDay = new Date(date.getFullYear(), monthIndex, 1).getDay();
    console.log(firstDay);
    // const prevLastDay = new Date(date.getFullYear(), monthIndex, 0).getDate();
    // const lastDayIndex = new Date(date.getFullYear(), monthIndex + 1, 0).getDay();
    let days = "";

    for (i = firstDay; i > 0; i--) {
        days += `<div>${i}</div>`
    };

    // for (x = firstDay; x > 0; x--) {
    //     console.log(currentDayIndex, prevLastDay);
    //     const prevDate = prevLastDay;
    //     days += `<div class="prev-date">${prevDate}</div>`;
    // };

    for (i = 1; i <= lastDay; i++) {
        days += `<div>${i}</div>`;
    };

    // const nextDay = 7 - lastDayIndex - 1;
    // for (j = 1; j <= nextDay; j++) {
    //     // days += `<div class="next-date">${j}</div>`;
    // };

    daysContainer.innerHTML = days;

    let daysDisplayed = daysContainer.querySelectorAll('div');
    getCurrentDay(daysDisplayed);
};

function getCurrentDay(daysDisplayed) {
    daysDisplayed.forEach(function (day) {
        let intDay = parseInt(day.innerText);

        if (intDay === date.getDate()) {
            day.classList.add('today');
        };
    });
};

document.querySelector('#prevBtn').addEventListener('click', function () {
    date.setMonth(date.getMonth() - 1);

    displayHeaderCalendar()
});

document.querySelector('#nextBtn').addEventListener('click', function () {
    date.setMonth(date.getMonth() + 1);
    console.log(date);
    displayHeaderCalendar()
});
