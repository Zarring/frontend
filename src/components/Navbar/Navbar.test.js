import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders navbar and validates links", () => {
  render(<Navbar />);
  const links = screen.getAllByTestId("nav-link")
  links.forEach(li =>{
    expect(linkNames).toContain(li.textContent)
  })
});

const linkNames = [
  "User Profile",
  "Holidays"
]