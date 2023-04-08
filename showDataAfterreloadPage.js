const button = document.getElementById("btn");
const ul = document.getElementById("listItems");



window.onload = function() {
    axios.get('https://crudcrud.com/api/3e287bac1bfa441d881579f2f7981611/AppointmentData')
      .then(function(response) {
        const data = response.data;
        const ul = document.getElementById("listItems");
  
        data.forEach(function(item) {
          const li = document.createElement("li");
          li.textContent = `name: ${item.name} email: ${item.email} phone: ${item.phone} date: ${item.date} time: ${item.time}`;
          
          const deleteBtn = document.createElement("button");
          deleteBtn.className = "delete";
          deleteBtn.textContent = "Delete";
          li.appendChild(deleteBtn);
  
          const editBtn = document.createElement("button");
          editBtn.className = "edit"
          editBtn.textContent = "Edit"
          li.appendChild(editBtn);
  
          ul.appendChild(li);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  

//   OR


// // Function to create a list item for each appointment
// function createAppointmentListItem(appointment) {
//   const li = document.createElement("li");
//   li.textContent = `name: ${appointment.name} email: ${appointment.email} phone: ${appointment.phone} date: ${appointment.date} time: ${appointment.time}`;

//   const deleteBtn = document.createElement("button");
//   deleteBtn.className = "delete";
//   deleteBtn.textContent = "Delete";
//   li.appendChild(deleteBtn);

//   const editBtn = document.createElement("button");
//   editBtn.className = "edit"
//   editBtn.textContent = "Edit"
//   li.appendChild(editBtn);

//   ul.appendChild(li);
// }

// // Function to get all appointments from the backend and create list items for each one
// function getAllAppointments() {
//   axios.get("https://crudcrud.com/api/3e287bac1bfa441d881579f2f7981611/AppointmentData")
//     .then((response) => {
//       const appointments = response.data;
//       Object.keys(appointments).forEach((key) => {
//         const appointment = appointments[key];
//         createAppointmentListItem(appointment);
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// // Call getAllAppointments function when the page loads
// getAllAppointments();

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
  
  

axios.post("https://crudcrud.com/api/3e287bac1bfa441d881579f2f7981611/AppointmentData" , obj)
   .then((response)=>{
    // show data on screen:-
    const li = document.createElement("li");
    li.textContent = `name: ${response.data.name} email: ${response.data.email} phone: ${response.data.phone} date: ${response.data.date} time: ${response.data.time}`;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.className = "edit"
    editBtn.textContent = "Edit"
    li.appendChild(editBtn);
  
    ul.appendChild(li);

    console.log(response);
  })
  .catch((err)=>{
    console.log(err);
})
  
});
