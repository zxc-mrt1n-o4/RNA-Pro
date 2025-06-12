import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chat Support - RNA Pro Painting Admin',
  description: 'Chat with customers and manage support conversations',
}

const conversations = [
  {
    id: 1,
    customer: 'John Smith',
    lastMessage: 'When can you start the painting job?',
    timestamp: '5m ago',
    unread: true,
  },
  {
    id: 2,
    customer: 'Sarah Johnson',
    lastMessage: 'Thanks for the quote!',
    timestamp: '1h ago',
    unread: false,
  },
  {
    id: 3,
    customer: 'Mike Brown',
    lastMessage: 'The team did a great job!',
    timestamp: '2h ago',
    unread: false,
  },
]

export default function ChatPage() {
  return (
    <div className="flex h-[calc(100vh-10rem)] overflow-hidden bg-white">
      {/* Sidebar */}
      <div className="w-96 border-r border-gray-200">
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
          <h2 className="text-lg font-medium text-gray-900">Conversations</h2>
          <span className="rounded-full bg-indigo-600 px-2 py-1 text-xs font-medium text-white">
            {conversations.filter(c => c.unread).length} unread
          </span>
        </div>
        <nav className="overflow-y-auto" aria-label="Conversations">
          <ul role="list" className="divide-y divide-gray-200">
            {conversations.map((conversation) => (
              <li key={conversation.id} className="relative bg-white px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50">
                <div className="flex justify-between space-x-3">
                  <div className="min-w-0 flex-1">
                    <a href="#" className="block focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="truncate text-sm font-medium text-gray-900">{conversation.customer}</p>
                      <p className="truncate text-sm text-gray-500">{conversation.lastMessage}</p>
                    </a>
                  </div>
                  <div className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                    {conversation.timestamp}
                    {conversation.unread && (
                      <span className="ml-2 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Chat area */}
      <div className="flex flex-1 flex-col">
        <div className="border-b border-gray-200 pl-6 pr-4 py-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <h1 className="text-lg font-medium text-gray-900 truncate">John Smith</h1>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                  <span className="text-sm font-medium leading-none text-white">JS</span>
                </span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">John Smith</p>
                <div className="mt-1 rounded-lg bg-gray-100 p-3">
                  <p className="text-sm text-gray-900">When can you start the painting job?</p>
                </div>
                <p className="mt-1 text-xs text-gray-500">5m ago</p>
              </div>
            </div>

            <div className="flex items-start justify-end">
              <div className="mr-3">
                <p className="text-sm font-medium text-gray-900 text-right">You</p>
                <div className="mt-1 rounded-lg bg-indigo-600 p-3">
                  <p className="text-sm text-white">Hi John! We can start next Monday. Would that work for you?</p>
                </div>
                <p className="mt-1 text-xs text-gray-500 text-right">2m ago</p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
                  <span className="text-sm font-medium leading-none text-white">RP</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Message input */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Type your message..."
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 