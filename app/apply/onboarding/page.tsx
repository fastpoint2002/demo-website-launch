"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const steps = [
    { id: 1, title: "Basic Info" },
    { id: 2, title: "Profile" },
    { id: 3, title: "Services" },
    { id: 4, title: "Availability" },
    { id: 5, title: "Review" },
];

const services = [
    "30-min walk",
    "60-min walk",
    "Puppy care",
    "Senior dog care",
    "Group walks",
    "Running buddy",
    "Hiking trips",
    "Large breed specialist",
    "Reactive dog specialist",
    "Medication admin",
];

export default function OnboardingPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        // Basic Info
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        // Profile
        bio: "",
        experience: "",
        // Services
        selectedServices: [] as string[],
        pricing: {} as Record<string, string>,
        serviceZips: "",
        // Availability
        availability: "",
        startDate: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const toggleService = (service: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedServices: prev.selectedServices.includes(service)
                ? prev.selectedServices.filter((s) => s !== service)
                : [...prev.selectedServices, service],
        }));
    };

    const handlePriceChange = (service: string, price: string) => {
        setFormData((prev) => ({
            ...prev,
            pricing: { ...prev.pricing, [service]: price },
        }));
    };

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        router.push("/apply/onboarding/success");
    };

    return (
        <div className="min-h-screen bg-cream pt-24 pb-16">
            <div className="container-narrow">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link
                        href="/apply"
                        className="inline-flex items-center gap-2 text-charcoal-light hover:text-coral transition-colors mb-4"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </Link>
                    <h1 className="text-3xl font-bold text-charcoal mb-2">
                        Become a Dog Walker
                    </h1>
                    <p className="text-charcoal-light">
                        Complete your profile to start accepting walks.
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-2 mb-10">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex items-center">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${step.id === currentStep
                                        ? "gradient-coral text-white"
                                        : step.id < currentStep
                                            ? "bg-sage text-white"
                                            : "bg-gray-light text-charcoal-light"
                                    }`}
                            >
                                {step.id < currentStep ? (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    step.id
                                )}
                            </div>
                            {index < steps.length - 1 && (
                                <div
                                    className={`w-8 h-0.5 ${step.id < currentStep ? "bg-sage" : "bg-gray-light"
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
                        {/* Step 1: Basic Info */}
                        {currentStep === 1 && (
                            <div className="animate-fade-in">
                                <h2 className="text-xl font-semibold text-charcoal mb-6">
                                    Let&apos;s start with the basics
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Input
                                        label="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="John"
                                        required
                                    />
                                    <Input
                                        label="Last Name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Smith"
                                        required
                                    />
                                    <Input
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                    <Input
                                        label="Phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(555) 123-4567"
                                        required
                                    />
                                    <div className="sm:col-span-2">
                                        <Input
                                            label="Create Password"
                                            name="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="At least 8 characters"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Profile */}
                        {currentStep === 2 && (
                            <div className="animate-fade-in">
                                <h2 className="text-xl font-semibold text-charcoal mb-6">
                                    Tell us about yourself
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-charcoal mb-2">
                                            Bio
                                        </label>
                                        <textarea
                                            name="bio"
                                            value={formData.bio}
                                            onChange={handleChange}
                                            placeholder="Tell dog owners why they should choose you. Share your experience, what you love about dogs, and what makes you a great walker..."
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-light text-charcoal placeholder:text-gray focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 resize-none"
                                            required
                                        />
                                        <p className="text-xs text-gray mt-1">
                                            Tip: Profiles with detailed bios get 3x more requests!
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-charcoal mb-2">
                                            Experience with dogs
                                        </label>
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-light text-charcoal focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
                                            required
                                        >
                                            <option value="">Select experience level</option>
                                            <option value="< 1 year">Less than 1 year</option>
                                            <option value="1-2 years">1-2 years</option>
                                            <option value="3-5 years">3-5 years</option>
                                            <option value="5+ years">5+ years</option>
                                            <option value="10+ years">10+ years (professional)</option>
                                        </select>
                                    </div>
                                    <div className="p-4 bg-cream rounded-xl">
                                        <p className="text-sm text-charcoal-light">
                                            <strong className="text-charcoal">Profile Photo:</strong> You can add a profile photo after your account is approved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Services */}
                        {currentStep === 3 && (
                            <div className="animate-fade-in">
                                <h2 className="text-xl font-semibold text-charcoal mb-2">
                                    What services do you offer?
                                </h2>
                                <p className="text-charcoal-light text-sm mb-6">
                                    Select all that apply and set your prices.
                                </p>
                                <div className="space-y-3 mb-6">
                                    {services.map((service) => (
                                        <div
                                            key={service}
                                            className={`flex items-center justify-between p-4 rounded-xl border transition-colors cursor-pointer ${formData.selectedServices.includes(service)
                                                    ? "border-coral bg-coral/5"
                                                    : "border-gray-light hover:border-gray"
                                                }`}
                                            onClick={() => toggleService(service)}
                                        >
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.selectedServices.includes(service)}
                                                    onChange={() => toggleService(service)}
                                                    className="w-5 h-5 rounded border-gray-light text-coral focus:ring-coral/20"
                                                />
                                                <span className="font-medium text-charcoal">{service}</span>
                                            </div>
                                            {formData.selectedServices.includes(service) && (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-gray">$</span>
                                                    <input
                                                        type="number"
                                                        placeholder="25"
                                                        value={formData.pricing[service] || ""}
                                                        onChange={(e) => handlePriceChange(service, e.target.value)}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="w-20 px-3 py-2 rounded-lg border border-gray-light text-charcoal focus:outline-none focus:border-coral"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <Input
                                    label="Service Area (ZIP codes)"
                                    name="serviceZips"
                                    value={formData.serviceZips}
                                    onChange={handleChange}
                                    placeholder="10001, 10002, 10003"
                                />
                                <p className="text-xs text-gray mt-1">
                                    Enter ZIP codes separated by commas
                                </p>
                            </div>
                        )}

                        {/* Step 4: Availability */}
                        {currentStep === 4 && (
                            <div className="animate-fade-in">
                                <h2 className="text-xl font-semibold text-charcoal mb-6">
                                    When are you available?
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-charcoal mb-2">
                                            Describe your typical availability
                                        </label>
                                        <textarea
                                            name="availability"
                                            value={formData.availability}
                                            onChange={handleChange}
                                            placeholder="e.g., Weekdays 9am-5pm, weekends flexible..."
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-light text-charcoal placeholder:text-gray focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 resize-none"
                                            required
                                        />
                                    </div>
                                    <Input
                                        label="When can you start?"
                                        name="startDate"
                                        type="date"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 5: Review */}
                        {currentStep === 5 && (
                            <div className="animate-fade-in">
                                <h2 className="text-xl font-semibold text-charcoal mb-6">
                                    Review your application
                                </h2>
                                <div className="space-y-6">
                                    <div className="p-4 bg-cream rounded-xl">
                                        <h3 className="font-medium text-charcoal mb-2">Basic Info</h3>
                                        <p className="text-charcoal-light">
                                            {formData.firstName} {formData.lastName}<br />
                                            {formData.email} • {formData.phone}
                                        </p>
                                    </div>
                                    <div className="p-4 bg-cream rounded-xl">
                                        <h3 className="font-medium text-charcoal mb-2">Profile</h3>
                                        <p className="text-charcoal-light text-sm">{formData.bio || "No bio provided"}</p>
                                        <p className="text-charcoal-light text-sm mt-2">Experience: {formData.experience}</p>
                                    </div>
                                    <div className="p-4 bg-cream rounded-xl">
                                        <h3 className="font-medium text-charcoal mb-2">Services</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {formData.selectedServices.length > 0 ? (
                                                formData.selectedServices.map((service) => (
                                                    <span
                                                        key={service}
                                                        className="px-3 py-1 bg-sage/10 text-sage-dark rounded-full text-sm"
                                                    >
                                                        {service} - ${formData.pricing[service] || "TBD"}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="text-charcoal-light text-sm">No services selected</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-4 bg-cream rounded-xl">
                                        <h3 className="font-medium text-charcoal mb-2">Availability</h3>
                                        <p className="text-charcoal-light text-sm">{formData.availability || "Not specified"}</p>
                                    </div>
                                    <div className="p-4 bg-coral/5 border border-coral/20 rounded-xl">
                                        <p className="text-sm text-charcoal">
                                            <strong>Note:</strong> Your application will be reviewed by our team within 1-2 business days. We&apos;ll email you once approved!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between">
                        {currentStep > 1 ? (
                            <Button type="button" variant="ghost" onClick={prevStep}>
                                Back
                            </Button>
                        ) : (
                            <div />
                        )}
                        {currentStep < steps.length ? (
                            <Button type="button" onClick={nextStep}>
                                Continue
                            </Button>
                        ) : (
                            <Button type="submit" loading={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
