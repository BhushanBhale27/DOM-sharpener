function signup(event) {
    event.preventDefault();

    const name = document.getElementById("na").value;
    // localStorage.setItem("userName" , name);
    const email = document.getElementById("em").value;
    // localStorage.setItem("userEmail" , email);
    const phone = document.getElementById("ph").value;
    // localStorage.setItem("userPhone" , phone);
    const date = document.getElementById("da").value;
    // localStorage.setItem("userDate" , date);
    const time = document.getElementById("ti").value;
    // localStorage.setItem("userTime" , time);

    const obj = {
        name,
        email,
        phone,
        date,
        time
    }
    localStorage.setItem("userDetails", JSON.stringify(obj));


    if (phone.length !== 10) {
alert("Please enter a 10-digit phone number");
return;
}
}

