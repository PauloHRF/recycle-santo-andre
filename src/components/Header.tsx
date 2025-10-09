import { Recycle } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-gradient-hero p-2">
            <Recycle className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">EcoSanto André</h1>
            <p className="text-xs text-muted-foreground">Pontos de Reciclagem</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
