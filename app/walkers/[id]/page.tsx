import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { getWalkerById, getApprovedWalkers } from "@/lib/data/walkers";

interface WalkerProfilePageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    const walkers = getApprovedWalkers();
    return walkers.map((walker) => ({
        id: walker.id,
    }));
}

export default async function WalkerProfilePage({ params }: WalkerProfilePageProps) {
    const { id } = await params;
    const walker = getWalkerById(id);

    if (!walker || walker.status !== "approved") {
        notFound();
    }

    return (
        <div className="min-h-screen bg-cream pt-24 pb-16">
            <div className="container-wide">
                {/* Back Link */}
                <Link
                    href="/walkers"
                    className="inline-flex items-center gap-2 text-charcoal-light hover:text-coral transition-colors mb-6"
                >
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
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to walkers
                </Link>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Hero Card */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <div className="relative h-64 md:h-80">
                                <Image
                                    src={walker.photo}
                                    alt={walker.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {walker.name}
                                    </h1>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <svg
                                                className="w-5 h-5 text-warning"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-white font-semibold">{walker.rating}</span>
                                            <span className="text-white/70">({walker.reviews} reviews)</span>
                                        </div>
                                        {walker.distance && (
                                            <div className="flex items-center gap-1 text-white/70">
                                                <svg
                                                    className="w-4 h-4"
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
                                                </svg>
                                                <span>{walker.distance} mi away</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="p-6">
                                <h2 className="text-lg font-semibold text-charcoal mb-3">About Me</h2>
                                <p className="text-charcoal-light leading-relaxed">{walker.bio}</p>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-lg font-semibold text-charcoal mb-4">Services & Pricing</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {walker.services.map((service) => (
                                    <div
                                        key={service}
                                        className="flex items-center justify-between p-4 bg-cream rounded-xl"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                                                <svg
                                                    className="w-5 h-5 text-sage"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="font-medium text-charcoal">{service}</span>
                                        </div>
                                        <span className="text-lg font-bold text-coral">
                                            ${walker.pricing[service] || "—"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-lg font-semibold text-charcoal mb-4">Details</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-sm text-charcoal-light mb-1">Experience</h3>
                                    <p className="font-medium text-charcoal">{walker.experience}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm text-charcoal-light mb-1">Availability</h3>
                                    <p className="font-medium text-charcoal">{walker.availability}</p>
                                </div>
                                <div className="sm:col-span-2">
                                    <h3 className="text-sm text-charcoal-light mb-2">Service Area</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {walker.serviceArea.map((zip) => (
                                            <Badge key={zip} variant="default">
                                                {zip}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Request CTA */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-md p-6 sticky top-28">
                            <div className="text-center mb-6">
                                <p className="text-sm text-charcoal-light mb-1">Starting at</p>
                                <p className="text-4xl font-bold text-coral">
                                    ${Math.min(...Object.values(walker.pricing))}
                                </p>
                                <p className="text-sm text-charcoal-light">per walk</p>
                            </div>

                            <Link href={`/walkers/${walker.id}/request`}>
                                <Button fullWidth size="lg">
                                    Request a Walk
                                </Button>
                            </Link>

                            <div className="mt-6 pt-6 border-t border-gray-light">
                                <div className="flex items-center gap-3 text-sm text-charcoal-light">
                                    <svg
                                        className="w-5 h-5 text-sage"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Background checked</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-charcoal-light mt-3">
                                    <svg
                                        className="w-5 h-5 text-sage"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Insured walks</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-charcoal-light mt-3">
                                    <svg
                                        className="w-5 h-5 text-sage"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Quick response time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
