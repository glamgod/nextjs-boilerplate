'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Photo {
  id: number
  src: string
  alt: string
  caption?: string
}

interface EssayData {
  id: string
  title: string
  description: string
  statement: string
  year: number
  location: string
  photos: Photo[]
}

interface PhotoEssayProps {
  essayId: string
}

const essayData: Record<string, EssayData> = {
  'coney-island': {
    id: 'coney-island',
    title: 'Coney Island: American Dreams by the Sea',
    description: 'A visual exploration of community, nostalgia, and resilience in Brooklyn\'s iconic seaside neighborhood.',
    statement: 'Coney Island represents the American dream in miniature—a place where working-class families have gathered for over a century to escape the city\'s constraints. Through this essay, I document the layers of history, the persistence of joy amid economic hardship, and the ways communities create meaning in spaces of transition.',
    year: 2024,
    location: 'Brooklyn, New York',
    photos: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop',
        alt: 'Coney Island boardwalk',
        caption: 'The iconic boardwalk stretches along the Atlantic, a stage for countless personal dramas and celebrations.'
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
        alt: 'Amusement park rides',
        caption: 'Vintage carnival rides stand as monuments to collective memory and shared experience.'
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=1200&h=800&fit=crop',
        alt: 'Beach scene',
        caption: 'Families gather on the sand, creating temporary communities bound by proximity and shared purpose.'
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1471919743851-c4df8b6ee133?w=1200&h=800&fit=crop',
        alt: 'Street performers',
        caption: 'Street performers embody the entrepreneurial spirit that has defined Coney Island for generations.'
      },
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1200&h=800&fit=crop',
        alt: 'Food vendors',
        caption: 'Nathan\'s and other food vendors serve as social anchors, places where strangers become neighbors.'
      },
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=1200&h=800&fit=crop',
        alt: 'Children playing',
        caption: 'Children navigate between wonder and wariness, learning the city through play.'
      },
      {
        id: 7,
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
        alt: 'Elder residents',
        caption: 'Long-time residents carry institutional memory, bridging past and present.'
      },
      {
        id: 8,
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
        alt: 'Sunset over water',
        caption: 'Evening light transforms the industrial waterfront into something almost sacred.'
      },
      {
        id: 9,
        src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop',
        alt: 'Storefront scenes',
        caption: 'Local businesses reflect the neighborhood\'s multicultural character and economic realities.'
      },
      {
        id: 10,
        src: 'https://images.unsplash.com/photo-1514905552197-0610a4d8fd73?w=1200&h=800&fit=crop',
        alt: 'Beach volleyball',
        caption: 'Recreational activities create informal social networks and community bonds.'
      },
      {
        id: 11,
        src: 'https://images.unsplash.com/photo-1502780402662-acc01917928e?w=1200&h=800&fit=crop',
        alt: 'Off-season boardwalk',
        caption: 'The off-season reveals the neighborhood\'s quieter rhythms and year-round character.'
      },
      {
        id: 12,
        src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop',
        alt: 'Housing projects',
        caption: 'Public housing towers frame the beach, representing both aspiration and constraint.'
      },
      {
        id: 13,
        src: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=1200&h=800&fit=crop',
        alt: 'Fishing pier',
        caption: 'The pier serves as both recreational space and economic lifeline for some residents.'
      },
      {
        id: 14,
        src: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=1200&h=800&fit=crop',
        alt: 'Community gathering',
        caption: 'Informal gatherings reveal the social networks that sustain community life.'
      },
      {
        id: 15,
        src: 'https://images.unsplash.com/photo-1499266981843-de8adfe02908?w=1200&h=800&fit=crop',
        alt: 'Winter scene',
        caption: 'Winter transforms the landscape, revealing the neighborhood\'s essential character beyond its tourist identity.'
      }
    ]
  },
  'urban-solitude': {
    id: 'urban-solitude',
    title: 'Urban Solitude',
    description: 'Finding moments of quiet contemplation within the bustling energy of city life.',
    statement: 'In cities, we are simultaneously surrounded by millions yet often deeply alone. This essay explores those liminal spaces and moments where urban dwellers find solitude, contemplation, and peace within the metropolitan environment.',
    year: 2023,
    location: 'Various Urban Centers',
    photos: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
        alt: 'City solitude',
        caption: 'A moment of reflection in the urban landscape.'
      }
    ]
  }
}

export default function PhotoEssay({ essayId }: PhotoEssayProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const essay = essayData[essayId]

  if (!essay) {
    return (
      <div className="text-center">
        <h2 className="text-2xl text-gray-900 mb-4">Essay not found</h2>
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Gallery
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
        >
          ← Back to Gallery
        </Link>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-light text-gray-900">{essay.title}</h1>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>{essay.year}</span>
            <span>•</span>
            <span>{essay.location}</span>
            <span>•</span>
            <span>{essay.photos.length} photographs</span>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {essay.description}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-light text-gray-900 mb-4">Artist Statement</h3>
          <p className="text-gray-600 leading-relaxed italic">
            {essay.statement}
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {essay.photos.map((photo) => (
          <div key={photo.id} className="space-y-4">
            <div
              className="relative bg-gray-100 cursor-pointer group"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            {photo.caption && (
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  {photo.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-full object-contain shadow-lg"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            >
              ×
            </button>
            {selectedPhoto.caption && (
              <div className="absolute bottom-4 left-4 right-4 text-gray-900 bg-white px-4 py-2 rounded shadow-md">
                <p className="text-sm leading-relaxed italic">{selectedPhoto.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}