function openLogin() {
  document.getElementById("loginForm").style.display = "block";
}
function openRegister() {
  document.getElementById("registerForm").style.display = "block";
}
function closePopup() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "none";
}

/* Validation */
function validateLogin() {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPass").value;

  if (email === "" || pass === "") {
    alert("Please fill all fields.");
  } else {
    alert("Login Successful!");
  }
}
function validateRegister() {
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let pass = document.getElementById("regPass").value;

  if (name === "" || email === "" || pass === "") {
    alert("All fields are required!");
  } else if (pass.length < 6) {
    alert("Password must be minimum 6 characters.");
  } else {
    alert("Registration Successful!");
  }
}

/* Cart + Wishlist */
function addCart() {
  alert("Item added to cart!");
}
function addWishlist() {
  alert("Item added to wishlist!");
}
