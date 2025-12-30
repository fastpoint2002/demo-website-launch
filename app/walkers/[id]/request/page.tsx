"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { getWalkerById } from "@/lib/data/walkers";

interface RequestPageProps {
    params: Promise<{ id: string }>;
}

export default function RequestPage({ params }: RequestPageProps) {
    const { id } = use(params);
    const router = useRouter();
    const walker = getWalkerById(id);

    const [formData, setFormData] = useState({
        ownerName: "",
        ownerEmail: "",
        ownerPhone: "",
        date: "",
        timeWindow: "",
        dogName: "",
        dogBreed: "",
        dogSize: "",
        dogTemperament: "",
        serviceType: "",
        notes: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!walker) {
        return null;
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Redirect to confirmation
        router.push(`/walkers/${id}/request/confirmation`);
    };

    return (
        <div className="min-h-screen bg-cream pt-24 pb-16">
            <div className="container-narrow">
                {/* Back Link */}
                <Link
                    href={`/walkers/${id}`}
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
                    Back to profile
                </Link>

                {/* Header */}
                <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
                    <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                            <Image
                                src={walker.photo}
                                alt={walker.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-charcoal">
                                Request a Walk with {walker.name}
                            </h1>
                            <p className="text-charcoal-light">
                                Fill out the form below and {walker.name.split(" ")[0]} will get back to you soon.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Your Information */}
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <h2 className="text-lg font-semibold text-charcoal mb-4">
                            Your Information
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Input
                                label="Your Name"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleChange}
                                placeholder="John Smith"
                                required
                            />
                            <Input
                                label="Email"
                                name="ownerEmail"
                                type="email"
                                value={formData.ownerEmail}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                            />
                            <Input
                                label="Phone Number"
                                name="ownerPhone"
                                type="tel"
                                value={formData.ownerPhone}
                                onChange={handleChange}
                                placeholder="(555) 123-4567"
                                required
                            />
                        </div>
                    </div>

                    {/* Walk Details */}
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <h2 className="text-lg font-semibold text-charcoal mb-4">
                            Walk Details
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Input
                                label="Preferred Date"
                                name="date"
                                type="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-2">
                                    Time Window
                                </label>
                                <select
                                    name="timeWindow"
                                    value={formData.timeWindow}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-light text-charcoal focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
                                    required
                                >
                                    <option value="">Select a time</option>
                                    <option value="6:00 AM - 8:00 AM">6:00 AM - 8:00 AM</option>
                                    <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                                    <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                                    <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                                    <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                                    <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                                    <option value="6:00 PM - 8:00 PM">6:00 PM - 8:00 PM</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-charcoal mb-2">
                                    Service Type
                                </label>
                                <select
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-light text-charcoal focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
                                    required
                                >
                                    <option value="">Select a service</option>
                                    {walker.services.map((service) => (
                                        <option key={service} value={service}>
                                            {service} - ${walker.pricing[service]}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Dog Information */}
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <h2 className="text-lg font-semibold text-charcoal mb-4">
                            About Your Dog
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Input
                                label="Dog's Name"
                                name="dogName"
                                value={formData.dogName}
                                onChange={handleChange}
                                placeholder="Buddy"
                                required
                            />
                            <Input
                                label="Breed"
                                name="dogBreed"
                                value={formData.dogBreed}
                                onChange={handleChange}
                                placeholder="Golden Retriever"
                                required
                            />
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-2">
                                    Size
                                </label>
                                <select
                                    name="dogSize"
                                    value={formData.dogSize}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-light text-charcoal focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
                                    required
                                >
                                    <option value="">Select size</option>
                                    <option value="small">Small (under 20 lbs)</option>
                                    <option value="medium">Medium (20-50 lbs)</option>
                                    <option value="large">Large (50-90 lbs)</option>
                                    <option value="extra-large">Extra Large (90+ lbs)</option>
                                </select>
                            </div>
                            <Input
                                label="Temperament"
                                name="dogTemperament"
                                value={formData.dogTemperament}
                                onChange={handleChange}
                                placeholder="Friendly, energetic"
                            />
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-charcoal mb-2">
                                    Additional Notes
                                </label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder="Any special instructions, allergies, or things we should know..."
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-light text-charcoal placeholder:text-gray focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                        <Link href={`/walkers/${id}`}>
                            <Button variant="ghost" type="button">
                                Cancel
                            </Button>
                        </Link>
                        <Button type="submit" size="lg" loading={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Request"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
