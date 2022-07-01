let timeframe = 'weekly'; // default value
const container = document.querySelector('.container');
let regularCards; // placeholder for all cards 

// 1. Initializate Menu
const menu = document.querySelectorAll('.time-btn')

menu.forEach(element => {
  element.addEventListener('click', menuOnClick)
})

// 2. Get JSON Data And Create Cards

let data = {}

fetch('data.json')
  .then(resp => resp.json())
  .then(jsonData => {
    // Create Cards
    jsonData.forEach(element => {
      container.insertAdjacentHTML('beforeend',
        createRegularCard(element, timeframe));
    })

    // convert array to dict
    jsonData.forEach(element => {
      data[element.title] = element.timeframes
    })

    //
    regularCards = document.querySelectorAll('.c-card')
    console.log(regularCards);
  })

// Functions

function menuOnClick(event) {
  menu.forEach(element => {
    element.classList.remove('time-range-active')
  })
  event.target.classList.add('time-range-active')
  timeframe = event.target.innerText.toLowerCase()

  updateCards(timeframe)
}

function updateCards(timeframe) {
  regularCards.forEach(card => {
    updateCard(card, timeframe)
  })
}

function updateCard(card, timeframe) {
  const title = card.querySelector('h2').innerText
  const current = data[title][timeframe]['current']
  const previous = data[title][timeframe]['previous']

  const timeFrameMsg = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'
  }

  const hoursElement = card.querySelector('.c-card-content__hours')
  hoursElement.innerText = `${current}hrs`
  const msgElement = card.querySelector('.c-card-content__past')
  msgElement.innerText = `${timeFrameMsg[timeframe]} - ${previous}hrs`
}

function createRegularCard(element, timeframe) {
  let title = element['title']
  let current = element['timeframes'][timeframe]['current']
  let previous = element['timeframes'][timeframe]['previous']

  const timeFrameMsg = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'
  }

  console.log(title, current, previous);
  return `
<div class="${'c-'+title.toLowerCase().replace(/\s/g, '')} c-card">
  <div class="c-card-content">
    <div class="c-card-content__header">
      <h2>${title}</h2>
      <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
    </div>
    
    <div class="c-card-content__data">
      <p id="work-current" class="c-card-content__hours">${current}</p>
      <p class="c-card-content__past" id="work-previous">${timeFrameMsg[timeframe]} - ${previous} hrs</p>
    </div>
  </div>
</div>`
}