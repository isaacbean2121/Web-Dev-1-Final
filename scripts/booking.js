/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

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
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


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
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.



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
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


halfDay.addEventListener('click', function() {
    rateOption = halfDayRate;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');

    calculateCost();
  });


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


fullDay.addEventListener('click', function() {
    rateOption = fullDayRate;
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');

    calculateCost();
  });



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    const total = rateOption * elementsClicked;
    
    calculate.innerHTML = total;
}
