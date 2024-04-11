import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function ProfileCard() {
	return (
		<div className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg m-auto">
			<Image
				className="rounded-full object-cover"
				width={128}
				height={128}
				src="/profile-photo.jpg"
				alt="John Nguyen, Software Engineer"
			/>
			<div className="text-center mt-4">
				<h4 className="font-bold text-xl">John Nguyen</h4>
				<p>
					<a href="mailto:npjohn92@gmail.com" className="font-bold text-customNavy hover:text-customNavy-300">npjohn92@gmail.com</a>
				</p>
				<div className="flex justify-center space-x-4 mt-2">
					<a
						href="https://www.linkedin.com/in/npjohn92/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-customNavy hover:text-customNavy-300"
					>
						<FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
					</a>
					<a
						href="https://github.com/john-san"
						target="_blank"
						rel="noopener noreferrer"
						className="text-customNavy hover:text-customNavy-300"
					>
						<FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
					</a>

					<a
						href="/John Nguyen - Software Engineer.pdf" // Update this path to your actual resume file location
						target="_blank"
						rel="noopener noreferrer"
						className="text-customNavy hover:text-customNavy-300"
						download
					>
						<FontAwesomeIcon icon={faFile} className="w-6 h-6" />
					</a>
				</div>
			</div>
		</div>
	)
}
