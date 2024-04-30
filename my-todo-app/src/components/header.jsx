import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="card">
      <h1>Danicas todo app</h1>
      
      <Link to="/">Home </Link>
      <Link to="/About">About </Link>
      <Link to="/todo">Lägg till Todos </Link>
    </div>
  );
};
export default Header;
