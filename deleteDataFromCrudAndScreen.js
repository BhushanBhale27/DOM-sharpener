const button = document.getElementById("btn");
const ul = document.getElementById("listItems");

// Function to delete an appointment
function deleteAppointment(id, li) {
  axios.delete(`https://crudcrud.com/api/3e287bac1bfa441d881579f2f7981611/AppointmentData/${id}`)
    .then(() => {
      // Remove the list item from the DOM
      li.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

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

  axios.post("https://crudcrud.com/api/3e287bac1bfa441d881579f2f7981611/AppointmentData", obj)
    .then((response) => {
      // Create a new list item
      const li = document.createElement("li");
      li.textContent = `name: ${response.data.name} email: ${response.data.email} phone: ${response.data.phone} date: ${response.data.date} time: ${response.data.time}`;

      // Create a delete button and add an event listener to it
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        deleteAppointment(response.data._id, li);
      });
      li.appendChild(deleteBtn);

      // Create an edit button
      const editBtn = document.createElement("button");
      editBtn.className = "edit"
      editBtn.textContent = "Edit"
      li.appendChild(editBtn);

      // Add the new list item to the DOM
      ul.appendChild(li);
    })
    .catch((err) => {
      console.log(err);
    });
});
