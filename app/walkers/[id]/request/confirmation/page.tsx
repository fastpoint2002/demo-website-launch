import Link from "next/link";
import Button from "@/components/ui/Button";
import { getWalkerById } from "@/lib/data/walkers";

interface ConfirmationPageProps {
    params: Promise<{ id: string }>;
}

export default async function ConfirmationPage({ params }: ConfirmationPageProps) {
    const { id } = await params;
    const walker = getWalkerById(id);

    if (!walker) {
        return null;
    }

    return (
        <div className="min-h-screen bg-cream pt-24 pb-16 flex items-center">
            <div className="container-narrow">
                <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center animate-fade-in">
                    {/* Success Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-sage flex items-center justify-center animate-pulse-subtle">
                        <svg
                            className="w-10 h-10 text-white"
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

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                        Request Sent!
                    </h1>

                    {/* Message */}
                    <p className="text-lg text-charcoal-light mb-8 max-w-md mx-auto">
                        We&apos;ve notified <span className="font-semibold text-charcoal">{walker.name}</span>{" "}
                        about your walk request. They&apos;ll get back to you soon!
                    </p>

                    {/* What's Next */}
                    <div className="bg-cream rounded-xl p-6 mb-8 text-left">
                        <h2 className="font-semibold text-charcoal mb-4">What happens next?</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 mt-0.5 rounded-full bg-coral/10 flex items-center justify-center shrink-0">
                                    <span className="text-xs font-bold text-coral">1</span>
                                </div>
                                <span className="text-charcoal-light">
                                    {walker.name.split(" ")[0]} will review your request and check their availability.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 mt-0.5 rounded-full bg-coral/10 flex items-center justify-center shrink-0">
                                    <span className="text-xs font-bold text-coral">2</span>
                                </div>
                                <span className="text-charcoal-light">
                                    You&apos;ll receive an email confirmation when they accept.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 mt-0.5 rounded-full bg-coral/10 flex items-center justify-center shrink-0">
                                    <span className="text-xs font-bold text-coral">3</span>
                                </div>
                                <span className="text-charcoal-light">
                                    Coordinate directly with {walker.name.split(" ")[0]} for pickup details.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/walkers">
                            <Button variant="outline">Browse More Walkers</Button>
                        </Link>
                        <Link href="/">
                            <Button>Back to Home</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
