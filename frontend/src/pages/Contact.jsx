import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className=" container mx-auto px-4 py-16">
      <div className="text-sm text-gray-500 mb-6">
        Home <span className="mx-2">/</span> <span className="text-gray-900 font-medium">Contact</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Info Box */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          {/* Call Us */}
          <div className="flex items-start gap-4">
            <div className="text-red-600 bg-red-100 p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Call To Us</h3>
              <p className="text-gray-500 text-sm">We are available 24/7, 7 days a week.</p>
              <p className="text-gray-900 font-medium mt-2">Phone: +8801611112222</p>
            </div>
          </div>

          <hr />

          {/* Write To Us */}
          <div className="flex items-start gap-4">
            <div className="text-red-600 bg-red-100 p-3 rounded-full">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Write To Us</h3>
              <p className="text-gray-500 text-sm">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-gray-900 font-medium mt-2">Emails: customer@exclusive.com</p>
              <p className="text-gray-900 font-medium">support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="border border-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-red-400"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="border border-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-red-400"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="border border-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-red-400"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border border-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-red-400 resize-none"
            ></textarea>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact