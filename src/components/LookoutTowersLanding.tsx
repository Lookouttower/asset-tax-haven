import { useState, useEffect, useCallback, useRef } from "react";
import lookoutTowerAsset from "@/assets/lookout-tower-stowe.jpeg.asset.json";
import heroVideo from "@/assets/hero.mp4.asset.json";
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
import pillarWriteoffV2 from "@/assets/pillar-writeoff-v2.jpeg.asset.json";
import pillarIncomeV2 from "@/assets/pillar-income-v2.jpeg.asset.json";
import pillarTravelV2 from "@/assets/pillar-travel-v2.jpeg.asset.json";
import pillar1Documents from "@/assets/pillar-1-documents.jpg.asset.json";
import pillar2Seal from "@/assets/pillar-2-seal.jpg.asset.json";
import pillar3Villa from "@/assets/pillar-3-villa.jpg.asset.json";
import asset1 from "@/assets/asset-1.jpeg.asset.json";
import asset2 from "@/assets/asset-2.jpeg.asset.json";
import asset3 from "@/assets/asset-3.jpeg.asset.json";
import asset4 from "@/assets/asset-4.jpeg.asset.json";
import asset5 from "@/assets/asset-5.jpeg.asset.json";
import asset6 from "@/assets/asset-6.jpeg.asset.json";
import asset7 from "@/assets/asset-7.jpeg.asset.json";
import yachtVandutch from "@/assets/yacht-vandutch.jpg.asset.json";
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
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  Landmark,
  Zap, Mail, Plane, CheckCircle2, PlaneTakeoff, Waves, Wind, PlaneLanding,
  Anchor, Sailboat, Ship, Mountain, Car, CarFront, Truck, Radio, Home,
  Leaf, Utensils, Tent, Construction, FileSignature, ShoppingCart, Handshake,
  FileCheck, Scale, AlertTriangle, Gavel, FileText, Ban, Building, Infinity,
  DollarSign, AlertCircle, LogOut, RefreshCw, TreeDeciduous, Lock, Users,
  RotateCcw, ChevronLeft, ChevronRight, X, ArrowRight, Menu, Receipt, Globe,
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
  { href: "#pillars", label: "Three Pillars" },
  { href: "#thesis", label: "Why Now" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#opp", label: "Investor Terms" },
  { href: "#risks", label: "Risks" },
  { href: "#access", label: "Request Access" },
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in"
      style={{
        animationDelay: "0.3s",
        animationFillMode: "backwards",
        background: scrolled ? "rgba(10,10,10,0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(201,168,76,0.15)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center">
        {/* Left: nav links */}
        <nav className="hidden lg:flex items-center gap-8 justify-self-start">
          {NAV_LINKS.slice(0, 4).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link uppercase hover:text-brand-gold"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "rgba(240,236,228,0.8)",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Center: logo */}
        <a href="#home" className="flex items-center justify-center justify-self-center">
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "18px",
              letterSpacing: "0.05em",
              color: "#f0ece4",
              whiteSpace: "nowrap",
            }}
          >
            Signature Capital - Depreciation Fund
          </span>
        </a>

        {/* Right: CTA */}
        <div className="hidden md:flex items-center gap-4 justify-self-end">
          <a
            href="#access"
            className="lux-cta-ghost"
            style={{ padding: "12px 26px", fontSize: "10.5px" }}
          >
            Request Access
          </a>
        </div>

        <button className="lg:hidden text-brand-cream justify-self-end col-start-3" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-brand-gold/20" style={{ background: "rgba(10,10,10,0.96)", backdropFilter: "blur(12px)" }}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="lux-nav text-brand-cream/85 py-1">{l.label}</a>
            ))}
            <a href="#access" onClick={() => setOpen(false)} className="lux-nav mt-2 py-3 text-brand-gold border border-brand-gold/60 text-center">Request Access</a>
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
    tone === "dark" ? "rgba(184,150,12,0.55)" : "rgba(138,112,9,0.45)";
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center ring-1 ring-white/25 bg-[linear-gradient(135deg,#B8960C_0%,#8A7009_100%)]`}
      style={{
        boxShadow: `0 12px 28px -8px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.18)`,
      }}
    >
      <Icon className={`${glyph} text-brand-cream`} strokeWidth={1.5} />
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

function SectionHeader({ eyebrow, title, lead, dark = true }: { eyebrow: string; title: React.ReactNode; lead?: string; dark?: boolean }) {
  return (
    <motion.div {...fadeIn} className="max-w-3xl mx-auto mb-16 text-center flex flex-col items-center">
      <div
        className="mb-6 text-brand-gold"
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: "0.35em",
          fontSize: "12px",
        }}
      >
        {eyebrow}
      </div>
      <h2
        className={dark ? "text-brand-cream" : "text-brand-text"}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: "clamp(40px, 5.5vw, 68px)",
          lineHeight: 1.15,
          letterSpacing: "0.02em",
          textAlign: "center",
          maxWidth: 780,
        }}
      >
        {title}
      </h2>
      <div className="mt-8 mb-2 mx-auto" style={{ width: 60, height: 1, background: "#c9a84c" }} />
      {lead && (
        <p
          className="mt-6 mx-auto"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "17px",
            lineHeight: 1.9,
            letterSpacing: "0.02em",
            color: "rgba(240,236,228,0.7)",
            maxWidth: 640,
            textAlign: "center",
          }}
        >
          {lead}
        </p>
      )}
    </motion.div>
  );
}


