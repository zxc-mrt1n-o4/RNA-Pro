import { createClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Database types
export type Booking = {
  id: number
  created_at: string
  first_name: string
  last_name: string
  email: string
  phone: string
  service_type: string
  preferred_date: string
  message: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
}

export type Message = {
  id: number
  created_at: string
  conversation_id: number
  sender_type: 'customer' | 'admin'
  content: string
}

export type Conversation = {
  id: number
  created_at: string
  customer_id: number
  last_message: string
  last_message_at: string
  unread_count: number
} 