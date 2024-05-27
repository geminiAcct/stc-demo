import React from "react";
import { render, screen } from "@testing-library/react";
import { Hero } from "../sections"; // Assuming Hero component is in the parent directory

jest.mock("react-lottie"); // Mock Lottie component

describe("Hero component", () => {
  it("renders hero background image and button", () => {
    render(<Hero />);

    expect(screen.getByTestId(/hero-image/i)).toBeInTheDocument(); // Assert hero image is present (replace with actual data-testid if used)
    expect(
      screen.getByRole("button", { name: /Explore/i })
    ).toBeInTheDocument(); // Assert Explore button is present
  });

  // Additional tests can be written here to test button functionality and Lottie animation behavior (mocked in this example)
});
