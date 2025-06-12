'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { PhotoIcon } from '@heroicons/react/24/outline'

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackClassName?: string
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackClassName = '',
  className = '',
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 ${fallbackClassName || className}`}
        style={{ width: props.width, height: props.height }}
      >
        <div className="flex flex-col items-center justify-center text-gray-400">
          <PhotoIcon className="w-8 h-8" />
          <span className="text-sm mt-2">{alt || 'Image not found'}</span>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  )
} 