import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Judo Learning</h3>
            <p className="text-sm leading-relaxed">
              Plataforma educacional completa para o aprendizado do Judô,
              com técnicas, teoria e prática baseadas no método Kodokan.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-smooth">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/estudo" className="hover:text-primary-400 transition-smooth">
                  Estudo
                </Link>
              </li>
              <li>
                <Link to="/testes" className="hover:text-primary-400 transition-smooth">
                  Testes
                </Link>
              </li>
              <li>
                <Link to="/tecnicas" className="hover:text-primary-400 transition-smooth">
                  Técnicas
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.youtube.com/@KodokanJudoInstitute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-smooth"
                >
                  Kodokan YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://kodokanjudoinstitute.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-smooth"
                >
                  Kodokan Official
                </a>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-primary-400 transition-smooth">
                  Sobre o Judô
                </Link>
              </li>
            </ul>
          </div>

          {/* Princípios */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Princípios</h3>
            <div className="text-sm space-y-3">
              <p>
                <span className="text-primary-400 font-medium">精力善用</span>
                <br />
                Seiryoku Zen'yō<br />
                <span className="text-xs">Máxima eficiência</span>
              </p>
              <p>
                <span className="text-primary-400 font-medium">自他共栄</span>
                <br />
                Jita Kyōei<br />
                <span className="text-xs">Prosperidade mútua</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Judo Learning Platform. Material baseado na Apostila Kodokan Judo.</p>
          <p className="mt-2 text-xs text-gray-500">
            Desenvolvido para fins educacionais - Sem fins lucrativos
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
