console.log("movie ticket booking");
const container = document.querySelector(".container");
const allSeats = document.querySelectorAll(".row .seat");
const availableSeats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.querySelector(".count");
const total = document.querySelector(".total");
const movieSelect = document.querySelector("#movie");
let ticketPrice = +movieSelect.value;

populateUI();
function populateUI() {
  const selctedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  const moviIndex = localStorage.getItem("movieIndex");
  if (selctedSeats != null && selctedSeats.length > 0) {
    allSeats.forEach((seat, index) => {
      if (selctedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  if (moviIndex != null) {
    movieSelect.selectedIndex = moviIndex;
    ticketPrice = +movieSelect.value;
  }
}

const updateMovie = (index, price) => {
  localStorage.setItem("movieIndex", index);
  localStorage.setItem("moviePrice", ticketPrice);
};
updateMovie(movieSelect.selectedIndex, movieSelect.value);

movieSelect.addEventListener("change", (event) => {
  console.log(event.target.value);
  ticketPrice = +event.target.value;
  updateMovie(event.target.selectedIndex, ticketPrice);
  updatePrice();
});

function updatePrice() {
  const selectedSeat = document.querySelectorAll(".row .seat.selected ");
  const selectedIndex = [...selectedSeat].map((seat) =>
    [...allSeats].indexOf(seat)
  );
  localStorage.setItem("selectedSeats", JSON.stringify(selectedIndex));

  count.textContent = selectedSeat.length;
  total.textContent = ticketPrice * selectedSeat.length;
}

container.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");
    console.log(event.target);
    updatePrice();
  }
});

updatePrice();
