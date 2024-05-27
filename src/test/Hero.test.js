import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../sections/Hero"; // Assuming Hero is in the same directory
test("renders Hero component with button and Lottie animation", () => {
  render(<Hero />);
  expect(screen.getByText("Explore")).toBeInTheDocument();
  // Add more assertions to test animation rendering and behavior
});
