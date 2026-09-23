import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

import { AwardsHeader } from "@/components/awards-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "The Golden Binding Awards 2026 — Categories & Entry" },
      { name: "description", content: "Explore award categories, eligibility, judging, dates, fees, and entry details for The Golden Binding Awards 2026." },
      { property: "og:title", content: "The Golden Binding Awards 2026" },
      { property: "og:description", content: "Recognition for singular books, writers, and publishers. Entries are now open." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AwardsPage,
});

const categories = [
  ["Book of the Year", "For an exceptional work of fiction or non-fiction with lasting literary distinction."],
  ["Debut Book", "Recognizing a first published work of remarkable assurance and originality."],
  ["Independent Press", "For publishing vision, editorial courage and a defining contribution to the year."],
  ["New Voice", "Celebrating an emerging author whose work signals an important new perspective."],
  ["Children’s Book", "For storytelling that delights, challenges and stays with younger readers."],
  ["Book Design", "Recognizing the art of the book through exceptional cover and production design."],
];

const timeline = [["18 May", "Entries open"], ["30 Sep", "Entries close"], ["12 Jan", "Finalists announced"], ["26 Mar", "Winners revealed"]];

function Reveal({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}>{children}</motion.div>;
}

function AwardsPage() {
  return (
    <main className="bg-background text-foreground">
      <AwardsHeader />
      <section className="bg-brand-green px-5 pb-24 pt-20 text-brand-paper lg:px-10 lg:pb-32 lg:pt-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">The 2026 Golden Binding Awards</p>
            <h1 className="mt-6 max-w-4xl font-display text-6xl font-semibold leading-[0.9] sm:text-7xl lg:text-8xl">Recognition that endures.</h1>
          </div>
          <div className="border-l border-brand-gold pl-6">
            <p className="max-w-xl text-lg leading-8 text-brand-paper/80">An annual programme celebrating remarkable books, distinctive voices and the publishers whose conviction brings them to readers.</p>
            <Button asChild variant="hero" size="lg" className="mt-8"><Link to="/awards/enter">Begin your entry <ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-oxblood">Award categories</p><h2 className="mt-4 max-w-2xl font-display text-5xl font-semibold sm:text-6xl">Every path to an enduring book.</h2></Reveal>
          <div className="mt-12 grid gap-px bg-brand-border md:grid-cols-2 lg:grid-cols-3">
            {categories.map(([title, copy], index) => (
              <article key={title} className="group min-h-72 bg-brand-parchment p-7 transition-colors hover:bg-brand-paper sm:p-9">
                <div className="flex items-center justify-between"><span className="text-xs font-semibold text-brand-oxblood">0{index + 1}</span><span className="size-3 rounded-full border border-brand-gold bg-brand-gold/20" aria-hidden="true" /></div>
                <h3 className="mt-14 font-display text-3xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-parchment px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2">
          <Reveal><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-oxblood">Eligibility</p><h2 className="mt-4 font-display text-5xl font-semibold">Is your book eligible?</h2><p className="mt-6 max-w-xl leading-8 text-muted-foreground">Entries are welcomed from publishers and authors for books first published in English between 1 January and 31 December 2026.</p>
            <ul className="mt-8 space-y-4">{["Print or professionally produced digital editions", "Traditionally and independently published work", "Available to readers by the closing date", "One primary category per submitted title"].map((item) => <li key={item} className="flex gap-3 border-t border-brand-border pt-4"><Check className="mt-1 size-4 shrink-0 text-brand-oxblood" /><span>{item}</span></li>)}</ul>
          </Reveal>
          <Reveal><div className="bg-brand-green p-8 text-brand-paper sm:p-12"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">Judging</p><h2 className="mt-4 font-display text-5xl font-semibold">Read with care.</h2><p className="mt-6 leading-8 text-brand-paper/75">Each eligible title is considered by an independent panel of writers, editors, booksellers and critics. Judging centres on originality, craft, coherence and lasting resonance.</p><dl className="mt-10 grid grid-cols-2 gap-px bg-brand-paper/20"><div className="bg-brand-green py-5"><dt className="text-xs uppercase text-brand-gold">Entry fee</dt><dd className="mt-2 font-display text-3xl">£75</dd></div><div className="bg-brand-green py-5 pl-5"><dt className="text-xs uppercase text-brand-gold">Review rounds</dt><dd className="mt-2 font-display text-3xl">Three</dd></div></dl></div></Reveal>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1440px]"><Reveal><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-oxblood">Key dates</p><h2 className="mt-4 font-display text-5xl font-semibold">The road to recognition.</h2></Reveal><div className="mt-12 grid gap-px bg-brand-border sm:grid-cols-2 lg:grid-cols-4">{timeline.map(([date, title], i) => <div key={title} className="bg-background p-7"><span className="text-xs text-brand-oxblood">0{i + 1}</span><p className="mt-10 font-display text-4xl font-semibold">{date}</p><p className="mt-2 text-sm uppercase tracking-[0.14em] text-muted-foreground">{title}</p></div>)}</div></div>
      </section>

      <section className="bg-brand-paper px-5 py-24 lg:px-10"><div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[0.6fr_1fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-oxblood">Questions</p><h2 className="mt-4 font-display text-5xl font-semibold">Before you enter.</h2></div><div className="divide-y divide-brand-border border-y border-brand-border">{[["Can authors enter directly?", "Yes. Authors, publishers and authorised representatives may submit eligible titles."], ["Are international entries accepted?", "Yes, provided the submitted edition is published in English and available to readers."], ["What does the fee include?", "The fee covers administration and consideration through every relevant judging round."]].map(([q, a]) => <details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between font-semibold">{q}<ChevronDown className="size-4 transition-transform group-open:rotate-180" /></summary><p className="max-w-xl pt-4 leading-7 text-muted-foreground">{a}</p></details>)}</div></div></section>

      <section className="bg-brand-oxblood px-5 py-20 text-center text-brand-paper lg:px-10 lg:py-24"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">Entries close 30 September 2026</p><h2 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-semibold sm:text-6xl">Place an exceptional book before our judges.</h2><Button asChild variant="hero" size="lg" className="mt-9"><Link to="/awards/enter">Start an entry <ArrowRight className="size-4" /></Link></Button></section>
    </main>
  );
}