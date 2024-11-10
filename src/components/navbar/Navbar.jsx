import './nav.css';

function Navbar() {
  return (
    <div className="navbar">
        <div className="container py-3">
            <h2 className='logo'>Mastor</h2>
            <div className="nav">
                <a href="#" className='active'>Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            <button className='btn btn-green'>
                Sign up
            </button>
        </div>
    </div>
  )
}

export default Navbar