const response = await fetch("https://www.httpbin.org/json");

const res = await Bun.readableStreamToJSON(response.body); // => object
console.log("\n>>>>>>  author");
console.log(res.slideshow.author);
console.log("\n>>>>>>> all");
console.log(res);