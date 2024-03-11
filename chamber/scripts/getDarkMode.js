const modeButton = document.querySelector("#mode");


modeButton.addEventListener("click", () => {

       document.body.classList.toggle('dark-mode');

	if (modeButton.textContent.includes("🕶️")) {
		/*main.style.background = "#000";
		main.style.color = "#fff";*/
		modeButton.textContent = "🔆";
	} else {
		/*main.style.background = "#eee";
		main.style.color = "#000";*/
		modeButton.textContent = "🕶️";
	}
});
