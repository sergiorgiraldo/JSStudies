import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import Error from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

function FilteredEventsPage() {
	const router = useRouter();
	const filterData = router.query.slugs;

	if (filterData) {
		try {
			var year = +filterData[0];
			var month = +filterData[1];

			const dt = new Date(year, month, 1);
			console.log(dt);
			console.log(dt instanceof Date);
			if (!(dt instanceof Date)) throw Error();
			if (isNaN(dt)) throw Error();
			if (month < 1 || month > 12) throw Error();
		} catch {
			return (
				<Fragment>
					<div className="center">
						<Error>
							GIVE ME A YEAR (4 DIGIT) AND A MONTH (1->12)!
						</Error>
						<Button link="/events">All events</Button>
					</div>
				</Fragment>
			);
		}

		const events = getFilteredEvents({
			year: year,
			month: month
		});
		if (events && events.length > 0) {
			return (
				<div>
					<EventList events={events}></EventList>
				</div>
			);
		} else {
			return (
				<Fragment>
					<div className="center">
						<Error>NO EVENTS FOUND!</Error>
						<Button link="/events">All events</Button>
					</div>
				</Fragment>
			);
		}
	} else {
		return (
			<Fragment>
				<div className="center">
					<Error>GIVE ME A YEAR (4 DIGIT) AND A MONTH (1->12)!</Error>
					<Button link="/events">All events</Button>
				</div>
			</Fragment>
		);
	}
}

export default FilteredEventsPage;
