import "./App.css";
import NodeSquare from "./NodeSquare";

const nodeList = [
	{
		title: "Node 01",
		url: "noseque.herokuapp.com/1237asj",
		isActive: true,
		messages: [
			{
				id: 1,
				message: "un mensaje de prueba 01",
			},
			{
				id: 2,
				message: "un mensaje de prueba 01",
			},
			{
				id: 3,
				message: "un mensaje de prueba 01",
			},
			{
				id: 4,
				message: "un mensaje de prueba 01",
			},
			{
				id: 5,
				message: "un mensaje de prueba 01",
			},
			{
				id: 6,
				message: "un mensaje de prueba 01",
			},
			{
				id: 7,
				message: "un mensaje de prueba 01",
			},
			{
				id: 8,
				message: "un mensaje de prueba 01",
			},
		],
	},
	{
		title: "Node 02",
		url: "algosito.herokuapp.com/1237as45124j",
		isActive: false,
		messages: [
			{
				id: 1,
				message: "un mensaje de prueba 01",
			},
			{
				id: 2,
				message: "un mensaje de prueba 01",
			},
			{
				id: 3,
				message: "un mensaje de prueba 01",
			},
		],
	},
	{
		title: "Node 03",
		url: "algosito.herokuapp.com/1237as45124j",
		isActive: true,
		messages: [
			{
				id: 1,
				message: "un mensaje de prueba 01",
			},
			{
				id: 2,
				message: "un mensaje de prueba 01",
			},
			{
				id: 3,
				message: "un mensaje de prueba 01",
			},
		],
	},
	{
		title: "Node 04",
		url: "4123412.herokuapp.com/1237as45124j",
		isActive: false,
		messages: [
			{
				id: 1,
				message: "un mensaje de prueba 01",
			},
			{
				id: 2,
				message: "un mensaje de prueba 01",
			},
			{
				id: 3,
				message: "un mensaje de prueba 01",
			},
		],
	},
];

function App() {
	return (
		<div className="App">
			<h1 id="title">Nodes</h1>
			{nodeList.map((node, key) => (
				<NodeSquare {...node} key={key} />
			))}
		</div>
	);
}

export default App;
