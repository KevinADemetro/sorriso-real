const Footer = () => (
  <footer className="py-10 bg-foreground text-primary-foreground/70">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-primary-foreground font-display font-semibold text-lg">Dr. João Silva</p>
          <p className="text-sm mt-1">Cirurgião-Dentista — CRO 00000</p>
          <p className="text-sm">São Paulo, SP</p>
        </div>
        <div className="text-center md:text-right text-sm space-y-1">
          <p>Contato: (11) 99999-9999</p>
          <p>contato@drjoaosilva.com.br</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Dr. João Silva. Todos os direitos reservados.</p>
        <p className="mt-2">
          Este site respeita a sua privacidade. Nenhum dado pessoal é coletado sem o seu consentimento,
          em conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
