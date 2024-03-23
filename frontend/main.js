async function fetchAPI() {
  const res = await fetch("http://localhost:1717/users/");
  const data = await res.json();

  // loop
  data.map((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <h1><span>ID:</span> ${user.id}</h1>
    <h2><span>First Name:</span> ${user.firstName}</h2>
    <h2><span>Last Name:</span> ${user.lastName}</h2>
    <h2><span>Age:</span> ${user.age}</h2>
    <h2><span>Alive:</span> ${user.stillAlive}</h2>
    <h2><span>Country:</span> ${user.country}</h2>
    <button class="btn-delete">Delete</button>
    <a href="./update-user.html?id=${user.id}" class="btn-update">Update</a>
    `;

    const myBtn = card.querySelector(".btn-delete");

    myBtn.addEventListener("click", async () => {
      await fetch(`http://localhost:1717/users/delete/${user.id}`, {
        method: "delete",
      });
      card.remove();
    });

    document.querySelector(".container").appendChild(card);
  });
}

fetchAPI();

// let updateBtn = document.querySelector(".btn-update");
// console.log(updateBtn);
