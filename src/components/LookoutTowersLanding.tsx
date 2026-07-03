import { useState, useEffect, useCallback } from "react";
import lookoutTowerAsset from "@/assets/lookout-tower-stowe.jpeg.asset.json";
import heroVideo from "@/assets/hero-web.mp4.asset.json";
import heroLookoutTower from "@/assets/hero-lookout-tower.jpeg.asset.json";
import heroGlassHouse from "@/assets/hero-glass-house.jpeg.asset.json";
import heroPrivateJet from "@/assets/hero-private-jet.jpeg.asset.json";
import redeemAlpine from "@/assets/redeem-alpine.jpeg.asset.json";
import redeemForest from "@/assets/redeem-forest.jpeg.asset.json";
import pjetV2 from "@/assets/pjet-v2.jpeg.asset.json";
import beachVillasImg from "@/assets/beach-villas.jpeg.asset.json";
import glassHousesImg from "@/assets/glass-houses.jpeg.asset.json";
import pillarWriteoffAsset from "@/assets/pillar-writeoff.jpeg.asset.json";
import pillarReturnAsset from "@/assets/pillar-return.jpeg.asset.json";
import pillarTravelAsset from "@/assets/pillar-travel.jpeg.asset.json";
import asset1 from "@/assets/asset-1.jpeg.asset.json";
import asset2 from "@/assets/asset-2.jpeg.asset.json";
import asset3 from "@/assets/asset-3.jpeg.asset.json";
import asset4 from "@/assets/asset-4.jpeg.asset.json";
import asset5 from "@/assets/asset-5.jpeg.asset.json";
import asset6 from "@/assets/asset-6.jpeg.asset.json";
import asset7 from "@/assets/asset-7.jpeg.asset.json";
import asset8 from "@/assets/asset-8.jpeg.asset.json";
import asset9 from "@/assets/asset-9.jpeg.asset.json";
import asset10 from "@/assets/asset-10.jpeg.asset.json";
import asset11 from "@/assets/asset-11.jpeg.asset.json";
import asset12 from "@/assets/asset-12.jpeg.asset.json";
import asset14 from "@/assets/asset-14.jpeg.asset.json";
import asset15 from "@/assets/asset-15.jpeg.asset.json";
import asset16 from "@/assets/asset-16.jpeg.asset.json";
import asset17 from "@/assets/asset-17.jpeg.asset.json";
import asset18 from "@/assets/asset-18.jpeg.asset.json";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  Landmark, ShieldCheck, Percent, TrendingUp, Layers, Wallet,
  Zap, Mail, Plane, CheckCircle2, PlaneTakeoff, Waves, Wind, PlaneLanding,
  Anchor, Sailboat, Ship, Mountain, Car, CarFront, Truck, Radio, Home,
  Leaf, Utensils, Tent, Construction, FileSignature, ShoppingCart, Handshake,
  FileCheck, Scale, AlertTriangle, Gavel, FileText, Ban, Building, Infinity,
  DollarSign, AlertCircle, LogOut, RefreshCw, TreeDeciduous, Lock, Users,
  RotateCcw, ChevronLeft, ChevronRight, X, ArrowRight, Menu,
  Volume2, VolumeX, ChevronDown,
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList,
  PieChart, Pie, Tooltip as RTooltip, Legend as RLegend,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
} as const;

const NAV_LINKS = [
  { href: "#thesis", label: "Thesis" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#tax", label: "Tax Engine" },
  { href: "#opp", label: "Returns" },
  { href: "#travel", label: "Travel" },
  { href: "#exit", label: "Exit" },
  { href: "#destinations", label: "Destinations" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-[#0b120d]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Landmark className={`w-6 h-6 ${scrolled ? "text-brand-olive-light" : "text-white"}`} />
          <span className={`font-semibold tracking-tight ${scrolled ? "text-white" : "text-white"}`}>Lookout Towers Fund</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a href="#access" className="px-4 py-2 text-sm font-medium rounded-full border border-white/40 hover:border-white text-white transition backdrop-blur">View Terms</a>
          <a href="#access" className="px-4 py-2 text-sm font-medium rounded-full bg-[#D4B968] text-[#14261A] hover:bg-[#c9ab54] transition">Request Access</a>
        </div>
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#0b120d]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/85 py-1">{l.label}</a>
            ))}
            <a href="#access" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 text-sm font-medium rounded-full bg-[#D4B968] text-[#14261A] text-center">Request Access</a>
          </div>
        </div>
      )}
    </header>
  );
}

function IconBadge({ icon: Icon, size = "md", tone = "light" }: { icon: any; size?: "sm" | "md" | "lg"; tone?: "light" | "dark" }) {
  const dim = size === "lg" ? "w-16 h-16" : size === "sm" ? "w-11 h-11" : "w-14 h-14";
  const glyph = size === "lg" ? "w-8 h-8" : size === "sm" ? "w-5 h-5" : "w-7 h-7";
  const glowColor =
    tone === "dark" ? "rgba(123,154,75,0.55)" : "rgba(47,74,29,0.45)";
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center ring-1 ring-white/25 bg-[linear-gradient(135deg,#4B6B2F_0%,#2F4A1D_100%)]`}
      style={{
        boxShadow: `0 12px 28px -8px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.18)`,
      }}
    >
      <Icon className={`${glyph} text-white`} strokeWidth={1.5} />
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="relative group bg-brand-noir-card py-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-brand-noir-hover">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
        {value}
      </span>
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-soft">
        {label}
      </p>
      <div className="mt-4 w-8 h-[1px] bg-brand-noir-border group-hover:w-16 transition-all duration-500" />
    </div>
  );
}

function PhotoBanner({ src, alt, height = "h-72 md:h-96", caption }: { src: string; alt: string; height?: string; caption?: string }) {
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${src})`, transform: "scale(1.05)" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,38,26,0.55),rgba(20,38,26,0.2))]" />
      {caption && (
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 pb-8">
            <p className="text-white/90 text-sm uppercase tracking-[0.25em]">{caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionHeader({ eyebrow, title, lead, dark }: { eyebrow: string; title: React.ReactNode; lead?: string; dark?: boolean }) {
  return (
    <motion.div {...fadeIn} className="max-w-3xl mb-14">
      <div className={`text-xs uppercase tracking-[0.2em] font-semibold mb-4 ${dark ? "text-brand-olive-light" : "text-brand-olive"}`}>{eyebrow}</div>
      <h2 className={`text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] ${dark ? "text-white" : "text-brand-text"}`}>{title}</h2>
      {lead && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/70" : "text-brand-muted"}`}>{lead}</p>}
    </motion.div>
  );
}

