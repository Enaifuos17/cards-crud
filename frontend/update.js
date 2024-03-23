let myForm = document.getElementById("my-form");
let addBtn = document.getElementById("update-btn");
let firstNameInput = document.getElementById("fn-input");
let lastNameInput = document.getElementById("ln-input");
let ageInput = document.getElementById("age-input");
let stillAliveInput = document.getElementById("alive-input");
let countryInput = document.getElementById("country-input");

async function getData() {
  const data = await fetch("http://localhost:1717/users/");
  const res = await data.json();
  if (res) {
    return res;
    // console.log(res);
  } else {
    console.log("error while reading the file");
  }
}

// getData();

// to get the id from the URL
const urlParams = new URLSearchParams(window.location.search);
const myId = urlParams.get("id");

const myApi = "http://localhost:1717/users/";

async function handleSubmit(e) {
  e.preventDefault();
  const userData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: ageInput.value,
    stillAlive: stillAliveInput.value,
    country: countryInput.value,
  };
  try {
    const response = await fetch(`http://localhost:1717/users/update/${myId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(response);
    console.log(response.ok);

    if (response.ok) {
      console.log("Updated!");
      document.querySelector(".updated-p").style.display = "block";
    } else {
      console.log("smthg wrong!");
    }
  } catch (err) {
    console.log("something wrong!!");
  }
}

myForm.addEventListener("submit", handleSubmit);

// getData();
