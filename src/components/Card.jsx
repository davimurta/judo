/**
 * Componente Card reutilizável
 * Usado para exibir conteúdo em cards com sombras suaves
 */
const Card = ({ children, className = '', hover = true, onClick }) => {
  const hoverClass = hover ? 'hover:shadow-lg hover:-translate-y-1' : ''

  return (
    <div
      className={`bg-white rounded-lg shadow-soft transition-smooth p-6 ${hoverClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card
