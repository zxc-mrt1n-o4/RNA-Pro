'use client'

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const officeLocations = [
  {
    city: 'Main Office',
    address: '123 Painting Street, Suite 100',
    region: 'Cityville, ST 12345',
    phone: '(555) 123-4567',
    email: 'info@rnapropainting.com',
  },
]

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions about our services? Ready to start your project? Get in touch with us today
              and we'll help you transform your space.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
          {/* Contact information */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Get in touch</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We're here to help with all your painting needs. Reach out to us through any of these channels:
            </p>
            <dl className="mt-8 space-y-6">
              <dt><span className="sr-only">Phone number</span></dt>
              <dd className="flex">
                <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <span className="ml-3 text-base text-gray-600">{officeLocations[0].phone}</span>
              </dd>
              <dt><span className="sr-only">Email</span></dt>
              <dd className="flex">
                <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <span className="ml-3 text-base text-gray-600">{officeLocations[0].email}</span>
              </dd>
              <dt><span className="sr-only">Address</span></dt>
              <dd className="flex">
                <MapPinIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <span className="ml-3 text-base text-gray-600">
                  {officeLocations[0].address}<br />
                  {officeLocations[0].region}
                </span>
              </dd>
            </dl>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Business hours section */}
      <div className="bg-indigo-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Business Hours
            </h2>
            <dl className="mt-8 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex justify-center gap-x-4">
                <dt className="font-semibold">Monday - Friday:</dt>
                <dd>8:00 AM - 6:00 PM</dd>
              </div>
              <div className="flex justify-center gap-x-4">
                <dt className="font-semibold">Saturday:</dt>
                <dd>9:00 AM - 4:00 PM</dd>
              </div>
              <div className="flex justify-center gap-x-4">
                <dt className="font-semibold">Sunday:</dt>
                <dd>Closed</dd>
              </div>
            </dl>
            <p className="mt-6 text-lg text-gray-600">
              Emergency services available 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 