function CinematicPillar({
  number,
  label,
  title,
  body,
  image,
}: {
  number: string;
  label: string;
  title: React.ReactNode;
  body: string;
  image: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Parallax: gentle drift, generous scale so cover never reveals background
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.25, 1.4]);

  return (
    <section
      ref={ref}
      className="cinematic-pillar relative overflow-hidden flex items-center"
      style={{
        height: "100vh",
        width: "100vw",
        background: "#0a0806",
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background image with parallax + slow Ken Burns zoom */}
      <motion.img
        src={image}
        alt=""
        aria-hidden
        className="pillar-kenburns"
        style={{
          y: imgY,
          scale: imgScale,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
          transformOrigin: "center",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to right, rgba(8,6,3,0.92) 0%, rgba(8,6,3,0.50) 55%, rgba(8,6,3,0.05) 100%)",
        }}
      />

      {/* Filmic top & bottom bleed — dissolves seam between pillar sections */}
      <div
        aria-hidden
        className="pointer-events-none"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "linear-gradient(to bottom, rgba(8,6,3,0.75) 0%, rgba(8,6,3,0) 14%, rgba(8,6,3,0) 82%, rgba(8,6,3,0.85) 100%)",
        }}
      />

      {/* Grain — subtle film texture for luxury feel */}
      <div
        aria-hidden
        className="pointer-events-none pillar-grain"
        style={{ position: "absolute", inset: 0, zIndex: 2, opacity: 0.35, mixBlendMode: "overlay" }}
      />

      {/* Vignette for cinematic depth */}
      <div
        aria-hidden
        className="pointer-events-none"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Ornamental gold corner marks */}
      <div aria-hidden className="hidden md:block absolute pointer-events-none" style={{ top: 32, right: 32, width: 56, height: 56, borderTop: "1px solid rgba(201,168,76,0.5)", borderRight: "1px solid rgba(201,168,76,0.5)", zIndex: 3 }} />
      <div aria-hidden className="hidden md:block absolute pointer-events-none" style={{ bottom: 32, left: 32, width: 56, height: 56, borderBottom: "1px solid rgba(201,168,76,0.5)", borderLeft: "1px solid rgba(201,168,76,0.5)", zIndex: 3 }} />

      {/* Giant faded numeral */}
      <div
        aria-hidden
        className="hidden md:block absolute pointer-events-none select-none"
        style={{
          left: 100,
          top: 40,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: 220,
          lineHeight: 1,
          color: "rgba(201,168,76,0.10)",
          zIndex: 2,
        }}
      >
        {number}
      </div>

      {/* Text content — left side */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="pillar-text-block"
        style={{ position: "relative", zIndex: 3, maxWidth: 580 }}
      >
        <div
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: 12,
            letterSpacing: "0.35em",
            color: "#c9a84c",
            marginBottom: 24,
          }}
        >
          {label}
        </div>
        <h3
          className="pillar-headline"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.1,
            color: "#f0ece4",
            letterSpacing: "0.02em",
            margin: 0,
            maxWidth: 600,
            textShadow: "0 2px 40px rgba(0,0,0,0.6)",
          }}
        >
          {title}
        </h3>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          style={{
            width: 48,
            height: 1,
            background: "#c9a84c",
            margin: "28px 0",
            transformOrigin: "left center",
          }}
        />
        <p
          className="pillar-body"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "rgba(240,236,228,0.80)",
            maxWidth: 480,
            textShadow: "0 1px 20px rgba(0,0,0,0.8)",
          }}
        >
          {body}
        </p>
        <a
          href="#thesis"
          className="pillar-learn-link inline-flex items-center gap-2"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: 12,
            letterSpacing: "0.3em",
            color: "#c9a84c",
            marginTop: 32,
          }}
        >
          <span className="pillar-learn-underline relative">Learn how this works</span>
          <span aria-hidden>→</span>
        </a>
      </motion.div>
    </section>
  );
}

