import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Study from './pages/Study'
import Tests from './pages/Tests'
import Techniques from './pages/Techniques'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estudo" element={<Study />} />
          <Route path="/testes" element={<Tests />} />
          <Route path="/tecnicas" element={<Techniques />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
