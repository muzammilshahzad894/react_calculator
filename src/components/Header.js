import React from "react";
import PropTypes from "prop-types";
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";

const Header = (props) => {
  const handleClick = () => {
    props.setDarkMode(!props.darkMode);
  };
  const headingStyle = {
    color: props.darkMode ? "white" : "black",
  };
  const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  };
  return (
    <React.Fragment>
      <div style={headerStyle}>
        <h1 style={headingStyle}>React Calculator</h1>
        {props.darkMode ? (
          <MdToggleOn
            style={{ fontSize: "30px", cursor: "pointer", color: "white" }}
            onClick={handleClick}
          />
        ) : (
          <MdToggleOff
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={handleClick}
          />
        )}
      </div>
    </React.Fragment>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
export default Header;
