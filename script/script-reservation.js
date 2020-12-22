const check = document.getElementById("reservation-check");


check.addEventListener("click", checkRes);

function checkRes() {
    let reservationr = document.getElementById("reservationnumber").value;
    window.location=`http://mufasa-escapes.netlify.app/booking/${reservationr}.html`;
}