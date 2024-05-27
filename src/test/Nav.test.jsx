import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "../sections";

describe("Nav component", () => {
  it("renders the navigation links correctly", () => {
    const mockNavLinks = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ];

    render(<Nav navlink={mockNavLinks} />);

    // Find all list items (assuming `navlink` provides an array of objects)
    const navItems = screen.getAllByRole("listitem");
    expect(navItems.length).toBe(mockNavLinks.length); // Check for correct number of links

    // Test individual link labels and hrefs (adjust selectors if needed)
    navItems.forEach((item, index) => {
      const link = item.querySelector("a");
      expect(link.textContent).toBe(mockNavLinks[index].label);
      expect(link.getAttribute("href")).toBe(mockNavLinks[index].href);
    });
  });

  it("renders the Contact Us button with the correct props", () => {
    render(<Nav />);

    const button = screen.getByRole("button", { name: /Contact Us/i });
    expect(button).toBeInTheDocument();

    // Test button props (adjust selectors based on Button component implementation)
    expect(button).toHaveStyle({ backgroundColor: "green" }); // Example: testing background color
    expect(button).toHaveAttribute("href", "#contact-us"); // Example: testing href attribute
  });
});