function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative w-screen overflow-hidden"
        style={{ minHeight: "100vh", height: "100vh" }}
      >
        {/* Full-bleed background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={heroVideo.url} type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.75) 100%)",
          }}
        />
        {/* Cinematic vignette + film-frame gradient */}
        <div className="hero-vignette" aria-hidden />

        {/* Corner frame marks */}
        <div aria-hidden className="hero-frame-corner hidden md:block" style={{ top: 96, left: 40, borderTop: "1px solid", borderLeft: "1px solid" }} />
        <div aria-hidden className="hero-frame-corner hidden md:block" style={{ top: 96, right: 40, borderTop: "1px solid", borderRight: "1px solid" }} />
        <div aria-hidden className="hero-frame-corner hidden md:block" style={{ bottom: 96, left: 40, borderBottom: "1px solid", borderLeft: "1px solid" }} />
        <div aria-hidden className="hero-frame-corner hidden md:block" style={{ bottom: 96, right: 40, borderBottom: "1px solid", borderRight: "1px solid" }} />

        {/* Content: centered headline */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
          <div className="w-full mx-auto px-6 text-center" style={{ maxWidth: 700 }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(36px, 8vw, 88px)",
                lineHeight: 1.05,
                letterSpacing: "0.03em",
                color: "#f0ece4",
                textShadow: "0 2px 40px rgba(0,0,0,0.5)",
              }}
            >
              Harmony of Forms
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              className="mx-auto uppercase"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(11px, 1vw, 12px)",
                letterSpacing: "0.35em",
                color: "rgba(240,236,228,0.75)",
                marginTop: 20,
                maxWidth: 640,
              }}
            >
              Brilliant Tax Strategists. Exceptional Assets. World-Class Operators.
            </motion.p>

            {/* Gold divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.55 }}
              className="mx-auto mt-10"
              style={{
                width: 60,
                height: 1,
                background: "#c9a84c",
                transformOrigin: "center",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
              style={{ marginTop: 36 }}
            >
              <a
                href="#access"
                className="lux-cta"
                style={{ padding: "16px 44px" }}
              >
                Request Investor Access
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="hero-scroll-cue hidden md:flex"
          aria-hidden
        >
          <span>Scroll</span>
          <span className="line" />
        </motion.div>

      </section>


      {/* Section divider */}
      <section className="relative bg-brand-bg border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="font-serif italic text-[22px] text-[#e8c84a] leading-relaxed">
            One fund. Three benefits. Built for the investor who demands more from their capital.
          </p>
        </div>
      </section>

      {/* Three Pillars — cinematic full-screen scroll */}
      <div id="pillars" style={{ background: "#0a0806", margin: 0, padding: 0 }}>
        <CinematicPillar
          number="01"
          label="PILLAR 01"
          title={<>100% <em style={{ fontStyle: "italic" }}>Depreciation</em></>}
          body="Full bonus depreciation on qualifying assets, passed directly through on your Schedule K-1 in Year 1. No phase-down. No dollar cap."
          image={pillar1Documents.url}
        />
        <CinematicPillar
          number="02"
          label="PILLAR 02"
          title={<>6% Paid Monthly, <em style={{ fontStyle: "italic" }}>Direct to You</em></>}
          body="Income is produced by industry-leading leases to established operators."
          image={pillar2Seal.url}
        />
        <CinematicPillar
          number="03"
          label="PILLAR 03"
          title={<>6% in Annual <em style={{ fontStyle: "italic" }}>Travel Credits</em></>}
          body="Redeemable through an affiliation with The Investors Travel Group and other distinguished companies like Amex, Expedia, Marriott, etc."
          image={pillar3Villa.url}
        />
      </div>


    </>
  );
}

