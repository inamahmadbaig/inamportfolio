import './Skills.css'

function Skills() {
    return (
        <section className="skills-section py-5" id="skills">

            <div className="container text-center">

                <h2 className="mb-5 fw-bold text-white">My Skills</h2>

                <div className="row g-4">

                    <div className="col-md-3 col-6">
                        <div className="skill-box">Java</div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="skill-box">Spring Boot</div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="skill-box">REST API</div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="skill-box">MySQL</div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="skill-box">HTML</div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="skill-box">CSS</div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="skill-box">React</div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="skill-box">Git</div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;