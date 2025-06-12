'use client'

import { useState } from 'react'

const bookings = [
  {
    id: 1,
    customer: 'John Smith',
    service: 'Interior Painting',
    date: '2024-03-15',
    status: 'Pending',
    address: '123 Main St, City',
    phone: '(555) 123-4567',
  },
  {
    id: 2,
    customer: 'Sarah Johnson',
    service: 'Exterior Painting',
    date: '2024-03-14',
    status: 'Confirmed',
    address: '456 Oak Ave, Town',
    phone: '(555) 234-5678',
  },
  {
    id: 3,
    customer: 'Mike Brown',
    service: 'Commercial Services',
    date: '2024-03-13',
    status: 'Completed',
    address: '789 Business Blvd, City',
    phone: '(555) 345-6789',
  },
]

export default function BookingsPage() {
  const [filter, setFilter] = useState('all')

  const filteredBookings = filter === 'all' 
    ? bookings 
    : bookings.filter(booking => booking.status.toLowerCase() === filter)

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Bookings</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all bookings including their customer details, service type, and status.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="all">All Bookings</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Customer</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Service</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Address</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Phone</th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {booking.customer}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{booking.service}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{booking.date}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                        booking.status === 'Completed'
                          ? 'bg-green-50 text-green-700'
                          : booking.status === 'Pending'
                          ? 'bg-yellow-50 text-yellow-700'
                          : 'bg-blue-50 text-blue-700'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{booking.address}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{booking.phone}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {booking.customer}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 