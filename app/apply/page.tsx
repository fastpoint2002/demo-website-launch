import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ApplyPage() {
    const benefits = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Earn Great Money",
            description: "Set your own rates and keep 100% of what you earn. Top walkers make $500+ per week.",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Flexible Schedule",
            description: "Work when you want, as much or as little as you like. Perfect for students and side hustlers.",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Work Locally",
            description: "Walk dogs in your own neighborhood. No commute, no office, just you and happy pups.",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Dedicated Support",
            description: "Our walker support team is here for you 7 days a week. We&apos;ve got your back.",
        },
    ];

    const requirements = [
        "Be at least 18 years old",
        "Pass a background check",
        "Have reliable transportation",
        "Smartphone with iOS 14+ or Android 10+",
        "Love for dogs (obviously!)",
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
                <div className="absolute top-20 right-10 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-coral/10 rounded-full blur-3xl" />

                <div className="container-wide relative z-10">
                    <div className="max-w-3xl mx-auto text-center animate-slide-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
                            Turn Your Love for Dogs Into{" "}
                            <span className="text-gradient-coral">Income</span>
                        </h1>
                        <p className="text-lg md:text-xl text-charcoal-light mb-10 max-w-2xl mx-auto">
                            Join our community of trusted dog walkers. Set your own schedule,
                            work in your neighborhood, and get paid to do what you love.
                        </p>
                        <Link href="/apply/onboarding">
                            <Button size="lg">Start Your Application</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-white">
                <div className="container-wide">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                            Why Walk with PawWalk?
                        </h2>
                        <p className="text-charcoal-light max-w-2xl mx-auto">
                            We make it easy to do what you love while earning on your own terms.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl gradient-coral flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-charcoal mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-charcoal-light text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Earnings Calculator */}
            <section className="section-padding bg-cream" id="earnings">
                <div className="container-wide">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                                How Much Can You Earn?
                            </h2>
                            <p className="text-charcoal-light mb-8 text-lg">
                                Your earnings depend on how many walks you do and what you charge.
                                Here&apos;s what typical walkers earn:
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                                    <div>
                                        <p className="font-medium text-charcoal">Part-time (10 walks/week)</p>
                                        <p className="text-sm text-charcoal-light">~5 hours/week</p>
                                    </div>
                                    <p className="text-2xl font-bold text-coral">$200-300</p>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                                    <div>
                                        <p className="font-medium text-charcoal">Regular (20 walks/week)</p>
                                        <p className="text-sm text-charcoal-light">~10 hours/week</p>
                                    </div>
                                    <p className="text-2xl font-bold text-coral">$400-600</p>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                                    <div>
                                        <p className="font-medium text-charcoal">Full-time (40 walks/week)</p>
                                        <p className="text-sm text-charcoal-light">~20 hours/week</p>
                                    </div>
                                    <p className="text-2xl font-bold text-coral">$800-1200</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                            <p className="text-sm text-charcoal-light uppercase tracking-wide mb-2">
                                Average Walker Earnings
                            </p>
                            <p className="text-5xl md:text-6xl font-bold text-charcoal mb-2">
                                $500+
                            </p>
                            <p className="text-charcoal-light mb-6">per week</p>
                            <div className="border-t border-gray-light pt-6">
                                <p className="text-sm text-charcoal-light">
                                    Based on 15-20 walks per week at $25-35 per walk
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="section-padding bg-white" id="requirements">
                <div className="container-narrow text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                        What You Need to Get Started
                    </h2>
                    <p className="text-charcoal-light mb-12 max-w-xl mx-auto">
                        Our requirements are simple. If you love dogs and are reliable, you&apos;re already most of the way there.
                    </p>
                    <div className="bg-cream rounded-2xl p-8 text-left max-w-lg mx-auto">
                        <ul className="space-y-4">
                            {requirements.map((req, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-charcoal">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-charcoal relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-coral/20 rounded-full blur-3xl" />
                <div className="container-narrow text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Start Walking?
                    </h2>
                    <p className="text-gray text-lg mb-8 max-w-xl mx-auto">
                        The application takes just 5 minutes. Once approved, you can start
                        accepting walks in your area right away.
                    </p>
                    <Link href="/apply/onboarding">
                        <Button size="lg">Apply Now</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
