/* import { OpenAI } from "openai";
import { useState } from "react";
import "./App.css";

function App() {
	let [promptInput, setPromptInput] = useState("");
	let [response, setResponse] = useState("hello");

	const apiKey = process.env.REACT_APP_CHATGPT_API;
	const configuration = new Configuration({
		apiKey: apiKey,
		dangerouslyAllowBrowser: true,
	});

	const openai = new OpenAIApi(configuration);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await openai.createCompletion({
				engine: "text-davinci-003",
				prompt: promptInput,
				max_tokens: 1000,
			});

			const message = response.data.choices[0].text;
			setResponse(message);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>

				<form onSubmit={handleSubmit}>
					<input name="promptInput" value={promptInput} onChange={(e) => setPromptInput(e.target.value)} />
					<button type="submit">SUBMIT</button>
				</form>
				<div>{response}</div>
			</header>
		</div>
	);
}

export default App; */

/* import { OpenAI } from "openai";
import { useState } from "react";
import "./App.css";

function App() {
	let [promptInput, setPromptInput] = useState("");
	let [response, setResponse] = useState("hello");

	const api = process.env.REACT_APP_CHATGPT_API;
	const openai = new OpenAI({ apiKey: api, dangerouslyAllowBrowser: true });

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await openai.chat.completions.create({
				messages: [{ role: "user", content: promptInput }],
				model: "gpt-3.5-turbo",
				stream: true,
			});

			const message = response.data.choices[0].text;
			setResponse(message);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>

				<form onSubmit={handleSubmit}>
					<input name="promptInput" value={promptInput} onChange={(e) => setPromptInput(e.target.value)} />
					<button type="submit">SUBMIT</button>
				</form>
				<div>{response}</div>
			</header>
		</div>
	);
}

export default App; */

import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import "./App.css";

function App() {
	let [promptInput, setPromptInput] = useState("");
	let [response, setResponse] = useState("hello");

	const apiKey = process.env.REACT_APP_CHATGPT_API;
	const configuration = new Configuration({
		apiKey: apiKey,
	});

	const openai = new OpenAIApi(configuration);
	// const openai = new OpenAI({ apiKey: api, dangerouslyAllowBrowser: true });

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await openai.createCompletion({
				model: "text-davinci-003",
				prompt: promptInput,
				temperature: 0,
				max_tokens: 1000,
			});

			const message = response.data.choices[0].text;
			setResponse(message);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>

				<form onSubmit={handleSubmit}>
					<input name="promptInput" value={promptInput} onChange={(e) => setPromptInput(e.target.value)} />
					<button type="submit">SUBMIT</button>
				</form>
				<div>{response}</div>
			</header>
		</div>
	);
}

export default App;
