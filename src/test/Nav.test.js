// Nav.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "../sections/Nav";
import { navlink } from "../constants";

test("renders navigation links and contact button", () => {
  render(<Nav />);

  // Check if the navigation links are rendered
  navlink.forEach((item) => {
    expect(screen.getByText(item.label)).toBeInTheDocument();
  });

  // Check if the contact button is rendered
  expect(screen.getByText("Contact Us")).toBeInTheDocument();
});
