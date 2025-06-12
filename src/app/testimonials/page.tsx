'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/20/solid'
import ImageWithFallback from '@/components/shared/ImageWithFallback'
import Section from '@/components/shared/Section'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    location: 'Boston, MA',
    projectType: 'Interior Home Renovation',
    rating: 5,
    content: 'RNA Pro Painting transformed our home completely. Their attention to detail and professionalism was outstanding. The team was punctual, clean, and respectful of our space. The quality of work exceeded our expectations!',
    image: '/testimonials/sarah.jpg',
    date: 'March 2024',
  },
  {
    name: 'Mike Thompson',
    role: 'Business Owner',
    location: 'Cambridge, MA',
    projectType: 'Commercial Office Space',
    rating: 5,
    content: 'The team at RNA Pro Painting did an amazing job with our office space. They worked efficiently and the results exceeded our expectations. They completed the project on time and within budget, causing minimal disruption to our business operations.',
    image: '/testimonials/mike.jpg',
    date: 'February 2024',
  },
  {
    name: 'Emily Davis',
    role: 'Interior Designer',
    location: 'Brookline, MA',
    projectType: 'Multiple Residential Projects',
    rating: 5,
    content: 'I regularly recommend RNA Pro Painting to my clients. Their work quality and customer service are consistently excellent. They have a great eye for detail and always ensure the perfect finish that my clients expect.',
    image: '/testimonials/emily.jpg',
    date: 'January 2024',
  },
  {
    name: 'Robert Chen',
    role: 'Restaurant Owner',
    location: 'Newton, MA',
    projectType: 'Restaurant Renovation',
    rating: 5,
    content: 'RNA Pro Painting helped us refresh our restaurant during off-hours to minimize business impact. Their team was professional, efficient, and the results were fantastic. Our customers love the new look!',
    image: '/testimonials/robert.jpg',
    date: 'March 2024',
  },
  {
    name: 'Lisa Martinez',
    role: 'Real Estate Agent',
    location: 'Somerville, MA',
    projectType: 'Property Preparation',
    rating: 5,
    content: 'As a realtor, I need reliable painters who can deliver quality work quickly. RNA Pro Painting has never disappointed. They help my listings look their absolute best, which is crucial for quick sales.',
    image: '/testimonials/lisa.jpg',
    date: 'February 2024',
  },
]

export default function Testimonials() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate bg-gradient-to-b from-blue-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Client Testimonials
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't just take our word for it. Here's what our valued clients have to say about their experience working with RNA Pro Painting.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials grid */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-x-4 mb-8">
                  <ImageWithFallback
                    className="h-16 w-16 rounded-full bg-gray-50 object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                  />
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-gray-500 text-xs">{testimonial.location}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-sm leading-6 text-gray-500">
                    Project: {testimonial.projectType}
                  </div>
                  <div className="flex gap-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-gray-900">
                    <p className="mt-4 text-lg font-semibold leading-6">
                      "{testimonial.content}"
                    </p>
                  </blockquote>
                  <div className="mt-6 flex items-center text-sm text-gray-500">
                    <time dateTime={testimonial.date}>{testimonial.date}</time>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
} 