import React from "react";

const Contact = () => (
  <section id="contact" className="py-20 bg-black bg-gradient-to-b from-gradientStart to-gradientEnd text-white">
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
            <h3 className="text-2xl font-semibold mb-8 text-orange-400">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <i data-lucide="mail" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-white">dubey.rishi66.rd@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-orange-400 p-3 rounded-lg">
                  <i data-lucide="map-pin" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-white">Chhatarpur, Madhya Pradesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-orange-300 p-3 rounded-lg">
                  <i data-lucide="phone" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Available For</h4>
                  <p className="text-white">Freelance Projects</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Rishidubey15/" target="_blank" rel="noopener noreferrer" className="bg-orange-500 p-3 rounded-lg hover:bg-orange-600 transition-colors">
                  <i data-lucide="github" className="w-5 h-5 text-white"></i>
                </a>
                <a href="https://www.linkedin.com/in/rishi-dubey-703533217/" target="_blank" rel="noopener noreferrer" className="bg-orange-400 p-3 rounded-lg hover:bg-orange-500 transition-colors">
                  <i data-lucide="linkedin" className="w-5 h-5 text-white"></i>
                </a>
                <a href="https://leetcode.com/u/rishi_dubey15/" target="_blank" rel="noopener noreferrer" className="bg-orange-300 p-3 rounded-lg hover:bg-orange-400 transition-colors">
                  <i data-lucide="code" className="w-5 h-5 text-white"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <form id="contact-form" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-black text-white transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-black text-white transition-colors" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">Subject</label>
                <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-black text-white transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-black text-white transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
