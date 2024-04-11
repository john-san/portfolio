import React from 'react';
import Image from 'next/image';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const projects = [
  {
    title: "Polish Her Not! - Nail Salon Website",
    imageUrl: "/images/portfolio/polish_her_not.jpg",
    projectUrl: "https://polishhernotnailspa.com/",
  },
  {
    title: "Iggy's Kicks - WordPress WooCommerce Store",
    imageUrl: "/images/portfolio/iggys_kicks.jpg",
    projectUrl: "https://iggyskicks.com/",
  },
  {
    title: "React Gallery App",
    imageUrl: "/images/portfolio/react_gallery_app.jpg",
    projectUrl: "https://john-nguyen-react-gallery.netlify.com/",
  },
  {
    title: "Phrase Guessing Game",
    imageUrl: "/images/portfolio/phrase_guessing_game.jpg",
    projectUrl: "https://john-san.github.io/oop-game-show-app/",
  },
  {
    title: "Pomodoro Clock",
    imageUrl: "/images/portfolio/pomodoro.jpg",
    projectUrl: "https://john-san.github.io/pomodoro/",
  },
  {
    title: "Tic-Tac-Toe",
    imageUrl: "/images/portfolio/tic-tac-toe.jpg",
    projectUrl: "https://john-san.github.io/tic-tac-toe/",
  },
  {
    title: "Etch-a-Sketch",
    imageUrl: "/images/portfolio/etch-a-sketch.jpg",
    projectUrl: "https://john-san.github.io/etch-a-sketch2/",
  },
  {
    title: "Drum Machine",
    imageUrl: "/images/portfolio/drum_machine.jpg",
    projectUrl: "https://priceless-hypatia-0131cd.netlify.app/",
  },
  {
    title: "Calculator",
    imageUrl: "/images/portfolio/calculator.jpg",
    projectUrl: "https://john-san.github.io/calculator/",
  },
  {
    title: "Markdown Previewer",
    imageUrl: "/images/portfolio/markdown_previewer.jpg",
    projectUrl: "https://stoic-nobel-207e5b.netlify.app/",
  },
  {
    title: "Simon Says",
    imageUrl: "/images/portfolio/simon_says.jpg",
    projectUrl: "https://john-san.github.io/simon-says/",
  },
  {
    title: "Front-end Library",
    imageUrl: "/images/portfolio/fe_library.jpg",
    projectUrl: "https://john-san.github.io/library/",
  },
  {
    title: "Rock Paper Scissors",
    imageUrl: "/images/portfolio/rock-paper-scissors.jpg",
    projectUrl: "https://john-san.github.io/rock-paper-scissors2/",
  },
  {
    title: "Quote Machine",
    imageUrl: "/images/portfolio/quote_machine.jpg",
    projectUrl: "https://eloquent-pasteur-6b195a.netlify.app/",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio section py-12 px-4 md:px-8 min-h-screen">
      <h2 className="section-title text-3xl font-bold text-center mb-8">Portfolio</h2>
      <div className="portfolio__container bd-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="portfolio__img group relative">
            <Image src={project.imageUrl} alt={project.title} width={600} height={400} />
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
