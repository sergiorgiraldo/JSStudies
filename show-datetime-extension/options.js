function saveOptions() {
	const urls = document
		.getElementById("urls")
		.value.split("\n")
		.filter((url) => url.trim() !== "");
	chrome.storage.sync.set(
		{
			urls: urls
		},
		function () {
			const status = document.getElementById("status");
			status.textContent = "Options saved.";
			setTimeout(function () {
				status.textContent = "";
			}, 750);
		}
	);
}

function restoreOptions() {
	chrome.storage.sync.get(
		{
			urls: []
		},
		function (items) {
			document.getElementById("urls").value = items.urls.join("\n");
		}
	);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
