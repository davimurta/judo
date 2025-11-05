import { useState } from 'react'
import Card from '../components/Card'
import studyTopics from '../data/studyContent'

const Study = () => {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [expandedSection, setExpandedSection] = useState(null)

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic)
    setExpandedSection(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToTopics = () => {
    setSelectedTopic(null)
    setExpandedSection(null)
  }

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Módulo de Estudo</h1>
          <p className="text-xl text-blue-100">
            Aprenda a teoria completa do Judô - História, princípios, fundamentos e técnicas
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {!selectedTopic ? (
          /* Topics Grid */
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Escolha um tópico para estudar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyTopics.map((topic) => (
                <Card
                  key={topic.id}
                  className="cursor-pointer"
                  onClick={() => handleTopicClick(topic)}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{topic.icon}</div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {topic.sections.length} seções de conteúdo
                    </p>
                    <div className="text-primary-600 font-medium flex items-center justify-center">
                      Estudar
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Study Tips */}
            <div className="mt-12">
              <Card className="bg-blue-50 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3 text-blue-900 flex items-center">
                  <span className="text-2xl mr-2">💡</span>
                  Dicas de Estudo
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Estude cada tópico com atenção e faça anotações</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Após estudar, teste seus conhecimentos no módulo de Testes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Assista aos vídeos na Galeria de Técnicas para complementar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Pratique no tatame o que você aprende aqui</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        ) : (
          /* Topic Content */
          <div>
            {/* Back Button */}
            <button
              onClick={handleBackToTopics}
              className="mb-6 flex items-center text-blue-600 hover:text-blue-700 font-medium transition-smooth"
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
              Voltar aos tópicos
            </button>

            {/* Topic Header */}
            <Card className="mb-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <div className="flex items-center">
                <div className="text-6xl mr-6">{selectedTopic.icon}</div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    {selectedTopic.title}
                  </h2>
                  <p className="text-blue-100">
                    {selectedTopic.sections.length} seções para explorar
                  </p>
                </div>
              </div>
            </Card>

            {/* Sections */}
            <div className="space-y-4">
              {selectedTopic.sections.map((section, index) => (
                <Card key={index} className="overflow-hidden">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 pr-4">
                        {section.title}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-blue-600 transition-transform flex-shrink-0 ${
                          expandedSection === index ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </button>

                  {expandedSection === index && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="prose max-w-none text-gray-700 leading-relaxed">
                        {section.content.split('\n\n').map((paragraph, pIndex) => {
                          // Check if it's a header
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            const headerText = paragraph.replace(/\*\*/g, '')
                            return (
                              <h4
                                key={pIndex}
                                className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                              >
                                {headerText}
                              </h4>
                            )
                          }

                          // Check if it's a list item
                          if (paragraph.trim().startsWith('-')) {
                            const items = paragraph.split('\n').filter(item => item.trim())
                            return (
                              <ul key={pIndex} className="list-disc list-inside space-y-2 mb-4">
                                {items.map((item, iIndex) => (
                                  <li key={iIndex} className="ml-4">
                                    {item.replace(/^-\s*/, '').replace(/\*\*/g, '')}
                                  </li>
                                ))}
                              </ul>
                            )
                          }

                          // Check if it has numbered list
                          if (/^\d+\./.test(paragraph.trim())) {
                            const items = paragraph.split('\n').filter(item => item.trim())
                            return (
                              <ol key={pIndex} className="list-decimal list-inside space-y-2 mb-4">
                                {items.map((item, iIndex) => (
                                  <li key={iIndex} className="ml-4">
                                    {item.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '')}
                                  </li>
                                ))}
                              </ol>
                            )
                          }

                          // Regular paragraph
                          return (
                            <p key={pIndex} className="mb-4 whitespace-pre-line">
                              {paragraph.replace(/\*\*/g, '')}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Navigation Footer */}
            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={handleBackToTopics}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-smooth"
              >
                ← Voltar aos tópicos
              </button>
              <a
                href="/testes"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-smooth"
              >
                Testar conhecimentos →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Study
