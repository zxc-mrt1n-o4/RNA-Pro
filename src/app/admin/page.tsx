import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard - RNA Pro Painting Admin',
  description: 'Overview of your painting services business',
}

const stats = [
  { name: 'Pending Bookings', value: '12' },
  { name: 'Completed Jobs', value: '45' },
  { name: 'Active Customers', value: '58' },
  { name: 'Revenue (MTD)', value: '$24,500' },
]

const recentBookings = [
  {
    id: 1,
    customer: 'John Smith',
    service: 'Interior Painting',
    date: '2024-03-15',
    status: 'Pending',
  },
  {
    id: 2,
    customer: 'Sarah Johnson',
    service: 'Exterior Painting',
    date: '2024-03-14',
    status: 'Confirmed',
  },
  {
    id: 3,
    customer: 'Mike Brown',
    service: 'Commercial Services',
    date: '2024-03-13',
    status: 'Completed',
  },
]

export default function AdminDashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">{stat.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="mx-auto">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Recent Bookings</h2>
          <div className="mt-4 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Customer
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Service
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Date
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentBookings.map((booking) => (
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
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <a href={`/admin/bookings/${booking.id}`} className="text-indigo-600 hover:text-indigo-900">
                            View<span className="sr-only">, {booking.customer}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 