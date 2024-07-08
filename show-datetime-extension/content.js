function displayDateTime() {
	const now = new Date();
	const dateTimeString = now.toLocaleString();

	let dateTimeElement = document.getElementById("extension-datetime");
	if (!dateTimeElement) {
		dateTimeElement = document.createElement("div");
		dateTimeElement.id = "extension-datetime";
		dateTimeElement.style.position = "fixed";
		dateTimeElement.style.top = "10px";
		dateTimeElement.style.right = "10px";
		dateTimeElement.style.padding = "5px";
		dateTimeElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
		dateTimeElement.style.color = "white";
		dateTimeElement.style.zIndex = "9999";
		document.body.appendChild(dateTimeElement);
	}

	dateTimeElement.textContent = dateTimeString;
}

function checkAndDisplayDateTime() {
	chrome.storage.sync.get(
		{
			urls: []
		},
		function (items) {
			const currentUrl = window.location.href;
			if (items.urls.some((url) => currentUrl.includes(url))) {
				displayDateTime();
			}
		}
	);
}

// Run the function when the page loads
checkAndDisplayDateTime();

// Run the function when the page is refreshed
window.addEventListener("load", checkAndDisplayDateTime);
