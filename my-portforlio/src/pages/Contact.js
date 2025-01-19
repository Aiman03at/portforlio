import { useEffect, useState } from 'react';

export default function Contact() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      const rect = contactSection.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run it on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
    >
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
          className={`bg-gray-900 flex flex-wrap py-12 px-8 rounded-lg shadow-lg transform ${inView ? 'translate-y-0' : 'translate-y-10'} transition-all duration-1000`}
        >
          <div className="lg:w-1/2 px-6 mb-8 lg:mb-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-lg">ADDRESS</h2>
            <p className="mt-4 text-xl text-gray-300">Ottawa, Canada.</p>
          </div>
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-white tracking-widest text-lg">EMAIL</h2>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aiman03at@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 leading-relaxed text-xl"
            >
              aiman03at@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-lg mt-8">PHONE</h2>
            <p className="leading-relaxed text-xl text-gray-300">+1 343 558 3323</p>
          </div>
        </div>
      </div>
    </section>
  );
}
