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

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
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
