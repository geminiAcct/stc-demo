// Hero.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero"; // Assuming Hero is in the same directory

jest.mock("../components/Button", () => ({ Button: jest.fn() })); // Mock Button component

test("renders Hero component with correct structure", () => {
  render(<Hero />);

  // Assert overall structure
  const heroSection = screen.getByTestId("hero-section"); // Add data-testid to Hero for easier selection
  expect(heroSection).toBeInTheDocument();
  expect(heroSection).toHaveClass(
    "flex flex-row bg-stc-hero bg-cover bg-no-repeat h-screen"
  );

  // Assert left section
  const leftSection = screen.getByRole("region"); // Assuming left section has a semantic role
  expect(leftSection).toBeInTheDocument();
  expect(leftSection).toHaveClass("w-[50%] h-screen");

  // Assert Button component (using mock)
  expect(Button).toHaveBeenCalledWith({
    name: "Explore",
    bg_color: "bg-green",
    destination: "#services",
  });

  // Assert right section (basic structure for now)
  const rightSection = screen.getAllByRole("region")[1]; // Assuming right section has a semantic role
  expect(rightSection).toBeInTheDocument();
  expect(rightSection).toHaveClass("w-[50%] flex justify-start items-center");

  // Consider adding tests for Lottie animation existence and behavior based on your implementation
});
