import React from "react";
/* import { Link } from "react-router-dom"; */
import { NavLink } from "react-router-dom";
import Changeimg from "./Changeimg";

const ulstyle = {
  listStyleType: "none",
  display: "flex",
  alignContent: "center",
  lineHeight: "80px",
  width: "150px",
  justifyContent: "space-around"
};
class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "80px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <ul style={ulstyle}>
          <li>
            <NavLink
              exact
              to="/"
              style={{
                textDecoration: "none",
                fontSize: "20px",
                display: "inline-block",
                width: "100%",
                color: "black"
              }}
              /* activeClassName="active" */
              activeStyle={{ color: "red" }}
            >
              热门项目
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/battle"
              style={{
                textDecoration: "none",
                fontSize: "20px",
                display: "inline-block",
                width: "100%",
                color: "black"
              }}
              /* activeClassName="active" */
              activeStyle={{ color: "red" }}
            >
              battle
            </NavLink>
          </li>
        </ul>
        <Changeimg />
      </div>
    );
  }
}
export default Header;
