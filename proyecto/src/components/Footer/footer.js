import React from 'react';
import "./footer.css"

function Footer() {
  return (
    <footer id="Creador" className="footer">
      <div className="container">
        <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3 mb-2 small text-muted">
          <li>•</li>  
          <li>Vicente Rodriguez</li>
          <li>•</li>
          <li>Sebastian Valderrama</li>
          <li>•</li>
          <li>Carlos Pinilla</li>
        </ul>
        <small className="text-secondary">©2026 LevelUp</small>
      </div>
    </footer>
  );
}

export default Footer;  