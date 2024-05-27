// src/components/Hero.test.js
import React from "react";
import { render } from "@testing-library/react";
import Hero from "../sections/Hero";

describe("Hero Component", () => {
  test("renders the Hero component", () => {
    const { getByText } = render(<Hero />);
    const buttonElement = getByText(/Explore/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders Lottie animation", () => {
    const { container } = render(<Hero />);
    const lottieElement = container.querySelector("svg");
    expect(lottieElement).toBeInTheDocument();
  });
});
