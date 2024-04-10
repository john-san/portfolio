"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const sectionIds = ['home', 'about', 'skills', 'portfolio', 'contact'];

const StickyHeader = () => {
    const [activeSection, setActiveSection] = useState<string>('');

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

    function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, id: string): void {
        event.preventDefault(); 
        
        const section = document.getElementById(id);
        const header = document.querySelector('header'); 
        
        if (section && header) {
            const headerHeight = header.offsetHeight;
            const yOffset = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
    }



    return (
        <header className="top-0 z-50 w-full bg-white shadow-md sticky">
            <nav className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <a href="#" className="text-xl font-bold">John Nguyen</a>
                    <div className="hidden md:flex space-x-4">
                        {sectionIds.map((id) => (
                            <Link
                                key={id}
                                href={`#${id}`}
                                onClick={(e) => handleNavClick(e, id)}
                                className={`py-2 px-4 text-gray-700 hover:text-gray-900 ${activeSection === id ? 'text-blue-500 font-bold' : ''}`}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default StickyHeader;
