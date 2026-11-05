import { ArrowUpRight, Layers3, MousePointer2, Shapes } from "lucide-react";

const capabilities = [
  { icon: MousePointer2, title: "Intuitive editing", description: "Move, resize, and arrange objects on your canvas." },
  { icon: Layers3, title: "Layer-based workflow", description: "Keep every part of your design organized." },
  { icon: Shapes, title: "Creative elements", description: "Build compositions with text, images, and shapes." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#10100f] text-[#f4f0e8]">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="/" className="text-xl font-semibold tracking-[-0.06em]">
          ART<span className="text-amber-400">MG</span>
        </a>
        <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">
          Creative workspace · In development
        </span>
      </nav>

      <section className="mx-auto grid min-h-[72vh] w-full max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
        <div>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-amber-400">
            Your ideas, your canvas
          </p>
          <h1 className="max-w-3xl text-6xl font-semibold leading-[0.98] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
            Make room for <span className="text-amber-400">creative.</span>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-7 text-white/55">
            ARTMG is being built as a focused creative workspace for turning ideas into visual designs.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-[#17130c]">
              Editor coming soon <ArrowUpRight size={16} />
            </span>
            <span className="text-sm text-white/35">Built with Next.js + Konva</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="relative rounded-2xl border border-white/10 bg-[#191917] p-4 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4">
              <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/20" /></div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">Untitled design</span>
              <span className="text-[10px] text-amber-300">Draft</span>
            </div>
            <div className="grid grid-cols-[54px_1fr_70px] gap-3 py-4">
              <div className="space-y-3">
                {[Layers3, Shapes, MousePointer2].map((Icon, index) => (
                  <div key={index} className="grid aspect-square place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-white/45">
                    <Icon size={17} />
                  </div>
                ))}
              </div>
              <div className="grid min-h-[290px] place-items-center rounded-lg bg-[#292823] p-5">
                <div className="relative aspect-[4/3] w-full max-w-[330px] overflow-hidden bg-[#e9dfcc] p-6 text-[#25231e]">
                  <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-[#d49a45]" />
                  <div className="absolute bottom-[-35px] left-[-20px] h-40 w-40 rotate-[-18deg] rounded-[35%] bg-[#b65f3e]" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">ARTMG / 001</span>
                    <div>
                      <p className="text-4xl font-semibold leading-[0.9] tracking-[-0.07em]">Ideas<br />take shape.</p>
                      <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-black/55">A new creative canvas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg border border-white/10 bg-white/[0.03]" />
                <div className="h-10 rounded-lg border border-white/10 bg-white/[0.03]" />
                <div className="h-10 rounded-lg border border-white/10 bg-white/[0.03]" />
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-2 pt-3 text-[10px] text-white/35">
              <span>Canvas preview</span><span>100%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-6 pb-20 md:grid-cols-3 lg:px-10">
        {capabilities.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-xl border border-white/10 bg-white/[0.025] p-6">
            <Icon className="mb-5 text-amber-400" size={20} />
            <h2 className="text-base font-medium">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/45">{description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
