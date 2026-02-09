import { Smile, Sun, Wrench, AlignLeft, Palette } from "lucide-react";

const services = [
  { icon: Smile, title: "Limpeza e prevenção" },
  { icon: Sun, title: "Clareamento dental" },
  { icon: Wrench, title: "Implantes dentários" },
  { icon: AlignLeft, title: "Ortodontia" },
  { icon: Palette, title: "Estética dental" },
];

const Services = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 font-body">Especialidades</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Serviços odontológicos</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="flex items-center gap-4 bg-muted/40 rounded-xl p-5 hover:bg-muted transition-colors">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <s.icon className="h-6 w-6" />
            </div>
            <span className="text-foreground font-medium text-lg font-body">{s.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
