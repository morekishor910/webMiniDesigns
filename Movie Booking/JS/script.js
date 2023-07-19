const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();
let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  //copy selected seats into arr
  // map through array
  //return new array of indexes

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// get data from localstorage and populate ui
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// intial count and total
updateSelectedCount();

// form validation using JavaScript

function resetForm() {
  document.getElementById("signup-form").reset();
}

function validateForm() {
  const regIdRegex = /^[A-Z0-9]{7}$/;
  const usernameRegex = /^[a-zA-Z]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^\d{10}$/;
  const dobRegex = /^(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])[0-9]{4}$/;

  const regId = document.getElementById("reg-id").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const dob = document.getElementById("dob").value;

  if (!regIdRegex.test(reg - Id)) {
    alert("Invalid Registration ID");
    return false;
  }

  if (!usernameRegex.test(username)) {
    alert("Username should not have any digits");
    return false;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Password should have at least one small case letter, one uppercase letter, one digit, and one special character with a minimum length of 8"
    );
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }

  if (!mobileRegex.test(mobile)) {
    alert("Mobile number should be exactly 10 digits");
    return false;
  }

  if (!dobRegex.test(dob)) {
    alert("Invalid date of birth format (should be DDMMYYYY)");
    return false;
  }

  return true;
}

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    } else {
      location.replace("./booking.html");
    }
  });
