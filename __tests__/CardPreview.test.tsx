import "@testing-library/jest-dom";
import CardPreview from "../app/_components/CardPreview/CardPreview";
import { render } from "@testing-library/react";
import store from "@/app/_store/store";
import { Provider } from "react-redux";
import { strict } from "assert";

describe("Card character tags test", () => {
	it("testing if card have female gender tag when female gender is passed", () => {
		const testProps = {
			name: "TeStN ame",
			gender: "female",
			age: "",
			stats: [
				{ stat: "mass", value: "137" },
				{ stat: "height", value: "180" },
			],
		};
		const { getByTestId } = render(
			<Provider store={store}>
				<CardPreview {...testProps} />
			</Provider>
		);
		const childText = getByTestId("tags-block").firstChild?.textContent;
		expect(childText).toEqual(testProps.gender);
	});
	it("testing if card have male gender tag when female gender is passed", () => {
		const testProps = {
			name: "TeStN ame",
			gender: "male",
			age: "",
			stats: [
				{ stat: "mass", value: "137" },
				{ stat: "height", value: "180" },
			],
		};
		const { getByTestId } = render(
			<Provider store={store}>
				<CardPreview {...testProps} />
			</Provider>
		);
		const childText = getByTestId("tags-block").firstChild?.textContent;
		expect(childText).toEqual(testProps.gender);
	});
	it("testing if card have hermaphrodite gender tag when female gender is passed", () => {
		const testProps = {
			name: "TeStN ame",
			gender: "hermaphrodite",
			age: "",
			stats: [
				{ stat: "mass", value: "137" },
				{ stat: "height", value: "180" },
			],
		};
		const { getByTestId } = render(
			<Provider store={store}>
				<CardPreview {...testProps} />
			</Provider>
		);
		const childText = getByTestId("tags-block").firstChild?.textContent;
		expect(childText).toEqual(testProps.gender);
	});
	it("testing that card won't have gender tag with random string passed", () => {
		const testProps = {
			name: "TeStN ame",
			gender: "fmale",
			age: "",
			stats: [
				{ stat: "mass", value: "137" },
				{ stat: "height", value: "180" },
			],
		};
		const { getByTestId } = render(
			<Provider store={store}>
				<CardPreview {...testProps} />
			</Provider>
		);
		const container = getByTestId("tags-block");
		expect(container).toBeEmptyDOMElement();
	});

	it("testing that age tag will get passed information", () => {
		const testProps = {
			name: "TeStN ame",
			gender: "",
			age: "19BBY",
			stats: [
				{ stat: "mass", value: "137" },
				{ stat: "height", value: "180" },
			],
		};
		const { getByTestId } = render(
			<Provider store={store}>
				<CardPreview {...testProps} />
			</Provider>
		);
		const childText = getByTestId("tags-block").firstChild?.textContent;
		expect(childText).toEqual(testProps.age);
	});

	it("testing that card won't have age tag with empty string passed", () => {
		const testProps = {
			name: "TeStN ame",
			gender: "",
			age: "",
			stats: [
				{ stat: "mass", value: "137" },
				{ stat: "height", value: "180" },
			],
		};
		const { getByTestId } = render(
			<Provider store={store}>
				<CardPreview {...testProps} />
			</Provider>
		);
		const container = getByTestId("tags-block");
		expect(container).toBeEmptyDOMElement();
	});
});

describe("Card character name test", () => {
	it("Testing if passed name appears on the card", () => {
		const testProps = {
			name: "TeStN ame",
			gender: "",
			age: "",
			stats: [
				{ stat: "mass", value: "137" },
				{ stat: "height", value: "180" },
			],
		};
		const { getByTestId } = render(
			<Provider store={store}>
				<CardPreview {...testProps} />
			</Provider>
		);
		const childText = getByTestId("name-block").firstChild?.textContent;
		expect(childText).toEqual(testProps.name);
	});
});

describe("Card character stats test", () => {
	it("Testing if stat block appears when passing empty stats prop", () => {
		const testProps = {
			name: "TeStN ame",
			gender: "female",
			age: "11BBY",
			stats: [],
		};
		const { getByTestId } = render(
			<Provider store={store}>
				<CardPreview {...testProps} />
			</Provider>
		);
		const tagText = getByTestId("stats-block");
		expect(tagText).toBeEmptyDOMElement();
	});
	it("Testing if one passed stat is displayed as required", () => {
		const testProps = {
			name: "TeStN ame",
			gender: "female",
			age: "11BBY",
			stats: [{ stat: "mass", value: "137" }],
		};
		const { getByTestId } = render(
			<Provider store={store}>
				<CardPreview {...testProps} />
			</Provider>
		);
		const childText = getByTestId("stats-block").firstChild?.textContent;
		expect(childText).toEqual(
			testProps.stats[0].value + testProps.stats[0].stat
		);
	});

	it("Testing if two passed stats are displayed as required", () => {
		const testProps = {
			name: "TeStN ame",
			gender: "female",
			age: "11BBY",
			stats: [
				{ stat: "mass", value: "137" },
				{ stat: "height", value: "999" },
			],
		};
		const { getByTestId } = render(
			<Provider store={store}>
				<CardPreview {...testProps} />
			</Provider>
		);
		const container = getByTestId("stats-block");
		expect(container.firstChild?.textContent).toEqual(
			testProps.stats[0].value + testProps.stats[0].stat
		);
		expect(container.lastChild?.textContent).toEqual(
			testProps.stats[1].value + testProps.stats[1].stat
		);
	});
});
