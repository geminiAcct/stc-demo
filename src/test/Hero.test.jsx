import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero"; // Assuming Hero is in the same directory

jest.mock("../assets/images/hero.js"); // Mock image import
jest.mock("../components/Button", () => ({
  Button: () => <button>Explore</button>,
})); // Mock Button component

describe("Hero component", () => {
  it("renders the hero image and Explore button", () => {
    render(<Hero />);

    expect(screen.getByRole("img")).toBeInTheDocument(); // Assert image presence (modify if using Lottie)
    expect(screen.getByText("Explore")).toBeInTheDocument();
  });

  it("renders the button with correct props", () => {
    render(<Hero />);

    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ backgroundColor: "green" }); // Assert button style
  });

  // Add more tests for different scenarios and interactions
});
