export default function Contact() {
  return (
    <section id="contato" className="max-w-4xl mx-auto px-8 py-32 text-center border-t border-slate-900">
      <p className="text-blue-500 font-mono mb-4 text-sm tracking-widest uppercase">02. Próximo Passo</p>
      <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">Vamos Conversar?</h2>
      <p className="text-slate-400 mb-12 text-lg leading-relaxed">
        Estou em busca de novas oportunidades e desafios em <span className="text-slate-200">Engenharia de Dados</span> ou <span className="text-slate-200">Automação Python</span>. 
        Se você tem uma proposta ou quer trocar uma ideia, estou à disposição!
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a 
          href="mailto:adriano.robson16@gmail.com" 
          className="px-12 py-5 border-2 border-blue-500 text-blue-500 font-bold rounded-xl hover:bg-blue-500/10 transition-all text-lg"
        >
          Diga um "Olá"
        </a>
        <a 
          href="https://wa.me/5534997795994"
          target="_blank"
          rel="noreferrer"
          className="px-12 py-5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-xl shadow-green-900/20 text-lg"
        >
          WhatsApp
        </a>
      </div>

      <footer className="mt-32 text-slate-600 text-sm font-mono">
        <p>Projetado e Construído por Adriano Robson © 2026</p>
        <p className="mt-2 text-xs">Uberlândia, MG | WSL 2 + React + Tailwind</p>
      </footer>
    </section>
  );
}