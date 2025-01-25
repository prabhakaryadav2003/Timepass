import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#" style={{ fontSize: '30px', fontWeight: 'bold' }}>
          Logo
        </a>
        <a className="navbar-brand text-white" href="#" style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '10px' }}>
          WebsiteName
        </a>

        <div className="d-flex ml-auto">
          <a
            className="btn btn-outline-light me-3"
            href="#"
            style={{
              padding: '8px 20px',
              borderRadius: '25px',
              fontWeight: '500',
              fontSize: '16px',
            }}
          >
            Add Restaurant
          </a>
          <a
            className="btn btn-outline-light me-3"
            href="#"
            style={{
              padding: '8px 20px',
              borderRadius: '25px',
              fontWeight: '500',
              fontSize: '16px',
            }}
          >
            Login
          </a>
          <a
            className="btn btn-outline-warning"
            href="#"
            style={{
              padding: '8px 20px',
              borderRadius: '25px',
              fontWeight: '500',
              fontSize: '16px',
            }}
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
