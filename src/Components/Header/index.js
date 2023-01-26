import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link className="p" to="/" default >Student Workspace</Link>
        <Link className="p" to="/ta-lounge">Settings</Link>
      </ header>
    );
  }
}

export default Header;
