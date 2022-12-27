import React from "react";
import Joke from "./components/joke";

function App() {
	return (
		<div className="jokes">
			<Joke
				setup="I got my daughter a fridge for her birthday."
				punchline="I can't wait to see her face light up when she opens it."
				upvote={1}
				downvote={3}
				isPun={true}
			/>
			<Joke
				setup="How did the hacker escape the police?"
				punchline="He just ransomware!"
				upvote={2}
				downvote={6}
				isPun={false}
			/>
			<Joke
				setup="Why don't pirates travel on mountain roads?"
				punchline="Scurvy."
				upvote={3}
				downvote={3}
				isPun={true}
			/>
			<Joke
				setup="Why do bees stay in the hive in the winter?"
				punchline="Swarm."
				upvote={4}
				downvote={6}
				isPun={true}
			/>
			<Joke
				punchline="It’s hard to explain puns to kleptomaniacs because 
                they always take things literally."
				upvote={5}
				downvote={3}
				isPun={true}
			/>
			<Joke
				setup="What's the best thing about Switzerland?"
				punchline="I don't know, but the flag is a big plus!"
				upvote={6}
				downvote={6}
				isPun={false}
			/>
		</div>
	);
}

export default App;
