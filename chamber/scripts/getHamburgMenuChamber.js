// Store the selected elements that we are going to use. 
const mainnavChamber = document.querySelector('.navigation')
const hambuttonChamber = document.querySelector('#menu');
hambuttonChamber.textContent='';
console.log('No1');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambuttonChamber.addEventListener('click', () => {
	
		mainnavChamber.classList.toggle('show');
	   hambuttonChamber.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

