"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { capitalizeFirstLetter, smoothScroll } from "../utils/utils";

const Footer: React.FC = () => {
  const handleFooterLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    event.preventDefault();
    smoothScroll(id);
  };
  return (
		<footer className="bg-customNavy text-white p-4 flex flex-col md:flex-row-reverse md:justify-around">
			{/* Contact */}
			<div className="mb-4 flex flex-col items-center">
				<h4 className="text-lg font-bold mb-2 text-center">Contact</h4>
				<div className="flex flex-row gap-8 md:flex-col items-start md:gap-2">
					<a
						href="mailto:john@webdevjohn.com"
						className="flex items-center hover:text-gray-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faEnvelope} className="mr-2" />
						Email
					</a>
					<a
						href="https://www.linkedin.com/in/npjohn92/"
						className="flex items-center hover:text-gray-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} className="mr-2" />
						LinkedIn
					</a>
					<a
						href="https://github.com/john-san"
						className="flex items-center hover:text-gray-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} className="mr-2" />
						Github
					</a>
				</div>
			</div>
			{/* Navigation */}
			<div className="mb-4 flex flex-col items-center">
				<h4 className="text-lg font-bold mb-2 text-center">Navigation</h4>
				<div className="flex flex-wrap gap-3 md:flex-col items-start md:gap-2">
					{["home", "about", "skills", "portfolio", "contact"].map((id) => (
						<a
							href={`#${id}`}
							key={id}
							onClick={(e) => handleFooterLinkClick(e, id)}
							className="hover:text-gray-300"
						>
							{capitalizeFirstLetter(id)}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;

