# 柔道 Judo Learning Platform

Uma plataforma completa de aprendizado de Judô com teoria, técnicas, testes e vídeos oficiais do Kodokan.

## 🥋 Sobre o Projeto

Esta plataforma educacional foi desenvolvida para ajudar estudantes de Judô de todos os níveis, desde iniciantes até faixas pretas, a aprofundar seus conhecimentos sobre a arte marcial criada por Jigoro Kano.

### Recursos Principais

- **📚 Módulo de Estudo**: Conteúdo teórico completo organizado por tópicos
  - História do Judô e Jigoro Kano
  - Princípios e filosofia (Seiryoku Zen'yō, Jita Kyōei)
  - Fundamentos (Rei-ho, Shintai, Shisei, Kumikata, Kuzushi, Ukemi)
  - Divisões técnicas (Nage-waza, Katame-waza, Gokyo)
  - Sistema de graduação

- **✍️ Módulo de Testes**: Quizzes interativos por nível de faixa
  - 7 níveis disponíveis (Branca até Preta)
  - 8 questões por nível
  - Explicações detalhadas para cada resposta
  - Sistema de pontuação e revisão

- **🎥 Galeria de Técnicas**: Demonstrações em vídeo
  - 40 técnicas do Gokyo (5 grupos com 8 técnicas cada)
  - Técnicas de Ne-waza (Osae-komi, Shime, Kansetsu)
  - Vídeos oficiais do Instituto Kodokan no YouTube
  - Descrição em japonês e português de cada técnica

- **⛩️ Sobre o Judô**: História e filosofia
  - Biografia de Jigoro Kano
  - Princípios fundamentais
  - Valores do Judô
  - Instituto Kodokan
  - Judô olímpico

## 🚀 Como Usar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/davimurta/judo.git
cd judo
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos estarão na pasta `dist/` e podem ser hospedados em qualquer servidor web estático.

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite 5** - Build tool e dev server ultra-rápido
- **Tailwind CSS 3** - Framework CSS utility-first
- **React Router 6** - Roteamento client-side
- **YouTube Embed API** - Integração com vídeos do Kodokan

## 📁 Estrutura do Projeto

```
judo/
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Header.jsx     # Cabeçalho com navegação
│   │   ├── Footer.jsx     # Rodapé com links
│   │   └── Card.jsx       # Componente de card
│   │
│   ├── pages/             # Páginas da aplicação
│   │   ├── Home.jsx       # Página inicial
│   │   ├── Study.jsx      # Módulo de estudo
│   │   ├── Tests.jsx      # Módulo de testes
│   │   ├── Techniques.jsx # Galeria de técnicas
│   │   └── About.jsx      # Sobre o Judô
│   │
│   ├── data/              # Dados estruturados
│   │   ├── techniques.js  # Técnicas do Gokyo e Ne-waza
│   │   ├── studyContent.js # Conteúdo teórico
│   │   ├── quizData.js    # Questões dos testes
│   │   └── terminology.js # Terminologia japonesa
│   │
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada
│   └── index.css          # Estilos globais
│
├── public/                # Arquivos estáticos
├── index.html             # HTML principal
├── package.json           # Dependências
├── vite.config.js         # Configuração Vite
└── tailwind.config.js     # Configuração Tailwind
```

## 🎨 Design

O design segue uma estética moderna e minimalista:

- **Paleta de cores**: Branco, cinza claro, azul e toques de vermelho
- **Tipografia**: Inter e Poppins (leve e legível)
- **UI/UX**: Cards com sombras suaves, transições smooth, responsivo mobile-first
- **Acessibilidade**: Contraste adequado e navegação clara

## 📚 Conteúdo

Todo o conteúdo foi extraído e estruturado a partir da **Apostila Kodokan Judo 2023**, garantindo precisão e autenticidade das informações.

Os vídeos são do canal oficial do [Kodokan Judo Institute](https://www.youtube.com/@KodokanJudoInstitute) no YouTube.

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você deseja:
- Adicionar mais técnicas
- Corrigir erros
- Melhorar o design
- Adicionar novos recursos

Sinta-se à vontade para abrir uma issue ou pull request.

## 📝 Licença

Este projeto é de código aberto e está disponível para fins educacionais. O conteúdo é baseado em material público do Kodokan e os vídeos pertencem aos seus respectivos proprietários.

## 📧 Contato

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**精力善用 - 自他共栄**
*Seiryoku Zen'yō - Jita Kyōei*
Máxima eficiência, Prosperidade mútua
