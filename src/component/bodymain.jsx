import "./bodymain.css";


function BodyMain() {
    return (
        <section className="hero-section">

            <div className="container">
                <div className="row align-items-center min-vh-100">

                    {/* LEFT SIDE */}
                    <div className="col-lg-6 col-md-12 text-center text-lg-start hero-text">

                        <h5 className="text-primary">Hi, I'm</h5>

                        <h1 className="hero-name">
                            <span>Inam</span> Ahmad Baig
                        </h1>

                        <h3 className="hero-role">
                            Java Backend Developer
                        </h3>

                        <p className="hero-desc">
                            {/* Java Backend Developer with interest in Spring Boot and REST APIs.
                            Passionate about building scalable applications and learning new technologies. */}
                            <p>
                                I am a passionate Java Backend Developer interested in building scalable and efficient applications. I have knowledge of Spring Boot, Spring Data JPA, and REST APIs, along with basic understanding of HTML, CSS, and React. I enjoy learning new technologies and improving my skills through practical projects and teamwork.
                            </p>
                        </p>

                        {/* Buttons */}
                        <div className="hero-buttons ">

                           

                            <a className="btn btn-primary px-4 py-2" href="#projects">
                                View Projects
                            </a>

                            <a className="btn btn-outline-light px-4 py-2" href="#contact">
                                Contact Me
                            </a>

                        </div>

                        {/* Icons */}
                        <div className="social-icons mt-4 ">

                            <a href="https://github.com/inamahmadbaig" target="_blank" rel="noreferrer">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/inam-ahmad-baig/" target="_blank" rel="noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="mailto:inamahmadbaig@gmail.com">
                                <i className="bi bi-envelope"></i>
                            </a>

                        </div>

                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="col-lg-6 col-md-12 text-center mt-5 mt-lg-0">

                        <div className="image-box">

                            {/* <img
                                src="public/inam.jpeg"
                                alt="profile"
                                className="profile-img"
                            /> */}
                            <img
                                src="/inam.jpeg"
                                alt="profile"
                                className="profile-img"
                            />

                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
}

export default BodyMain;