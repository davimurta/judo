import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Home = () => {
  const quickLinks = [
    {
      title: 'Estudo',
      description: 'Aprenda a teoria do Judô',
      icon: '📚',
      path: '/estudo',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Testes',
      description: 'Teste seus conhecimentos',
      icon: '✍️',
      path: '/testes',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Técnicas',
      description: 'Galeria de técnicas com vídeos',
      icon: '🥋',
      path: '/tecnicas',
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Sobre o Judô',
      description: 'História e filosofia',
      icon: '⛩️',
      path: '/sobre',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  const features = [
    {
      title: 'Conteúdo Completo',
      description: 'Material baseado na apostila oficial do Kodokan',
      icon: '📖',
    },
    {
      title: 'Vídeos Oficiais',
      description: 'Técnicas demonstradas pelo Instituto Kodokan',
      icon: '🎥',
    },
    {
      title: 'Testes Interativos',
      description: 'Avalie seu conhecimento por nível de faixa',
      icon: '🎯',
    },
    {
      title: 'Aprenda no seu ritmo',
      description: 'Estude quando e onde quiser',
      icon: '⏰',
    },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Aprenda Judô
              <br />
              <span className="text-blue-200">柔道を学ぶ</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
              Plataforma completa de aprendizado com teoria, prática e testes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/estudo"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-smooth shadow-lg"
              >
                Começar a Estudar
              </Link>
              <Link
                to="/tecnicas"
                className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-smooth border-2 border-white"
              >
                Ver Técnicas
              </Link>
            </div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-current text-gray-50"
            ></path>
          </svg>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Acesso Rápido
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <Card className="text-center h-full cursor-pointer">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${link.color} flex items-center justify-center text-4xl`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {link.title}
                </h3>
                <p className="text-gray-600">{link.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Por que usar esta plataforma?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Uma experiência completa de aprendizado baseada em material oficial e práticas reconhecidas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para começar sua jornada no Judô?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Explore o conteúdo completo e teste seus conhecimentos
          </p>
          <Link
            to="/estudo"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-smooth shadow-lg"
          >
            Começar Agora
          </Link>
        </Card>
      </section>
    </div>
  )
}

export default Home
