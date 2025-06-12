'use client'

import Image from 'next/image'

const projects = [
  {
    title: 'Modern Home Interior',
    description: 'Complete interior painting with a modern color palette',
    category: 'Residential',
    imageUrl: '/portfolio/modern-home.jpg',
    details: 'Two-story home, 4 bedrooms, open concept living area',
    duration: '1 week',
  },
  {
    title: 'Victorian Restoration',
    description: 'Historic home exterior restoration and painting',
    category: 'Residential',
    imageUrl: '/portfolio/victorian.jpg',
    details: 'Detailed trim work, custom color matching',
    duration: '2 weeks',
  },
  {
    title: 'Corporate Office',
    description: 'Modern office space with accent walls',
    category: 'Commercial',
    imageUrl: '/portfolio/office.jpg',
    details: '10,000 sq ft office space, brand color integration',
    duration: '1 week',
  },
  {
    title: 'Retail Store',
    description: 'Complete interior and exterior painting',
    category: 'Commercial',
    imageUrl: '/portfolio/retail.jpg',
    details: 'High-traffic retail environment, after-hours work',
    duration: '5 days',
  },
  {
    title: 'Luxury Condo',
    description: 'High-end residential painting project',
    category: 'Residential',
    imageUrl: '/portfolio/condo.jpg',
    details: 'Premium finishes, custom color consultation',
    duration: '3 days',
  },
  {
    title: 'Restaurant Renovation',
    description: 'Complete restaurant makeover',
    category: 'Commercial',
    imageUrl: '/portfolio/restaurant.jpg',
    details: 'Kitchen, dining area, and exterior painting',
    duration: '1 week',
  },
]

export default function Portfolio() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Work</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Browse through our portfolio of completed projects. Each project showcases our commitment
              to quality, attention to detail, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col items-start justify-between rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 overflow-hidden"
              >
                <div className="relative w-full">
                  <div className="aspect-[16/9] w-full bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-indigo-600 opacity-90" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-md bg-white/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="max-w-xl p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">Duration: {project.duration}</time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{project.description}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">{project.details}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Let us help you transform your space with our professional painting services.
              Contact us today for a free consultation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/book"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 