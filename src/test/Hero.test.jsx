// Hero.test.js
import Hero from "../sections/Hero";
import { render } from "@testing-library/react";

describe("Hero component", () => {
  it("should render the structure with two sections", () => {
    const { getByTestId } = render(<Hero />);

    const section1 = getByTestId("hero-section-1");
    const section2 = getByTestId("hero-section-2");

    expect(section1).toBeInTheDocument();
    expect(section2).toBeInTheDocument();
  });

  it("should render a button element with Explore text", () => {
    const { getByText } = render(<Hero />);

    const button = getByText("Explore");

    expect(button).toBeInTheDocument();
  });

  it("should render a Lottie animation container", () => {
    const { getByTestId } = render(<Hero />);

    const animation = getByTestId("hero-animation");

    expect(animation).toBeInTheDocument();
  });
});
