const outputDiv = document.querySelector("#jive-talk");
const inputText = document.querySelector("#input-text");
const serverURL = "https://api.funtranslations.com/translate/jive.json";
const btnTranslate = document.querySelector("#btn-translate");

btnTranslate.addEventListener("click", () => {
	const url = serverURL + "?text=" + inputText.value;

	fetch(url)
		.then((response) => response.json())
		.then((json) => {
			outputDiv.innerText = json.contents.translated;
		})
		.catch((error) => {
			console.log("Error Occured: ", error);
			alert("Something Went Wrong! Please try again later.");
		});
});
