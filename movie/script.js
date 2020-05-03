console.log("movie ticket booking");
const container = document.querySelector(".container");
const availableSeats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.querySelector(".count");
const total = document.querySelector(".total");
const movieSelect = document.querySelector("#movie");
let ticketPrice = +movieSelect.value;
console.log(movieSelect);

movieSelect.addEventListener("change", (event) => {
  console.log(event.target.value);
  ticketPrice = +event.target.value;
  updatePrice();
});

const updatePrice = () => {
  const selectedSeat = document.querySelectorAll(".row .seat.selected ");
  count.textContent = selectedSeat.length;
  total.textContent = ticketPrice * selectedSeat.length;
};

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
