import Link from "next/link";
import Button from "@/components/ui/Button";
import WalkerCard from "@/components/ui/WalkerCard";
import { getApprovedWalkers } from "@/lib/data/walkers";

export default function Home() {
  const featuredWalkers = getApprovedWalkers().slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-sage/10 rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              Find Trusted{" "}
              <span className="text-gradient-coral">Dog Walkers</span>{" "}
              Near You
            </h1>
            <p className="text-lg md:text-xl text-charcoal-light mb-10 max-w-2xl mx-auto">
              Connect with vetted, local dog walkers who treat your pup like family.
              Easy booking, reliable service, happy dogs.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl shadow-lg">
                <div className="relative flex-1">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter your ZIP code or city"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-cream/50 border-0 text-charcoal placeholder:text-gray focus:outline-none focus:ring-2 focus:ring-coral/20"
                  />
                </div>
                <Link href="/walkers">
                  <Button size="lg" className="w-full sm:w-auto whitespace-nowrap">
                    Find Walkers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-8 bg-white border-y border-gray-light" id="trust">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sage"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Vetted Walkers</p>
                <p className="text-sm text-charcoal-light">Background checked</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-coral"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Fully Insured</p>
                <p className="text-sm text-charcoal-light">Peace of mind</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sage"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Local Community</p>
                <p className="text-sm text-charcoal-light">Neighbors you trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-cream" id="how-it-works">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Getting your dog walked has never been easier. Three simple steps to happy pups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-coral flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">1. Search</h3>
              <p className="text-charcoal-light">
                Enter your location to find vetted dog walkers in your neighborhood.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-sage flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">2. Choose</h3>
              <p className="text-charcoal-light">
                Browse profiles, read reviews, and pick the perfect walker for your pup.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-coral flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">3. Book</h3>
              <p className="text-charcoal-light">
                Send a request with your preferred date and time. It&apos;s that simple!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Walkers */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                Featured Walkers
              </h2>
              <p className="text-charcoal-light">
                Meet some of our top-rated dog walking professionals.
              </p>
            </div>
            <Link href="/walkers">
              <Button variant="outline">View All Walkers</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWalkers.map((walker) => (
              <WalkerCard
                key={walker.id}
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
            ))}
          </div>
        </div>
      </section>

      {/* Become a Walker CTA */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/20 rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Love Dogs? <span className="text-coral-light">Become a Walker</span>
              </h2>
              <p className="text-gray mb-8 text-lg">
                Turn your passion for dogs into income. Set your own schedule,
                work in your neighborhood, and get paid to spend time with amazing pups.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Set your own rates and schedule",
                  "Get paid weekly via direct deposit",
                  "Build your client base locally",
                  "Access to walker support team",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link href="/apply">
                <Button size="lg">Apply to Walk</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Active Walkers" },
                { number: "10K+", label: "Happy Dogs" },
                { number: "$35", label: "Avg. Hourly Rate" },
                { number: "4.8★", label: "Walker Rating" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </p>
                  <p className="text-gray text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-cream">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Ready to Give Your Dog the Best Walks?
          </h2>
          <p className="text-charcoal-light text-lg mb-8 max-w-xl mx-auto">
            Join thousands of happy pet owners who trust PawWalk for reliable, loving dog care.
          </p>
          <Link href="/walkers">
            <Button size="lg">Find Your Walker Today</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
