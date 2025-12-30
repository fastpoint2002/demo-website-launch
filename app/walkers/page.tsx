"use client";

import { useState } from "react";
import WalkerCard from "@/components/ui/WalkerCard";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { getApprovedWalkers, Walker } from "@/lib/data/walkers";

const services = [
    "30-min walk",
    "60-min walk",
    "Puppy care",
    "Senior dog care",
    "Group walks",
    "Running buddy",
    "Hiking trips",
    "Large breed specialist",
];

export default function WalkersPage() {
    const [location, setLocation] = useState("");
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);
    const [sortBy, setSortBy] = useState<"distance" | "price" | "rating">("distance");

    const allWalkers = getApprovedWalkers();

    // Filter walkers
    let filteredWalkers = [...allWalkers];

    if (selectedServices.length > 0) {
        filteredWalkers = filteredWalkers.filter((walker) =>
            selectedServices.some((service) => walker.services.includes(service))
        );
    }

    if (maxPrice) {
        filteredWalkers = filteredWalkers.filter((walker) =>
            Object.values(walker.pricing).some((price) => price <= maxPrice)
        );
    }

    // Sort walkers
    filteredWalkers.sort((a, b) => {
        if (sortBy === "distance") {
            return (a.distance || 0) - (b.distance || 0);
        } else if (sortBy === "price") {
            const aMin = Math.min(...Object.values(a.pricing));
            const bMin = Math.min(...Object.values(b.pricing));
            return aMin - bMin;
        } else {
            return b.rating - a.rating;
        }
    });

    const toggleService = (service: string) => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
    };

    const clearFilters = () => {
        setSelectedServices([]);
        setMaxPrice(null);
        setLocation("");
    };

    return (
        <div className="min-h-screen bg-cream pt-24 pb-16">
            <div className="container-wide">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                        Find Dog Walkers
                    </h1>
                    <p className="text-charcoal-light">
                        {filteredWalkers.length} walkers available in your area
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-md p-6 sticky top-28">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-charcoal">Filters</h2>
                                {(selectedServices.length > 0 || maxPrice) && (
                                    <button
                                        onClick={clearFilters}
                                        className="text-sm text-coral hover:underline"
                                    >
                                        Clear all
                                    </button>
                                )}
                            </div>

                            {/* Location */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-charcoal mb-2">
                                    Location
                                </label>
                                <Input
                                    placeholder="ZIP code or city"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    icon={
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
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    }
                                />
                            </div>

                            {/* Max Price */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-charcoal mb-2">
                                    Max Price per Walk
                                </label>
                                <select
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-light text-charcoal focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
                                    value={maxPrice || ""}
                                    onChange={(e) =>
                                        setMaxPrice(e.target.value ? Number(e.target.value) : null)
                                    }
                                >
                                    <option value="">Any price</option>
                                    <option value="20">Under $20</option>
                                    <option value="30">Under $30</option>
                                    <option value="40">Under $40</option>
                                    <option value="50">Under $50</option>
                                </select>
                            </div>

                            {/* Services */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-charcoal mb-3">
                                    Services
                                </label>
                                <div className="space-y-2">
                                    {services.map((service) => (
                                        <label
                                            key={service}
                                            className="flex items-center gap-3 cursor-pointer group"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedServices.includes(service)}
                                                onChange={() => toggleService(service)}
                                                className="w-4 h-4 rounded border-gray-light text-coral focus:ring-coral/20"
                                            />
                                            <span className="text-sm text-charcoal-light group-hover:text-charcoal transition-colors">
                                                {service}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <Button fullWidth variant="secondary">
                                Apply Filters
                            </Button>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-3">
                        {/* Sort Controls */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-charcoal-light">Sort by:</span>
                                <select
                                    className="px-3 py-2 rounded-lg bg-white border border-gray-light text-sm text-charcoal focus:outline-none focus:border-coral"
                                    value={sortBy}
                                    onChange={(e) =>
                                        setSortBy(e.target.value as "distance" | "price" | "rating")
                                    }
                                >
                                    <option value="distance">Distance</option>
                                    <option value="price">Price (Low to High)</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>
                        </div>

                        {/* Walker Grid */}
                        {filteredWalkers.length > 0 ? (
                            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredWalkers.map((walker: Walker) => (
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
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 bg-white rounded-2xl">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-light flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 text-gray"
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
                                <h3 className="text-lg font-semibold text-charcoal mb-2">
                                    No walkers found
                                </h3>
                                <p className="text-charcoal-light mb-4">
                                    Try adjusting your filters to see more results.
                                </p>
                                <Button variant="outline" onClick={clearFilters}>
                                    Clear Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
