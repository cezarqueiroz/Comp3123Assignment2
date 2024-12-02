import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(localStorage.getItem('username'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUserName(null);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Employee Manager</Link>
        <div className="d-flex">
          {userName ? (
            <>
              <span className="navbar-text mr-3">{userName}</span>
              <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link className="btn btn-outline-light" to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
