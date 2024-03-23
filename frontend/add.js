let myForm = document.getElementById("my-form");
let addBtn = document.getElementById("add-btn");
let firstNameInput = document.getElementById("fn-input");
let lastNameInput = document.getElementById("ln-input");
let ageInput = document.getElementById("age-input");
let stillAliveInput = document.getElementById("alive-input");
let countryInput = document.getElementById("country-input");

const myApi = "http://localhost:1717/users/";

async function getData() {
  const data = await fetch(myApi);
  const res = await data.json();
  if (res) {
    return res;
  } else {
    return "error while reading the file";
  }
}

async function handleSubmit(e) {
  e.preventDefault();

  const userData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: parseInt(ageInput.value),
    stillAlive:
      stillAliveInput.value === "yes" || stillAliveInput.value === "Yes"
        ? true
        : false,
    country: countryInput.value,
  };

  const response = await fetch("http://localhost:1717/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    console.log(userData);
    console.log("ADDED");
    document.querySelector(".added-p").style.display = "block";
  } else {
    console.log("Something wrong");
  }
}

myForm.addEventListener("submit", handleSubmit);
