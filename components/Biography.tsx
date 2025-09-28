export default function Biography() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-light text-gray-900 mb-6">Biography</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                alt="Dr. Manolo Estavillo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900">Dr. Manolo Estavillo</h3>
              <p className="text-gray-600">PhD in Sociology</p>
              <p className="text-gray-600">Professor & Visual Artist</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-gray-900">Academic Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              Dr. Manolo Estavillo earned his PhD in Sociology from [University Name], where his doctoral research focused on the intersection of visual culture and social identity. His academic work has been shaped by a deep interest in how communities express themselves through visual narratives and cultural practices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Currently serving as a Professor of Sociology, Manolo has dedicated over [X] years to teaching and research, specializing in visual sociology, cultural studies, and community ethnography. His classroom approach emphasizes critical thinking and encourages students to examine the world through multiple analytical lenses.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-light text-gray-900">Artistic Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Manolo's passion for photography emerged from his sociological curiosity about human behavior and social environments. What began as documentary work for his research evolved into a distinct artistic practice that bridges academic inquiry with aesthetic expression.
            </p>
            <p className="text-gray-600 leading-relaxed">
              His photographic work captures moments of social interaction, environmental storytelling, and cultural documentation. Through his lens, everyday scenes become studies in human connection, power dynamics, and cultural expression.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-light text-gray-900">Recognition & Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Dr. Estavillo's unique position as both academic and artist has led to opportunities for interdisciplinary collaboration. His work has been featured in academic journals, art exhibitions, and community projects that seek to bridge scholarly research with public engagement.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through teaching, research, and artistic practice, Manolo continues to explore how visual storytelling can enhance our understanding of social phenomena and create meaningful connections between academic knowledge and lived experience.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-light text-gray-900">Philosophy</h3>
            <p className="text-gray-600 leading-relaxed">
              "Every photograph tells a story about power, identity, and belonging. My work seeks to make visible the social structures that shape our daily lives while celebrating the beauty found in human resilience and creativity."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}