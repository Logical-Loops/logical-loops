import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + Brand */}
        <div className="flex items-center">
          <AppLogo size={32} />
          <span className="font-semibold text-sm text-foreground">
            Logical<span className="text-gold-gradient">Loops</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="/" className="hover:text-foreground transition-colors font-medium min-h-[44px] flex items-center">Home</a>
          <a href="#services" className="hover:text-foreground transition-colors font-medium min-h-[44px] flex items-center">Services</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors font-medium min-h-[44px] flex items-center">Portfolio</a>
          <a href="#contact" className="hover:text-foreground transition-colors font-medium min-h-[44px] flex items-center">Contact</a>
        </div>

        {/* Legal */}
        <p className="text-sm text-muted-foreground">
          © 2026 Logical Loops · <a href="#" className="hover:text-foreground transition-colors">Privacy</a> · <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </p>
      </div>
    </footer>
  );
}
