const key1 = document.querySelector("#phrase");
const key2 = document.querySelector("#phrase2");
const message = document.querySelector("#formmessage");

key2.addEventListener("focusout", checkSame);


function checkSame() {
	if (key1.value !== key2.value) {
		message.textContent = "Passwords is not the same!";
		message.style.display = "block";
		key2.style.backgroundColor = "#fff0f3";
        key1.value = "";
		key2.value = "";
		key1.focus();
	} else {
		message.style.display = "none";
		key2.style.backgroundColor = "#fff";
		key2.style.color = "#000";
	}
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

 
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
    if (range.value <= 4) {
        rangevalue.classList.add("lowRating");
        rangevalue.classList.remove("midRating");
        rangevalue.classList.remove("highRating");
}
else if ( range.value >4 && range.value <= 7){
    rangevalue.classList.remove("lowRating");
    rangevalue.classList.add("midRating");
    rangevalue.classList.remove("highRating");
}
else {
    rangevalue.classList.remove("lowRating");
    rangevalue.classList.remove("midRating");
    rangevalue.classList.add("highRating");
}

}