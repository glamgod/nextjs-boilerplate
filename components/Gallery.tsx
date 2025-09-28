'use client'

import Link from 'next/link'

interface PhotoEssay {
  id: string
  title: string
  description: string
  coverImage: string
  year: number
  photoCount: number
}

const photoEssays: PhotoEssay[] = [
  {
    id: 'coney-island',
    title: 'Coney Island: American Dreams by the Sea',
    description: 'A visual exploration of community, nostalgia, and resilience in Brooklyn\'s iconic seaside neighborhood.',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    year: 2024,
    photoCount: 15
  },
  {
    id: 'urban-solitude',
    title: 'Urban Solitude',
    description: 'Finding moments of quiet contemplation within the bustling energy of city life.',
    coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    year: 2023,
    photoCount: 12
  },
  {
    id: 'migration-stories',
    title: 'Migration Stories',
    description: 'Documenting the journeys and experiences of communities in transition.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    year: 2023,
    photoCount: 18
  },
  {
    id: 'neighborhood-portraits',
    title: 'Neighborhood Portraits',
    description: 'Character studies of local businesses and the people who make communities thrive.',
    coverImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    year: 2022,
    photoCount: 20
  },
  {
    id: 'ritual-spaces',
    title: 'Ritual Spaces',
    description: 'Sacred and secular gathering places where communities express identity and belonging.',
    coverImage: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
    year: 2022,
    photoCount: 14
  },
  {
    id: 'generational-bridges',
    title: 'Generational Bridges',
    description: 'Exploring how knowledge, tradition, and innovation pass between generations.',
    coverImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
    year: 2021,
    photoCount: 16
  }
]

export default function Gallery() {

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-light text-gray-900 mb-4">Photo Essays</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Visual narratives exploring the intersection of sociology and photography through extended documentary projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoEssays.map((essay) => (
          <article
            key={essay.id}
            className="group cursor-pointer space-y-4"
          >
            <Link href={`/gallery/${essay.id}`}>
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                <img
                  src={essay.coverImage}
                  alt={essay.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-medium text-gray-700">
                  {essay.photoCount} photos
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-700 transition-colors">
                    {essay.title}
                  </h3>
                  <span className="text-sm text-gray-500">{essay.year}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {essay.description}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}