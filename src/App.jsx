function App() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 lg:px-32">

      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold">KS</h2>

        <div className="space-x-6 text-sm md:text-base">
          <a href="#" className="cursor-pointer">Home</a>
          <a href="#about" className="cursor-pointer">About</a>
          <a href="#contact" className="cursor-pointer">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
    <section className="mt-24 md:mt-32 max-w-4xl mx-auto">

  <p className="text-sm uppercase tracking-widest text-gray-400">
    Full-Stack Developer
  </p>

  <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight">
    Building modern
    <br />
    <span className="text-gray-400">web experiences</span>
  </h1>

  <p className="mt-6 text-gray-300 text-lg leading-8 max-w-2xl">
    I design and develop scalable web applications with a focus on performance,
    user experience, and clean architecture using technologies like React,
    Node.js, and cloud platforms.
  </p>

  <div className="mt-10 flex gap-4">

    <a
      href="/SharmaKirtikaResume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
    >
      View Resume
    </a>

    <a
      href="#contact"
      className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
    >
      Contact Me
    </a>

  </div>

</section>

      {/* About Section */}
      <section id="about" className="mt-32 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">About Me</h2>

        <p className="mt-6 text-gray-300 leading-7">
          I’m a Full-Stack Developer with experience building scalable web
          applications and working with production systems. I have worked on
          backend services, APIs, and performance optimization in real-world
          environments.
        </p>

        <p className="mt-4 text-gray-300 leading-7">
          My journey started in India, where I worked with companies like
          Accenture and GlobalLogic. I then moved to Canada to further grow my
          technical and personal journey, completing my studies at Douglas
          College.
        </p>

        <p className="mt-4 text-gray-300 leading-7">
          I enjoy solving complex problems, improving system performance, and
          building user-focused applications that create real impact.
        </p>
      </section>

      {/* Journey Section */}
      <section className="mt-32 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">My Journey</h2>

        <p className="mt-6 text-gray-300 leading-7">
          My journey started in India, where I built my foundation in software
          development and began working in the industry with companies like
          GlobalLogic and Accenture.
        </p>

        <p className="mt-4 text-gray-300 leading-7">
          Working in enterprise environments helped me understand real-world
          systems, backend services, and production-level challenges.
        </p>

        <p className="mt-4 text-gray-300 leading-7">
          I then moved to Canada to continue growing both personally and
          professionally, pursuing my studies at Douglas College while adapting
          to a completely new environment.
        </p>

        <p className="mt-4 text-gray-300 leading-7">
          This journey has shaped my ability to adapt, learn quickly, and
          continuously improve as a developer.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mt-32 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">Skills</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-xl font-medium">Frontend</h3>
            <p className="mt-4 text-gray-300 leading-7">
              React.js, HTML5, CSS3, Bootstrap
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-xl font-medium">Backend</h3>
            <p className="mt-4 text-gray-300 leading-7">
              Node.js, PHP, Laravel, REST APIs
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-xl font-medium">Databases</h3>
            <p className="mt-4 text-gray-300 leading-7">
              MySQL, MongoDB, SQL
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-xl font-medium">Cloud & DevOps</h3>
            <p className="mt-4 text-gray-300 leading-7">
              Azure, GCP, Docker, Kubernetes
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-xl font-medium">Tools</h3>
            <p className="mt-4 text-gray-300 leading-7">
              Git, GitHub, Postman, WordPress, SEMrush
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-xl font-medium">Languages</h3>
            <p className="mt-4 text-gray-300 leading-7">
              JavaScript, PHP, Java, C#, SQL
            </p>
          </div>
        </div>
      </section>

   {/* Contact Section */}
<section id="contact" className="mt-32 max-w-5xl mx-auto">
  <h2 className="text-2xl font-semibold">Contact</h2>

  <div className="mt-8 grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl border border-gray-800 p-6 hover:border-gray-600 transition">
      <p className="text-sm text-gray-400">Name</p>
      <p className="mt-2 text-lg font-medium text-white">Kirtika Sharma</p>
    </div>

    <div className="rounded-2xl border border-gray-800 p-6 hover:border-gray-600 transition">
      <p className="text-sm text-gray-400">Email</p>
      <a
        href="mailto:ksharmawork12@gmail.com"
        className="mt-2 block text-lg font-medium text-white hover:underline"
      >
        ksharmawork12@gmail.com
      </a>
    </div>

    <div className="rounded-2xl border border-gray-800 p-6 hover:border-gray-600 transition">
      <p className="text-sm text-gray-400">Phone</p>
      <a
        href="tel:+16723550809"
        className="mt-2 block text-lg font-medium text-white hover:underline"
      >
        +1 672-355-0809
      </a>
    </div>

    <div className="rounded-2xl border border-gray-800 p-6 hover:border-gray-600 transition">
      <p className="text-sm text-gray-400">LinkedIn</p>
      <a
        href="https://www.linkedin.com/in/kirtika-sharma-8537021b0"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block text-lg font-medium text-white hover:underline"
      >
        View LinkedIn Profile
      </a>
    </div>
  </div>
</section>
{/* Footer */}
<footer className="mt-32 border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
  © {new Date().getFullYear()} Kirtika Sharma. All rights reserved.
</footer>
    </div>
    
  )
}

export default App