"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
        <Link href={`/walkers/${id}`} className="block h-full">
            <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                    rest: { y: 0, scale: 1 },
                    hover: { y: -8, scale: 1.02 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden group border border-transparent hover:border-coral/10 hover:shadow-xl transition-colors h-full flex flex-col"
            >
                {/* Photo Section */}
                <div className={`relative ${compact ? "h-48" : "h-56"} overflow-hidden`}>
                    <Image
                        src={photo}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-300" />

                    {distance !== undefined && (
                        <motion.div
                            variants={{ hover: { y: 2 } }}
                            className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-charcoal shadow-sm flex items-center gap-1"
                        >
                            <svg className="w-3 h-3 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {distance} mi
                        </motion.div>
                    )}
                </div>

                {/* Content Section */}
                <div className={`${compact ? "p-4" : "p-6"} flex-1 flex flex-col`}>
                    {/* Name & Rating */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className={`font-bold text-charcoal group-hover:text-coral transition-colors ${compact ? "text-lg" : "text-xl"}`}>
                            {name}
                        </h3>
                        <div className="flex items-center gap-1 shrink-0 bg-cream/80 px-2 py-0.5 rounded-lg border border-transparent group-hover:border-coral/10 transition-colors">
                            <svg
                                className="w-4 h-4 text-warning"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-bold text-charcoal">{rating}</span>
                        </div>
                    </div>

                    {/* Bio */}
                    <p
                        className={`text-charcoal-light text-sm mb-4 line-clamp-2 leading-relaxed`}
                    >
                        {bio}
                    </p>

                    {/* Services */}
                    <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                        {services.slice(0, compact ? 2 : 3).map((service) => (
                            <Badge key={service} variant="sage" size="sm" className="group-hover:bg-sage/20 transition-colors">
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
                    <div className="flex items-center justify-between pt-4 border-t border-gray-light/50">
                        <span className="text-xs font-semibold text-gray uppercase tracking-wider">Starting at</span>
                        <div className="flex items-baseline gap-0.5">
                            <span className="text-lg font-bold text-coral">${lowestPrice}</span>
                            <span className="text-xs text-charcoal-light font-medium">/walk</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
