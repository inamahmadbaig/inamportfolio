import './header.css'


function Header() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar px-3">

            <div className="container">

                {/* Logo */}
                <a className="navbar-brand fw-bold" href="#">
                    <span className="logo-primary">Inam</span>
                    <span className="logo-light"> Ahmad Baig</span>
                </a>

                {/* Toggle Button */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navMenu">

                    <ul className="navbar-nav mx-auto text-center gap-lg-4">

                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>

                       

                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>

                         <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>

                    </ul>

                    {/* Button */}
                    <div className="text-center mt-3 mt-lg-0">
                        <a href="/resume.pdf" className="btn resume-btn">
                            Resume
                            <i className="bi bi-download ms-2"></i>
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Header;