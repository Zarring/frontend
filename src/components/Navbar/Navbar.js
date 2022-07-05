import React from "react";
import Navlink from "../Navlink";

const Navbar = () => (
    <div data-testid="navbar">
        <Navlink text="User Profile" testid="user-profile-btn" />
        <Navlink text="Holidays" testid="holiday-btn"/>
    </div>
)

export default Navbar