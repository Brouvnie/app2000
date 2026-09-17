// Finn knappene og tekstfeltene fra HTML-filen.
const changeTextButton = document.getElementById("changeTextButton");
const textInput = document.getElementById("textInput");
const textToChange = document.getElementById("textToChange");

// Kjor denne koden nar brukeren trykker pa knappen.
changeTextButton.addEventListener("click", () => {
	// Hent teksten og fjern mellomrom foran og bak.
	const enteredText = textInput.value.trim();

	// Ikke legg til en tom linje.
	if (enteredText === "") {
		return;
	}

	// Lag en ny linje som kan klikkes for a slettes.
	const newLine = document.createElement("div");

	newLine.textContent = enteredText;
	newLine.style.cursor = "pointer";
	// Slett bare linjen som brukeren klikker pa.
	newLine.addEventListener("click", () => {
		newLine.remove();
	});

	// Legg linjen i tekstbeholderen.
	textToChange.append(newLine);
	// Tom tekstfeltet etter at teksten er lagt til.
	textInput.value = "";
});
