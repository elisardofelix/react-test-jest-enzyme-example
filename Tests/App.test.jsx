import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../src/App";

describe("Test App Entry point", function () {
	it("should renders app properly", () => {
		const { getByText } = render(<App />);

		const count = getByText(/count is/);
		const react = getByText(/learn react/i);
		const vite = getByText(/hello vite/i);

		expect(count).toBeInTheDocument();
		expect(react).toBeInTheDocument();
		expect(vite).toBeInTheDocument();
	});
});
