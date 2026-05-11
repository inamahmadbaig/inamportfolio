import './About.css'

function About() {
    return (
        <section className="about-section py-5" id="about">

            <div className="container">

                <h2 className="text-center text-white fw-bold mb-5">
                    About Me
                </h2>

                <div className="row align-items-center">

                    {/* Left Text */}
                    <div className="col-lg-6 text-center text-lg-start">

                        <h3 className="text-primary mb-3">
                            Who I Am?
                        </h3>

                        <p className="about-text">
                            I am a passionate Java Backend Developer focused on building
                            scalable and efficient applications. I enjoy working with
                            Spring Boot, REST APIs, and MySQL to create clean and
                            maintainable backend systems.
                        </p>

                        <p className="about-text">
                            I am continuously learning new technologies and improving
                            my problem-solving skills through real-world projects.
                            I enjoy collaborating with teams and building impactful solutions.
                        </p>

                        <p className="about-text">
                            My goal is to become a strong backend engineer and contribute
                            to building high-performance software systems.
                        </p>

                    </div>

                    {/* Right Info Box */}
                    <div className="col-lg-6 mt-4 mt-lg-0">

                        <div className="about-card h-100 p-4">

                            <h5 className='bi bi-house-exclamation-fill '> Location: India</h5>
                            <h5 className='bi bi-gear-wide-connected '> Skills: Java, Spring Boot, MySQL</h5>
                            <h5 className='bi bi-rocket-takeoff '> Interest: Backend Development</h5>
                            <h5 className='bi bi-book-half '> Learning: System Design & APIs</h5>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;