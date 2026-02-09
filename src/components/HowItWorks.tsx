import { MessageCircle, CalendarDays, Heart } from "lucide-react";

const steps = [
  { icon: MessageCircle, step: "1", title: "Entre em contato", desc: "Envie uma mensagem pelo WhatsApp" },
  { icon: CalendarDays, step: "2", title: "Agende sua avaliação", desc: "Escolha o melhor horário para você" },
  { icon: Heart, step: "3", title: "Receba seu atendimento", desc: "Cuide do seu sorriso com tranquilidade" },
];

const HowItWorks = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 font-body">Simples e rápido</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Como funciona</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {steps.map((s) => (
          <div key={s.step} className="text-center">
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-5">
              <s.icon className="h-8 w-8" />
              <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center font-body">
                {s.step}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 font-display">{s.title}</h3>
            <p className="text-muted-foreground font-body">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
