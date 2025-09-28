export default function CV() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-light text-gray-900 mb-6">Curriculum Vitae</h2>
        <div className="flex justify-center">
          <a
            href="/cv-manolo-estavillo.pdf"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Download Full CV (PDF)
          </a>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-6">
          <h3 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">Education</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="text-lg font-medium text-gray-900">PhD in Sociology</h4>
              <p className="text-gray-600">[University Name] • [Year]</p>
              <p className="text-sm text-gray-500">Dissertation: "Visual Culture and Social Identity in Contemporary Communities"</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="text-lg font-medium text-gray-900">MA in Sociology</h4>
              <p className="text-gray-600">[University Name] • [Year]</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="text-lg font-medium text-gray-900">BA in Social Sciences</h4>
              <p className="text-gray-600">[University Name] • [Year]</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">Academic Positions</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="text-lg font-medium text-gray-900">Professor of Sociology</h4>
              <p className="text-gray-600">[University Name] • [Year] - Present</p>
              <ul className="text-sm text-gray-500 mt-2 space-y-1">
                <li>• Teaching courses in Visual Sociology, Cultural Studies, and Research Methods</li>
                <li>• Supervising graduate student research projects</li>
                <li>• Leading interdisciplinary research initiatives</li>
              </ul>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="text-lg font-medium text-gray-900">Associate Professor</h4>
              <p className="text-gray-600">[University Name] • [Year] - [Year]</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">Awards & Recognition</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">Excellence in Teaching Award</h4>
                <p className="text-sm text-gray-500">[University Name]</p>
              </div>
              <span className="text-gray-600">[Year]</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">Research Excellence Grant</h4>
                <p className="text-sm text-gray-500">National Science Foundation</p>
              </div>
              <span className="text-gray-600">[Year]</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">Visual Arts Fellowship</h4>
                <p className="text-sm text-gray-500">[Art Foundation Name]</p>
              </div>
              <span className="text-gray-600">[Year]</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">Exhibitions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">"Intersections: Sociology in Focus"</h4>
                <p className="text-sm text-gray-500">[Gallery Name], [City]</p>
              </div>
              <span className="text-gray-600">[Year]</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">"Community Narratives"</h4>
                <p className="text-sm text-gray-500">[Gallery Name], [City]</p>
              </div>
              <span className="text-gray-600">[Year]</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">Professional Memberships</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2 text-gray-600">
                <li>• American Sociological Association</li>
                <li>• International Visual Sociology Association</li>
                <li>• Society for the Study of Social Problems</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-gray-600">
                <li>• Professional Photographers of America</li>
                <li>• Visual Studies Workshop</li>
                <li>• [Local Photography Collective]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}