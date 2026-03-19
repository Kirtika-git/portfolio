function App() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12">

      {/* Navbar */}
      <nav className="flex justify-between items-center py-6">
        <h2 className="text-xl font-bold">Kirtika</h2>

        <div className="space-x-6 text-sm md:text-base">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Contact</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-24 md:mt-32 max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Full-Stack Developer
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
          Hi, I’m Kirtika.
          <br />
          I build modern web experiences.
        </h1>

        <p className="mt-6 text-gray-300 text-base md:text-lg leading-7 max-w-2xl">
          I create responsive interfaces, scalable backend workflows, and
          user-focused digital experiences using technologies like React,
          Node.js, PHP, and cloud tools.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-white text-black px-5 py-3 rounded-lg font-medium">
            View Resume
          </button>

          <button className="border border-white px-5 py-3 rounded-lg font-medium">
            Contact Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-32 max-w-3xl">
        <h2 className="text-2xl font-semibold">About Me</h2>

        <p className="mt-6 text-gray-300 leading-7">
          I’m a Full-Stack Developer with experience building scalable web applications 
          and working with production systems. I have worked on backend services, APIs, 
          and performance optimization in real-world environments.
        </p>

        <p className="mt-4 text-gray-300 leading-7">
          My journey started in India, where I worked with companies like Accenture and 
          GlobalLogic. I then moved to Canada to further grow my technical and personal 
          journey, completing my studies at Douglas College.
        </p>

        <p className="mt-4 text-gray-300 leading-7">
          I enjoy solving complex problems, improving system performance, and building 
          user-focused applications that create real impact.
        </p>
      </section>

      {/* Journey Section */}
      <section className="mt-32 max-w-3xl">
        <h2 className="text-2xl font-semibold">My Journey</h2>

        <p className="mt-6 text-gray-300 leading-7">
          My journey started in India, where I built my foundation in software development 
          and began working in the industry with companies like GlobalLogic and Accenture.
        </p>

        <p className="mt-4 text-gray-300 leading-7">
          Working in enterprise environments helped me understand real-world systems, 
          backend services, and production-level challenges.
        </p>

        <p className="mt-4 text-gray-300 leading-7">
          I then moved to Canada to continue growing both personally and professionally, 
          pursuing my studies at Douglas College while adapting to a completely new environment.
        </p>

        <p className="mt-4 text-gray-300 leading-7">
          This journey has shaped my ability to adapt, learn quickly, and continuously 
          improve as a developer.
        </p>
      </section>
      {/* Skills Section */}
      <section className="mt-32 max-w-5xl">
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
    </div>
  )
}

export default App