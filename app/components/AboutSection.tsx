import ProfileCard from "./ProfileCard";

export default function AboutSection() {

  return (
		<section id="about" className="min-h-screen pt-8 md:pt-16">
			<div className="container mx-auto flex flex-wrap">
				<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center">
					<ProfileCard />
				</div>

				<div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 mt-8 sm:mt-0 px-4">
					<h2 className="text-3xl text-center sm:text-left font-semibold mb-4">
						About John
					</h2>
					<div className="prose md:prose-xl">
						<p>
							I&apos;m John, a Software Engineer that transforms ideas into reality. Specializing in front-end with a strong command of React.js and JavaScript, I excel in crafting intuitive user experiences. My journey now leads me to master back-end technologies, aiming to become a comprehensive full-stack developer.
						</p>
						<p>
							Driven by the quest for growth and impact, I&apos;m on the lookout for roles that challenge me and enhance my skill set. In addition to looking for a new full-time role, I&apos;m also available for freelancing projects. I offer my expertise to elevate your projects with innovative solutions. Let&apos;s make something remarkable together.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}