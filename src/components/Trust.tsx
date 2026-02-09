import { ShieldCheck } from "lucide-react";

const Trust = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
        <ShieldCheck className="h-8 w-8" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Compromisso com sua saúde</h2>
      <p className="text-lg text-muted-foreground leading-relaxed font-body">
        Cada paciente é atendido com atenção aos detalhes, seguindo rigorosos padrões de higiene e segurança.
        Meu compromisso é proporcionar um atendimento transparente, ético e focado no seu bem-estar.
      </p>
    </div>
  </section>
);

export default Trust;
