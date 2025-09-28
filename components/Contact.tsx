export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-light text-gray-900 mb-6">Contact</h2>
        <p className="text-gray-600">
          Get in touch for collaborations, exhibitions, or academic inquiries
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-900">Academic Inquiries</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> manolo.estavillo@university.edu
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Office:</span> Department of Sociology
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Office Hours:</span> Tuesday & Thursday, 2-4 PM
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-900">Photography & Exhibitions</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> hello@manoloestavillo.com
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Instagram:</span> @manolo.captures
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-900">Collaborations</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Open to interdisciplinary projects that explore the intersection of visual arts and social research. Available for guest lectures, workshop facilitation, and community-based documentation projects.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Current Projects</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-medium text-gray-800">Community Portraits Series</h4>
                <p className="text-sm text-gray-600">Documentation of resilience in urban communities</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-medium text-gray-800">Research: Visual Identity & Migration</h4>
                <p className="text-sm text-gray-600">Ongoing academic study with photographic component</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">Response time: 2-3 business days</p>
            <p className="text-xs text-gray-400">
              Please include "Photography Inquiry" or "Academic Inquiry" in your subject line
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}