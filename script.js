const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("confirmPassword");

function onError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "formcontrol error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function onSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "formcontrol success";
}

function validateEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (username.value === "") {
    onError(username, "Username is required");
  } else {
    onSuccess(username);
  }
  if (email.value === "") {
    onError(email, "Email is required");
  } else {
    if (validateEmail(email.value)) {
      onSuccess(email);
    } else {
      onError(email, "Invalid format");
    }
  }
  if (password.value === "") {
    onError(password, "Password is required");
  } else {
    onSuccess(password);
  }
  if (passwordConfirm.value === "") {
    onError(passwordConfirm, "Confirm password");
  } else {
    onSuccess(passwordConfirm);
  }
});
