'use client'

export default function Privacy() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Privacy Policy</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h3>1. Information We Collect</h3>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>Name and contact information</li>
            <li>Property address and details</li>
            <li>Service preferences and requirements</li>
            <li>Payment information</li>
            <li>Communication history</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use the collected information to:
          </p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Process payments and send invoices</li>
            <li>Communicate about appointments and services</li>
            <li>Send promotional materials and updates</li>
            <li>Maintain and improve our website</li>
          </ul>

          <h3>3. Information Sharing</h3>
          <p>
            We do not sell or rent your personal information to third parties. We may share your
            information with:
          </p>
          <ul>
            <li>Service providers and contractors</li>
            <li>Payment processors</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h3>4. Data Security</h3>
          <p>
            We implement appropriate security measures to protect your personal information from
            unauthorized access, alteration, or disclosure.
          </p>

          <h3>5. Your Rights</h3>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h3>6. Cookies and Tracking</h3>
          <p>
            Our website uses cookies and similar technologies to enhance your browsing experience
            and analyze website traffic.
          </p>

          <h3>7. Children's Privacy</h3>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect
            personal information from children.
          </p>

          <h3>8. Changes to Privacy Policy</h3>
          <p>
            We may update this privacy policy periodically. We will notify you of any material
            changes by posting the new policy on our website.
          </p>

          <h3>9. Contact Us</h3>
          <p>
            If you have questions about our privacy practices or would like to exercise your rights,
            please contact us through our website or customer service line.
          </p>

          <div className="mt-8 text-sm text-gray-500">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 