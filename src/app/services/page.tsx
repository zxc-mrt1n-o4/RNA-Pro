'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useModals } from '@/providers/ModalsProvider'
import { CheckIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const services = [
  {
    name: 'Interior Painting',
    description: 'Professional interior painting services for homes and offices',
    features: [
      'Wall preparation and repairs',
      'Premium paint selection',
      'Color consultation',
      'Trim and detail work',
      'Clean and efficient process',
      'Two-year warranty',
    ],
    image: '/interior-painting.jpg',
    price: 'Starting at $299/room',
  },
  {
    name: 'Exterior Painting',
    description: 'Complete exterior painting solutions for your property',
    features: [
      'Surface preparation',
      'Weather-resistant paints',
      'Siding and trim painting',
      'Deck and fence staining',
      'Pressure washing',
      'Five-year warranty',
    ],
    image: '/exterior-painting.jpg',
    price: 'Starting at $1,499',
  },
  {
    name: 'Commercial Painting',
    description: 'Large-scale painting services for businesses',
    features: [
      'Minimal business disruption',
      'After-hours scheduling',
      'Industrial-grade materials',
      'Safety compliance',
      'Project management',
      'Custom solutions',
    ],
    image: '/commercial-painting.jpg',
    price: 'Custom quote',
  },
]

export default function Services() {
  const { openBookingModal } = useModals()

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a comprehensive range of painting services to meet all your needs. From residential
              to commercial projects, our team of experienced professionals delivers exceptional results.
            </p>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 0.27,
                    delay: index * 0.067,
                  }
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.067 }
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-gray-200 overflow-hidden"
              >
                {/* Decorative gradient background that slides in */}
                <motion.div
                  initial={{ opacity: 0, x: '-100%' }}
                  whileInView={{
                    opacity: 0.05,
                    x: 0,
                    transition: {
                      duration: 0.27,
                      delay: 0.1 + index * 0.067,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500"
                />

                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-indigo-700 opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h3
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.17,
                          delay: 0.13 + index * 0.067
                        }
                      }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-white"
                    >
                      {service.name}
                    </motion.h3>
                  </div>
                </div>

                <div className="relative p-8">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.17,
                        delay: 0.17 + index * 0.067
                      }
                    }}
                    viewport={{ once: true }}
                    className="text-base text-gray-600"
                  >
                    {service.description}
                  </motion.p>

                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.17,
                        delay: 0.2 + index * 0.067
                      }
                    }}
                    viewport={{ once: true }}
                    className="mt-6 space-y-4"
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.1,
                            delay: 0.23 + index * 0.067 + featureIndex * 0.033
                          }
                        }}
                        viewport={{ once: true }}
                        className="flex gap-x-3"
                      >
                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                        <span className="text-sm leading-6 text-gray-600">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        duration: 0.2,
                        delay: 0.33 + index * 0.067,
                        bounce: 0.3
                      }
                    }}
                    viewport={{ once: true }}
                    className="mt-8"
                  >
                    <motion.div
                      initial={{ scale: 0.95 }}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-full bg-indigo-600/10 px-4 py-2 text-center text-sm font-semibold text-indigo-600"
                    >
                      {service.price}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to transform your space?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Contact us today for a free consultation and estimate. We'll help you choose the perfect colors
              and finishes for your project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/book"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 