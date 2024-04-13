"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { capitalizeFirstLetter, smoothScroll } from '../utils/utils';

const sectionIds = ['home', 'about', 'skills', 'portfolio', 'contact'];

const StickyHeader: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    event.preventDefault();
    setIsNavOpen(false); 

    smoothScroll(id);
  };

  return (
		<header className="fixed top-0 z-50 w-full bg-customNavy shadow-md">
			<nav className="max-w-6xl mx-auto px-4 flex justify-between items-center py-3">
				<Link href="#" className="text-xl font-bold text-gray-100 hover:text-gray-300">
					John Nguyen
				</Link>
				<div className="hidden md:flex space-x-4">
					{sectionIds.map((id) => (
						<Link
							key={id}
							href={`#${id}`}
							onClick={(e) => handleNavClick(e, id)}
							className={`py-2 px-4 text-gray-100 hover:text-gray-300 ${
								activeSection === id ? "font-bold" : ""
							}`}
						>
							{capitalizeFirstLetter(id)}
						</Link>
					))}
				</div>
				<button
					className="md:hidden z-50"
					onClick={() => setIsNavOpen(!isNavOpen)}
				>
					<FontAwesomeIcon
						icon={isNavOpen ? faTimes : faBars}
						className="text-xl text-gray-100 hover:text-gray-300"
					/>
				</button>
			</nav>

			<MobileNav
				isOpen={isNavOpen}
				setIsOpen={setIsNavOpen}
				activeSection={activeSection}
				handleNavClick={handleNavClick}
			/>
		</header>
	)
};

export default StickyHeader;

