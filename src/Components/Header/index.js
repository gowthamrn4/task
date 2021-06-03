import React, { useEffect} from 'react';
import './header.css';

function Header({history,onClick}) {
  return (
      <div className="navbar-custom">
            <nav className="navbar navbar-expand-xl navbar-custom">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor:'white' }}>
                <span className="navbar-toggler-icon" style={{ color:'black' }}>
                <i class="fas fa-bars"></i>
                </span>
            </button>
            <span className="navbar-brand">Task App</span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" style={{ color:'#FFF' }} onClick={()=>history.push('/dashboard')}>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{ color:'#FFF' }} onClick={()=>history.push('/listview')}>List View</a>
              </li>
              </ul>
              <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle bg-light"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <strong>Account</strong>
                      </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a href="#" className="dropdown-item">
                      <strong>Profile</strong>
                    </a>
                    <a className="dropdown-item" onClick={onClick}>
                    <div class="dropdown-divider" ></div>
                      <strong>Logout</strong>
                    </a>
                  </div>
                  </li>
              </ul>
            </div>
        </nav>
    </div>
  );
}

export default Header;
