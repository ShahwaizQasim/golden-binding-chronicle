import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { useState, type FormEvent } from "react";

import heroImage from "@/assets/golden-binding-hero.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Golden Binding — Recognition for Stories Made to Last" },
      {
        name: "description",
        content:
          "Discover distinguished books, authors, publishers, and The Golden Binding awards.",
      },
      { property: "og:title", content: "The Golden Binding — Stories Made to Last" },
      {
        property: "og:description",
        content: "Recognition for remarkable books and the people shaping publishing today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const navItems = ["Awards", "Winners", "Discover", "Publishers", "Features", "Blogs", "Resources", "About"];

const recognition = [
  {
    type: "Author",
    title: "Mara Ellison",
    copy: "On memory, landscape, and the quiet architecture of a novel.",
    monogram: "ME",
    tone: "bg-brand-green text-brand-paper",
  },
  {
    type: "Book",
    title: "The Cartographer’s Winter",
    copy: "A tender, precisely drawn story of inheritance and belonging.",
    monogram: "CW",
    tone: "bg-brand-oxblood text-brand-paper",
  },
  {
    type: "Publisher",
    title: "Northbank Editions",
    copy: "Independent publishing shaped by editorial courage and lasting craft.",
    monogram: "NE",
    tone: "bg-brand-ink text-brand-paper",
  },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const viewAnimation = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={viewAnimation}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="The Golden Binding home">
      <span className="flex size-9 items-center justify-center border border-brand-gold font-display text-xl font-semibold text-brand-gold">
        GB
      </span>
      <span className="font-display text-xl font-semibold text-brand-paper sm:text-2xl">The Golden Binding</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-brand-paper/20 text-brand-paper">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <Wordmark />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          <a href="#top" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-gold">Home</a>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-brand-gold">
              {item}
            </a>
          ))}
          <button type="button" className="p-2 transition-colors hover:text-brand-gold" aria-label="Search">
            <Search className="size-4" aria-hidden="true" />
          </button>
          <Button asChild variant="hero" className="min-h-10 px-4">
            <a href="#awards">Enter the Awards</a>
          </Button>
        </nav>
        <button
          type="button"
          className="p-2 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-brand-paper/20 bg-brand-green xl:hidden"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1 px-5 py-5">
              {["Home", ...navItems].map((item) => (
                <a key={item} href={item === "Home" ? "#top" : `#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="border-b border-brand-paper/10 py-3 text-sm uppercase tracking-[0.14em]">
                  {item}
                </a>
              ))}
              <Button asChild variant="hero" className="mt-4">
                <a href="#awards" onClick={() => setOpen(false)}>Enter the Awards</a>
              </Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function HomePage() {
  return (
    <main id="top" className="overflow-hidden bg-background">
      <Header />
      <section className="relative flex min-h-[780px] items-end overflow-hidden bg-brand-green text-brand-paper lg:min-h-[860px]">
        <img src={heroImage} alt="A considered stack of clothbound books" width={1600} height={1200} className="absolute inset-0 size-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-brand-green/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-brand-green/90 to-brand-green/20" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 pt-36 lg:px-10 lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold" /> Recognition for stories made to last
            </p>
            <h1 className="max-w-3xl font-display text-6xl font-semibold leading-[0.88] sm:text-7xl lg:text-[8.5rem]">
              Stories made<br />to last.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-brand-paper/85 sm:text-lg">
              Recognizing remarkable books, discovering distinctive voices and exploring the people shaping publishing today.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg"><a href="#recognition">Explore Recognition <ArrowRight className="size-4" /></a></Button>
              <Button asChild variant="heroOutline" size="lg"><a href="#discover">Discover Books</a></Button>
            </div>
          </div>
        </motion.div>
      </section>

      <AwardsSection />
      <RecognitionSection />
      <PublishersSection />
      <NewsletterSection />
      <footer className="border-t border-brand-border bg-brand-paper px-5 py-8 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 The Golden Binding</p><p>Recognition for stories made to last.</p>
        </div>
      </footer>
    </main>
  );
}

function AwardsSection() {
  return (
    <section id="awards" className="bg-brand-paper px-5 py-24 lg:px-10 lg:py-32">
      <Reveal className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 border-y border-brand-border py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-oxblood">The 2026 Golden Binding Awards</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-none sm:text-6xl">Books that deserve to be remembered.</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="max-w-xl text-base leading-8 text-muted-foreground">Celebrating singular work across fiction, non-fiction, debut writing and independent publishing. Entries for the 2026 awards are now open.</p>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-brand-border pt-6">
                <div><dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Entries close</dt><dd className="mt-2 font-display text-2xl">30 September</dd></div>
                <div><dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Awarded</dt><dd className="mt-2 font-display text-2xl">8 Categories</dd></div>
              </dl>
            </div>
            <a href="#awards" className="group flex size-28 shrink-0 items-center justify-center rounded-full border border-brand-gold text-center font-display text-sm font-semibold text-brand-ink transition-colors hover:bg-brand-gold" aria-label="View the awards">
              View<br />Awards <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function RecognitionSection() {
  return (
    <section id="recognition" className="bg-brand-parchment px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-oxblood">Featured recognition</p><h2 className="mt-4 font-display text-5xl font-semibold sm:text-6xl">People, pages, imprints.</h2></div>
          <a href="#discover" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]">View all stories <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
        </Reveal>
        <div id="discover" className="grid gap-px bg-brand-border md:grid-cols-3">
          {recognition.map((item, index) => (
            <Reveal key={item.type} className="h-full bg-brand-parchment">
              <article className="group h-full p-6 sm:p-8">
                <div className={`flex aspect-[4/3] items-center justify-center ${item.tone}`}>
                  <span className="border-y border-brand-gold px-5 py-3 font-display text-5xl font-semibold text-brand-gold transition-transform duration-500 group-hover:scale-105">{item.monogram}</span>
                </div>
                <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-oxblood">{String(index + 1).padStart(2, "0")} / {item.type}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.copy}</p>
                <a href="#recognition" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em]">Read feature <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PublishersSection() {
  const publishers = ["Alpaca Authors", "Parker Publishers", "The Collingwood Press"];
  return (
    <section id="publishers" className="bg-brand-green px-5 py-20 text-brand-paper lg:px-10 lg:py-24">
      <Reveal className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-4 border-b border-brand-paper/20 pb-8 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">Publishers to know</p><h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Independent spirit. Enduring work.</h2></div><a href="#publishers" className="text-xs font-bold uppercase tracking-[0.16em]">View directory</a></div>
        <div className="divide-y divide-brand-paper/20">
          {publishers.map((publisher, index) => (
            <a key={publisher} href="#publishers" className="group grid items-center gap-4 py-7 sm:grid-cols-[4rem_1fr_auto]">
              <span className="text-xs text-brand-gold">0{index + 1}</span>
              <span className="font-display text-3xl font-semibold sm:text-5xl">{publisher}</span>
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-2" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function NewsletterSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    setStatus(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "success" : "error");
  }
  return (
    <section id="blogs" className="bg-brand-oxblood px-5 py-24 text-brand-paper lg:px-10 lg:py-32">
      <Reveal className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">The Binding Note</p><h2 className="mt-4 max-w-xl font-display text-5xl font-semibold leading-none sm:text-6xl">A considered letter for curious readers.</h2></div>
        <div>
          <p className="max-w-xl leading-7 text-brand-paper/75">New books, distinctive voices, publisher profiles and award news—delivered with care, twice a month.</p>
          {status === "success" ? (
            <p className="mt-8 border-t border-brand-gold pt-6 font-display text-2xl" role="status">Thank you. Your first Binding Note will arrive soon.</p>
          ) : (
            <form className="mt-8" onSubmit={submit} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input id="newsletter-email" name="email" type="email" autoComplete="email" aria-describedby={status === "error" ? "newsletter-error" : undefined} aria-invalid={status === "error"} placeholder="Your email address" className="min-h-14 flex-1 border border-brand-paper/50 bg-transparent px-5 text-brand-paper outline-none placeholder:text-brand-paper/50 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold" />
                <Button type="submit" variant="hero" size="lg">Subscribe <ArrowRight className="size-4" /></Button>
              </div>
              {status === "error" ? <p id="newsletter-error" className="mt-3 text-sm text-brand-paper" role="alert">Please enter a valid email address.</p> : null}
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}