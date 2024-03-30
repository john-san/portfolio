import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Form validation logic can be more complex here
    if (!event.target.email.value || !event.target.name.value || !event.target.message.value) {
      alert('Please fill in all fields.');
      return;
    }

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    // Send the form data to our API route
    // Same fetch logic as before
  };

  return (
    <section className='min-h-screen'>
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto my-10">
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
  );
}
