'use client'

import Container from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
  centered?: boolean
}

export default function Section({
  children,
  className = '',
  title,
  description,
  centered = false,
}: SectionProps) {
  return (
    <div className={`py-24 sm:py-32 ${className}`}>
      <Container>
        {(title || description) && (
          <div className={`mx-auto max-w-2xl ${centered ? 'text-center' : ''} ${centered ? 'lg:text-center' : 'lg:mx-0'}`}>
            {title && (
              <>
                <h2 className="text-base font-semibold leading-7 text-blue-600">
                  {title}
                </h2>
                {description && (
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {description}
                  </p>
                )}
              </>
            )}
            {!title && description && (
              <p className="text-lg leading-8 text-gray-600">
                {description}
              </p>
            )}
          </div>
        )}
        <div className={`${(title || description) ? 'mt-16 sm:mt-20 lg:mt-24' : ''}`}>
          {children}
        </div>
      </Container>
    </div>
  )
} 