function Pillars() {
  const pillars = [
    { icon: Zap, title: "100% Depreciation", body: "P.L. 119-21 permanently restored §168(k) bonus depreciation. Qualifying personal property placed in service on or after Jan 19, 2025 is fully deductible in Year 1 — no phase-down, no dollar cap, no sunset.", bg: pillarWriteoffAsset.url },
    { icon: Mail, title: "12% Preferred Return", body: "Income is produced by industry-leading leases to established operators. Redeemable through an affiliation with The Investors Travel Group and other distinguished companies like Amex, Expedia, Marriott, etc. Consistent, predictable, and tied to hard-asset lease income.", bg: pillarReturnAsset.url },
    { icon: Plane, title: "Invest. Depreciate. Travel.", body: "Redeemable through an affiliation with The Investors Travel Group and other distinguished companies like Amex, Expedia, Marriott, etc.", bg: pillarTravelAsset.url },
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

function CoreBenefits() {
  const cards = [
    {
      icon: Zap,
      title: "100% Depreciation",
      stat: "100%",
      body: "First-year depreciation on qualifying hospitality hard assets, passed through to investors on a Schedule K-1.",
    },
    {
      icon: DollarSign,
      title: "Monthly Income",
      stat: "6%",
      body: "Income is produced by industry-leading leases to established operators.",
    },
    {
      icon: Plane,
      title: "Travel Credits",
      stat: "6%",
      body: "Annual travel-credit value through a third-party exchange or points platform.",
    },
  ];
  return (
    <section id="benefits" className="py-24 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Investor Offer"
          title="Three Benefits. One Fund."
          lead="A focused, investor-grade offer built around first-year depreciation, recurring monthly income, and annual travel-credit value."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeIn}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl border border-brand-border bg-white p-10 shadow-sm hover:shadow-2xl transition-shadow"
            >
              <div className="mb-6"><IconBadge icon={c.icon} size="lg" /></div>
              <div className="font-serif text-6xl font-bold tracking-tight text-brand-olive-dark leading-none">
                {c.stat}
              </div>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-brand-text">{c.title}</h3>
              <p className="mt-3 text-brand-muted text-[15px] leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          {...fadeIn}
          className="mt-6 rounded-2xl border border-brand-olive/30 bg-brand-olive/5 p-6 md:p-8 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-brand-olive font-semibold">Summary</div>
            <h4 className="mt-1 text-2xl font-bold text-brand-text tracking-tight">12% Preferred Return</h4>
            <p className="mt-1 text-sm text-brand-muted">6% monthly income + 6% travel credits.</p>
          </div>
          <a
            href="#access"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-olive text-white font-medium hover:bg-brand-olive-dark transition"
          >
            Request Access <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Thesis() {
  const points = [
    { title: "Permanent Law", body: "P.L. 119-21 removed the uncertainty of sunset provisions. Investors can plan multi-year tax strategies with confidence that §168(k) will not phase down." },
    { title: "Asset-Backed Security", body: "Every dollar invested is backed by a tangible, titled asset. Personal property depreciates faster and qualifies for immediate 100% first-year depreciation — giving investors both income and tax shelter." },
    { title: "True-Lease Structure", body: "The fund retains ownership and residual risk, leasing assets to operators. This preserves the fund as tax owner, enabling full depreciation pass-through via K-1." },
  ];
  const stats = [
    { label: "Legal Authority", value: "P.L. 119-21 · Permanent" },
    { label: "Effective Date", value: "Jan 19, 2025+" },
    { label: "Depreciation Rate", value: "100% Year 1" },
    { label: "Annual Dollar Cap", value: "None (Unlike §179)" },
  ];
  return (
    <section
      id="thesis"
      className="border-b border-brand-gold/15"
      style={{ background: "#0a0806", padding: "clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Investment Thesis"
          title="Where Tax Law Meets Hospitality Hard Assets"
          lead="The fund is purpose-built at the intersection of three durable trends: permanent bonus depreciation, the experiential travel boom, and institutional demand for hard-asset income."
        />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-4">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeIn}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{ borderLeft: "2px solid #c9a84c", paddingLeft: 16 }}
            >
              <h4
                className="mb-3"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  color: "#c9a84c",
                }}
              >
                {p.title}
              </h4>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "rgba(240,236,228,0.6)",
                }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeIn} className="mt-20 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: 0,
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "48px",
                    lineHeight: 1,
                    color: "#c9a84c",
                    marginBottom: 20,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    color: "rgba(240,236,228,0.4)",
                    marginBottom: 8,
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "14px",
                    color: "#f0ece4",
                  }}
                >
                  {s.value}
                </div>
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
            <div key={i} className="relative flex-[0_0_100%] aspect-[16/7] bg-brand-bg-light">
              <img src={s.src} alt={s.caption} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-brand-cream font-light text-lg tracking-wide">{s.caption}</div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => embla?.scrollPrev()} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-cream/90 hover:bg-brand-cream flex items-center justify-center shadow" aria-label="Previous">
        <ChevronLeft className="w-5 h-5 text-brand-bg" />
      </button>
      <button onClick={() => embla?.scrollNext()} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-cream/90 hover:bg-brand-cream flex items-center justify-center shadow" aria-label="Next">
        <ChevronRight className="w-5 h-5 text-brand-bg" />
      </button>
      <div className="absolute bottom-4 right-6 flex gap-1.5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => scrollTo(i)} className={`w-2 h-2 rounded-full transition ${selected === i ? "bg-brand-cream w-6" : "bg-brand-cream/50"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );

}

