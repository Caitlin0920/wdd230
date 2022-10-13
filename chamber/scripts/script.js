document.getElementById("updated-time").innerHTML = document.lastModified;


function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;


if (now.getDay() == 1 || now.getDay() == 2) {
    document.getElementById("banner").textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
}