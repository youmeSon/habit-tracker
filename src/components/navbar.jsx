import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    console.log("navbar");
    return (
      <>
        <nav className="navbar">
          <i className="nav__logo fas fa-leaf"></i>
          <span className="nav__title">Habit Tracker</span>
          <span className="nav__count">{this.props.totalCount}</span>
        </nav>
      </>
    );
  }
}

export default Navbar;
