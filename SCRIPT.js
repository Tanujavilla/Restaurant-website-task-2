function showMessage(){
    alert("Thank you for choosing Royal Feast");
}

document.getElementById("reservationForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let people = document.getElementById("people").value;

    if(name === "" || email === "" || people === ""){

        alert("Please fill all fields!");

    }

    else{

        alert("Table Reserved Successfully 🍽️");

    }

});