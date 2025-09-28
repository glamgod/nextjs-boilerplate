interface Publication {
  id: number
  title: string
  journal: string
  year: number
  authors: string[]
  abstract: string
  doi?: string
  type: 'article' | 'book' | 'chapter' | 'conference'
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Visual Narratives in Contemporary Urban Communities: A Sociological Analysis",
    journal: "Journal of Visual Culture",
    year: 2024,
    authors: ["Manolo Estavillo"],
    abstract: "This study examines how urban communities use visual culture to construct and communicate collective identity. Through ethnographic photography and community engagement...",
    doi: "10.1177/1470412924000000",
    type: "article"
  },
  {
    id: 2,
    title: "Photography as Methodology: Visual Research in Social Sciences",
    journal: "Sociological Methods & Research",
    year: 2023,
    authors: ["Manolo Estavillo", "Dr. Sarah Johnson"],
    abstract: "We propose a framework for integrating photographic practice into sociological research methodology, arguing that visual documentation can enhance...",
    doi: "10.1177/0049124123000000",
    type: "article"
  },
  {
    id: 3,
    title: "The Social Construction of Place: Community Identity Through Visual Documentation",
    journal: "Critical Sociology",
    year: 2023,
    authors: ["Manolo Estavillo"],
    abstract: "This article explores how communities construct meaning about place through collective visual practices, examining three case studies of neighborhood transformation...",
    type: "article"
  },
  {
    id: 4,
    title: "Seeing Society: Visual Sociology in Practice",
    journal: "University Press",
    year: 2022,
    authors: ["Manolo Estavillo", "Various Contributors"],
    abstract: "A comprehensive edited volume exploring contemporary applications of visual methodology in sociological research. Contributors examine case studies from around the world...",
    type: "book"
  },
  {
    id: 5,
    title: "Digital Storytelling and Social Change",
    journal: "Media, Culture & Society Conference Proceedings",
    year: 2022,
    authors: ["Manolo Estavillo"],
    abstract: "Presentation examining how digital visual platforms enable new forms of community organizing and social movement documentation...",
    type: "conference"
  }
]

export default function Publications() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-light text-gray-900 mb-6">Publications & Writings</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Academic work exploring the intersection of visual culture, sociology, and community identity
        </p>
      </div>

      <div className="space-y-8">
        {publications.map((pub) => (
          <article key={pub.id} className="border-b border-gray-100 pb-8 last:border-b-0">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 leading-tight">
                    {pub.title}
                  </h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-gray-600">
                      <span className="font-medium">{pub.journal}</span> • {pub.year}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {pub.authors.join(", ")}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  pub.type === 'article' ? 'bg-blue-100 text-blue-800' :
                  pub.type === 'book' ? 'bg-green-100 text-green-800' :
                  pub.type === 'chapter' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {pub.type}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {pub.abstract}
              </p>

              <div className="flex items-center space-x-4">
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    DOI: {pub.doi}
                  </a>
                )}
                <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  Request PDF
                </button>
                {pub.type === 'article' && (
                  <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                    Citation
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-xl font-medium text-gray-900 mb-4">Works in Progress</h3>
        <div className="space-y-3">
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">
              "Digital Communities and Visual Identity Formation"
            </h4>
            <p className="text-sm text-gray-600">
              Forthcoming in Digital Sociology (under review)
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">
              "Collaborative Visual Research Methods: A Practical Guide"
            </h4>
            <p className="text-sm text-gray-600">
              Book manuscript in preparation • Expected 2025
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-500">
          For complete publication list and citation metrics, visit
          <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">Google Scholar</a> or
          <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">ORCID</a>
        </p>
      </div>
    </div>
  )
}