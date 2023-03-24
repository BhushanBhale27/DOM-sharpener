const button = document.getElementById("btn");
const ul = document.getElementById("listItems");

button.addEventListener("click", function(event) {
  event.preventDefault();
  const name = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const obj = {
    name,
    email,
    phone,
    date,
    time
  };

  localStorage.setItem(email, JSON.stringify(obj));

  const li = document.createElement("li");
  li.setAttribute("data-email", email);
  li.textContent = `name: ${obj.name} email: ${obj.email} phone: ${obj.phone} date: ${obj.date} time: ${obj.time}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.textContent = "Delete";
  li.appendChild(deleteBtn);

  ul.appendChild(li);
});

ul.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    const email = e.target.parentNode.getAttribute("data-email");
    localStorage.removeItem(email);
    e.target.parentNode.remove();
  }
});
