import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    

      
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="home" className="navbar-brand">REAL ESTATE</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link text-decoration-none" to="home" smooth={true} duration={4}>HOME</Link>
            <Link className="nav-link text-decoration-none" to="about" smooth={true} duration={4}>ABOUT ME</Link>
            <Link className="nav-link text-decoration-none" to="social" smooth={true} duration={4}>SOCIAL</Link>
            <Link className="nav-link text-decoration-none" to="testimonials" smooth={true} duration={4}>TESTIMONIALS</Link>
            <Link className="nav-link text-decoration-none" to="contact" smooth={true} duration={4}>CONTACT</Link>
          </div>
        </div>
      </div>
    </nav>
    
  );
}
