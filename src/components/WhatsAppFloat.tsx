import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";

const WhatsAppFloat = () => (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50"
    aria-label="Falar no WhatsApp"
  >
    <Button variant="whatsapp" size="lg" className="rounded-full h-14 w-14 p-0 shadow-2xl">
      <Phone className="!h-6 !w-6" />
    </Button>
  </a>
);

export default WhatsAppFloat;
