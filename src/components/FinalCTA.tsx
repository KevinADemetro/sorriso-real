import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

const FinalCTA = () => (
  <section className="py-24 bg-primary">
    <div className="container mx-auto px-6 text-center max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Agende sua avaliação e cuide do seu sorriso
      </h2>
      <p className="text-primary-foreground/80 text-lg mb-10 font-body">
        Entre em contato agora e dê o primeiro passo para um sorriso mais saudável.
      </p>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="hero" size="lg" className="h-14 px-10 rounded-full text-lg gap-3">
          <Phone className="!h-5 !w-5" />
          Falar no WhatsApp
        </Button>
      </a>
    </div>
  </section>
);

export default FinalCTA;