type Asset = { icon: any; name: string; desc: string; tag: string; cat: string };
type AssetWithImg = Asset & { img: string; imgPos?: string };
const ASSETS: AssetWithImg[] = [
  { icon: Plane, name: "Private Jets", desc: "Charter fleet for premium guest arrivals. Leased to licensed FAA Part 135 operators.", tag: "100% Depreciation", cat: "Air", img: asset1.url },
  { icon: PlaneTakeoff, name: "Cirrus Vision SF50", desc: "Single-engine personal jet. Ideal for short-hop resort access and owner-operator charters.", tag: "100% Depreciation", cat: "Air", img: asset2.url },
  { icon: Waves, name: "Sea Plane", desc: "Amphibious arrival to waterfront and island resort properties.", tag: "100% Depreciation", cat: "Air", img: asset3.url },
  { icon: Wind, name: "Helicopter", desc: "Scenic transfers and emergency access for remote mountain properties.", tag: "100% Depreciation", cat: "Air", img: asset4.url },
  { icon: PlaneLanding, name: "King Air / Pilatus", desc: "Twin-engine turboprops serving high-altitude mountain resort airstrips.", tag: "100% Depreciation", cat: "Air", img: asset5.url },
  { icon: Anchor, name: "Center Console Boat", desc: "Bald Head Island coastal access. Ferry and charter operations for island resort guests.", tag: "100% Depreciation", cat: "Marine", img: asset6.url },
  { icon: Sailboat, name: "Yacht (Miami)", desc: "Luxury charter yacht in South Florida waters. Leased to licensed operator at market rate.", tag: "100% Depreciation", cat: "Marine", img: yachtVandutch.url },
  { icon: Ship, name: "Pontoon Boats", desc: "Lake and river leisure fleet for resort waterfront properties.", tag: "100% Depreciation", cat: "Marine", img: asset8.url },
  { icon: Mountain, name: "Snowmobiles", desc: "Winter adventure fleet for mountain resort operators. Guided tour and rental programs.", tag: "100% Depreciation", cat: "Ground", img: asset9.url },
  { icon: Car, name: "UTVs", desc: "Side-by-side utility vehicles for off-road resort exploration and property management.", tag: "100% Depreciation", cat: "Ground", img: asset10.url },
  { icon: CarFront, name: "Luxury Golf Carts", desc: "Premium electric golf carts for resort and island community transportation.", tag: "100% Depreciation", cat: "Ground", img: asset11.url },
  { icon: Truck, name: "Chauffeur G-Wagons", desc: "Mercedes-Benz G-Class fleet for VIP ground transfers and resort chauffeur services.", tag: "100% Depreciation", cat: "Ground", img: asset12.url },
  { icon: Radio, name: "Lookout Towers", desc: "Relocatable timber-frame towers converted to premium STR accommodations. Personal property — 100% bonus eligible.", tag: "Personal Property", cat: "Lodging", img: lookoutTowerAsset.url, imgPos: "75% 50%" },
  { icon: Home, name: "Glass House STR · Ood", desc: "Prefabricated relocatable glass-house STR units. Not permanently affixed — personal property classification.", tag: "Personal Property", cat: "Lodging", img: asset14.url },
  { icon: Leaf, name: "Hydroponic Farm", desc: "On-site food production for resort farm-to-table operations.", tag: "100% Depreciation", cat: "Development", img: asset15.url },
  { icon: Utensils, name: "Food Trailer", desc: "Mobile F&B service across properties.", tag: "100% Depreciation", cat: "Development", img: asset16.url },
  { icon: Tent, name: "Zook Cabins", desc: "Employee housing units supporting on-site staffing.", tag: "100% Depreciation", cat: "Development", img: asset17.url },
  { icon: Construction, name: "Excavators & Dump Trucks", desc: "Development equipment rounding out the full hospitality ecosystem.", tag: "100% Depreciation", cat: "Development", img: asset18.url },
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
    <section id="portfolio" className="py-24 bg-brand-bg border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="THE ASSETS"
          title="The Asset Portfolio"
          lead="Capital is deployed into income-producing hard assets — placed with proven operators across aviation, marine, lodging, mobility, and experiential hospitality."
        />
        <motion.div {...fadeIn} className="mb-10 p-6 md:p-8 bg-brand-card border border-brand-border rounded-xl">
          <div className="flex items-start gap-4">
            <div className="mt-1"><IconBadge icon={Plane} size="sm" /></div>
            <div>
              <h4 className="font-medium text-brand-cream mb-2">Experiential Demand</h4>
              <p className="text-brand-muted font-light leading-relaxed tracking-wide">Post-pandemic travel spending has permanently shifted toward unique, high-touch experiences. Lookout towers, private charters, and off-grid stays command 3–5× the nightly rate of standard lodging.</p>
            </div>
          </div>
        </motion.div>
        <motion.div {...fadeIn} className="mb-10">
          <HeroCarousel slides={PORTFOLIO_HERO_IMAGES} />
        </motion.div>
        <div className="flex flex-wrap gap-2 mb-8">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-sm rounded-full border transition tracking-wide ${
                active === c
                  ? "bg-brand-gold text-brand-bg border-brand-gold"
                  : "bg-brand-card text-brand-cream border-brand-border hover:border-brand-gold"
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
              className="group bg-brand-card border border-brand-border rounded-xl overflow-hidden hover:shadow-2xl hover:border-brand-gold-light transition-all cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-card">
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
                <span
                  className="absolute top-3 right-3 text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "#1a0f0a",
                    color: "#e8c84a",
                    border: "1px solid #e8c84a",
                    letterSpacing: "0.1em",
                    fontVariant: "small-caps",
                  }}
                >
                  {a.cat}
                </span>
                <span
                  className="absolute bottom-[38%] left-3 text-[11px] font-semibold uppercase px-3.5 py-1.5 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #b8960c 0%, #e8c84a 100%)",
                    color: "#1a0f0a",
                    letterSpacing: "0.08em",
                    fontVariant: "small-caps",
                    boxShadow: "0 2px 8px rgba(184,150,12,0.4)",
                  }}
                >
                  ✦ 100% Depreciation
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[35%] p-5 flex flex-col justify-center">
                  <h4 className="font-medium text-brand-cream mb-1.5">{a.name}</h4>
                  <p className="text-sm text-brand-muted font-light leading-relaxed line-clamp-2">{a.desc}</p>
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
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-brand-card rounded-2xl shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-brand-cream flex items-center justify-center backdrop-blur transition"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative w-full aspect-[16/9] bg-brand-bg-light overflow-hidden">
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
                <span
                  className="absolute bottom-4 left-4 text-[11px] font-semibold uppercase px-3.5 py-1.5 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #b8960c 0%, #e8c84a 100%)",
                    color: "#1a0f0a",
                    letterSpacing: "0.08em",
                    fontVariant: "small-caps",
                    boxShadow: "0 2px 8px rgba(184,150,12,0.4)",
                  }}
                >
                  ✦ 100% Depreciation
                </span>
                <span
                  className="absolute bottom-4 right-4 text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "#1a0f0a",
                    color: "#e8c84a",
                    border: "1px solid #e8c84a",
                    letterSpacing: "0.1em",
                    fontVariant: "small-caps",
                  }}
                >
                  {selected.cat}
                </span>
              </div>
              <div className="p-8 overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-brand-cream mb-3">{selected.name}</h3>
                <p className="text-brand-muted font-light leading-relaxed tracking-wide">{selected.desc}</p>
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
    { icon: FileCheck, title: "Investors Receive K-1 + Distributions", body: "Each year: (a) Schedule K-1 with allocated depreciation deductions; (b) 6% annual preferred return paid monthly; and (c) 6% annual travel credits redeemable through an affiliation with The Investors Travel Group and other distinguished companies like Amex, Expedia, Marriott, etc." },
  ];
  const terms = [
    ["Fund Structure", "Delaware LLC"],
    ["Offering Type", "Reg D, Rule 506(c)"],
    ["Investor Eligibility", "Accredited Only"],
    ["Tax Document", "Schedule K-1"],
    ["Income Distribution", "Monthly (6% Pref.)"],
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
    { name: "6% Income Dist.", value: 30000, color: "#7B9A4B" },
    { name: "6% Travel Credits", value: 30000, color: "#B8955A" },
    { name: "Net Taxable Y1", value: -440000, color: "#2F4A1D" },
  ];
  const tags = [
    "5-Year MACRS — Vehicles & Marine",
    "5-Year MACRS — Snowmobiles & ATVs",
    "Personal Property — Lookout Towers",
    "Personal Property — Glass House STR · Ood",
    "5-Year MACRS — Food Trailer & Farm",
  ];
  return (
    <section id="tax" className="py-24 bg-brand-sage border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Tax Engine"
          title="100% Depreciation. Permanent Law. No Cap."
          lead="P.L. 119-21 permanently restored bonus depreciation under IRC §168(k). For qualifying property placed in service on or after January 19, 2025, 100% first-year depreciation is available — in the year of placement."
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
    ["Depreciation", "100% Depreciation"],
    ["Monthly Income", "6% Annual"],
    ["Travel Credits", "6% Annual"],
    ["Preferred Return", "12% Annual"],
    ["Investor Eligibility", "Accredited Investors Only"],
    ["Tax Document", "Schedule K-1"],
    ["Investor Term", "1–3 Years"],
  ];
  const splitData = [
    { name: "6% Income (Monthly)", value: 6, color: "#B8960C" },
    { name: "6% Travel Credits (Annual)", value: 6, color: "#D4B968" },
  ];
  return (
    <section id="opp" className="py-24 bg-brand-bg-light border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Investor Terms"
          title="Investor Terms at a Glance"
          lead="100% depreciation, 6% monthly income, 6% travel credits — a 12% preferred return for accredited investors, reported on Schedule K-1."
        />
        <motion.div {...fadeIn} className="mb-12 bg-brand-card border border-brand-border rounded-xl p-8 shadow-md">
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
              <div className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold mb-3">Return Composition</div>
              <h4 className="text-3xl font-serif font-medium text-brand-cream tracking-tight mb-4">12% Preferred, Split Two Ways</h4>
              <p className="text-brand-muted font-light leading-relaxed tracking-wide">Half of your annual return arrives as monthly income — predictable, tied to hard-asset lease income. The other half becomes travel credits redeemable through an affiliation with The Investors Travel Group and other distinguished companies like Amex, Expedia, Marriott, etc.</p>
            </div>
          </div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <motion.div {...fadeIn} className="bg-brand-card border border-brand-border rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-brand-bg border-b border-brand-border">
              <h4 className="font-medium text-brand-cream">Deal Terms</h4>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {terms.map(([k, v]) => (
                  <tr key={k} className="border-b border-brand-border last:border-0">
                    <td className="px-6 py-3 text-brand-muted font-light">{k}</td>
                    <td className="px-6 py-3 text-right font-medium text-brand-cream">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <div className="space-y-4">
            <motion.div {...fadeIn} className="bg-brand-card border border-brand-border rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4"><IconBadge icon={DollarSign} /></div>
              <div className="text-5xl font-serif font-medium text-brand-cream tracking-tight">6%</div>
              <div className="text-lg font-medium text-brand-cream mt-2">Income</div>
              <p className="text-sm text-brand-muted font-light mt-2 leading-relaxed tracking-wide">Paid monthly. Tied to hard-asset lease income from the fund's operator network.</p>
            </motion.div>
            <motion.div {...fadeIn} className="bg-brand-card border border-brand-border rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4"><IconBadge icon={Plane} /></div>
              <div className="text-5xl font-serif font-medium text-brand-cream tracking-tight">6%</div>
              <div className="text-lg font-medium text-brand-cream mt-2">Travel Credits</div>
              <p className="text-sm text-brand-muted font-light mt-2 leading-relaxed tracking-wide">Redeemable through an affiliation with The Investors Travel Group and other distinguished companies like Amex, Expedia, Marriott, etc.</p>
            </motion.div>
          </div>
        </div>
        <motion.div {...fadeIn} className="mt-14 bg-brand-bg rounded-xl p-10 flex flex-wrap items-center justify-between gap-6 border border-brand-border">
          <div>
            <h3 className="text-3xl font-serif font-medium text-brand-cream tracking-tight">Ready to Deploy Capital?</h3>
            <p className="text-brand-cream/70 mt-2 font-light tracking-wide">Request the Private Placement Memorandum.</p>
          </div>
          <a href="#access" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-gold text-brand-bg font-medium hover:bg-brand-gold-light transition tracking-wide">
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
    ["Platform", "The Investors Travel Group & Partners"],
    ["Credit Value", "6% of Capital Annually"],
    ["Redemption", "Global Resort Network"],
    ["Taxability", "Taxable as Ordinary Income"],
  ];
  return (
    <section id="travel" className="py-24 bg-brand-sage border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Travel Credits"
          title="Travel Credits, Part of the Preferred Return."
          lead="Travel credits are part of the preferred return structure. They are delivered through a third-party platform and are separate from free use of fund-owned assets."
        />
        <motion.div {...fadeIn} className="mb-10">
          <HeroCarousel slides={TRAVEL_IMAGES} />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div {...fadeIn}>
            <p className="text-lg text-brand-muted leading-relaxed">
              Travel credits are issued annually equal to 6% of invested capital. Redeemable through an affiliation with The Investors Travel Group and other distinguished companies like Amex, Expedia, Marriott, etc.
            </p>
            <div className="mt-6 bg-white border-l-4 rounded-lg p-6 border border-brand-border" style={{ borderLeftColor: "#B8955A" }}>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-brand-gold" />
                <h4 className="font-semibold text-brand-text">Personal Use Guardrail</h4>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">Investors receive travel credits redeemable through an affiliation with The Investors Travel Group and other distinguished companies like Amex, Expedia, Marriott, etc., NOT free use of fund assets. Direct personal use of fund aircraft, yacht, or vessels by investors is prohibited. Market-rate chartering is permitted as business income.</p>
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
    <section id="risks" className="relative py-24 bg-brand-bg overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=2000&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/70 via-brand-bg/85 to-brand-bg" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader dark eyebrow="Risk Factors" title="Material Risk Factors" />
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {risks.map((r, i) => (
            <motion.div key={r.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.06 }} className="bg-brand-card/50 border border-white/10 rounded-xl p-6 backdrop-blur">
              <div className="mb-3"><IconBadge icon={r.icon} /></div>
              <h4 className="font-medium text-brand-cream mb-2">{r.title}</h4>
              <p className="text-sm text-brand-cream/70 font-light leading-relaxed tracking-wide">{r.body}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeIn} className="bg-brand-card/50 border border-white/10 rounded-lg p-6">
          <p className="text-xs text-brand-cream/60 font-light leading-relaxed tracking-wide">
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
  { title: "Backcountry / Off-Grid", sub: "The Untamed", tags: ["Glass House STR · Ood", "Pontoon Boats", "Food Trailer", "Hydroponic Farm"], img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80" },
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
    ["Min. Investment", "$100,000"],
    ["Preferred Return", "12% Annual"],
    ["Distributions", "Monthly"],
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
    <section id="access" className="py-24 bg-brand-bg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Get Access" title="Request the Private Placement Memorandum" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-brand-border border border-brand-border rounded-lg overflow-hidden mb-10">
          {stats.map(([k, v]) => (
            <div key={k} className="bg-brand-card p-5">
              <div className="text-[10px] uppercase tracking-wider text-brand-muted mb-1.5">{k}</div>
              <div className="font-medium text-brand-cream text-sm">{v}</div>
            </div>
          ))}
        </div>
        <motion.form {...fadeIn} onSubmit={onSubmit} className="bg-brand-card border border-brand-border rounded-xl p-8 grid md:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="fn" className="text-brand-cream/80 font-light">First Name</Label>
            <Input id="fn" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="mt-2 bg-brand-bg-light border-brand-border text-brand-cream placeholder:text-brand-muted" />
          </div>
          <div>
            <Label htmlFor="ln" className="text-brand-cream/80 font-light">Last Name</Label>
            <Input id="ln" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="mt-2 bg-brand-bg-light border-brand-border text-brand-cream placeholder:text-brand-muted" />
          </div>
          <div>
            <Label htmlFor="em" className="text-brand-cream/80 font-light">Email</Label>
            <Input id="em" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 bg-brand-bg-light border-brand-border text-brand-cream placeholder:text-brand-muted" />
          </div>
          <div>
            <Label htmlFor="ph" className="text-brand-cream/80 font-light">Phone</Label>
            <Input id="ph" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2 bg-brand-bg-light border-brand-border text-brand-cream placeholder:text-brand-muted" />
          </div>
          <div>
            <Label className="text-brand-cream/80 font-light">Investment Range</Label>
            <Select value={form.range} onValueChange={(v) => setForm({ ...form, range: v })}>
              <SelectTrigger className="mt-2 bg-brand-bg-light border-brand-border text-brand-cream"><SelectValue placeholder="Select a range" /></SelectTrigger>
              <SelectContent className="bg-brand-card border-brand-border">
                <SelectItem value="u100" className="text-brand-cream focus:bg-brand-bg-light-light focus:text-brand-cream">Under $100K</SelectItem>
                <SelectItem value="100-250" className="text-brand-cream focus:bg-brand-bg-light-light focus:text-brand-cream">$100K–$250K</SelectItem>
                <SelectItem value="250-500" className="text-brand-cream focus:bg-brand-bg-light-light focus:text-brand-cream">$250K–$500K</SelectItem>
                <SelectItem value="500-1m" className="text-brand-cream focus:bg-brand-bg-light-light focus:text-brand-cream">$500K–$1M</SelectItem>
                <SelectItem value="1m+" className="text-brand-cream focus:bg-brand-bg-light-light focus:text-brand-cream">$1M+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="src" className="text-brand-cream/80 font-light">How did you hear about us</Label>
            <Input id="src" value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} className="mt-2 bg-brand-bg-light border-brand-border text-brand-cream placeholder:text-brand-muted" />
          </div>
          <div className="md:col-span-2 flex items-start gap-3 pt-2">
            <Checkbox id="acc" checked={form.accredited} onCheckedChange={(v) => setForm({ ...form, accredited: v === true })} className="mt-1 border-brand-border data-[state=checked]:bg-brand-gold data-[state=checked]:text-brand-bg" />
            <Label htmlFor="acc" className="text-sm text-brand-muted font-light leading-relaxed font-normal">
              I confirm I am an accredited investor as defined under SEC Rule 501(a) and understand this offering is available only to accredited investors.
            </Label>
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="text-xs text-brand-muted font-light tracking-wide max-w-md">Your information is kept strictly confidential. This is not a commitment to invest.</p>
            <Button type="submit" className="bg-brand-gold hover:bg-brand-gold-light text-brand-bg px-6 py-6 h-auto tracking-wide">
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
    {
      title: "Fund",
      links: [
        { label: "Three Pillars", href: "#pillars" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Investor Terms", href: "#opp" },
        { label: "Risks", href: "#risks" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Reg D Disclosure", href: "#risks" },
        { label: "Privacy Policy", href: "#access" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Contact Form", href: "#access" },
        { label: "Request Access", href: "#access" },
      ],
    },
  ];
  return (
    <footer className="bg-brand-bg text-brand-cream border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Landmark className="w-6 h-6 text-brand-gold-light" />
            <span className="font-medium tracking-tight">Signature Capital - Depreciation Fund</span>
          </div>
          <p className="text-sm text-brand-cream/60 font-light leading-relaxed tracking-wide">Hard Assets. Tax Efficiency. Income.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs uppercase tracking-wider font-semibold text-brand-cream/60 mb-4">{c.title}</div>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}><a href={l.href} className="text-sm font-light text-brand-cream/80 hover:text-brand-cream transition tracking-wide">{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-4">
          <p className="text-xs text-brand-cream/40 font-light tracking-wide">© 2025 Signature Capital - Depreciation Fund&nbsp;LLC · All Rights Reserved</p>
          <p className="text-xs text-brand-cream/40 font-light leading-relaxed tracking-wide max-w-4xl">
            This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. Securities offered through private placement under Regulation D, Rule 506(c) of the Securities Act of 1933. Available to accredited investors only. Investing involves risk including loss of principal.
          </p>
        </div>
      </div>
    </footer>
  );
}


export default function LookoutTowersLanding() {
  return (
    <div className="bg-brand-bg text-brand-text min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Thesis />
        <Portfolio />
        <Returns />
        <Risks />
        <AccessForm />
      </main>

      <Footer />
    </div>
  );
}