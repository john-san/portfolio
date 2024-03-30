import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintBrush} from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from "@fortawesome/free-brands-svg-icons";


export default function ExpertiseSection() {
  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Expertise</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-full md:w-1/3 lg:w-1/4 text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon={faCode} className="text-4xl" />
            </div>
            <h5 className="font-bold text-lg mb-2">Software Development</h5>
            <p className="text-gray-600">Experienced in JavaScript/TypeScript, Java, Python, C++, and C#.</p>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4 text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon={faPaintBrush} className="text-4xl" />
            </div>
            <h5 className="font-bold text-lg mb-2">Front-end Development</h5>
            <p className="text-gray-600">React.js, Next.js, TailwindCSS, Bootstrap, HTML/CSS/JS - Seasoned veteran in UI/UX development.</p>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4 text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon={faWordpress} className="text-4xl" />
            </div>
            <h5 className="font-bold text-lg mb-2">WordPress Development</h5>
            <p className="text-gray-600">Skilled in creation, maintenance, and performance optimization for WordPress sites.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
