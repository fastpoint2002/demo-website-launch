import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";

interface WalkerCardProps {
    id: string;
    name: string;
    photo: string;
    bio: string;
    services: string[];
    rating: number;
    reviews: number;
    pricing: Record<string, number>;
    distance?: number;
    compact?: boolean;
}

export default function WalkerCard({
    id,
    name,
    photo,
    bio,
    services,
    rating,
    reviews,
    pricing,
    distance,
    compact = false,
}: WalkerCardProps) {
    const lowestPrice = Math.min(...Object.values(pricing));

    return (
        <Link href={`/walkers/${id}`}>
            <div className="bg-white rounded-2xl shadow-md hover-lift overflow-hidden group">
                {/* Photo Section */}
                <div className={`relative ${compact ? "h-40" : "h-48"} overflow-hidden`}>
                    <Image
                        src={photo}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {distance !== undefined && (
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-charcoal">
                            {distance} mi away
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className={compact ? "p-4" : "p-5"}>
                    {/* Name & Rating */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className={`font-semibold text-charcoal ${compact ? "text-base" : "text-lg"}`}>
                            {name}
                        </h3>
                        <div className="flex items-center gap-1 shrink-0">
                            <svg
                                className="w-4 h-4 text-warning"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-medium text-charcoal">{rating}</span>
                            <span className="text-xs text-gray">({reviews})</span>
                        </div>
                    </div>

                    {/* Bio */}
                    <p
                        className={`text-charcoal-light text-sm mb-3 ${compact ? "line-clamp-2" : "line-clamp-3"
                            }`}
                    >
                        {bio}
                    </p>

                    {/* Services */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {services.slice(0, compact ? 2 : 3).map((service) => (
                            <Badge key={service} variant="sage" size="sm">
                                {service}
                            </Badge>
                        ))}
                        {services.length > (compact ? 2 : 3) && (
                            <Badge variant="default" size="sm">
                                +{services.length - (compact ? 2 : 3)}
                            </Badge>
                        )}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-light">
                        <span className="text-xs text-gray">Starting at</span>
                        <span className="text-lg font-bold text-coral">${lowestPrice}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
