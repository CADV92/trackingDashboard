import data from './data.json' assert {type: 'json'};

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section');

let attrCards = [
    ['--light-orange', './images/icon-work.svg'],
    ['--soft-blue', './images/icon-play.svg'],
    ['--light-red', './images/icon-study.svg'],
    ['--lime-green', './images/icon-exercise.svg'],
    ['--violet', './images/icon-social.svg'],
    ['--soft-orange', './images/icon-self-care.svg'],
];

dailyBtn.addEventListener('click', () => {
    drawElements('daily');
    dailyBtn.classList.add('main-card__frequency--active');
    weeklyBtn.classList.remove('main-card__frequency--active');
    monthlyBtn.classList.remove('main-card__frequency--active');
});
weeklyBtn.addEventListener('click', () => {
    drawElements('weekly');
    weeklyBtn.classList.add('main-card__frequency--active');
    dailyBtn.classList.remove('main-card__frequency--active');
    monthlyBtn.classList.remove('main-card__frequency--active');
});
monthlyBtn.addEventListener('click', () => {
    drawElements('monthly');
    monthlyBtn.classList.add('main-card__frequency--active');
    dailyBtn.classList.remove('main-card__frequency--active');
    weeklyBtn.classList.remove('main-card__frequency--active');
});

function drawElements(frequency) {
    secondSection.innerHTML = ''
    data.forEach((elemento, index) => {
        secondSection.innerHTML += `
        <div class="card">
            <div class="card__background" style="background-color: var(${attrCards[index][0]});">
                <img class="card__image" src="${attrCards[index][1]}" alt="">
            </div>
            
            <div class="card__details">
                <div class="card__activity">
                    <p class="card__title">${elemento.title}</p>
                    <img src="./images/icon-ellipsis.svg" alt="ellipsis">
                </div>

                <div class="card__hours">
                    <p class="card__current">${elemento.timeframes[frequency].current}hrs</p>
                    <p class="card__previous">Last Week - ${elemento.timeframes[frequency].previous}hrs</p>
                </div>
            </div>
        </div> 
        `
    });
};