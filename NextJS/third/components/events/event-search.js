import Button from "../ui/button";
import classes from "./event-search.module.css";
import React from "react";

function EventSearch(props) {
	const [formData, setFormData] = React.useState({ year: "", month: "" });

	function handleChange(event) {
		const { name, value, type, checked } = event.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === "checkbox" ? checked : value
			};
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		props.onSearch(formData.year, formData.month);
	}

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor="year">Year</label>
					<select name="year" id="year" onChange={handleChange}>
						<option value="">-- Choose --</option>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</select>
				</div>
				<div className={classes.control}>
					<label htmlFor="month">Month</label>
					<select name="month" id="month" onChange={handleChange}>
						<option value="">-- Choose --</option>
						<option value="1">Jan</option>
						<option value="2">Feb</option>
						<option value="3">Mar</option>
						<option value="4">Apr</option>
						<option value="5">May</option>
						<option value="6">Jun</option>
						<option value="7">Jul</option>
						<option value="8">Aug</option>
						<option value="9">Sep</option>
						<option value="10">Oct</option>
						<option value="11">Nov</option>
						<option value="12">Dec</option>
					</select>
				</div>
			</div>
			<Button>Search</Button>
		</form>
	);
}

export default EventSearch;