function Hero() {
  const [muted, setMuted] = useState(true);
  const videoRef = useCallback((node: HTMLVideoElement | null) => {
    if (node) {
      node.muted = muted;
      const p = node.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [muted]);
  return (
    <>
      <section
        id="home"
        className="relative w-screen overflow-hidden"
        style={{ minHeight: "100vh", height: "100vh" }}
      >
        {/* Full-bleed video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo.url}
          autoPlay
          loop
          muted={muted}
          playsInline
          preload="auto"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* Light gradient accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 35%, rgba(212,185,104,0.08) 65%, rgba(0,0,0,0.22) 100%)",
          }}
        />

        {/* Content: bottom-left headline */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-7xl mx-auto px-6 pb-[18vh]">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 text-xs font-medium text-white mb-6">
                <ShieldCheck className="w-4 h-4" strokeWidth={1.75} />
                Reg D · Rule 506(c) · Accredited Investors Only
              </div>
              <h1
                className="font-bold tracking-tight text-white max-w-5xl"
                style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1.1 }}
              >
                <span className="block">Hard Assets.</span>
                <span className="block text-[#D4B968]">100% Depreciation.</span>
                <span className="block">Mailbox Money.</span>
              </h1>
              <p
                className="mt-6 text-lg md:text-xl leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)", maxWidth: 600 }}
              >
                A hospitality-focused equipment fund that acquires depreciable assets — aircraft, marine vessels, lookout towers, and more — leases them to premier operators, and passes through first-year tax write-offs alongside a 12% preferred return.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#access"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#D4B968] text-[#14261A] font-semibold hover:bg-[#c9ab54] transition shadow-lg shadow-black/40"
                >
                  Request Access <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#tax"
                  className="inline-flex items-center px-7 py-3 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white/20 transition"
                >
                  Explore the Tax Engine
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mute toggle */}
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-6 right-6 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur border border-white/25 text-white flex items-center justify-center transition"
        >
          {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>

        {/* Scroll indicator */}
        <a
          href="#pillars"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/70 hover:text-white transition"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </section>

      {/* Stat bar — seamlessly continues the dark gradient */}
      <section className="relative bg-[#0b120d] border-b border-white/10">
        <div
          aria-hidden
          className="absolute inset-x-0 -top-16 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #0b120d 100%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-noir-border border border-brand-noir-border rounded-2xl overflow-hidden">
            <StatCard value="100%" label="Bonus Depreciation" />
            <StatCard value="12%" label="Preferred Return" />
            <StatCard value="18" label="Asset Classes" />
            <StatCard value="6%" label="Monthly Cash" />
          </div>
        </div>
      </section>
    </>
  );
}

