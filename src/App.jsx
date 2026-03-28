import Experience from "./components/Experience";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      {/* Navegação Simples */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <span className="text-xl font-bold tracking-tighter text-blue-400">AR.</span>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
          <a href="#contato" className="hover:text-white transition-colors">Contato</a>
        </div>
      </nav>

      {/* Seção Hero */}
      <main className="max-w-6xl mx-auto px-8 pt-20 pb-32">
        <div className="max-w-3xl">
          <h2 className="text-blue-500 font-mono mb-4 text-lg">Olá, meu nome é</h2>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
            Adriano Robson.
          </h1>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-400 mb-8 leading-tight">
            Transformo dados em automação e eficiência.
          </h3>
          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
            Sou graduando em <span className="text-slate-200">Sistemas de Informação na UFU</span>. 
            Com experiência em <span className="text-slate-200">automação RPA</span> no Tribanco, 
            foco em criar soluções robustas utilizando Python, React e Engenharia de Dados.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-blue-500/20">
              Ver Projetos
            </button>
            <button className="border border-slate-700 hover:bg-slate-800 text-slate-200 px-8 py-4 rounded-lg font-bold transition-all">
              Baixar Currículo
            </button>
          </div>
        </div>
      </main>
      <Experience />
    </div>
  )
}

export default App