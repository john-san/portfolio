import ProfileCard from "./ProfileCard";

export default function AboutSection() {

  return (
				<section id="about" className="min-h-screen">
					<div className="container mx-auto flex flex-wrap py-4">
						{/* Profile Card */}
						<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center">
							<ProfileCard />
						</div>

						{/* Bio Narrative */}
						<div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 mt-8 sm:mt-0">
							<h3 className="text-3xl text-center sm:text-left font-semibold mb-4">
								Who am I?
							</h3>
							<p className="text-lg">
								Hello! I&apos;m John Nguyen, a Software Engineer based in{" "}
								<span className="font-semibold">Sacramento, California</span>{" "}
								who&apos;s experienced in taking full-stack applications &
								websites from scratch to production.
							</p>
							{/* Additional paragraphs */}
						</div>
					</div>
				</section>
  )
}