import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function AwardsHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-brand-paper/20 bg-brand-green text-brand-paper">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="The Golden Binding home">
          <span className="flex size-9 items-center justify-center border border-brand-gold font-display text-xl font-semibold text-brand-gold">GB</span>
          <span className="font-display text-xl font-semibold sm:text-2xl">The Golden Binding</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Awards navigation">
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-brand-gold">Home</Link>
          <Link to="/awards" activeProps={{ className: "text-brand-gold" }} className="text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-brand-gold">Awards</Link>
          <Button asChild variant="hero" className="min-h-10 px-4"><Link to="/awards/enter">Enter the Awards</Link></Button>
        </nav>
        <button type="button" className="p-2 md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-brand-paper/20 px-5 py-5 md:hidden" aria-label="Mobile awards navigation">
          <div className="grid gap-1">
            <Link to="/" className="border-b border-brand-paper/10 py-3 text-xs font-semibold uppercase tracking-[0.14em]">Home</Link>
            <Link to="/awards" onClick={() => setOpen(false)} className="border-b border-brand-paper/10 py-3 text-xs font-semibold uppercase tracking-[0.14em]">Awards</Link>
            <Button asChild variant="hero" className="mt-4"><Link to="/awards/enter">Enter the Awards</Link></Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}