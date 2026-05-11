import './Project.css'

function Projects() {
    return (
        <section className="projects-section py-5" id="projects">

            <div className="container">

                <h2 className="text-center fw-bold text-white mb-5">
                    My Projects
                </h2>

                <div className="row g-4">

                    {/* Project 1 */}
                    <div className="col-md-4">
                        <div className="project-card">
                            <h4>Student Management System</h4>
                            <p>Java + Spring Boot + MySQL based system for managing student data.</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="col-md-4">
                        <div className="project-card">
                            <h4>Portfolio Website</h4>
                            <p>Responsive personal portfolio using React and Bootstrap.</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="col-md-4">
                        <div className="project-card">
                            <h4>REST API Backend</h4>
                            <p>Scalable REST APIs built using Spring Boot and Hibernate.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Projects;