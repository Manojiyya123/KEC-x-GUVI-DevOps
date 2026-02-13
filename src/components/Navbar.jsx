export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="nav-title">KEC x GUVI DevOps</h1>

      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#features" className="nav-link">Features</a>
        <a href="#curriculum" className="nav-link">Curriculum</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>

      <button className="nav-button">Register</button>
    </nav>
  );
}
