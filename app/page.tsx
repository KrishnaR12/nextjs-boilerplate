import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I'm Krishna Ramani</h1>
        <p className="text-xl text-gray-600 mb-6">I'm a Product Manager & Software Engineer who builds impactful digital solutions.</p>
        <a
          href="#portfolio"
          className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
        >
          View My Work
        </a>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full max-w-4xl mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <Image src="/project1.png" alt="Project 1" width={400} height={200} className="rounded" />
            <h3 className="text-xl font-semibold mt-4">Translatica - Video Translation Tool</h3>
            <p className="text-gray-600 mt-2">An AI-powered tool that translates and subtitles videos in real-time.</p>
          </div>
          {/* Project 2 */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <Image src="/project2.png" alt="Project 2" width={400} height={200} className="rounded" />
            <h3 className="text-xl font-semibold mt-4">Visionarium - Meeting Management App</h3>
            <p className="text-gray-600 mt-2">A web-based app that streamlines student-teacher meetings with automated scheduling.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Get in Touch</h2>
        <p className="text-xl text-gray-600 mb-4">Feel free to reach out for collaborations or just a friendly chat.</p>
        <a
          href="mailto:krishna@example.com"
          className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-colors"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}
