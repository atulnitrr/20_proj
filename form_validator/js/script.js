"use strict";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");

const showError = (element, message) => {
  const formControl = element.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
  console.log(small);
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(username.value);
  if (username.value === "") {
    showError(username, "user name required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "email required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Not a valid email");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "password  required");
  } else {
    showSuccess(password);
  }
  if (confirmpassword.value === "") {
    showError(confirmpassword, "confirm password  name required");
  } else {
    showSuccess(confirmpassword);
  }
});

/*
eval("var a = 10");
console.log(a);

*/

/*
console.log(this);

var person = {
  firsName: "ramn",
  print() {
    console.log(this);
  },
};

person.print();
var per = person.print;
per();

*/
