import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintBrush} from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from "@fortawesome/free-brands-svg-icons";


export default function SkillsSection() {
  return (
    <section id="skills" className="bg-gray-100 min-h-screen flex flex-col justify-start items-center px-4 pt-8 md:pt-16">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-full md:w-1/3 lg:w-1/4 text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon={faCode} className="text-4xl" />
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-2">Software Development</h3>
            <p className="text-gray-600 prose md:prose-lg">Experienced in JavaScript/TypeScript, Java, Python, C++, and C#.</p>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4 text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon={faPaintBrush} className="text-4xl" />
            </div>
            <h5 className="font-bold text-lg md:text-xl mb-2">Front-end Development</h5>
            <p className="text-gray-600 prose md:prose-lg">React.js, Next.js, TailwindCSS, Bootstrap, HTML/CSS/JS - Seasoned veteran in UI/UX development.</p>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4 text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon={faWordpress} className="text-4xl" />
            </div>
            <h5 className="font-bold text-lg md:text-xl mb-2">WordPress Development</h5>
            <p className="text-gray-600 prose md:prose-lg">Skilled in creation, maintenance, and performance optimization for WordPress sites.</p>
          </div>
        </div>
    </section>
  );
}
