const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('cambiar');

const loader = document.getElementById('loading');

// show Loading icon
function displayLoading() {
    loader.classList.add('display');
}

// hide Loading icon
function hideLoading() {
    loader.classList.remove('display');
}

// Error control

function checkInput(input) {
    let numero = 0;
    try {
        numero = parseFloat(input.value);
    } catch (error) {
        console.log(error)
        return false
    }
    if (numero >= 0) {
        return true;
        
    } else {
        return false;
        
    }

}
// Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    if (checkInput(amountEl_one)) {
        displayLoading();
        fetch(`https://v6.exchangerate-api.com/v6/c7ef4796ee7a74a30c236948/latest/${currency_one}`)
            .then(res => res.json())
            .then(data => {
                hideLoading();
                const rate = data.conversion_rates[currency_two];
                rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

                amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
            })
    } else {
        rateEl.innerText = `¡ERROR!`
    }

}


// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
cambiar.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})


calculate();