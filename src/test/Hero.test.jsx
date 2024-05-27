import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../sections/Hero"; // Assuming Hero is in the same directory

jest.mock("react-lottie", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Hero component", () => {
  it("renders background image and button correctly", () => {
    render(<Hero />);

    // Background image (using CSS selectors)
    const backgroundImage = screen.getByStyle(
      `background-image: url("${process.env.PUBLIC_URL}/assets/images/hero.jpg")` // Assuming hero image is named hero.jpg
    );
    expect(backgroundImage).toBeInTheDocument();

    // Button
    const button = screen.getByRole("button", { name: /Explore/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ backgroundColor: "green" }); // Assuming green button background
  });

  it("renders Lottie animation correctly", () => {
    render(<Hero />);

    const lottie = screen.getByTestId("lottie-animation"); // Add data-testid for clear identification
    expect(lottie).toBeInTheDocument();

    // Verify Lottie mock function call (optional)
    expect(reactLottieMock).toHaveBeenCalledWith(expect.any(), expect.any());
  });
});

const reactLottieMock = jest.mocked(Lottie, "default"); // Mock Lottie for animation testing (optional)
