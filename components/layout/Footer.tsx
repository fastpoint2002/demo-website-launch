import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-white">
            <div className="container-wide section-padding">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
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
                            <span className="text-xl font-bold">PawWalk</span>
                        </Link>
                        <p className="text-gray text-sm leading-relaxed">
                            Connecting dog owners with trusted, local walkers since 2024.
                        </p>
                    </div>

                    {/* For Dog Owners */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">For Dog Owners</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/walkers"
                                    className="text-gray hover:text-coral-light transition-colors text-sm"
                                >
                                    Find a Walker
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#how-it-works"
                                    className="text-gray hover:text-coral-light transition-colors text-sm"
                                >
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#trust"
                                    className="text-gray hover:text-coral-light transition-colors text-sm"
                                >
                                    Safety & Trust
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* For Walkers */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">For Walkers</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/apply"
                                    className="text-gray hover:text-coral-light transition-colors text-sm"
                                >
                                    Become a Walker
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/apply#requirements"
                                    className="text-gray hover:text-coral-light transition-colors text-sm"
                                >
                                    Requirements
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/apply#earnings"
                                    className="text-gray hover:text-coral-light transition-colors text-sm"
                                >
                                    Earnings
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray hover:text-coral-light transition-colors text-sm"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray hover:text-coral-light transition-colors text-sm"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-gray hover:text-coral-light transition-colors text-sm"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-gray hover:text-coral-light transition-colors text-sm"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-8 py-10 mt-12 border-t border-white/10">
                    <div className="flex items-center gap-2 text-gray">
                        <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Vetted Walkers</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray">
                        <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Insured</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray">
                        <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Trusted by Pet Owners</span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-white/10">
                    <p className="text-gray text-sm">
                        © {currentYear} PawWalk. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
