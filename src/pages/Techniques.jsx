import { useState } from 'react'
import Card from '../components/Card'
import { gokyo, neWaza } from '../data/techniques'

const Techniques = () => {
  const [selectedCategory, setSelectedCategory] = useState('gokyo')
  const [selectedGokyo, setSelectedGokyo] = useState('1')
  const [selectedTechnique, setSelectedTechnique] = useState(null)

  const categories = [
    { id: 'gokyo', name: 'Nage-waza (Projeções)', icon: '🥋' },
    { id: 'osae', name: 'Osae-komi-waza (Imobilizações)', icon: '🔒' },
    { id: 'shime', name: 'Shime-waza (Estrangulamentos)', icon: '🤼' },
    { id: 'kansetsu', name: 'Kansetsu-waza (Chaves)', icon: '💪' },
  ]

  const getTechniques = () => {
    if (selectedCategory === 'gokyo') {
      return gokyo[selectedGokyo]
    } else if (selectedCategory === 'osae') {
      return neWaza.osaeKomiWaza
    } else if (selectedCategory === 'shime') {
      return neWaza.shimeWaza
    } else if (selectedCategory === 'kansetsu') {
      return neWaza.kansetsuWaza
    }
    return []
  }

  const techniques = getTechniques()

  const handleTechniqueClick = (technique) => {
    setSelectedTechnique(technique)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCloseTechnique = () => {
    setSelectedTechnique(null)
  }

  if (selectedTechnique) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Back Button */}
          <button
            onClick={handleCloseTechnique}
            className="mb-6 flex items-center text-red-600 hover:text-red-700 font-medium transition-smooth"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Voltar à galeria
          </button>

          <Card className="mb-6">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {selectedTechnique.name}
              </h1>
              <p className="text-2xl text-red-600 mb-2">{selectedTechnique.nameJp}</p>
              <p className="text-lg text-gray-600 italic">{selectedTechnique.translation}</p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {selectedTechnique.category}
                </span>
                {selectedTechnique.gokyo && (
                  <span className="inline-block ml-2 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    {selectedTechnique.gokyo}º Gokyo
                  </span>
                )}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Descrição:</h3>
              <p className="text-gray-700 leading-relaxed">{selectedTechnique.description}</p>
            </div>

            {/* Video */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="mr-2">🎥</span>
                Demonstração em Vídeo
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Vídeo oficial do Instituto Kodokan de Judô
              </p>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${selectedTechnique.videoId}`}
                  title={selectedTechnique.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Card>

          {/* Related Techniques */}
          <Card className="bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Outras técnicas da mesma categoria:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {techniques
                .filter((t) => t.id !== selectedTechnique.id)
                .slice(0, 6)
                .map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => handleTechniqueClick(tech)}
                    className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-smooth"
                  >
                    <p className="font-medium text-gray-800 text-sm">{tech.name}</p>
                    <p className="text-xs text-gray-600">{tech.nameJp}</p>
                  </button>
                ))}
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeria de Técnicas</h1>
          <p className="text-xl text-red-100">
            Explore as técnicas do Judô com vídeos oficiais do Instituto Kodokan
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Categorias:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setSelectedGokyo('1')
                }}
                className={`p-4 rounded-lg font-medium transition-smooth text-left ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-800 hover:shadow-md'
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="text-sm md:text-base">{category.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Gokyo Selection (only for Nage-waza) */}
        {selectedCategory === 'gokyo' && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Selecione o Gokyo:</h2>
            <div className="flex flex-wrap gap-3">
              {['1', '2', '3', '4', '5'].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedGokyo(num)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-smooth ${
                    selectedGokyo === num
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {num}º Gokyo
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Techniques Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {selectedCategory === 'gokyo'
              ? `Técnicas do ${selectedGokyo}º Gokyo:`
              : `Técnicas de ${categories.find((c) => c.id === selectedCategory)?.name}:`}
          </h2>

          {techniques.length === 0 ? (
            <Card className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhuma técnica disponível nesta categoria.</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techniques.map((technique) => (
                <Card
                  key={technique.id}
                  className="cursor-pointer hover:scale-105"
                  onClick={() => handleTechniqueClick(technique)}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full mb-4 rounded-lg overflow-hidden bg-gray-200"
                    style={{ paddingBottom: '56.25%' }}>
                    <img
                      src={`https://img.youtube.com/vi/${technique.videoId}/mqdefault.jpg`}
                      alt={technique.name}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/320x180/EF4444/FFFFFF?text=Judo'
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-smooth">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Technique Info */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {technique.name}
                  </h3>
                  <p className="text-red-600 mb-2 font-medium">{technique.nameJp}</p>
                  <p className="text-sm text-gray-600 italic mb-3">{technique.translation}</p>
                  <p className="text-sm text-gray-700 line-clamp-2">{technique.description}</p>

                  <div className="mt-4">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                      {technique.category}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="mt-12">
          <Card className="bg-red-50 border-l-4 border-red-600">
            <h3 className="text-xl font-semibold mb-3 text-red-900 flex items-center">
              <span className="text-2xl mr-2">ℹ️</span>
              Sobre os Vídeos
            </h3>
            <div className="text-red-800 space-y-2">
              <p>
                Todos os vídeos são do canal oficial do{' '}
                <a
                  href="https://www.youtube.com/@KodokanJudoInstitute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-red-900"
                >
                  Kodokan Judo Institute
                </a>
                , a sede mundial do Judô em Tokyo, Japão.
              </p>
              <p className="text-sm">
                <strong>Nota:</strong> As demonstrações mostram a forma correta (Ri-kata) de cada técnica.
                Na prática (Randori), as técnicas podem variar de acordo com a situação.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Techniques
