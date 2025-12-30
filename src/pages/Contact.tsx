import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BriefcaseBusiness, Mail, MapPinned } from "lucide-react";

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    if (!form.current) return;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-black bg-gradient-to-b from-gradientStart to-gradientEnd text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          <p className="text-lg text-white mt-6">
            Let's discuss your project or just say hello!
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-orange-400">
                Let's Connect
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-white">dubey.rishi66.rd@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-400 p-3 rounded-lg">
                    <MapPinned />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-white">Chhatarpur, Madhya Pradesh</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-300 p-3 rounded-lg">
                    <BriefcaseBusiness />
                  </div>
                  <div>
                    <h4 className="font-semibold">Available For</h4>
                    <p className="text-white">
                      Freelance Projects, Job and Internship
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Rishidubey15/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-400 p-1 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <img src="../icons/github.png" alt="" className="w-8 h-8" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rishi-dubey-703533217/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-400 p-1 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <img
                      src="../icons/linkedin.png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </a>

                  <a
                    href="https://leetcode.com/u/rishi_dubey15/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-400 p-1 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <img
                      src="../icons/leetcode.png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/rishi_dubey15/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-400 p-1 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <img
                      src="../icons/instagram.png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </a>

                  <a
                    href="https://x.com/rishidubey015?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-400 p-1 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <img src="../icons/X.png" alt="" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <form
                id="contact-form"
                className="space-y-6"
                ref={form}
                onSubmit={sendEmail}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-black text-white transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-black text-white transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-black text-white transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-black text-white transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
                {status && (
                  <div className="mt-4 text-center text-orange-400 font-semibold">
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
