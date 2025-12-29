
function Experience() {
  return (
  <section id="experience" className="py-20 bg-black bg-gradient-to-b from-gradientStart to-gradientEnd text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-orange-400">Experience</h3>
            <div className="relative border-l-2 border-orange-500 pl-8 space-y-8">
              <div className="timeline-item relative">
                <div className="bg-black bg-gradient-to-r from-gradientStart to-gradientEnd p-6 rounded-lg shadow-lg text-white border-2 border-orange-500">
                  <h4 className="text-lg font-semibold text-orange-400">Summer Intern</h4>
                  <p className="text-gray-300 mb-2">Celebal Technologies</p>
                  <p className="text-sm text-orange-300 mb-3">June 2025 - Aug 2025</p>
                  <ul className="text-gray-300 flex flex-col gap-2">
                    <li>Designed secure real-time chat features with Socket.io, focusing on low-latency messaging and JWT-based session handling.</li>
                    <li>Enhanced backend scalability in Node.js with event-driven architecture, integrating observability for monitoring.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item relative">
                <div className="bg-black bg-gradient-to-r from-gradientStart to-gradientEnd p-6 rounded-lg shadow-lg text-white border-2 border-orange-500">
                  <h4 className="text-lg font-semibold text-orange-400">Software Developer Intern</h4>
                  <p className=" text-gray-300 mb-2">Telepathy Infotech Pvt Ltd</p>
                  <p className="text-sm text-orange-300 mb-3">June 2024 - July 2024</p>

                  <ul className="text-gray-300 flex flex-col gap-2">
                    <li> Worked on SDLC phases: Requirement Gathering, Secure Implementation, Testing, and Deployment. </li>
                    <li>Built API-based workflows with secure integration and client feedback refinement.</li>
                    <li>Applied CI/CD pipelines and debugging practices for efficient delivery.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-orange-400">Education</h3>
            <div className="relative border-l-2 border-orange-500 pl-8 space-y-8">
              <div className="timeline-item relative">
                <div className="bg-black bg-gradient-to-r from-gradientStart to-gradientEnd p-6 rounded-lg shadow-lg text-white border-2 border-orange-500">
                  <h4 className="text-lg font-semibold text-orange-400">Bachelor of Technology in Computer Science and Engineering</h4>
                  <p className="text-gray-300 mb-2">UPES, Dehradun</p>
                  <p className="text-sm text-orange-300 mb-3">2022 - 2026</p>
                  <p className="text-gray-300">
                    <p className="text-gray-350 mb-2 font-bold">CGPA: 8.91</p>
                    Specialized in Full Stack and AI. Graduated with distinction and led multiple technical projects during coursework.
                  </p>
                </div>
              </div>
              <div className="timeline-item relative">
                <div className="bg-black bg-gradient-to-r from-gradientStart to-gradientEnd p-6 rounded-lg shadow-lg text-white border-2 border-orange-500">
                  <h4 className="text-lg font-semibold text-orange-400">CBSE Higher Secondary Education</h4>
                  <p className="text-gray-300 mb-2">Delhi Public School, Chhatarpur</p>
                  <p className="text-sm text-orange-300 mb-3">2021 - 2022</p>
                  <p className="text-gray-350 text-strong font-bold">Percentage: 93%</p>
                </div>
              </div>
              <div className="timeline-item relative">
                <div className="bg-black bg-gradient-to-r from-gradientStart to-gradientEnd p-6 rounded-lg shadow-lg text-white border-2 border-orange-500">
                  <h4 className="text-lg font-semibold text-orange-400">CBSE Secondary Education</h4>
                  <p className="text-gray-300 mb-2">Delhi Public School, Chhatarpur</p>
                  <p className="text-sm text-orange-300 mb-3">2019 - 2020</p>
                  <p className="text-gray-350 font-bold">Percentage: 90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

}
export default Experience;
