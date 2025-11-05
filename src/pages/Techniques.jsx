import { useState, useMemo } from 'react'
import Card from '../components/Card'
import { gokyo, extraTechniques, neWaza } from '../data/techniques'

const Techniques = () => {
  const [viewMode, setViewMode] = useState('category') // 'category' or 'gokyo'
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedGokyo, setSelectedGokyo] = useState('all')
  const [selectedTechnique, setSelectedTechnique] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  // Compilar todas as técnicas
  const allNageWaza = useMemo(() => {
    const gokyoTechniques = Object.values(gokyo).flat()
    return [...gokyoTechniques, ...extraTechniques].filter(t => !t.prohibited)
  }, [])

  const allTechniques = useMemo(() => {
    return [
      ...allNageWaza,
      ...neWaza.osaeKomiWaza,
      ...neWaza.shimeWaza,
      ...neWaza.kansetsuWaza
    ]
  }, [allNageWaza])

  // Categorias para filtro
  const categories = [
    { id: 'all', name: 'Todas as Técnicas', icon: '🥋', count: allTechniques.length },
    { id: 'Te-waza', name: 'Te-waza (Braço)', icon: '✋', count: allNageWaza.filter(t => t.category === 'Te-waza').length },
    { id: 'Koshi-waza', name: 'Koshi-waza (Quadril)', icon: '🔄', count: allNageWaza.filter(t => t.category === 'Koshi-waza').length },
    { id: 'Ashi-waza', name: 'Ashi-waza (Perna)', icon: '🦵', count: allNageWaza.filter(t => t.category === 'Ashi-waza').length },
    { id: 'Ma-sutemi-waza', name: 'Ma-sutemi (Sacrifício trás)', icon: '⬇️', count: allNageWaza.filter(t => t.category === 'Ma-sutemi-waza').length },
    { id: 'Yoko-sutemi-waza', name: 'Yoko-sutemi (Sacrifício lateral)', icon: '↩️', count: allNageWaza.filter(t => t.category === 'Yoko-sutemi-waza').length },
    { id: 'Osae-komi-waza', name: 'Osae-komi (Imobilizações)', icon: '🔒', count: neWaza.osaeKomiWaza.length },
    { id: 'Shime-waza', name: 'Shime-waza (Estrangulamentos)', icon: '🤼', count: neWaza.shimeWaza.length },
    { id: 'Kansetsu-waza', name: 'Kansetsu-waza (Chaves)', icon: '💪', count: neWaza.kansetsuWaza.length },
  ]

  const gokyoOptions = [
    { id: 'all', name: 'Todos os Gokyo', count: allNageWaza.length },
    { id: '1', name: '1º Gokyo (Básico)', count: gokyo['1'].length },
    { id: '2', name: '2º Gokyo', count: gokyo['2'].length },
    { id: '3', name: '3º Gokyo', count: gokyo['3'].length },
    { id: '4', name: '4º Gokyo', count: gokyo['4'].length },
    { id: '5', name: '5º Gokyo (Avançado)', count: gokyo['5'].length },
    { id: 'Extra', name: 'Extras + Variações', count: extraTechniques.filter(t => !t.prohibited).length },
  ]

  // Filtrar técnicas
  const filteredTechniques = useMemo(() => {
    let filtered = allTechniques

    // Filtro por categoria
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(t => t.category === selectedCategory)
    }

    // Filtro por Gokyo (apenas para nage-waza)
    if (selectedGokyo !== 'all') {
      filtered = filtered.filter(t => {
        if (selectedGokyo === 'Extra') {
          return t.gokyo === 'Extra'
        }
        return t.gokyo === parseInt(selectedGokyo)
      })
    }

    // Filtro por busca
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(term) ||
        t.nameJp.includes(term) ||
        t.translation.toLowerCase().includes(term) ||
        t.description.toLowerCase().includes(term)
      )
    }

    return filtered
  }, [allTechniques, selectedCategory, selectedGokyo, searchTerm])

  const handleTechniqueClick = (technique) => {
    setSelectedTechnique(technique)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCloseTechnique = () => {
    setSelectedTechnique(null)
  }

  // Técnica individual view
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
              <p className="text-lg text-gray-600 italic mb-4">{selectedTechnique.translation}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {selectedTechnique.category}
                </span>
                {selectedTechnique.gokyo && (
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    {selectedTechnique.gokyo === 'Extra' ? 'Extra' : `${selectedTechnique.gokyo}º Gokyo`}
                  </span>
                )}
                {selectedTechnique.difficulty && (
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {selectedTechnique.difficulty}
                  </span>
                )}
                {selectedTechnique.type && (
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {selectedTechnique.type}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Descrição:</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{selectedTechnique.description}</p>
            </div>

            {/* Video */}
            {selectedTechnique.videoId && selectedTechnique.videoId !== 'DANGER' && (
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
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src={`https://www.youtube.com/embed/${selectedTechnique.videoId}`}
                    title={selectedTechnique.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </Card>

          {/* Related Techniques */}
          <Card className="bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Outras técnicas da mesma categoria:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {allTechniques
                .filter((t) => t.category === selectedTechnique.category && t.id !== selectedTechnique.id)
                .slice(0, 8)
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

  // Main gallery view
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeria de Técnicas de Judô</h1>
          <p className="text-xl text-red-100 mb-2">
            Base completa com {allTechniques.length}+ técnicas oficiais do Kodokan
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-red-800 px-3 py-1 rounded-full">
              {allNageWaza.length} Nage-waza (Projeções)
            </span>
            <span className="bg-red-800 px-3 py-1 rounded-full">
              {neWaza.osaeKomiWaza.length + neWaza.shimeWaza.length + neWaza.kansetsuWaza.length} Ne-waza (Solo)
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Buscar técnica por nome, japonês ou descrição..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-smooth"
            />
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex rounded-lg border-2 border-gray-300 p-1 bg-white">
            <button
              onClick={() => setViewMode('category')}
              className={`px-6 py-2 rounded-md font-medium transition-smooth ${
                viewMode === 'category'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Por Categoria
            </button>
            <button
              onClick={() => setViewMode('gokyo')}
              className={`px-6 py-2 rounded-md font-medium transition-smooth ${
                viewMode === 'gokyo'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Por Gokyo
            </button>
          </div>
        </div>

        {/* Category Filter */}
        {viewMode === 'category' && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Filtrar por Categoria:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id)
                    setSelectedGokyo('all')
                  }}
                  className={`p-4 rounded-lg font-medium transition-smooth text-left ${
                    selectedCategory === cat.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-800 hover:shadow-md'
                  }`}
                >
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <div className="text-sm font-semibold">{cat.name}</div>
                  <div className="text-xs mt-1 opacity-80">{cat.count} técnicas</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Gokyo Filter */}
        {viewMode === 'gokyo' && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Filtrar por Gokyo:</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {gokyoOptions.map((gok) => (
                <button
                  key={gok.id}
                  onClick={() => {
                    setSelectedGokyo(gok.id)
                    setSelectedCategory('all')
                  }}
                  className={`p-4 rounded-lg font-medium transition-smooth text-center ${
                    selectedGokyo === gok.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-800 hover:shadow-md'
                  }`}
                >
                  <div className="text-sm font-semibold">{gok.name}</div>
                  <div className="text-xs mt-1 opacity-80">{gok.count} técnicas</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-lg text-gray-700">
            Exibindo <span className="font-bold text-red-600">{filteredTechniques.length}</span> {filteredTechniques.length === 1 ? 'técnica' : 'técnicas'}
          </p>
        </div>

        {/* Techniques Grid */}
        {filteredTechniques.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhuma técnica encontrada com estes filtros.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSelectedGokyo('all')
                setSearchTerm('')
              }}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-smooth"
            >
              Limpar filtros
            </button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTechniques.map((technique) => (
              <Card
                key={technique.id}
                className="cursor-pointer hover:scale-105"
                onClick={() => handleTechniqueClick(technique)}
              >
                {/* Thumbnail */}
                {technique.videoId && technique.videoId !== 'DANGER' && (
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
                )}

                {/* Technique Info */}
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {technique.name}
                </h3>
                <p className="text-red-600 mb-2 font-medium">{technique.nameJp}</p>
                <p className="text-sm text-gray-600 italic mb-3">{technique.translation}</p>
                <p className="text-sm text-gray-700 line-clamp-2 mb-3">{technique.description}</p>

                <div className="flex flex-wrap gap-1">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                    {technique.category}
                  </span>
                  {technique.gokyo && (
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">
                      {technique.gokyo === 'Extra' ? 'Extra' : `${technique.gokyo}º`}
                    </span>
                  )}
                  {technique.difficulty && (
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                      {technique.difficulty}
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Info Box */}
        <div className="mt-12">
          <Card className="bg-red-50 border-l-4 border-red-600">
            <h3 className="text-xl font-semibold mb-3 text-red-900 flex items-center">
              <span className="text-2xl mr-2">ℹ️</span>
              Sobre esta Galeria
            </h3>
            <div className="text-red-800 space-y-2">
              <p>
                Esta galeria contém <strong>{allTechniques.length}+ técnicas oficiais</strong> reconhecidas pelo Kodokan Judo Institute, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>40 técnicas do Gokyo no Waza</strong> (5 grupos de 8 técnicas)</li>
                <li><strong>{extraTechniques.filter(t => !t.prohibited).length} técnicas extras e variações</strong> (Shinmeisho No Waza)</li>
                <li><strong>{neWaza.osaeKomiWaza.length} imobilizações</strong> (Osae-komi-waza)</li>
                <li><strong>{neWaza.shimeWaza.length} estrangulamentos</strong> (Shime-waza)</li>
                <li><strong>{neWaza.kansetsuWaza.length} chaves de braço</strong> (Kansetsu-waza)</li>
              </ul>
              <p className="mt-3">
                Os vídeos são do canal oficial do{' '}
                <a
                  href="https://www.youtube.com/@KodokanJudoInstitute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-red-900"
                >
                  Kodokan Judo Institute
                </a>{' '}
                no YouTube.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Techniques
