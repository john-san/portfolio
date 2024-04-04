import React from 'react';
import Image from 'next/image';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const projects = [
  {
    title: "Test Project",
    imageUrl: "https://placehold.co/600x400/",
    projectUrl: "https://google.com/",
  },
  {
    title: "Test Project",
    imageUrl: "https://placehold.co/600x400/",
    projectUrl: "https://google.com/",
  },
  {
    title: "Test Project",
    imageUrl: "https://placehold.co/600x400/",
    projectUrl: "https://google.com/",
  },
  {
    title: "Test Project",
    imageUrl: "https://placehold.co/600x400/",
    projectUrl: "https://google.com/",
  },
  {
    title: "Test Project",
    imageUrl: "https://placehold.co/600x400/",
    projectUrl: "https://google.com/",
  },
  {
    title: "Test Project",
    imageUrl: "https://placehold.co/600x400/",
    projectUrl: "https://google.com/",
  },
];

export default function PortfolioSection() {
  return (
    <section className="portfolio section py-12 px-4 md:px-8 min-h-screen" id="portfolio">
      <h2 className="section-title text-3xl font-bold text-center mb-8">Portfolio</h2>
      <div className="portfolio__container bd-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="portfolio__img group relative">
            <Image src={project.imageUrl} alt={project.title} width={600} height={400} className="transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
            <div className="portfolio-item-details text-left absolute bottom-0 left-0 bg-black bg-opacity-75 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <h3 className="portfolio-item-headline title text-white">{project.title}</h3>
              <div className="show-project">
                <div className="show-project-link text-blue-500">
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">Show project <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
