import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faUser,
	faEnvelope,
	faPaperPlane,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function ContactSection() {
	const [name, setName] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [message, setMessage] = useState<string>("")

	const handleSubmit = async (event: any) => {
		event.preventDefault()

		if (!name || !email || !message) {
			alert("Please fill in all fields.")
			return
		}

		const formData = {
			name,
			email,
			message,
		}

		// Send the form data to our API route
		const response = await fetch("/api/sendEmail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})

		if (response.ok) {
			console.log("Email sent successfully")
      setName("");
      setEmail("");
      setMessage("");
		} else {
			console.log("Failed to send email")
		}
	}

	return (
		<section id="contact" className="min-h-screen">
			<form
				onSubmit={handleSubmit}
				className="space-y-4 max-w-md mx-auto my-10"
			>
				<div>
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
						className="mt-1 block w-full p-2 border-gray-300 shadow-sm rounded-md"
						placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
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
						className="mt-1 block w-full p-2 border-gray-300 shadow-sm rounded-md"
						placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="message" className="flex items-center space-x-2">
						<FontAwesomeIcon icon={faPaperPlane} />
						<span>Message</span>
					</label>
					<textarea
						id="message"
						name="message"
						rows={4}
						required
						className="mt-1 block w-full p-2 border-gray-300 shadow-sm rounded-md"
						placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
				<button
					type="submit"
					className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					Send
				</button>
			</form>
		</section>
	)
}
