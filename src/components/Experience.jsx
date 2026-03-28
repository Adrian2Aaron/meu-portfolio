const experiences = [
  {
    company: "Tribanco (Banco Triângulo S.A.)",
    role: "Estagiário em Automação de Processos e Dados",
    period: "Maio 2025 – Outubro 2025",
    description: "Desenvolvimento de robôs RPA com Python (Selenium, PyAutoGUI) para automação de tarefas burocráticas e integração de dados com SQL.",
    tags: ["Python", "Selenium", "SQL", "RPA"]
  },
  {
    company: "UFU - Univ. Federal de Uberlândia",
    role: "Bacharelado em Sistemas de Informação",
    period: "2023 – Dezembro 2027 (Previsão)",
    description: "Foco em Engenharia de Software, Banco de Dados e Desenvolvimento de Sistemas. Membro ativo da comunidade acadêmica de tecnologia.",
    tags: ["Eng. Software", "SWEBOK", "Algoritmos"]
  },
  {
    company: "IFTM",
    role: "Técnico em Computação Gráfica",
    period: "Concluído",
    description: "Formação técnica com eixo tecnológico em informática, estabelecendo a base lógica e visual para a carreira.",
    tags: ["Informática", "Design", "Lógica"]
  }
];

export default function Experience() {
  return (
    <section id="sobre" className="max-w-6xl mx-auto px-8 py-24 border-t border-slate-900">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <span className="text-blue-500 font-mono text-xl">01.</span> Experiência e Formação
      </h2>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all group">
            <span className="text-sm text-blue-400 font-mono">{exp.period}</span>
            <h3 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition-colors">{exp.company}</h3>
            <p className="text-slate-200 text-sm font-medium mb-4">{exp.role}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{exp.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {exp.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-800 rounded text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}