'use client'

import ImageWithFallback from '@/components/shared/ImageWithFallback'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import Button from '@/components/shared/Button'

const team = [
  {
    name: 'Robert Anderson',
    role: 'Founder & Lead Painter',
    image: '/team/placeholder.jpg',
    bio: 'With over 15 years of experience in professional painting, Robert founded RNA Pro Painting with a vision to deliver exceptional quality and service to every client.',
  },
  {
    name: 'Nancy Williams',
    role: 'Project Manager',
    image: '/team/placeholder.jpg',
    bio: 'Nancy ensures every project runs smoothly from start to finish, coordinating our team and maintaining clear communication with clients.',
  },
  {
    name: 'Alex Thompson',
    role: 'Senior Painter',
    image: '/team/placeholder.jpg',
    bio: 'Alex specializes in custom finishes and detailed work, bringing creativity and precision to every project.',
  },
]

const values = [
  {
    title: 'Quality First',
    description: 'We never compromise on quality, using only premium materials and proven techniques.',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our top priority. We work closely with you to exceed expectations.',
  },
  {
    title: 'Professional Excellence',
    description: 'Our team maintains the highest standards of professionalism and craftsmanship.',
  },
  {
    title: 'Reliability',
    description: 'We honor our commitments, showing up on time and completing projects as promised.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <Section className="bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            About RNA Pro Painting
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0">
            <p className="text-lg leading-8 text-gray-600">
              At RNA Pro Painting, we're more than just painters – we're craftsmen dedicated to transforming spaces and exceeding expectations. With years of experience and a commitment to quality, we've built a reputation for excellence in residential and commercial painting services.
            </p>
            <div className="mt-10">
              <Button href="/contact">Get in Touch</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Values section */}
      <Section
        title="Our Values"
        description="The principles that guide our work"
        className="bg-white"
        centered
      >
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col">
              <dt className="text-lg font-semibold leading-7 text-gray-900">
                {value.title}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{value.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Team section */}
      <Section
        title="Our Team"
        description="Meet the experts behind our success"
        className="bg-gray-50"
        centered
      >
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <article key={person.name} className="flex flex-col items-start">
              <div className="relative w-full">
                <ImageWithFallback
                  src={person.image}
                  alt={person.name}
                  width={400}
                  height={400}
                  className="aspect-[3/2] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {person.name}
                  </h3>
                </div>
                <div className="mt-2">
                  <p className="text-sm leading-6 text-blue-600">{person.role}</p>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA section */}
      <Section className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your space?
              <br />
              Let's start your project today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Contact us for a free consultation and quote. We'll help you bring your vision to life with our professional painting services.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/book" variant="outline" className="bg-white hover:bg-blue-50">
                Book Now
              </Button>
              <Button href="/contact" variant="outline" className="bg-white hover:bg-blue-50">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
} 