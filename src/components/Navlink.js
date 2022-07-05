import React from "react";
 
const NavLink = (props)=>(
    <a href="/" className="nav-link" data-testid="nav-link">{props.text}</a>
)

export default NavLink