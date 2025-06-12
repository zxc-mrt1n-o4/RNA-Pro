'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/shared/Button'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import { StarIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import ImageWithFallback from '@/components/shared/ImageWithFallback'

const features = [
  {
    name: 'Interior Painting',
    description: 'Transform your indoor spaces with our professional interior painting services.',
    icon: '🏠',
  },
  {
    name: 'Exterior Painting',
    description: "Protect and beautify your home's exterior with our expert painting solutions.",
    icon: '🏡',
  },
  {
    name: 'Commercial Services',
    description: 'Professional painting services for offices, retail spaces, and commercial buildings.',
    icon: '🏢',
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored painting solutions to match your specific needs and preferences.',
    icon: '🎨',
  },
]

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

const whyChooseUs = [
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind',
    icon: '✓',
  },
  {
    title: 'Expert Team',
    description: 'Skilled professionals with years of experience',
    icon: '✓',
  },
  {
    title: 'Quality Materials',
    description: 'We use only premium paints and materials',
    icon: '✓',
  },
  {
    title: 'Satisfaction Guaranteed',
    description: '100% satisfaction guarantee on all our work',
    icon: '✓',
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Container>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Professional Painting Services for Your Home
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Transform your space with our expert painting services. We deliver quality, reliability, and attention to detail in every project.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button href="/book">Book Now</Button>
                <Button href="/portfolio" variant="outline">
                  View Our Work <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Features section */}
      <Section
        title="Our Services"
        description="Everything you need for a perfect paint job"
        className="bg-white"
        centered
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive range of painting services to meet all your needs, from residential to commercial projects.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-2xl text-white">{feature.icon}</span>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                <div className="mt-4">
                  <Button
                    href={`/services#${feature.name.toLowerCase().replace(/\s+/g, '-')}`}
                    variant="outline"
                    size="sm"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Button>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Why Choose Us section */}
      <Section
        title="Why Choose Us"
        description="The Professional Choice for Quality Painting"
        className="bg-gray-50"
        centered
      >
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="relative pl-12">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
                  <span className="text-lg text-white">{item.icon}</span>
                </div>
                {item.title}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{item.description}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-16 text-center">
          <Button href="/contact">Get Your Free Quote</Button>
        </div>
      </Section>

      {/* Testimonials section */}
      <Section
        title="Testimonials"
        description="What Our Clients Say"
        className="bg-white"
        centered
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <motion.article
                key={testimonial.name}
                className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
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
          <div className="mt-16 flex justify-center">
            <Button
              href="/testimonials"
              variant="outline"
              size="lg"
            >
              View More Testimonials
              <span aria-hidden="true" className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
} 