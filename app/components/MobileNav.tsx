import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { capitalizeFirstLetter } from '../utils/utils';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
  handleNavClick: (event: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const sectionIds = ['home', 'about', 'skills', 'portfolio', 'contact'];

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen, activeSection, handleNavClick }) => {
  if (!isOpen) return null;

  return (
		<>
			<div
				className="fixed inset-0 bg-black bg-opacity-50 z-40"
				onClick={() => setIsOpen(false)}
			></div>
			<div className="fixed top-0 left-0 right-0 transform transition-transform duration-500 translate-y-0 bg-white shadow-md z-50 flex flex-col items-center">
				<div className="w-full flex justify-between items-center px-4 py-3 bg-customNavy">
					<Link
						href="#"
						className="text-xl font-bold text-gray-100 hover:text-gray-300"
						onClick={() => setIsOpen(false)}
					>
						John Nguyen
					</Link>
					<button onClick={() => setIsOpen(false)}>
						<FontAwesomeIcon
							icon={faTimes}
							className="text-xl text-gray-100 hover:text-gray-300"
						/>
					</button>
				</div>
				{sectionIds.map((id, index) => (
					<Link
						key={id}
						href={`#${id}`}
						onClick={(e) => handleNavClick(e, id)}
						className={`py-2 block text-center w-full ${
							activeSection === id
								? "font-bold bg-customNavy text-gray-100 hover:text-gray-300"
								: "text-gray-700 hover:text-gray-900"
						} `}
					>
						{capitalizeFirstLetter(id)}
					</Link>
				))}
			</div>
		</>
	)
};

export default MobileNav;
