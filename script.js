function login(){

let regno=document.getElementById("regno").value;

let password=document.getElementById("password").value;

if(regno=="812023104084" && password=="1234"){

alert("Login Successful");

window.location.href="dashboard.html";

return false;

}

else{

alert("Invalid Register Number or Password");

return false;

}

}
// Leave Form

const leaveForm = document.getElementById("leaveForm");

if (leaveForm) {

    leaveForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Leave Request Submitted Successfully!");

        window.location.href="status.html";

    });

}
// OD Form

const odForm = document.getElementById("odForm");

if (odForm) {

    odForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("OD Request Submitted Successfully!");

        window.location.href = "status.html";

    });

}
// Bonafide Form

const bonafideForm = document.getElementById("bonafideForm");

if (bonafideForm) {

    bonafideForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Bonafide Request Submitted Successfully!");

        window.location.href = "status.html";

    });

}
// Complaint Form

const complaintForm = document.getElementById("complaintForm");

if (complaintForm) {

    complaintForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Complaint Submitted Successfully!");

        window.location.href = "status.html";

    });

}