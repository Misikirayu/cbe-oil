'use strict'

const cancelBtn = document.querySelector('.cancel');
const transactionBox = document.querySelector('.transactoin');
const qrBtn = document.querySelector('.qr-btn');
const shaddowBox = document.querySelector('.shaddow')
const loader = document.querySelector('.loader');
const loadingTxt = document.querySelector('.loading-txt')



function showLoader() {
    // Show the loader
    loader.style.display = 'block';
    shaddowBox.classList.remove('hidden');
    loadingTxt.classList.remove('hidden');

    // Hide the loader and show the text after 3 seconds
    setTimeout(function() {
      loader.style.display = 'none';
      transactionBox.classList.remove('hidden');
      loadingTxt.classList.add('hidden');
      
    }, 3500);
  }
  
  cancelBtn.addEventListener('click',
    function(){
        transactionBox.classList.add('hidden');
        shaddowBox.classList.add('hidden');
    })