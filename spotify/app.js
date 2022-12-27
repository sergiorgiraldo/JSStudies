/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

import { post, get } from "request"; // "Request" library

var client_id = "6124e12cbb1c4e779faf7f0b52f42c51"; // Your client id
var client_secret = "4fb499e92a394e8ea730ed0f0a403a2e"; // Your secret

// your application requests authorization
var authOptions = {
	url: "https://accounts.spotify.com/api/token",
	headers: {
		Authorization:
			"Basic " +
			Buffer.from(client_id + ":" + client_secret).toString("base64")
	},
	form: {
		grant_type: "client_credentials"
	},
	json: true
};

post(authOptions, function (error, response, body) {
	if (!error && response.statusCode === 200) {
		// use the access token to access the Spotify Web API
		var token = body.access_token;
		var options = {
			url: "https://api.spotify.com/v1/users/jmperezperez",
			headers: {
				Authorization: "Bearer " + token
			},
			json: true
		};
		get(options, function (error, response, body) {
			console.log(body);
		});
	}
});
