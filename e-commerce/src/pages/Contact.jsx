import React from "react";
function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>

      <div className="mt-8 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 pr-0 lg:pr-16">
          <h3 className="font-semibold text-xl mb-4">Our Location</h3>
          
          <address className="text-gray-600 not-italic mb-8">
            123 Main St<br/>
            Los Angeles, CA 90001
          </address>

          <h3 className="font-semibold text-xl mb-4">Reach Out</h3>
          
          <a href="mailto:info@clothingshop.com" className="text-blue-600 hover:underline mb-4 inline-block">
            info@clothingshop.com
          </a>
          
          <a href="tel:+155501234567" className="text-blue-600 hover:underline mb-4 inline-block">
            +1 555-0123-4567
          </a>
        </div>

        <div className="lg:w-1/2 pl-0 lg:pl-16">
          <h3 className="font-semibold text-xl mb-4">Send Us a Message</h3>
          
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-600 block font-semibold mb-2">Name</label>
              <input id="name" className="border p-2 w-full" type="text"/>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-gray-600 block font-semibold mb-2">Email</label>
              <input id="email" className="border p-2 w-full" type="email"/>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="text-gray-600 block font-semibold mb-2">Message</label>
              <textarea id="message" className="border p-2 w-full h-40"></textarea>
            </div>

            <button className="bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact