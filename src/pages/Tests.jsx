import { useState } from 'react'
import Card from '../components/Card'
import { quizQuestions, getBeltQuestions } from '../data/quizData'

const Tests = () => {
  const [selectedBelt, setSelectedBelt] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [quizCompleted, setQuizCompleted] = useState(false)

  const beltLevels = [
    { id: 'branca', name: 'Faixa Branca', color: 'bg-gray-200 text-gray-800', emoji: '⚪' },
    { id: 'cinza', name: 'Faixa Cinza', color: 'bg-gray-400 text-white', emoji: '⚫' },
    { id: 'azul', name: 'Faixa Azul', color: 'bg-blue-500 text-white', emoji: '🔵' },
    { id: 'amarela', name: 'Faixa Amarela', color: 'bg-yellow-400 text-gray-800', emoji: '🟡' },
    { id: 'laranja', name: 'Faixa Laranja', color: 'bg-orange-500 text-white', emoji: '🟠' },
    { id: 'verde', name: 'Faixa Verde', color: 'bg-green-600 text-white', emoji: '🟢' },
    { id: 'preta', name: 'Faixa Preta', color: 'bg-gray-900 text-white', emoji: '⚫' },
  ]

  const startQuiz = (beltId) => {
    setSelectedBelt(beltId)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnsweredQuestions([])
    setQuizCompleted(false)
  }

  const currentQuestions = selectedBelt ? getBeltQuestions(selectedBelt) : []
  const currentQuestion = currentQuestions[currentQuestionIndex]

  const handleAnswerSelect = (answerIndex) => {
    if (showExplanation) return // Prevent changing answer after submission

    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer

    setShowExplanation(true)

    const newAnsweredQuestions = [
      ...answeredQuestions,
      {
        question: currentQuestion.question,
        correct: isCorrect,
        selectedAnswer: currentQuestion.options[selectedAnswer],
        correctAnswer: currentQuestion.options[currentQuestion.correctAnswer]
      }
    ]
    setAnsweredQuestions(newAnsweredQuestions)

    if (isCorrect) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    setSelectedBelt(null)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnsweredQuestions([])
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / currentQuestions.length) * 100

    if (percentage === 100) return { text: 'Perfeito! Você domina este nível! 🏆', color: 'text-green-600' }
    if (percentage >= 80) return { text: 'Excelente! Muito bom desempenho! 🌟', color: 'text-green-600' }
    if (percentage >= 60) return { text: 'Bom trabalho! Continue estudando! 👍', color: 'text-blue-600' }
    if (percentage >= 40) return { text: 'Você está progredindo! Estude mais um pouco. 📚', color: 'text-yellow-600' }
    return { text: 'Continue estudando. Você vai melhorar! 💪', color: 'text-orange-600' }
  }

  if (quizCompleted) {
    const scoreMessage = getScoreMessage()
    const percentage = Math.round((score / currentQuestions.length) * 100)

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Quiz Concluído!
            </h2>

            <div className="my-8">
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {score} / {currentQuestions.length}
              </div>
              <div className="text-2xl text-gray-600 mb-4">
                {percentage}% de acertos
              </div>
              <p className={`text-xl font-semibold ${scoreMessage.color}`}>
                {scoreMessage.text}
              </p>
            </div>

            {/* Review Answers */}
            <div className="mt-8 text-left">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Revisão das Respostas:
              </h3>
              <div className="space-y-3">
                {answeredQuestions.map((answer, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      answer.correct ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'
                    }`}
                  >
                    <p className="font-medium text-gray-800 mb-2">
                      {index + 1}. {answer.question}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Sua resposta:</span>{' '}
                      <span className={answer.correct ? 'text-green-700' : 'text-red-700'}>
                        {answer.selectedAnswer}
                      </span>
                    </p>
                    {!answer.correct && (
                      <p className="text-sm mt-1">
                        <span className="font-medium">Resposta correta:</span>{' '}
                        <span className="text-green-700">{answer.correctAnswer}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => startQuiz(selectedBelt)}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-smooth"
              >
                Refazer Quiz
              </button>
              <button
                onClick={handleRestartQuiz}
                className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-smooth"
              >
                Escolher Outro Nível
              </button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  if (selectedBelt) {
    const isCorrect = showExplanation && selectedAnswer === currentQuestion.correctAnswer

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Questão {currentQuestionIndex + 1} de {currentQuestions.length}
              </span>
              <span className="text-sm font-medium text-blue-600">
                Pontuação: {score}/{currentQuestionIndex + (showExplanation ? 1 : 0)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{
                  width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`
                }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <Card>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {currentQuestion.question}
            </h2>

            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = 'w-full p-4 text-left rounded-lg border-2 transition-smooth '

                if (showExplanation) {
                  if (index === currentQuestion.correctAnswer) {
                    buttonClass += 'bg-green-50 border-green-500 text-green-900'
                  } else if (index === selectedAnswer && !isCorrect) {
                    buttonClass += 'bg-red-50 border-red-500 text-red-900'
                  } else {
                    buttonClass += 'bg-gray-50 border-gray-200 text-gray-500'
                  }
                } else {
                  if (index === selectedAnswer) {
                    buttonClass += 'bg-blue-50 border-blue-500 text-blue-900'
                  } else {
                    buttonClass += 'bg-white border-gray-300 text-gray-800 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={buttonClass}
                  >
                    <div className="flex items-center">
                      <span className="font-semibold mr-3">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      <span>{option}</span>
                      {showExplanation && index === currentQuestion.correctAnswer && (
                        <span className="ml-auto text-green-600">✓</span>
                      )}
                      {showExplanation && index === selectedAnswer && !isCorrect && (
                        <span className="ml-auto text-red-600">✗</span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className={`p-4 rounded-lg mb-6 ${
                isCorrect ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'
              }`}>
                <p className={`font-semibold mb-2 ${
                  isCorrect ? 'text-green-800' : 'text-red-800'
                }`}>
                  {isCorrect ? '✓ Correto!' : '✗ Incorreto'}
                </p>
                <p className="text-gray-700">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              {!showExplanation ? (
                <>
                  <button
                    onClick={handleRestartQuiz}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-smooth"
                  >
                    Sair
                  </button>
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className={`flex-1 px-6 py-3 rounded-lg font-medium transition-smooth ${
                      selectedAnswer === null
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Confirmar Resposta
                  </button>
                </>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-smooth"
                >
                  {currentQuestionIndex < currentQuestions.length - 1 ? 'Próxima Questão →' : 'Ver Resultado'}
                </button>
              )}
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // Belt Selection Screen
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Módulo de Testes</h1>
          <p className="text-xl text-green-100">
            Teste seus conhecimentos e avalie seu aprendizado por nível de faixa
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Escolha o nível da sua faixa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {beltLevels.map((belt) => (
            <Card
              key={belt.id}
              className="cursor-pointer"
              onClick={() => startQuiz(belt.id)}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{belt.emoji}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {belt.name}
                </h3>
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-3 ${belt.color}`}
                >
                  {quizQuestions[belt.id].length} questões
                </div>
                <p className="text-gray-600 text-sm">
                  Teste seus conhecimentos de nível {belt.name.toLowerCase()}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-green-50 border-l-4 border-green-600">
            <h3 className="text-xl font-semibold mb-3 text-green-900 flex items-center">
              <span className="text-2xl mr-2">📝</span>
              Como Funciona
            </h3>
            <ul className="space-y-2 text-green-800">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Escolha o nível da sua faixa atual ou teste um nível superior</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Responda cada questão cuidadosamente</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Veja a explicação após cada resposta</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>No final, veja seu desempenho e revise as respostas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Refaça o teste quantas vezes quiser para melhorar sua pontuação</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Tests
