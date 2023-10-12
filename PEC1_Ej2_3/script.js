const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const currency = document.getElementById('currency');
let rate;
const nameArrays = []

let ticketPrice = +movieSelect.value;

loadNames();

populatePrices();

populateUI();

// Create the array of movie names
function loadNames() {

    for (let i = 0; i < movieSelect.options.length; i++) {
        const option = movieSelect.options[i];
        nameArrays[i] = option.text
    }
}

// Function to load prices and currency next to movie name
function populatePrices() {


    for (let i = 0; i < movieSelect.options.length; i++) {
        const option = movieSelect.options[i];
        let movieValue = parseFloat(option.value);

        fetch(`https://v6.exchangerate-api.com/v6/c7ef4796ee7a74a30c236948/latest/USD`)
            .then(res => res.json())
            .then(data => {
                rate = data.conversion_rates[currency.value];
                console.log(rate)
                movieValue = (movieValue * rate).toFixed(2);
                option.text = nameArrays[i] + " (" + movieValue + " " + currency.value + ")";
            })

    }

}


// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updatedSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;


    fetch(`https://v6.exchangerate-api.com/v6/c7ef4796ee7a74a30c236948/latest/USD`)
        .then(res => res.json())
        .then(data => {
            rate = data.conversion_rates[currency.value];
            count.innerText = selectedSeatsCount;
            total.innerText = (selectedSeatsCount * ticketPrice * rate).toFixed(2);
        });
    setMovieData(movieSelect.selectedIndex, movieSelect.value);
}
// Get data from localStorage and populate in the UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updatedSelectedCount();

})

// Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');

        updatedSelectedCount();
    }
});

currency.addEventListener('change', (e) => {
    populatePrices();
    updatedSelectedCount();
});

// Initial count and total set
updatedSelectedCount();