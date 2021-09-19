'use strict';

const range = document.querySelector('.range');
const progress = document.querySelector('.progress');
const pageView = document.querySelector('.page_view_amount');
const price = document.querySelector('.value');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle')
const choice = document.querySelector('.choice');

let progressValue = 0;
const prices = [
  ['10k', 8], 
  ['50k', 12],
  ['100k', 16],
  ['500k', 24],
  ['1m', 36]
];
  
let subChoice = 'monthly';

const updateProgress = function(range){
  progressValue = range;
  progress.style.width = `${progressValue}%`
}

const updatePrice = function(choice, index){
  index = (Number(index) / 20) - 1;
  
  if (choice === 'monthly'){
    if (index >= 0){
      pageView.textContent = prices[index][0]
      price.textContent = prices[index][1].toFixed(2);
    } else{
      pageView.textContent = '0';
      price.textContent = '0.00';
    }
    
  } else if (choice === 'yearly'){
    if (index >= 0){
      let yearlyPrice = prices[index][1] * 12;
      let discountPrice = yearlyPrice - ((25 / 100) * yearlyPrice);
      pageView.textContent = prices[index][0];
      price.textContent = discountPrice.toFixed(2);
      
    } else{
      pageView.textContent = '0';
      price.textContent = '0.00';
    }
  }
}

range.addEventListener('input', function(){
  updateProgress(range.value);
  updatePrice(subChoice, range.value);
})

toggle.addEventListener('click', function(){
  circle.classList.toggle('move_toggle');
  
  subChoice = subChoice === 'monthly' ? 'yearly' : 'monthly';
  
  choice.textContent = subChoice === 'monthly' ? '/ month' : '/ year';
  
  updatePrice(subChoice, range.value);
})