const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
const timeEl = document.getElementById('time');



// Fetch exchange rates and update the DOM
function calculate() {
   const currency_one = currencyEl_one.value;
   const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/bac0219fe30b6ca4eb496c5a/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

      const time = data.time_last_update_utc
      console.log(time)
      const rate = data.conversion_rates[currency_two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      timeEl.innerText = `Last update: ${time}`

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);

    });
   

}

// Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();


const lightDark = document.getElementById("html");
const darkBtn = document.getElementById('darkMode');
const lightBtn = document.getElementById('lightMode');

darkBtn.addEventListener('click', function() {
  lightDark.classList.add('dark');
})

lightBtn.addEventListener('click', function() {
  lightDark.classList.remove('dark');
})