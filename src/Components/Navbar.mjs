import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ title }) {
  const handleNavigation = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="/bootstrap"></use></svg>
        <span className="fs-4">{title}</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><button href="#" className="nav-link active" onClick={() => handleNavigation('home')}>Home</button></li>
        <li className="nav-item"><button href="#" className="nav-link" onClick={() => handleNavigation('features')}>Features</button></li>
        <li className="nav-item"><button href="#" className="nav-link" onClick={() => handleNavigation('faq')}>FAQs</button></li>
        <li className="nav-item"><button href="#" className="nav-link" onClick={() => handleNavigation('about')}>About</button></li>
      </ul>
    </header>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
