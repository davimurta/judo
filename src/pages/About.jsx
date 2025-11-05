import Card from '../components/Card'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            柔道
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Caminho da Suavidade
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Uma arte marcial que transcende o combate físico, desenvolvendo corpo, mente e caráter
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introduction */}
        <Card className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">O que é Judô?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Judô (柔道) significa "Caminho da Suavidade" e é muito mais do que uma arte marcial ou esporte de combate.
            É um sistema completo de educação física, mental e moral criado por Jigoro Kano em 1882 no Japão.
          </p>
          <p className="text-gray-700 leading-relaxed">
            O Judô ensina que a verdadeira força não vem da resistência bruta, mas da flexibilidade,
            adaptação e uso inteligente da energia. Como o salgueiro que se curva na tempestade mas não quebra,
            o judoca aprende a ceder para vencer.
          </p>
        </Card>

        {/* Jigoro Kano */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl">
                師
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-3 text-gray-800">Jigoro Kano (嘉納治五郎)</h2>
              <p className="text-lg text-gray-700 mb-3">
                <strong>1860 - 1938</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                O fundador do Judô nasceu em 28 de outubro de 1860 em Mikage, Japão.
                De constituição física frágil na juventude, Kano começou a estudar Jujutsu para fortalecer
                seu corpo e espírito.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Após dominar as escolas Tenjin Shinyo-ryu e Kito-ryu de Jujutsu, Kano percebeu que
                poderia criar algo melhor: um sistema que não apenas ensinasse técnicas de luta,
                mas desenvolvesse o caráter e contribuísse para a sociedade.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Assim nasceu o Judô em 1882, quando Kano fundou o Instituto Kodokan.
                Sua visão transformou uma arte marcial em um método educacional completo que hoje é
                praticado em mais de 200 países.
              </p>
            </div>
          </div>
        </Card>

        {/* Principles */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Princípios Fundamentais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Seiryoku Zenyo */}
            <Card className="bg-blue-50 border-t-4 border-blue-600">
              <div className="text-center mb-4">
                <p className="text-4xl font-bold text-blue-600 mb-2">精力善用</p>
                <h3 className="text-2xl font-bold text-gray-800">Seiryoku Zen'yō</h3>
                <p className="text-lg text-gray-600 italic">Máxima eficiência com mínimo esforço</p>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>
                  Este é o princípio técnico fundamental do Judô. Significa usar a energia física
                  e mental da forma mais eficiente possível.
                </p>
                <p className="font-medium">No Judô:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Usar a força do oponente a seu favor</li>
                  <li>Aplicar a técnica correta no momento certo</li>
                  <li>Não desperdiçar energia</li>
                  <li>Buscar máxima eficiência em cada movimento</li>
                </ul>
                <p className="font-medium">Na Vida:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Aplicar esforços de forma inteligente</li>
                  <li>Buscar eficiência em todas as atividades</li>
                  <li>Desenvolver corpo e mente harmoniosamente</li>
                </ul>
              </div>
            </Card>

            {/* Jita Kyoei */}
            <Card className="bg-purple-50 border-t-4 border-purple-600">
              <div className="text-center mb-4">
                <p className="text-4xl font-bold text-purple-600 mb-2">自他共栄</p>
                <h3 className="text-2xl font-bold text-gray-800">Jita Kyōei</h3>
                <p className="text-lg text-gray-600 italic">Prosperidade e benefício mútuos</p>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>
                  Este é o princípio moral e social do Judô, criado por Jigoro Kano para guiar
                  a conduta dos praticantes.
                </p>
                <p className="font-medium">Significado:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ji (自) = si mesmo</li>
                  <li>Ta (他) = outros</li>
                  <li>Kyōei (共栄) = prosperidade mútua</li>
                </ul>
                <p className="font-medium">O princípio ensina:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>O progresso individual deve beneficiar todos</li>
                  <li>Ajudar os parceiros a melhorar</li>
                  <li>Compartilhar conhecimento</li>
                  <li>Contribuir para uma sociedade melhor</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Values */}
        <Card className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Valores do Judô
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { emoji: '🙏', title: 'Respeito', desc: 'Rei - Respeitar a todos' },
              { emoji: '💪', title: 'Coragem', desc: 'Yūki - Enfrentar desafios' },
              { emoji: '🎯', title: 'Honestidade', desc: 'Seijitsu - Ser verdadeiro' },
              { emoji: '🤝', title: 'Amizade', desc: 'Yūjō - Apoiar os outros' },
              { emoji: '🧘', title: 'Autocontrole', desc: 'Jiko seigyo - Dominar-se' },
              { emoji: '⚖️', title: 'Modéstia', 'desc': 'Kenson - Ser humilde' },
              { emoji: '🎓', title: 'Honra', desc: 'Meiyo - Viver com dignidade' },
              { emoji: '🌟', title: 'Cortesia', desc: 'Reigi - Ser educado' },
            ].map((value, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-4xl mb-2">{value.emoji}</div>
                <h4 className="font-semibold text-gray-800 mb-1">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Kodokan */}
        <Card className="mb-8 bg-gradient-to-r from-red-50 to-orange-50">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            O Instituto Kodokan (講道館)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            O Kodokan, fundado em 1882, é a sede mundial do Judô. O nome significa
            "lugar para estudar o caminho" (Ko = estudar, Do = caminho, Kan = lugar).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Iniciado em um pequeno espaço com apenas 12 tatames e 9 alunos, o Kodokan
            cresceu e hoje ocupa um edifício de 8 andares em Tokyo, Japão, com centenas
            de tatames e milhares de praticantes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            O Kodokan continua sendo a autoridade máxima do Judô, preservando os ensinamentos
            de Jigoro Kano e promovendo a arte ao redor do mundo.
          </p>
        </Card>

        {/* Olympic Sport */}
        <Card className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Judô no Mundo e nas Olimpíadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">🌍 Judô Mundial</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Praticado em mais de 200 países</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Milhões de praticantes em todo o mundo</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Uma das artes marciais mais populares</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Presente em todos os continentes</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">🥇 Esporte Olímpico</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Estreou em Tokyo 1964</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Primeira arte marcial asiática olímpica</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Categorias masculinas e femininas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Competições em diversas categorias de peso</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Comece sua Jornada no Judô
          </h2>
          <p className="text-xl mb-6 text-purple-100">
            O Judô é mais que um esporte - é um caminho de desenvolvimento pessoal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/estudo"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-smooth"
            >
              Estudar Teoria
            </a>
            <a
              href="/tecnicas"
              className="inline-block bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-smooth border-2 border-white"
            >
              Ver Técnicas
            </a>
          </div>
        </Card>

        {/* Credits */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">
            Material baseado na Apostila Kodokan Judo 2023
          </p>
          <p className="text-sm">
            Vídeos cortesia do{' '}
            <a
              href="https://www.youtube.com/@KodokanJudoInstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Kodokan Judo Institute
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
