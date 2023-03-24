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

  const editBtn = document.createElement("button");
  editBtn.className = "edit"
  editBtn.textContent = "Edit"
  li.appendChild(editBtn);
});


//Delete button
ul.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    const email = e.target.parentNode.getAttribute("data-email");
    localStorage.removeItem(email);
    e.target.parentNode.remove();
  }
});



//Edit Button
ul.addEventListener('click' , function editMe(e){
    if(e.target.classList.contains("edit")){
        const email = e.target.parentNode.getAttribute("data-email");
        const obj = JSON.parse(localStorage.getItem(email));
        const nameBox = document.getElementById("fname")
        const emailBox = document.getElementById("email")
        const phoneBox = document.getElementById("phone")
        const dateBox = document.getElementById("date")
        const timeBox = document.getElementById("time")

        nameBox.value = obj.name;
        emailBox.value = obj.email;
        phoneBox.value = obj.phone;
        dateBox.value = obj.date;
        timeBox.value = obj.time;

        
        localStorage.removeItem(email);
        e.target.parentNode.remove();

    }
})
