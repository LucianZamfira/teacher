import { Configuration, OpenAI } from "openai";
import { useState } from "react";
import "./App.css";

function App() {
	let [promptInput, setPromptInput] = useState("");
	let [response, setResponse] = useState("hello");

	const api = process.env.REACT_APP_CHATGPT_API;
	const configuration = new Configuration({ apikey: api });
	const openai = new OpenAI(configuration);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const response = await openai.createCompletion({
			prompt: promptInput,
			model: "text-davinci-003",
			temperature: 0,
			max_tokens: 1000,
		});

		const message = response.data.choices[0].text;
		setResponse(message);
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>

				<form onsubmit={handleSubmit}>
					<input name="promptInput" value={promptInput} onChange={(e) => setPromptInput(e.target.value)} />
					<button>SUBMIT</button>
				</form>
				<div>{response}</div>
			</header>
		</div>
	);
}

export default App;
