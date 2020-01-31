let daynames = [];
let months = [];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName + "," + monthName + " " + d.getDate() + "," + d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;

try {
    let option = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    document.getElementById(
        "currentdate2"
    ).textContent = new Date().toLocaleDateString("en-US", options);
    } catch (e) {
        alert("Error with code or your browser does not suppot Locale");
    }
