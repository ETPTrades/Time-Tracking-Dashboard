// const workContainer =
// document.querySelector(".work");
// const playContainer =
// document.querySelector(".play");
// const studyContainer =
// document.querySelector(".study");
// const exerciseContainer =
// document.querySelector(".exercise");
// const socialContainer =
// document.querySelector(".social");
// const selfCareContainer =
// document.querySelector(".self-care");
const categoryContainer = document.querySelectorAll(".category-container");
const dailyButton = document.querySelector("[data-timeframes='daily']");


const timeFrames = fetch("./data.json")
.then(response => {
    return response.json();
})
.then(data => {
    const dailyClick = () => {
        categoryContainer.forEach((card, index) => {
            card.querySelector(".category__title").textContent = data[index].title;
            card.querySelector(".category__total-hours").textContent = data[index].timeframes.daily.current;
            card.querySelector(".category__weekly-hours").textContent = `Yesterday - ${data[index].timeframes.daily.previous}hrs`;
        })

    } 
    dailyButton.addEventListener("click", dailyClick);
});


console.log(dailyButton);