"use client"
import Head from "next/head"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import PortfolioSection from "./components/PortfolioSection"
import ContactSection from "./components/ContactSection"
import { ParallaxBanner } from "react-scroll-parallax"
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
	
	return (
		<div>
			<Head>
				<title>John Nguyen&apos;s Portfolio</title>
			</Head>

			<section id="home">
				<ParallaxBanner
					layers={[{ image: "/images/mtfuji.jpg", speed: -20 }]}
					className="aspect-[1/1] max-h-[350px] sm:aspect-[2/1] sm:max-h-max"
				>
					<div className="relative bottom-[160px] sm:bottom-[150px] md:bottom-[100px] lg:bottom-[75px] xl:bottom-[50px] text-white h-screen flex flex-col justify-center items-center">
						<div className="px-4 text-center">
							<div className="bg-black bg-opacity-50 py-4 px-6 rounded-lg">
								<h1 className="text-4xl font-bold sm:text-5xl mb-2">Hello World!</h1>
								<p className="text-lg sm:text-xl md:text-2xl">
									I&apos;m John, a{" "}
									<Typewriter
										words={["software engineer", "web developer", "problem solver"]}
										loop={1}
										cursor={false}
										cursorStyle="|"
										typeSpeed={70}
										deleteSpeed={50}
										delaySpeed={1500}
									/>
									.
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
	);
}
