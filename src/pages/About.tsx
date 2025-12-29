function About() {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-black bg-gradient-to-r from-gradientStart to-gradientEnd rounded-2xl p-8 md:p-12 text-white shadow-lg">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="./My photo.jpg"
                    alt="Rishi Dubey"
                    className="rounded-2xl w-full max-w-sm mx-auto md:mx-0"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                    Hello! I'm Rishi
                  </h3>
                  <p className="text-lg leading-relaxed mb-6">
                    I'm a passionate MERN Stack Developer based in Chhatarpur,
                    Madhya Pradesh. I love creating dynamic, user-friendly web
                    applications that solve real-world problems.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    With expertise in MongoDB, Express.js, React.js, and
                    Node.js, I build full-stack applications that are both
                    performant and scalable. I'm constantly learning new
                    technologies and best practices in web development.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">Problem Solver</span>
                    {/* <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm">Leader</span> */}
                    <span className="bg-orange-300 text-white px-3 py-1 rounded-full text-sm">Continuous Learner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
