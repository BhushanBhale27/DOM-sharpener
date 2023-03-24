const button = document.getElementById("btn");
const ul = document.getElementById("listItems");
// console.log(ul);


 button.addEventListener("click" , function clickMe(event){
    event.preventDefault();
    const name = document.getElementById("fname").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const date = document.getElementById("date").value
    const time = document.getElementById("time").value

    const obj = {
        name,
        email,
        phone,
        date,
        time
    }
    
    localStorage.setItem(email, JSON.stringify(obj));

    if (phone.length !== 10) {
        alert("Please enter a 10-digit phone number");
        return;
    }

  //showing details on screen:-
  
//    const newItem = JSON.stringify(obj);
//    console.log(newItem);

//create new li element
    const li = document.createElement("Li");

    // li.className = "item1" no need

    li.textContent = `name: ${obj.name} email: ${obj.email} phone: ${obj.phone} date: ${obj.date} time: ${obj.time}`;
    // console.log(li);

   ul.append(li);


})




 
