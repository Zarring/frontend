import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

test("renders the layout and validates that navbar exists", () => {
  render(<Layout />);
  const navbar = screen.getByTestId("navbar");
  const footer = screen.getByTestId("footer");
  const navlinks = screen.getAllByTestId("nav-link")
  navlinks.forEach(link => {
    expect(navbar).toContainElement(link)
  })
  
//  expect(userProfileLink).toHaveTextContent("User Profile");
//  expect(holidaysLink).toHaveTextContent("Holidays");
});
