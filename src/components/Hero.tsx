import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import heroImage from "@/assets/hero-dentist.jpg";

const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroImage}
      alt="Dr. João Silva em seu consultório odontológico"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
        Cuidando do seu sorriso com atenção e profissionalismo
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 font-light max-w-2xl mx-auto">
        Atendimento odontológico personalizado para você e sua família
      </p>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="hero" size="lg" className="h-14 px-10 rounded-full text-lg gap-3">
          <Phone className="!h-5 !w-5" />
          Agendar avaliação pelo WhatsApp
        </Button>
      </a>
    </div>
  </section>
);

export default Hero;
