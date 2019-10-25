//npm install -g browserify

var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
 
var jsonParsed = JSON.parse(jsonData);
 
function showFirstCity() {
    return jsonParsed.persons[0].name;
}