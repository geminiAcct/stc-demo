import { render, screen } from "@testing-library/react";
import Nav from "../sections/Nav";

// Mock `Button` component (if necessary):
jest.mock("../components/Button", () => ({
  __esModule: true,
  default: jest.fn(() => <button>Contact Us</button>),
})); // Replace with appropriate mock implementation

describe("Nav component", () => {
  it("renders the navigation bar with links and a button", () => {
    const mockNavLinks = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ];

    // Mock `navlink` constant (if it's not an array):
    jest.mock("../constants", () => ({
      navlink: mockNavLinks,
    }));

    render(<Nav />);

    // Assert navigation links
    const navigationLinks = screen.getAllByRole("link");
    expect(navigationLinks).toHaveLength(mockNavLinks.length);
    navigationLinks.forEach((link, index) => {
      expect(link).toHaveTextContent(mockNavLinks[index].label);
      expect(link).toHaveAttribute("href", mockNavLinks[index].href);
    });

    // Assert button
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Contact Us");

    // Callbacks for Button mock (if applicable):
    expect(Button).toHaveBeenCalledWith({
      name: "Contact Us",
      bg_color: "bg-green",
      destination: "#contact-us",
    });
  });
});
