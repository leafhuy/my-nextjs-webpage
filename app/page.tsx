"use client"
import Header from "./components/header";
import Footer from "./components/footer";
import ProjectCard from "./components/body/ProjectCard";
import { projects } from "../utils/data/project";
import Contact from "./components/body/Contact";
import IntroCard from "./components/body/IntroCard";
import Image from "next/image";
export default function Page() {
  return (
    <>
    
      <Header />
      <main className = "content">
        <IntroCard/>
        <section id="projects">
      <div className="container">
        <h2>My Projects 💼</h2>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
        <Contact/>
      </main>
      <Footer />
    </>
  );
}

