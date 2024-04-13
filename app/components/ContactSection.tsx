import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faEnvelope,
	faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DOMPurify from 'dompurify';
import { Fade } from "react-awesome-reveal";


export default function ContactSection() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		if (!name || !email || !message) {
			toast.error("Please fill in all fields.");
			return;
		}

		const attemptToastId = 'attempt-send';
		toast.info("Attempting to send message...", {
        toastId: attemptToastId,
    });

		const sanitizedName = DOMPurify.sanitize(name);
		const sanitizedEmail = DOMPurify.sanitize(email);
		const sanitizedMessage = DOMPurify.sanitize(message);

		const formData = {
			name: sanitizedName,
			email: sanitizedEmail,
			message: sanitizedMessage,
		};

		try {

			const response = await fetch("/api/sendEmail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				toast.dismiss(attemptToastId);
				toast.success("Message sent successfully! Thank you!");
				setName("");
				setEmail("");
				setMessage("");
			} else {
				throw new Error('Failed to send');
			}
		} catch (error) {
			toast.dismiss(attemptToastId);
			toast.error("Failed to send message. Please try again.");
		}
	};

	return (
		<section id="contact" className="bg-gray-100 min-h-max px-4 py-8 md:py-16">
			<ToastContainer />
			<Fade triggerOnce>
				<div className="flex flex-col justify-start items-center">
					<h2 className="section-title text-3xl font-bold text-center mb-8">
						Contact Me
					</h2>
					<form
						onSubmit={handleSubmit}
						className="space-y-4 w-full md:max-w-lg"
					>
						<div className="flex flex-col md:flex-row gap-4">
							<div className="flex-1">
								<label htmlFor="name" className="flex items-center space-x-2">
									<FontAwesomeIcon icon={faUser} />
									<span>Name</span>
								</label>
								<input
									id="name"
									name="name"
									type="text"
									autoComplete="name"
									required
									maxLength={50}
									className="mt-1 block w-full p-2 border-gray-300 shadow-sm rounded-md"
									placeholder="Your name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="flex-1">
								<label htmlFor="email" className="flex items-center space-x-2">
									<FontAwesomeIcon icon={faEnvelope} />
									<span>Email</span>
								</label>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									maxLength={254}
									className="mt-1 block w-full p-2 border-gray-300 shadow-sm rounded-md"
									placeholder="Your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>
						<div>
							<label htmlFor="message" className="flex items-center space-x-2">
								<FontAwesomeIcon icon={faPaperPlane} />
								<span>Message</span>
							</label>
							<div className="relative">
								<textarea
									id="message"
									name="message"
									rows={4}
									required
									maxLength={1000}
									className="mt-1 block w-full p-2 border-gray-300 shadow-sm rounded-md pb-8"
									placeholder="Your message"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								></textarea>
								<div className="absolute bottom-0 right-0 mb-2 mr-6	 text-sm text-gray-600">
									{`${message.length} / 1000`}
								</div>
							</div>
						</div>
						<div className="flex justify-end">
							<button
								type="submit"
								className="w-full md:w-auto py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-customNavy-500 hover:bg-customNavy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customNavy-500 transition-all duration-300"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</Fade>
		</section>
	);
}
