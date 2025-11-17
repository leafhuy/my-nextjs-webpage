import Header from "../components/header";
import Footer from "../components/footer";
import ProjectCard from "../components/body/ProjectCard";
import { projects } from "../utils/data/project";
import IntroSection from "../components/body/IntroCard";

export default function Page() {
  return (
    <>
      <Header />
      <main className = "content">
        <IntroSection />
        <section id="projects" className="projects">
          <div className="container">
            <h2>My Projects 💼</h2>
            <div className="project-list">
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
