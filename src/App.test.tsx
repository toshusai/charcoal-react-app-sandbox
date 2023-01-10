import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Open Modal/i);
  expect(linkElement).toBeInTheDocument();
});
