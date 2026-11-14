const categoryContainer = document.querySelectorAll(".category-container");

const dailyButton = document.querySelector("[data-timeframes='daily']");

const weeklyButton = document.querySelector("[data-timeframes='weekly']");

const monthlyButton = document.querySelector("[data-timeframes='monthly']");

let parsedData;
const timeFrames = fetch("./data.json")
.then(response => {
    return response.json();
})
.then(data => {
    parsedData = data;
})

const dailyClick = () => {
    categoryContainer.forEach((card, index) => {
        card.querySelector(".category__title").textContent = parsedData[index].title;
        card.querySelector(".category__total-hours").textContent = `${parsedData[index].timeframes.daily.current}hrs`;
        card.querySelector(".category__weekly-hours").textContent = `Yesterday - ${parsedData[index].timeframes.daily.previous}hrs`;
    })
}
const weeklyClick = () => {
    categoryContainer.forEach((card, index) => {
        card.querySelector(".category__title").textContent = parsedData[index].title;
        card.querySelector(".category__total-hours").textContent = `${parsedData[index].timeframes.weekly.current}hrs`;
        card.querySelector(".category__weekly-hours").textContent = `Last Week - ${parsedData[index].timeframes.weekly.previous}hrs`;
    })
}
const monthlyClick = () => {
    categoryContainer.forEach((card, index) => {
        card.querySelector(".category__title").textContent = parsedData[index].title;
        card.querySelector(".category__total-hours").textContent = `${parsedData[index].timeframes.monthly.current}hrs`;
        card.querySelector(".category__weekly-hours").textContent = `Last Month - ${parsedData[index].timeframes.monthly.previous}hrs`;
    })
}




dailyButton.addEventListener("click", dailyClick);

weeklyButton.addEventListener("click", weeklyClick);

monthlyButton.addEventListener("click", monthlyClick);