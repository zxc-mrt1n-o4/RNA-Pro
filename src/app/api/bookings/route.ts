import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import type { Booking } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const booking: Omit<Booking, 'id' | 'created_at'> = {
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      phone: body.phone,
      service_type: body.service_type,
      preferred_date: body.preferred_date,
      message: body.message,
      status: 'pending',
    }

    const { data, error } = await supabase
      .from('bookings')
      .insert([booking])
      .select()

    if (error) {
      return NextResponse.json(
        { error: 'Failed to create booking' },
        { status: 500 }
      )
    }

    return NextResponse.json(data[0])
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 