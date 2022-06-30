const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const timeBtns = document.querySelectorAll('.time-btn');

const workCurrent = document.querySelector('#work-current');
const workPrevious = document.querySelector('#work-previous');

const playCurrent = document.querySelector('#play-current');
const playPrevious = document.querySelector('#play-previous');

const studyCurrent = document.querySelector('#study-current');
const studyPrevious = document.querySelector('#study-previous');

const exerciseCurrent = document.querySelector('#exercise-current');
const exercisePrevious = document.querySelector('#exercise-previous');

const socialCurrent = document.querySelector('#social-current');
const socialPrevious = document.querySelector('#social-previous');

const selfCareCurrent = document.querySelector('#self-care-current');
const selfCarePrevious = document.querySelector('#self-care-previous');

setDataDaily();

timeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        const textBtn = e.currentTarget.textContent;
        const currentBtn = e.currentTarget;
        
        if(textBtn == 'Daily') {
            setDataDaily();
            styleButton(currentBtn);
        } else if (textBtn == 'Weekly') {
            setDataWeekly()/
            styleButton(currentBtn);
        } else if (textBtn == 'Monthly') {
            setDataMonthly()/
            styleButton(currentBtn);
        }
    });
});

function styleButton(currentBtn) {
    timeBtns.forEach(btn => {
        btn.classList.remove('time-range-active')
    })
    currentBtn.classList.add('time-range-active')
}

function setDataDaily() {
    workCurrent.textContent = data[0].timeframes.daily.current + 
                            (data[0].timeframes.daily.current > 1 ? 'hrs' : 'hr')
    workPrevious.textContent = data[0].timeframes.daily.previous + 
                            (data[0].timeframes.daily.previous > 1 ? 'hrs' : 'hr')

    playCurrent.textContent = data[1].timeframes.daily.current +
                            (data[1].timeframes.daily.current > 1 ? 'hrs' : 'hr')
    playPrevious.textContent = data[1].timeframes.daily.previous +
                            (data[1].timeframes.daily.previous > 1 ? 'hrs' : 'hr')

    studyCurrent.textContent = data[2].timeframes.daily.current +
                            (data[2].timeframes.daily.current > 1 ? 'hrs' : 'hr')
    studyPrevious.textContent = data[2].timeframes.daily.previous +
                            (data[2].timeframes.daily.previous > 1 ? 'hrs' : 'hr')

    exerciseCurrent.textContent = data[3].timeframes.daily.current +
                            (data[3].timeframes.daily.current > 1 ? 'hrs' : 'hr')
    exercisePrevious.textContent = data[3].timeframes.daily.previous +
                            (data[3].timeframes.daily.previous > 1 ? 'hrs' : 'hr')

    socialCurrent.textContent = data[4].timeframes.daily.current +
                            (data[4].timeframes.daily.current > 1 ? 'hrs' : 'hr')
    socialPrevious.textContent = data[4].timeframes.daily.previous +
                            (data[4].timeframes.daily.previous > 1 ? 'hrs' : 'hr')

    selfCareCurrent.textContent = data[5].timeframes.daily.current +
                            (data[5].timeframes.daily.current > 1 ? 'hrs' : 'hr')
    selfCarePrevious.textContent = data[5].timeframes.daily.previous +
                            (data[5].timeframes.daily.previous > 1 ? 'hrs' : 'hr')
}

function setDataWeekly() {
    workCurrent.textContent = data[0].timeframes.weekly.current + 
                            (data[0].timeframes.weekly.current > 1 ? 'hrs' : 'hr')
    workPrevious.textContent = data[0].timeframes.weekly.previous + 
                            (data[0].timeframes.weekly.previous > 1 ? 'hrs' : 'hr')

    playCurrent.textContent = data[1].timeframes.weekly.current +
                            (data[1].timeframes.weekly.current > 1 ? 'hrs' : 'hr')
    playPrevious.textContent = data[1].timeframes.weekly.previous +
                            (data[1].timeframes.weekly.previous > 1 ? 'hrs' : 'hr')

    studyCurrent.textContent = data[2].timeframes.weekly.current +
                            (data[2].timeframes.weekly.current > 1 ? 'hrs' : 'hr')
    studyPrevious.textContent = data[2].timeframes.weekly.previous +
                            (data[2].timeframes.weekly.previous > 1 ? 'hrs' : 'hr')

    exerciseCurrent.textContent = data[3].timeframes.weekly.current +
                            (data[3].timeframes.weekly.current > 1 ? 'hrs' : 'hr')
    exercisePrevious.textContent = data[3].timeframes.weekly.previous +
                            (data[3].timeframes.weekly.previous > 1 ? 'hrs' : 'hr')

    socialCurrent.textContent = data[4].timeframes.weekly.current +
                            (data[4].timeframes.weekly.current > 1 ? 'hrs' : 'hr')
    socialPrevious.textContent = data[4].timeframes.weekly.previous +
                            (data[4].timeframes.weekly.previous > 1 ? 'hrs' : 'hr')

    selfCareCurrent.textContent = data[5].timeframes.weekly.current +
                            (data[5].timeframes.weekly.current > 1 ? 'hrs' : 'hr')
    selfCarePrevious.textContent = data[5].timeframes.weekly.previous +
                            (data[5].timeframes.weekly.previous > 1 ? 'hrs' : 'hr')
}

function setDataMonthly() {
    workCurrent.textContent = data[0].timeframes.monthly.current + 
                            (data[0].timeframes.monthly.current > 1 ? 'hrs' : 'hr')
    workPrevious.textContent = data[0].timeframes.monthly.previous + 
                            (data[0].timeframes.monthly.previous > 1 ? 'hrs' : 'hr')

    playCurrent.textContent = data[1].timeframes.monthly.current +
                            (data[1].timeframes.monthly.current > 1 ? 'hrs' : 'hr')
    playPrevious.textContent = data[1].timeframes.monthly.previous +
                            (data[1].timeframes.monthly.previous > 1 ? 'hrs' : 'hr')

    studyCurrent.textContent = data[2].timeframes.monthly.current +
                            (data[2].timeframes.monthly.current > 1 ? 'hrs' : 'hr')
    studyPrevious.textContent = data[2].timeframes.monthly.previous +
                            (data[2].timeframes.monthly.previous > 1 ? 'hrs' : 'hr')

    exerciseCurrent.textContent = data[3].timeframes.monthly.current +
                            (data[3].timeframes.monthly.current > 1 ? 'hrs' : 'hr')
    exercisePrevious.textContent = data[3].timeframes.monthly.previous +
                            (data[3].timeframes.monthly.previous > 1 ? 'hrs' : 'hr')

    socialCurrent.textContent = data[4].timeframes.monthly.current +
                            (data[4].timeframes.monthly.current > 1 ? 'hrs' : 'hr')
    socialPrevious.textContent = data[4].timeframes.monthly.previous +
                            (data[4].timeframes.monthly.previous > 1 ? 'hrs' : 'hr')

    selfCareCurrent.textContent = data[5].timeframes.monthly.current +
                            (data[5].timeframes.monthly.current > 1 ? 'hrs' : 'hr')
    selfCarePrevious.textContent = data[5].timeframes.monthly.previous +
                            (data[5].timeframes.monthly.previous > 1 ? 'hrs' : 'hr')
}