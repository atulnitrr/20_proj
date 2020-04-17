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
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
  return re.test(String(email).toLowerCase());
};

const checkPassMatching = (pass, confirmpass) => {
  if (pass.value.trim() !== confirmpass.value.trim()) {
    showError(confirmpass, "Pass word dont match");
  }
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min}`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be at most ${max}`);
  } else {
    showSuccess(input);
  }
};

const checkRequird = (inputArray) => {
  inputArray.forEach((item) => {
    if (item.value.trim() === "") {
      showError(item, `${getFieldName(item)} is required`);
    } else {
      showSuccess(item);
    }
  });
};

const getFieldName = (input) =>
  `${input.id.charAt(0).toUpperCase()}${input.id.slice(1)}`;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequird([username, email, password, confirmpassword]);
  checkLength(username, 4, 9);
  checkLength(password, 4, 20);
  checkEmail(email);
  checkPassMatching(password, confirmpassword);

  // console.log(username.value);
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
