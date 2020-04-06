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

function checkEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email.value.trim())) {
    onSuccess(email);
  } else {
    onError(email, "Invalid email format");
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    onError(input, `Minimum length for ${getFieldName(input)} is ${min}`);
  } else if (input.value.length > max) {
    onError(input, `Maximum length for ${getFieldName(input)} is ${max}`);
  } else {
    onSuccess(input);
  }
}

function isRequired(inputArray) {
  inputArray.forEach(function (input) {
    input.getI;
    if (input.value.trim() === "") {
      onError(input, `${getFieldName(input)} is required`);
    } else {
      onSuccess(input);
    }
  });
}

function checkPasswords(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    onError(confirmPassword, "Passwords do not match");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // if (username.value === "") {
  //   onError(username, "Username is required");
  // } else {
  //   onSuccess(username);
  // }
  // if (email.value === "") {
  //   onError(email, "Email is required");
  // } else {
  //   if (validateEmail(email.value)) {
  //     onSuccess(email);
  //   } else {
  //     onError(email, "Invalid format");
  //   }
  // }
  // if (password.value === "") {
  //   onError(password, "Password is required");
  // } else {
  //   onSuccess(password);
  // }
  // if (passwordConfirm.value === "") {
  //   onError(passwordConfirm, "Confirm password");
  // } else {
  //   onSuccess(passwordConfirm);
  // }
  isRequired([username, email, password, passwordConfirm]);
  checkLength(username, 3, 8);
  checkLength(password, 8, 15);
  checkLength(passwordConfirm, 8, 15);
  checkEmail(email);
  checkPasswords(password, confirmPassword);
});
