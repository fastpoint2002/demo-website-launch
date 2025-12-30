import Link from "next/link";
import Button from "@/components/ui/Button";

export default function OnboardingSuccessPage() {
    return (
        <div className="min-h-screen bg-cream pt-24 pb-16 flex items-center">
            <div className="container-narrow">
                <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center animate-fade-in">
                    {/* Success Icon */}
                    <div className="w-24 h-24 mx-auto mb-8 rounded-full gradient-sage flex items-center justify-center">
                        <svg
                            className="w-12 h-12 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                        Application Submitted!
                    </h1>

                    {/* Message */}
                    <p className="text-lg text-charcoal-light mb-8 max-w-lg mx-auto">
                        Thanks for applying to become a PawWalk dog walker! We&apos;re excited to
                        review your application.
                    </p>

                    {/* Timeline */}
                    <div className="bg-cream rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                        <h2 className="font-semibold text-charcoal mb-4 text-center">What&apos;s Next?</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full gradient-coral flex items-center justify-center shrink-0">
                                    <span className="text-sm font-bold text-white">1</span>
                                </div>
                                <div>
                                    <p className="font-medium text-charcoal">Application Review</p>
                                    <p className="text-sm text-charcoal-light">
                                        Our team will review your profile within 1-2 business days.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-gray-light flex items-center justify-center shrink-0">
                                    <span className="text-sm font-bold text-charcoal-light">2</span>
                                </div>
                                <div>
                                    <p className="font-medium text-charcoal">Background Check</p>
                                    <p className="text-sm text-charcoal-light">
                                        We&apos;ll send you a link to complete a quick background check.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-gray-light flex items-center justify-center shrink-0">
                                    <span className="text-sm font-bold text-charcoal-light">3</span>
                                </div>
                                <div>
                                    <p className="font-medium text-charcoal">Start Walking!</p>
                                    <p className="text-sm text-charcoal-light">
                                        Once approved, your profile goes live and you can start accepting walks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Email Notice */}
                    <div className="bg-sage/10 rounded-xl p-4 mb-8 max-w-md mx-auto">
                        <div className="flex items-center justify-center gap-2 text-sage-dark">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <span className="text-sm font-medium">Check your email for a confirmation!</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <Link href="/">
                        <Button size="lg">Back to Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
