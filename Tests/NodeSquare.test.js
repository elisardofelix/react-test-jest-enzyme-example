import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";
import NodeSquare from "../src/Components/NodeSquare";

const initialData = {
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
};

describe("NodeSquare component", () => {
	it("should render snapshot", () => {
		const component = renderer.create(<NodeSquare {...initialData} />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("should render required node elements", () => {
		const Node = shallow(<NodeSquare {...initialData} />);

		const title = Node.find({ className: "node-square-title" });
		expect(title.text()).toBe("Node 01");
	});

	it("should display the messages on click and hide on click again arrow", () => {
		const Node = mount(<NodeSquare {...initialData} />);

		let messages = Node.find({ className: "node-message" });

		expect(messages.length).toBe(0);

		Node.find("img.node-square-arrow").simulate("click");

		messages = Node.find({ className: "node-message" });

		expect(messages.length).toBe(8);

		Node.find("img.node-square-arrow").simulate("click");

		messages = Node.find({ className: "node-message" });

		expect(messages.length).toBe(0);
	});
});
