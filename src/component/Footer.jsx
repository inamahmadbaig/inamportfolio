import './Footer.css'

function Footer() {
    return (
        <footer className="footer-section py-4">

            <div className="container text-center">

                <h5 className="mb-3 text-white">
                    Inam Ahmad Baig
                </h5>

                <p className="footer-text">
                    Java Backend Developer | Spring Boot | REST APIs
                </p>

                {/* Social Icons */}
                <div className="footer-icons my-3">

                    <a href="https://github.com/inamahmadbaig" target="_blank" rel="noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/inam-ahmad-baig/" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                   
                    <a href="mailto:inamahmadbaig@gmail.com?subject=Hello&body=I want to connect with you">
                        <i className="bi bi-envelope"></i>
                    </a>

                </div>

                <hr className="text-secondary" />

                <p className="text-secondary mb-0">
                    © {new Date().getFullYear()} All Rights Reserved | Built with React
                </p>

            </div>

        </footer>
    );
}

export default Footer;