/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import App from "../app";

describe("App", () => {
  test("Renders the App component", () => {
    const { container } = render(<App />);
    const mainElement = container.querySelector(".app-container");
    expect(mainElement).toBeInTheDocument();
  });
});
