/********* create variables *********/

const fullDayRate = 35;

const halfDayRate= 20;


let elementsClicked = 0;
let rateOption = fullDayRate;

let daysSelected = [];

const monday = document.getElementById('monday');

const tuesday = document.getElementById('tuesday');

const wednesday = document.getElementById('wednesday');

const thursday = document.getElementById('thursday');

const friday = document.getElementById('friday');

const fullDay = document.getElementById('full');

const halfDay = document.getElementById('half');

const clear = document.getElementById('clear-button');

const calculate = document.getElementById('calculated-cost');

/********* colour change days of week *********/

monday.addEventListener('click', function() {
    elementsClicked++;
    if (!monday.classList.contains('clicked')) {
      monday.classList.add('clicked');
      daysSelected.push('monday');
    } else {
      monday.classList.remove('clicked');
      elementsClicked--;
      daysSelected = daysSelected.filter(function(day) {
        return day !== 'monday';
      });
    }
    calculate();
  });

 tuesday.addEventListener('click', function() {
    elementsClicked++;
    if (!tuesday.classList.contains('clicked')) {
      tuesday.classList.add('clicked');
      daysSelected.push('tuesday');
    } else {
      tuesday.classList.remove('clicked');
      elementsClicked--;
      daysSelected = daysSelected.filter(function(day) {
        return day !== 'tuesday';
      });
    }
    calculate();
  });

  wednesday.addEventListener('click', function() {
    elementsClicked++;
    if (!wednesday.classList.contains('clicked')) {
      wednesday.classList.add('clicked');
      daysSelected.push('wednesday');
    } else {
      wednesday.classList.remove('clicked');
      elementsClicked--;
      daysSelected = daysSelected.filter(function(day) {
        return day !== 'wednesday';
      });
    }
    calculate();
  });

  thursday.addEventListener('click', function() {
    elementsClicked++;
    if (!thursday.classList.contains('clicked')) {
     thursday.classList.add('clicked');
      daysSelected.push('thursday');
    } else {
      thursday.classList.remove('clicked');
      elementsClicked--;
      daysSelected = daysSelected.filter(function(day) {
        return day !== 'thursday';
      });
    }
    calculate();
  });

  friday.addEventListener('click', function() {
    elementsClicked++;
    if (!friday.classList.contains('clicked')) {
     friday.classList.add('clicked');
      daysSelected.push('friday');
    } else {
     friday.classList.remove('clicked');
      elementsClicked--;
      daysSelected = daysSelected.filter(function(day) {
        return day !== 'friday';
      });
    }
    calculate();
  });

/********* clear days *********/


clear.addEventListener('click', function() {
   daysSelected = [];

    elementsClicked = 0;
  
    monday.classList.remove('clicked');

    tuesday.classList.remove('clicked');

    wednesday.classList.remove('clicked');

    thursday.classList.remove('clicked');

    friday.classList.remove('clicked');
  
    calculate.innerHTML = '0';
  });

/********* change rate *********/


halfDay.addEventListener('click', function() {
    rateOption = halfDayRate;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');

    calculateCost();
  });



fullDay.addEventListener('click', function() {
    rateOption = fullDayRate;
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');

    calculateCost();
  });



/********* calculate *********/

function calculateCost() {
    const total = rateOption * elementsClicked;
    
    calculate.innerHTML = total;
}
