import dentistPortrait from "@/assets/dentist-portrait.jpg";

const About = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        <div className="flex-shrink-0">
          <img
            src={dentistPortrait}
            alt="Dr. João Silva - Cirurgião-Dentista"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-xl"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 font-body">Sobre o Dentista</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dr. João Silva</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            Sou cirurgião-dentista com foco em oferecer um atendimento próximo, confortável e de qualidade,
            sempre priorizando o bem-estar e a confiança dos meus pacientes. Acredito que cada pessoa merece
            um cuidado individualizado e transparente, em um ambiente acolhedor e moderno.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
