'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useModal } from '@/hooks/useModal'
import BookingModal from '@/components/modals/BookingModal'
import ContactModal from '@/components/modals/ContactModal'

interface ModalsContextType {
  openBookingModal: () => void
  openContactModal: () => void
}

const ModalsContext = createContext<ModalsContextType | undefined>(undefined)

export function useModals() {
  const context = useContext(ModalsContext)
  if (!context) {
    throw new Error('useModals must be used within a ModalsProvider')
  }
  return context
}

interface ModalsProviderProps {
  children: ReactNode
}

export function ModalsProvider({ children }: ModalsProviderProps) {
  const bookingModal = useModal()
  const contactModal = useModal()

  const value = {
    openBookingModal: bookingModal.openModal,
    openContactModal: contactModal.openModal,
  }

  return (
    <ModalsContext.Provider value={value}>
      {children}
      <BookingModal isOpen={bookingModal.isOpen} onClose={bookingModal.closeModal} />
      <ContactModal isOpen={contactModal.isOpen} onClose={contactModal.closeModal} />
    </ModalsContext.Provider>
  )
} 