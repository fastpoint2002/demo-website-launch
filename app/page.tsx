"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import WalkerCard from "@/components/ui/WalkerCard";
import HeroBackground from "@/components/ui/HeroBackground";
import { getApprovedWalkers } from "@/lib/data/walkers";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  const featuredWalkers = getApprovedWalkers().slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <HeroBackground />

        <div className="container-wide relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-block">
              <span className="px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-coral-dark text-sm font-semibold shadow-sm">
                New: Trusted walkers in your neighborhood 🐾
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-charcoal mb-8 leading-[1.1] tracking-tight">
              Happiness is a <br />
              <span className="text-gradient-coral relative inline-block">
                Tired Dog
                <svg className="absolute -bottom-2 w-full h-3 text-coral/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-charcoal-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Connect with vetted neighbors who love your dog as much as you do.
              Real people, real trust, happy tails.
            </motion.p>

            {/* Search Bar */}
            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto px-4">
              <div className="p-2 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl ring-1 ring-black/5 flex flex-col sm:flex-row gap-2 transition-transform hover:scale-[1.01] duration-300">
                <div className="relative flex-1 group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray group-focus-within:text-coral transition-colors">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter ZIP or city (e.g. New York)"
                    className="w-full pl-16 pr-4 h-14 rounded-2xl bg-transparent text-lg text-charcoal placeholder:text-gray-light focus:outline-none focus:bg-white/50 transition-colors"
                  />
                </div>
                <Link href="/walkers">
                  <Button size="lg" className="h-14 w-full sm:w-auto px-8 text-lg shadow-coral/20 shadow-lg">
                    Find a Walker
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray font-medium">
                Popular: <span className="text-charcoal cursor-pointer hover:underline decoration-coral">Downtown</span>, <span className="text-charcoal cursor-pointer hover:underline decoration-coral">Uptown</span>, <span className="text-charcoal cursor-pointer hover:underline decoration-coral">Brooklyn</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-white border-y border-gray-light/50 overflow-hidden">
        <div className="container-wide py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-24"
          >
            {[
              { title: "Vetted Walkers", subtitle: "Total background check", icon: "shield" },
              { title: "Fully Insured", subtitle: "Every walk covered", icon: "check" },
              { title: "GPS Tracked", subtitle: "Real-time updates", icon: "map" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-coral group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {item.icon === "shield" && (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {item.icon === "check" && (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {item.icon === "map" && (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-charcoal">{item.title}</h3>
                  <p className="text-sm text-charcoal-light font-medium">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* How It Works */}
      <section className="section-padding bg-cream relative" id="how-it-works">
        {/* Background blobs for this section */}
        <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-sage/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-wide relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Walks made <span className="text-sage-dark relative">easy
                <svg className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full opacity-20 -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <ellipse cx="50" cy="50" rx="50" ry="20" fill="currentColor" />
                </svg>
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-charcoal-light max-w-2xl mx-auto">
              Three simple steps to give your dog the best day ever.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                title: "Search Nearby",
                desc: "Browse profiles of vetted walkers in your specific neighborhood.",
                color: "gradient-coral",
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                title: "Choose & Chat",
                desc: "Filter by price and schedule. Chat with walkers before you book.",
                color: "gradient-sage",
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )
              },
              {
                title: "Book & Relax",
                desc: "Schedule the walk and get photo updates while you're away.",
                color: "gradient-coral",
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative group">
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 -right-8 w-16 border-t-2 border-dashed border-gray-light z-0 opacity-50" />
                )}

                <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl ${step.color} flex items-center justify-center shadow-xl shadow-gray/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10`}>
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-charcoal mb-4 text-center">{step.title}</h3>
                <p className="text-charcoal-light text-center leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Walkers */}
      <section className="section-padding overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-12"
          >
            <div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Top Rated Pros
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-charcoal-light">
                Meet the locals your neighbors trust.
              </motion.p>
            </div>
            <Link href="/walkers">
              <Button variant="outline" size="lg" className="group">
                View All Walkers
                <motion.span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </motion.span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredWalkers.map((walker) => (
              <motion.div key={walker.id} variants={fadeInUp}>
                <WalkerCard
                  id={walker.id}
                  name={walker.name}
                  photo={walker.photo}
                  bio={walker.bio}
                  services={walker.services}
                  rating={walker.rating}
                  reviews={walker.reviews}
                  pricing={walker.pricing}
                  distance={walker.distance}
                  compact
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 bg-charcoal">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-coral/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-sage/10 rounded-full blur-[100px]" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden relative"
          >
            <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Turn your dog walks into <br />
                <span className="text-coral-light">serious income.</span>
              </h2>
              <p className="text-xl text-gray-light mb-10 max-w-2xl mx-auto">
                Join 10,000+ walkers who are their own boss. Set your rates, choose your hours, and get paid instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply">
                  <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-coral/20">
                    Apply to Walk
                  </Button>
                </Link>
                <Link href="/about">
                  <button className="h-14 px-10 text-lg font-semibold text-white hover:text-coral-light transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Decorative Stats */}
            <div className="hidden lg:block absolute bottom-12 left-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 text-left">
                <p className="text-3xl font-bold text-white">$500+</p>
                <p className="text-xs text-gray-light uppercase tracking-wider">Avg. Weekly Pay</p>
              </div>
            </div>
            <div className="hidden lg:block absolute top-12 right-12 animate-slide-up" style={{ animationDelay: "0.7s" }}>
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 text-left">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-xs text-gray-light uppercase tracking-wider">Tips are yours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-coral py-6 overflow-hidden">
        <div className="flex gap-8 items-center justify-center whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex items-center gap-4 opacity-50">
              <span className="text-white text-xl font-bold uppercase tracking-widest">Walk Your Dog</span>
              <span className="w-2 h-2 rounded-full bg-white" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
