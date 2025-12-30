"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0 rounded-none">
            <nav className="container-wide">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-full gradient-coral flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 19.5c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                                />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-charcoal group-hover:text-coral-dark transition-colors">
                            PawWalk
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/walkers"
                            className="text-charcoal-light hover:text-coral transition-colors font-medium"
                        >
                            Find Walkers
                        </Link>
                        <Link
                            href="/apply"
                            className="text-charcoal-light hover:text-coral transition-colors font-medium"
                        >
                            Become a Walker
                        </Link>
                        <Link
                            href="/admin"
                            className="text-charcoal-light hover:text-coral transition-colors font-medium"
                        >
                            Admin
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/walkers"
                            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full gradient-coral text-white font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-light/50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-charcoal"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-light/50 animate-fade-in">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/walkers"
                                className="text-charcoal-light hover:text-coral transition-colors font-medium py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Find Walkers
                            </Link>
                            <Link
                                href="/apply"
                                className="text-charcoal-light hover:text-coral transition-colors font-medium py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Become a Walker
                            </Link>
                            <Link
                                href="/admin"
                                className="text-charcoal-light hover:text-coral transition-colors font-medium py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Admin
                            </Link>
                            <Link
                                href="/walkers"
                                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full gradient-coral text-white font-semibold mt-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
