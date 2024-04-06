"use client"
import Head from "next/head"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import PortfolioSection from "./components/PortfolioSection"
import ContactSection from "./components/ContactSection"
import { ParallaxBanner } from "react-scroll-parallax"

export default function Home() {

	return (
		<div>
			<Head>
				<title>John Nguyen&apos;s Portfolio</title>
			</Head>

			<section id="home">
				<ParallaxBanner
					layers={[
						{ image: "/images/mtfuji.jpg", speed: -20 },
					]}
					className="aspect-[2/1]"
				>
					<div className="relative bottom-[200px] sm:bottom-[150px] md:bottom-[100px] lg:bottom-[75px] xl:bottom-[50px] text-white h-screen flex flex-col justify-center items-center">
						<div className="px-4 text-center">

							<div className="bg-black bg-opacity-50 py-4 px-6 rounded-lg">
								<h1 className="text-4xl font-bold sm:text-5xl">Hello World!</h1>
								<p className="text-xl sm:text-2xl">
									I&apos;m John, a Software Engineer.
								</p>
							</div>
						</div>
					</div>
				</ParallaxBanner>
			</section>

			<div>
				<AboutSection />
				<SkillsSection />
				<PortfolioSection />
				<ContactSection />
			</div>
		</div>
	)
}
