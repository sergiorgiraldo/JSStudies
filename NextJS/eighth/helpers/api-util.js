export async function getAllEvents() {
	const response = await fetch(
		"https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/events.json"
	);
	const data = await response.json();

	const events = [];

	for (const key in data) {
		events.push({
			id: key,
			...data[key],
		});
	}

	return events;
}

export async function getAllSignup() {
	const response = await fetch(
		"https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/newsletter.json"
	);
	const data = await response.json();

	const signup = [];

	for (const key in data) {
		signup.push({
			id: key,
			...data[key],
		});
	}

	return signup;
}

export async function insertSignup(signup) {
	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signup)
    };

	const response = await fetch(
		"https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/newsletter.json", requestOptions
	);
	const data = await response.json();

	return JSON.stringify(data);
}

export async function getFeaturedEvents() {
	const allEvents = await getAllEvents();
	return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
	const allEvents = await getAllEvents();
	return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;

	const allEvents = await getAllEvents();

	let filteredEvents = allEvents.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year &&
			eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}
