import { UserCheck, ShieldCheck, CalendarCheck, Sparkles } from "lucide-react";

const benefits = [
  { icon: UserCheck, title: "Atendimento individualizado", desc: "Cada paciente recebe atenção exclusiva e um plano de tratamento personalizado." },
  { icon: ShieldCheck, title: "Ambiente moderno e seguro", desc: "Consultório equipado com tecnologia atual e rigorosos protocolos de biossegurança." },
  { icon: CalendarCheck, title: "Facilidade de agendamento", desc: "Agende sua consulta de forma rápida e prática pelo WhatsApp." },
  { icon: Sparkles, title: "Técnicas atualizadas", desc: "Formação contínua para oferecer os melhores tratamentos disponíveis." },
];

const Benefits = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 font-body">Por que escolher</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Seu sorriso em boas mãos</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b) => (
          <div key={b.title} className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
              <b.icon className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 font-display">{b.title}</h3>
            <p className="text-muted-foreground text-sm font-body">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
