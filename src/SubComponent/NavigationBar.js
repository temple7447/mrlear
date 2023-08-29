import React, { useState } from 'react';
import { FcGoogle, FcGraduationCap } from 'react-icons/fc';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css';

function NavigationBar({ Data }) {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  function MobileNav({ Data, isMobileNavVisible }) {
    if (isMobileNavVisible) {
      return (
        <div className='mobile-nav position-fixed top-0 start-0 w-100 h-100 bg-light'>
          <button className='btn btn-secondary d-block d-md-none position-absolute top-0 end-0 mt-3 me-3' onClick={() => setIsMobileNavVisible(false)}>Close</button>
          <div className='d-flex flex-column align-items-center justify-content-center h-100'>
            {Data.map((element, index) => {
              const { navigation } = element;
              return (
                <Link key={index} to={navigation} className='nav-link' onClick={() => setIsMobileNavVisible(false)}>
                  {navigation}
                </Link>
              );
            })}
          </div>
        </div>
      );
    }
    return null;
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light" style={{ height: 70 }}>
      <div className='container'>
        <Link className='navbar-brand' to="/">
          <FaGraduationCap style={{ fontSize: 60, color: '#5950F6' }} />
          <span className='' style={{ color: '#404040' }}>UNI</span><span className='' style={{ color: '#5950F6' }}>TECH</span>
        </Link>
        <button className="navbar-toggler" type="button" onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-none d-sm-flex">
            {Data.map((element, index) => {
              const { navigation } = element;
              return (
                <li key={index} className="nav-item">
                  <Link className="nav-link" to={navigation}>{navigation}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <MobileNav Data={Data} isMobileNavVisible={isMobileNavVisible} />
    </nav>
  );
}

export default NavigationBar;