function Pillars() {
  const pillars = [
    { icon: Zap, title: "100% First-Year Write-Off", body: "P.L. 119-21 permanently restored §168(k) bonus depreciation. Qualifying personal property placed in service on or after Jan 19, 2025 is fully deductible in Year 1 — no phase-down, no dollar cap, no sunset.", bg: pillarWriteoffAsset.url },
    { icon: Mail, title: "12% Preferred Return", body: "6% paid monthly in cash — direct to your account. 6% in annual travel credits redeemable through Interval International and RCI. Consistent, predictable, and tied to hard-asset lease income.", bg: pillarReturnAsset.url },
    { icon: Plane, title: "Invest. Write Off. Travel.", body: "Your travel credits unlock a global network of resorts, villas, and experiences through Interval International and RCI — the same platforms used by the world's premier hospitality brands.", bg: pillarTravelAsset.url },
  ];
  return (
    <section id="pillars" className="py-20 bg-brand-sage border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            {...fadeIn}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl p-10 border transition-shadow duration-300 hover:shadow-2xl"
            style={{ borderColor: "rgba(75,107,47,0.15)", backgroundColor: "#ffffff" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${p.bg})`, opacity: 0.22, filter: "blur(2px)" }}
              aria-hidden
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(247,248,245,0.88) 60%, rgba(75,107,47,0.10) 100%)" }}
              aria-hidden
            />
            <div className="relative">
              <div className="mb-6 relative inline-flex">
                <div className="absolute inset-0 -m-2 rounded-full bg-brand-olive/25 blur-xl" aria-hidden />
                <div className="relative"><IconBadge icon={p.icon} size="lg" /></div>
              </div>
              <h3 className="text-xl font-bold tracking-[0.01em] text-brand-text mb-3">{p.title}</h3>
              <p className="text-brand-muted text-[15px]" style={{ lineHeight: 1.6 }}>{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Thesis() {
  const points = [
    { title: "Permanent Law", body: "P.L. 119-21 removed the uncertainty of sunset provisions. Investors can plan multi-year tax strategies with confidence that §168(k) will not phase down." },
    { title: "Experiential Demand", body: "Post-pandemic travel spending has permanently shifted toward unique, high-touch experiences. Lookout towers, private charters, and off-grid stays command 3–5× the nightly rate of standard lodging." },
    { title: "Asset-Backed Security", body: "Every dollar invested is backed by a tangible, titled asset. Personal property depreciates faster and qualifies for immediate write-off — giving investors both income and tax shelter." },
    { title: "True-Lease Structure", body: "The fund retains ownership and residual risk, leasing assets to operators. This preserves the fund as tax owner, enabling full depreciation pass-through via K-1." },
    { title: "Diversified Portfolio", body: "18 asset classes across aviation, marine, ground transport, lodging, food & beverage, and development — spread across multiple geographies and operators." },
  ];
  const stats = [
    { label: "Legal Authority", value: "P.L. 119-21 · Permanent" },
    { label: "Effective Date", value: "Jan 19, 2025+" },
    { label: "Depreciation Rate", value: "100% Year 1" },
    { label: "Annual Dollar Cap", value: "None (Unlike §179)" },
  ];
  return (
    <section id="thesis" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Investment Thesis"
          title="Where Tax Law Meets Hospitality Hard Assets"
          lead="The fund is purpose-built at the intersection of three durable trends: permanent bonus depreciation, the experiential travel boom, and institutional demand for hard-asset income."
        />
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {points.map((p, i) => (
            <motion.div key={p.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.05 }} className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brand-olive flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-brand-text mb-1">{p.title}</h4>
                <p className="text-brand-muted text-[15px] leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeIn} className="mt-16 relative">
          <div className="hidden md:block absolute left-8 right-8 top-8 h-px bg-gradient-to-r from-transparent via-brand-olive/40 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center bg-white border border-brand-border rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative -mt-14 mb-4 w-16 h-16 rounded-full bg-[linear-gradient(135deg,#4B6B2F_0%,#2F4A1D_100%)] text-white flex items-center justify-center font-bold text-lg ring-4 ring-white shadow-[0_10px_25px_-6px_rgba(47,74,29,0.5)]">
                  {i + 1}
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-2">{s.label}</div>
                <div className="font-semibold text-brand-text text-sm">{s.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const PORTFOLIO_HERO_IMAGES = [
  { src: heroLookoutTower.url, caption: "Lookout Tower · Blue Ridge" },
  { src: heroGlassHouse.url, caption: "Glass House Retreat" },
  { src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1600&q=80", caption: "Miami Yacht Charter" },
  { src: pjetV2.url, caption: "Private Jet Fleet" },
];

function HeroCarousel({ slides }: { slides: { src: string; caption: string }[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);
  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);
  return (
    <div className="relative rounded-xl overflow-hidden border border-brand-border">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="relative flex-[0_0_100%] aspect-[16/7] bg-brand-sage">
              <img src={s.src} alt={s.caption} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white font-medium text-lg">{s.caption}</div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => embla?.scrollPrev()} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow" aria-label="Previous">
        <ChevronLeft className="w-5 h-5 text-brand-text" />
      </button>
      <button onClick={() => embla?.scrollNext()} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow" aria-label="Next">
        <ChevronRight className="w-5 h-5 text-brand-text" />
      </button>
      <div className="absolute bottom-4 right-6 flex gap-1.5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => scrollTo(i)} className={`w-2 h-2 rounded-full transition ${selected === i ? "bg-white w-6" : "bg-white/50"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

type Asset = { icon: any; name: string; desc: string; tag: string; cat: string };
type AssetWithImg = Asset & { img: string; imgPos?: string };
const ASSETS: AssetWithImg[] = [
  { icon: Plane, name: "Private Jets", desc: "Charter fleet for premium guest arrivals. Leased to licensed FAA Part 135 operators.", tag: "5-Yr MACRS", cat: "Air", img: asset1.url },
  { icon: PlaneTakeoff, name: "Cirrus Vision SF50", desc: "Single-engine personal jet. Ideal for short-hop resort access and owner-operator charters.", tag: "5-Yr MACRS", cat: "Air", img: asset2.url },
  { icon: Waves, name: "Sea Plane", desc: "Amphibious arrival to waterfront and island resort properties.", tag: "5-Yr MACRS", cat: "Air", img: asset3.url },
  { icon: Wind, name: "Helicopter", desc: "Scenic transfers and emergency access for remote mountain properties.", tag: "5-Yr MACRS", cat: "Air", img: asset4.url },
  { icon: PlaneLanding, name: "King Air / Pilatus", desc: "Twin-engine turboprops serving high-altitude mountain resort airstrips.", tag: "5-Yr MACRS", cat: "Air", img: asset5.url },
  { icon: Anchor, name: "Center Console Boat", desc: "Bald Head Island coastal access. Ferry and charter operations for island resort guests.", tag: "5-Yr MACRS", cat: "Marine", img: asset6.url },
  { icon: Sailboat, name: "Yacht (Miami)", desc: "Luxury charter yacht in South Florida waters. Leased to licensed operator at market rate.", tag: "5-Yr MACRS", cat: "Marine", img: asset7.url },
  { icon: Ship, name: "Pontoon Boats", desc: "Lake and river leisure fleet for resort waterfront properties.", tag: "5-Yr MACRS", cat: "Marine", img: asset8.url },
  { icon: Mountain, name: "Snowmobiles", desc: "Winter adventure fleet for mountain resort operators. Guided tour and rental programs.", tag: "5-Yr MACRS", cat: "Ground", img: asset9.url },
  { icon: Car, name: "UTVs", desc: "Side-by-side utility vehicles for off-road resort exploration and property management.", tag: "5-Yr MACRS", cat: "Ground", img: asset10.url },
  { icon: CarFront, name: "Luxury Golf Carts", desc: "Premium electric golf carts for resort and island community transportation.", tag: "5-Yr MACRS", cat: "Ground", img: asset11.url },
  { icon: Truck, name: "Chauffeur G-Wagons", desc: "Mercedes-Benz G-Class fleet for VIP ground transfers and resort chauffeur services.", tag: "5-Yr MACRS", cat: "Ground", img: asset12.url },
  { icon: Radio, name: "Lookout Towers", desc: "Relocatable timber-frame towers converted to premium STR accommodations. Personal property — 100% bonus eligible.", tag: "Personal Property", cat: "Lodging", img: lookoutTowerAsset.url, imgPos: "75% 50%" },
  { icon: Home, name: "Ood Glass Houses", desc: "Prefabricated relocatable glass-house STR units. Not permanently affixed — personal property classification.", tag: "Personal Property", cat: "Lodging", img: asset14.url },
  { icon: Leaf, name: "Hydroponic Farm", desc: "On-site food production for resort farm-to-table operations.", tag: "5-Yr MACRS", cat: "Development", img: asset15.url },
  { icon: Utensils, name: "Food Trailer", desc: "Mobile F&B service across properties.", tag: "5-Yr MACRS", cat: "Development", img: asset16.url },
  { icon: Tent, name: "Zook Cabins", desc: "Employee housing units supporting on-site staffing.", tag: "5-Yr MACRS", cat: "Development", img: asset17.url },
  { icon: Construction, name: "Excavators & Dump Trucks", desc: "Development equipment rounding out the full hospitality ecosystem.", tag: "5-Yr MACRS", cat: "Development", img: asset18.url },
];
const CATS = ["All", "Air", "Marine", "Ground", "Lodging", "Development"];

function Portfolio() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<typeof ASSETS[number] | null>(null);
  const filtered = active === "All" ? ASSETS : ASSETS.filter((a) => a.cat === active);
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected]);
  return (
    <section id="portfolio" className="py-24 bg-brand-sage border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Portfolio"
          title="18 Asset Classes. One Guest Journey."
          lead="Every asset is mapped to a stage of the premium hospitality experience — from the moment a guest departs to the moment they arrive home."
        />
        <motion.div {...fadeIn} className="mb-10">
          <HeroCarousel slides={PORTFOLIO_HERO_IMAGES} />
        </motion.div>
        <div className="flex flex-wrap gap-2 mb-8">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                active === c
                  ? "bg-brand-olive text-white border-brand-olive"
                  : "bg-white text-brand-text border-brand-border hover:border-brand-olive"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
          {filtered.map((a) => (
            <motion.div
              key={a.name}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={() => setSelected(a)}
              className="group bg-white border border-brand-border rounded-xl overflow-hidden hover:shadow-2xl hover:border-brand-olive-light transition-all cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={a.img}
                  alt={a.name}
                  loading="lazy"
                  className="absolute inset-x-0 top-0 h-[65%] w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: a.imgPos || "center" }}
                />
                <div className="absolute inset-x-0 top-0 h-[65%] bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3">
                  <IconBadge icon={a.icon} size="sm" />
                </div>
                <span className={`absolute top-3 right-3 text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded backdrop-blur ${a.tag === "Personal Property" ? "bg-brand-olive/90 text-white" : "bg-white/85 text-brand-olive-dark"}`}>
                  {a.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[35%] p-5 flex flex-col justify-center">
                  <h4 className="font-semibold text-brand-text mb-1.5">{a.name}</h4>
                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-2">{a.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            key="asset-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur transition"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative w-full aspect-[16/9] bg-brand-sage overflow-hidden">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: selected.imgPos || "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <IconBadge icon={selected.icon} size="sm" />
                </div>
                <span className={`absolute bottom-4 left-4 text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur ${selected.tag === "Personal Property" ? "bg-brand-olive/90 text-white" : "bg-white/90 text-brand-olive-dark"}`}>
                  {selected.tag}
                </span>
                <span className="absolute bottom-4 right-4 text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded bg-white/90 text-brand-olive-dark backdrop-blur">
                  {selected.cat}
                </span>
              </div>
              <div className="p-8 overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-brand-text mb-3">{selected.name}</h3>
                <p className="text-brand-muted leading-relaxed">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: FileSignature, title: "Investor Subscribes", body: "Accredited investors subscribe under Reg D, Rule 506(c). Capital is pooled into the fund LLC and deployed into qualifying depreciable assets within the first operating year." },
    { icon: ShoppingCart, title: "Fund Acquires Assets", body: "The fund purchases 18 classes of hospitality equipment — aircraft, marine vessels, towers, vehicles, and structures. All assets are titled to the fund, preserving the fund as tax owner and enabling pass-through depreciation." },
    { icon: Handshake, title: "Assets Are Leased to Operators", body: "Each asset is leased under a true lease: rent payments (not interest), FMV purchase options only, lease terms shorter than useful life, and genuine residual risk retained by the fund." },
    { icon: FileCheck, title: "Investors Receive K-1 + Distributions", body: "Each year: (a) Schedule K-1 with allocated depreciation deductions; (b) 6% annual cash preferred return paid monthly; and (c) 6% annual travel credits redeemable through Interval International / RCI." },
  ];
  const terms = [
    ["Fund Structure", "Delaware LLC"],
    ["Offering Type", "Reg D, Rule 506(c)"],
    ["Investor Eligibility", "Accredited Only"],
    ["Tax Document", "Schedule K-1"],
    ["Cash Distribution", "Monthly (6% Pref.)"],
    ["Travel Credits", "Annual (6% Pref.)"],
    ["Investor Term", "1–3 Years"],
    ["Asset Hold Period", "4–10 Years"],
  ];
  return (
    <section id="how" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="How It Works"
          title="From Capital Deployment to K-1 in Your Hands"
          lead="A four-step process from subscription to annual tax benefit — built on a true-lease structure that preserves depreciation at the fund level."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {steps.map((s, i) => (
            <motion.div key={s.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white border border-brand-border rounded-xl p-6 relative hover:shadow-xl transition-shadow">
              <div className="text-xs font-semibold text-brand-olive mb-4">STEP {i + 1}</div>
              <div className="mb-4"><IconBadge icon={s.icon} /></div>
              <h4 className="font-semibold text-brand-text mb-2">{s.title}</h4>
              <p className="text-sm text-brand-muted leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <motion.div {...fadeIn} className="bg-white border border-brand-border rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-brand-sage border-b border-brand-border">
              <h4 className="font-semibold text-brand-text">Deal Terms</h4>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {terms.map(([k, v]) => (
                  <tr key={k} className="border-b border-brand-border last:border-0">
                    <td className="px-6 py-3 text-brand-muted">{k}</td>
                    <td className="px-6 py-3 text-right font-medium text-brand-text">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <div className="space-y-4">
            <motion.div {...fadeIn} className="bg-white border-l-4 border-l-brand-olive border border-brand-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-5 h-5 text-brand-olive" />
                <h4 className="font-semibold text-brand-text">True Lease Guardrails</h4>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">All payments structured as rent (not loan interest); purchase options are Fair Market Value only (no $1 buyouts); lease terms shorter than useful life; fund retains genuine residual risk. True-lease opinion obtained from tax counsel prior to each asset deployment.</p>
            </motion.div>
            <motion.div {...fadeIn} className="bg-white border-l-4 rounded-lg p-6 border border-brand-border" style={{ borderLeftColor: "#B8955A" }}>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-brand-gold" />
                <h4 className="font-semibold text-brand-text">Passive Activity Disclosure</h4>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">Equipment leasing is generally a passive activity under IRC §469. Depreciation losses will typically be passive losses, deductible against passive income. Consult your tax advisor regarding your specific passive loss position.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TaxEngine() {
  const cards = [
    { icon: Gavel, title: "Legal Authority", sub: "P.L. 119-21 + IRC §168(k)", body: "Permanently restored 100% bonus depreciation. No sunset. No phase-down. Effective for qualifying property placed in service on or after January 19, 2025." },
    { icon: FileText, title: "Pass-Through", sub: "Schedule K-1 Allocation", body: "Depreciation deductions allocated to investors pro-rata via Schedule K-1. Deductions can exceed first-year income, creating an NOL that carries forward indefinitely." },
    { icon: Ban, title: "No Dollar Cap", sub: "Unlike §179 — No Limit", body: "Section 179 caps deductions at ~$1.2M annually. Bonus depreciation under §168(k) has no annual dollar cap. A $5M investment generates $5M in Year 1 depreciation." },
    { icon: Building, title: "Qualifying Property", sub: "Personal Property — Not Real Estate", body: "All 18 fund asset classes are personal property. Real property does not qualify for bonus depreciation — our portfolio is specifically constructed to maximize §168(k) eligibility." },
  ];
  const chartData = [
    { name: "Capital Deployed", value: 500000, color: "#5C6355" },
    { name: "§168(k) Depreciation", value: -500000, color: "#4B6B2F" },
    { name: "6% Cash Dist.", value: 30000, color: "#7B9A4B" },
    { name: "6% Travel Credits", value: 30000, color: "#B8955A" },
    { name: "Net Taxable Y1", value: -440000, color: "#2F4A1D" },
  ];
  const tags = [
    "5-Year MACRS — Vehicles & Marine",
    "5-Year MACRS — Snowmobiles & ATVs",
    "Personal Property — Lookout Towers",
    "Personal Property — Ood Glass Houses",
    "5-Year MACRS — Food Trailer & Farm",
  ];
  return (
    <section id="tax" className="py-24 bg-brand-sage border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Tax Engine"
          title="100% Depreciation. Permanent Law. No Cap."
          lead="P.L. 119-21 permanently restored bonus depreciation under IRC §168(k). For qualifying property placed in service on or after January 19, 2025, the write-off is 100% — in the year of placement."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {cards.map((c, i) => (
            <motion.div key={c.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.06 }} className="bg-white border border-brand-border rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4"><IconBadge icon={c.icon} /></div>
              <div className="text-xs uppercase tracking-wider text-brand-muted">{c.title}</div>
              <div className="font-semibold text-brand-text mt-1 mb-3">{c.sub}</div>
              <p className="text-sm text-brand-muted leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div {...fadeIn} className="lg:col-span-2 bg-white border border-brand-border rounded-lg p-6">
            <div className="flex items-baseline justify-between mb-1">
              <h4 className="font-semibold text-brand-text">Illustrative $500,000 Investment</h4>
              <span className="text-xs text-brand-muted">Year 1</span>
            </div>
            <p className="text-sm text-brand-muted mb-6">Directional flow of capital, depreciation, distributions, and net taxable position.</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 60 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#5C6355" }} interval={0} angle={-15} textAnchor="end" />
                  <YAxis tick={{ fontSize: 11, fill: "#5C6355" }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {chartData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                    <LabelList dataKey="value" position="top" formatter={(v: number) => `${v < 0 ? "-" : "+"}$${Math.abs(v).toLocaleString()}`} style={{ fontSize: 10, fill: "#1A1F16" }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 pt-6 border-t border-brand-border">
              <div className="text-xs uppercase tracking-wider text-brand-muted mb-1">Potential Tax Shelter (37% bracket)</div>
              <div className="text-4xl font-bold text-brand-olive tracking-tight">~$162,800</div>
              <p className="text-xs text-brand-muted mt-3">Illustrative only. Assumes passive loss absorption. Consult your tax advisor. Past performance not indicative of future results.</p>
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="bg-brand-dark rounded-lg p-6 text-white">
            <Infinity className="w-6 h-6 text-brand-olive-light mb-4" />
            <h4 className="font-semibold mb-3">The NOL Carry-Forward Advantage</h4>
            <p className="text-sm text-white/70 leading-relaxed mb-5">When depreciation deductions exceed your first-year income from the fund, the excess becomes a Net Operating Loss — carried forward indefinitely to shelter future income. Under current law, NOLs generated by the fund carry forward with no expiration date.</p>
            <p className="text-xs text-white/50 leading-relaxed">§1245 Recapture applies upon asset disposition. Investors may elect to roll forward into a new fund vintage to defer recapture. Estate/dynasty trust holding enables §1014 basis step-up at death, potentially eliminating recapture entirely.</p>
          </motion.div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="px-3 py-1.5 text-xs font-medium rounded-full bg-white border border-brand-border text-brand-text">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Returns() {
  const terms = [
    ["Preferred Return", "12% Annual"],
    ["Cash Component", "6% Monthly"],
    ["Travel Component", "6% Annual"],
    ["Investor Term", "1–3 Years"],
    ["Rollover", "Available"],
    ["Recapture Deferral", "Roll to new vintage"],
    ["Recapture Elimination", "§1014 step-up at death"],
  ];
  const splitData = [
    { name: "6% Cash (Monthly)", value: 6, color: "#4B6B2F" },
    { name: "6% Travel Credits (Annual)", value: 6, color: "#B8955A" },
  ];
  return (
    <section id="opp" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="The Opportunity" title="The 12% Preferred Return" />
        <motion.div {...fadeIn} className="mb-12 bg-white border border-brand-border rounded-xl p-8 shadow-md">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={splitData} innerRadius={70} outerRadius={110} paddingAngle={2} dataKey="value" startAngle={90} endAngle={-270}>
                    {splitData.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <RTooltip formatter={(v: number) => `${v}%`} />
                  <RLegend verticalAlign="bottom" iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-brand-olive font-semibold mb-3">Return Composition</div>
              <h4 className="text-3xl font-bold text-brand-text tracking-tight mb-4">12% Preferred, Split Two Ways</h4>
              <p className="text-brand-muted leading-relaxed">Half of your annual return arrives as monthly cash — direct deposit, predictable, tied to hard-asset lease income. The other half becomes travel credits redeemable through Interval International and RCI's global resort network.</p>
            </div>
          </div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <motion.div {...fadeIn} className="bg-white border border-brand-border rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-brand-sage border-b border-brand-border">
              <h4 className="font-semibold text-brand-text">Deal Terms</h4>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {terms.map(([k, v]) => (
                  <tr key={k} className="border-b border-brand-border last:border-0">
                    <td className="px-6 py-3 text-brand-muted">{k}</td>
                    <td className="px-6 py-3 text-right font-medium text-brand-text">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <div className="space-y-4">
            <motion.div {...fadeIn} className="bg-white border border-brand-border rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4"><IconBadge icon={DollarSign} /></div>
              <div className="text-5xl font-bold text-brand-text tracking-tight">6%</div>
              <div className="text-lg font-semibold text-brand-text mt-2">Cash Return</div>
              <p className="text-sm text-brand-muted mt-2 leading-relaxed">Paid monthly, direct deposit. Tied to hard-asset lease income from the fund's operator network.</p>
            </motion.div>
            <motion.div {...fadeIn} className="bg-white border border-brand-border rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4"><IconBadge icon={Plane} /></div>
              <div className="text-5xl font-bold text-brand-text tracking-tight">6%</div>
              <div className="text-lg font-semibold text-brand-text mt-2">Travel Credits</div>
              <p className="text-sm text-brand-muted mt-2 leading-relaxed">Redeemable annually through Interval International and RCI. Access to thousands of global resort properties.</p>
            </motion.div>
          </div>
        </div>
        <motion.div {...fadeIn} className="mt-14 bg-brand-dark rounded-xl p-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-bold text-white tracking-tight">Ready to Deploy Capital?</h3>
            <p className="text-white/70 mt-2">Request the Private Placement Memorandum.</p>
          </div>
          <a href="#access" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-olive-light text-white font-medium hover:bg-brand-olive transition">
            Request the PPM <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const TRAVEL_IMAGES = [
  { src: redeemAlpine.url, caption: "Alpine Retreats" },
  { src: redeemForest.url, caption: "Forest Lookouts" },
  { src: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1400&q=80", caption: "Island Resorts" },
  { src: beachVillasImg.url, caption: "Beach Villas" },
  { src: glassHousesImg.url, caption: "Glass Houses" },
];

function Travel() {
  const rows = [
    ["Platform", "Interval International / RCI"],
    ["Credit Value", "6% of Capital Annually"],
    ["Redemption", "Global Resort Network"],
    ["Taxability", "Taxable as Ordinary Income"],
  ];
  return (
    <section id="travel" className="py-24 bg-brand-sage border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Travel Integration" title="Your Return. Redeemable Anywhere." />
        <motion.div {...fadeIn} className="mb-10">
          <HeroCarousel slides={TRAVEL_IMAGES} />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div {...fadeIn}>
            <p className="text-lg text-brand-muted leading-relaxed">
              Travel credits are issued annually equal to 6% of invested capital. Redeemable through Interval International and RCI — the global timeshare exchange networks used by Marriott, Hyatt, Hilton, and IHG.
            </p>
            <div className="mt-6 bg-white border-l-4 rounded-lg p-6 border border-brand-border" style={{ borderLeftColor: "#B8955A" }}>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-brand-gold" />
                <h4 className="font-semibold text-brand-text">Personal Use Guardrail</h4>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">Investors receive travel credits redeemable through third-party platforms (Interval International/RCI), NOT free use of fund assets. Direct personal use of fund aircraft, yacht, or vessels by investors is prohibited. Market-rate chartering is permitted as business income.</p>
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="bg-white border border-brand-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {rows.map(([k, v]) => (
                  <tr key={k} className="border-b border-brand-border last:border-0">
                    <td className="px-6 py-4 text-brand-muted">{k}</td>
                    <td className="px-6 py-4 text-right font-medium text-brand-text">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Exit() {
  const paths = [
    { icon: LogOut, title: "Asset Sale at Term", body: "Fund sells assets at FMV. §1245 recapture on depreciation taken. Recapture taxed as ordinary income. Investors receive pro-rata proceeds." },
    { icon: RefreshCw, title: "Roll Forward", body: "At term end, investors may elect to roll their interest into the next fund vintage. Defers §1245 recapture. Depreciation clock resets on new assets." },
    { icon: TreeDeciduous, title: "Estate / Dynasty Trust", body: "Holding fund interest in a dynasty trust enables §1014 basis step-up at death. Recapture is permanently eliminated. Ideal for multi-generational wealth planning." },
  ];
  return (
    <section id="exit" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Exit Strategy" title="Three Paths to Exit" />
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {paths.map((p, i) => (
            <motion.div key={p.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white border border-brand-border rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4"><IconBadge icon={p.icon} /></div>
              <h4 className="font-semibold text-brand-text mb-2">{p.title}</h4>
              <p className="text-sm text-brand-muted leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg p-6 border" style={{ backgroundColor: "#FBF6ED", borderColor: "#E8D9BE" }}>
            <div className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: "#8A6E3E" }}>Redeem</div>
            <h4 className="font-semibold text-brand-text mb-3">Take the exit</h4>
            <ul className="text-sm text-brand-muted space-y-1.5">
              <li>· Return of capital + accrued preferred</li>
              <li>· Simpler tax reporting at term end</li>
              <li>· Recapture crystallized in exit year</li>
            </ul>
          </div>
          <div className="rounded-lg p-6 border border-brand-olive-light/40 bg-brand-olive/5">
            <div className="text-xs uppercase tracking-wider font-semibold text-brand-olive mb-2">Roll Forward</div>
            <h4 className="font-semibold text-brand-text mb-3">Continue the compounding</h4>
            <ul className="text-sm text-brand-muted space-y-1.5">
              <li>· Defer §1245 recapture</li>
              <li>· Fresh depreciation on new vintage</li>
              <li>· Continued preferred return + travel credits</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Risks() {
  const risks = [
    { icon: AlertTriangle, title: "Tax Risk", body: "IRS may challenge bonus depreciation eligibility. If disallowed, fund recomputes at fund level and investors bear tax, interest, and penalty burden." },
    { icon: Lock, title: "Liquidity Risk", body: "Fund interests are illiquid. No public market. Investor terms of 1–3 years with limited redemption rights. Asset holds may extend 4–10 years." },
    { icon: Users, title: "Operator Risk", body: "Lease income depends on operator performance. Defaults, vacancies, or underperformance may reduce distributions below preferred return." },
    { icon: RotateCcw, title: "Recapture Risk", body: "§1245 recapture upon asset disposition is taxed as ordinary income. Recapture may exceed cash distributions received." },
  ];
  return (
    <section id="risks" className="relative py-24 bg-brand-dark overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.15]"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=2000&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/85 to-brand-dark" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader dark eyebrow="Risk Factors" title="Material Risk Factors" />
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {risks.map((r, i) => (
            <motion.div key={r.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.06 }} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
              <div className="mb-3"><IconBadge icon={r.icon} /></div>
              <h4 className="font-semibold text-white mb-2">{r.title}</h4>
              <p className="text-sm text-white/70 leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeIn} className="bg-white/5 border border-white/10 rounded-lg p-6">
          <p className="text-xs text-white/60 leading-relaxed">
            This material is for informational purposes only and does not constitute an offer to sell or solicitation to buy securities. Offered only to accredited investors under Reg D Rule 506(c). Past performance is not indicative of future results. Consult your tax, legal, and financial advisors before investing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const DESTINATIONS = [
  { title: "Bald Head Island, NC", sub: "Island Access", tags: ["Center Console Boat", "Golf Carts", "Lookout Tower"], img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80" },
  { title: "Miami, FL", sub: "South Florida Waters", tags: ["Yacht Charter", "Seaplane", "G-Wagons"], img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1200&q=80" },
  { title: "Blue Ridge Mountains", sub: "Mountain Escapes", tags: ["Helicopter", "King Air", "Snowmobiles", "UTVs", "Lookout Tower"], img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" },
  { title: "Backcountry / Off-Grid", sub: "The Untamed", tags: ["Ood Glass Houses", "Pontoon Boats", "Food Trailer", "Hydroponic Farm"], img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80" },
];

function Destinations() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  return (
    <section id="destinations" className="py-24 bg-brand-sage border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Destinations" title="Where the Assets Operate" />
        <div className="grid md:grid-cols-2 gap-5">
          {DESTINATIONS.map((d, i) => (
            <motion.button
              key={d.title}
              {...fadeIn}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[16/10] rounded-xl overflow-hidden border border-brand-border text-left"
            >
              <img src={d.img} alt={d.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-xs uppercase tracking-wider text-white/70 mb-1">{d.sub}</div>
                <h4 className="text-2xl font-semibold text-white mb-3">{d.title}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {d.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-[10px] font-medium rounded bg-white/15 backdrop-blur text-white border border-white/20">{t}</span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)} aria-label="Close">
            <X className="w-6 h-6" />
          </button>
          <img src={DESTINATIONS[lightbox].img} alt={DESTINATIONS[lightbox].title} className="max-w-6xl max-h-[85vh] rounded-lg" />
        </div>
      )}
    </section>
  );
}

function AccessForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", range: "", source: "", accredited: false });
  const stats = [
    ["Offering Type", "Reg D 506(c)"],
    ["Min. Investment", "Contact for Details"],
    ["Preferred Return", "12% Annual"],
    ["Cash Distributions", "Monthly"],
    ["Travel Credits", "Annual"],
  ];
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.accredited) {
      toast.error("Please confirm accredited investor status.");
      return;
    }
    if (!form.firstName || !form.email) {
      toast.error("Please complete the required fields.");
      return;
    }
    toast.success("Request received. The fund team will be in touch shortly.");
    setForm({ firstName: "", lastName: "", email: "", phone: "", range: "", source: "", accredited: false });
  };
  return (
    <section id="access" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Get Access" title="Request the Private Placement Memorandum" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-brand-border border border-brand-border rounded-lg overflow-hidden mb-10">
          {stats.map(([k, v]) => (
            <div key={k} className="bg-white p-5">
              <div className="text-[10px] uppercase tracking-wider text-brand-muted mb-1.5">{k}</div>
              <div className="font-semibold text-brand-text text-sm">{v}</div>
            </div>
          ))}
        </div>
        <motion.form {...fadeIn} onSubmit={onSubmit} className="bg-white border border-brand-border rounded-xl p-8 grid md:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="fn">First Name</Label>
            <Input id="fn" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="ln">Last Name</Label>
            <Input id="ln" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="em">Email</Label>
            <Input id="em" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="ph">Phone</Label>
            <Input id="ph" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2" />
          </div>
          <div>
            <Label>Investment Range</Label>
            <Select value={form.range} onValueChange={(v) => setForm({ ...form, range: v })}>
              <SelectTrigger className="mt-2"><SelectValue placeholder="Select a range" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="u100">Under $100K</SelectItem>
                <SelectItem value="100-250">$100K–$250K</SelectItem>
                <SelectItem value="250-500">$250K–$500K</SelectItem>
                <SelectItem value="500-1m">$500K–$1M</SelectItem>
                <SelectItem value="1m+">$1M+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="src">How did you hear about us</Label>
            <Input id="src" value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} className="mt-2" />
          </div>
          <div className="md:col-span-2 flex items-start gap-3 pt-2">
            <Checkbox id="acc" checked={form.accredited} onCheckedChange={(v) => setForm({ ...form, accredited: v === true })} className="mt-1" />
            <Label htmlFor="acc" className="text-sm text-brand-muted leading-relaxed font-normal">
              I confirm I am an accredited investor as defined under SEC Rule 501(a) and understand this offering is available only to accredited investors.
            </Label>
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="text-xs text-brand-muted max-w-md">Your information is kept strictly confidential. This is not a commitment to invest.</p>
            <Button type="submit" className="bg-brand-olive hover:bg-brand-olive-dark text-white px-6 py-6 h-auto">
              Request the PPM
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Fund", links: ["Investment Thesis", "Asset Portfolio", "Tax Engine", "Investor Returns"] },
    { title: "Legal", links: ["Risk Factors", "PPM Request", "Accredited Investor Definition", "Privacy Policy"] },
    { title: "Contact", links: ["Request Access", "Schedule a Call", "Investor Relations"] },
  ];
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Landmark className="w-6 h-6 text-brand-olive-light" />
            <span className="font-semibold">Lookout Towers Fund</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">Hard Assets. Tax Efficiency. Mailbox Money.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs uppercase tracking-wider font-semibold text-white/60 mb-4">{c.title}</div>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l}><a href="#access" className="text-sm text-white/80 hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-4">
          <p className="text-xs text-white/40">© 2025 Lookout Towers Fund LLC · All Rights Reserved</p>
          <p className="text-xs text-white/40 leading-relaxed max-w-4xl">
            This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. Securities offered through private placement under Regulation D, Rule 506(c) of the Securities Act of 1933. Available to accredited investors only. Investing involves risk including loss of principal.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LookoutTowersLanding() {
  return (
    <div className="bg-white text-brand-text min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Thesis />
        <Portfolio />
        <PhotoBanner src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80" alt="Coastal hospitality" caption="Where hard assets meet the horizon" />
        <HowItWorks />
        <TaxEngine />
        <Returns />
        <Travel />
        <PhotoBanner src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=80" alt="Forest retreats" caption="Off-grid. On-portfolio." />
        <Exit />
        <Risks />
        <Destinations />
        <AccessForm />
      </main>
      <Footer />
    </div>
  );
}