import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

it("carrousel is rendered in Home page", () => {
  render(<Home />);

  const carousel = screen.getByTestId("carousel");

  expect(carousel).toBeInTheDocument();
});
