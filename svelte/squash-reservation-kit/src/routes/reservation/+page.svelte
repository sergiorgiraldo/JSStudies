<form method="POST" action="/api">
	<label>
		Date:
		<input type="date" name="date" required />
	</label>
	<label>
		Time:
		<input type="time" name="time" required />
	</label>
	<label>
		Court Number:
		<select name="court_number">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
		</select>
	</label>
	<label>
		Name:
		<select name="name">
			<option value="Sergio">Sergio</option>
			<option value="Luis">Luis</option>
			<option value="Luiz Felipe">Luiz Felipe</option>
			<option value="Mireille">Mireille</option>
			<option value="Diptesh">Diptesh</option>
		</select>
	</label>
	<button type="submit">Submit</button>
</form>
