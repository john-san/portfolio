"use client"
import Head from "next/head"
import { useEffect, useState } from "react"
import ExpertiseSection from "./components/ExpertiseSection"
import BioSection from "./components/BioSection"
import ContactForm from "./components/ContactForm"

export default function Home() {
	const [offsetY, setOffsetY] = useState<number>(0)

	function handleScroll(): void {
		setOffsetY(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div>
			<Head>
				<title>My Portfolio</title>
			</Head>

			<section className="hero-banner">
				<div className="relative bg-blue-500 text-white h-screen flex flex-col justify-center items-center">
					<div className="px-4 text-center">
						<h1 className="text-4xl font-bold sm:text-5xl">Hello World,</h1>
						<p className="text-xl sm:text-2xl">
							I&apos;m John, a Software Engineer.
						</p>
					</div>
				</div>
			</section>

			<div style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
				<BioSection />
				<ExpertiseSection />
        <ContactForm />
			</div>
		</div>
	)
}
