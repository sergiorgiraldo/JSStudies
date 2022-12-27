const what = process.argv.slice(2).toString();

function reverse(what) {
	if (what.length == 1) {
		return what;
	}
	return (
		what.substring(what.length - 1) +
		reverse(what.substring(0, what.length - 1))
	);
}

console.log(what);
console.log(reverse(what));
