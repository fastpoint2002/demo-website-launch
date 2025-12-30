"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { walkers, Walker } from "@/lib/data/walkers";

type TabType = "pending" | "approved" | "rejected";

export default function AdminWalkersPage() {
    const [activeTab, setActiveTab] = useState<TabType>("pending");
    const [walkerList, setWalkerList] = useState<Walker[]>(walkers);

    const tabs: { id: TabType; label: string; count: number }[] = [
        { id: "pending", label: "Pending", count: walkerList.filter((w) => w.status === "pending").length },
        { id: "approved", label: "Approved", count: walkerList.filter((w) => w.status === "approved").length },
        { id: "rejected", label: "Rejected", count: walkerList.filter((w) => w.status === "rejected").length },
    ];

    const filteredWalkers = walkerList.filter((walker) => walker.status === activeTab);

    const handleApprove = (walkerId: string) => {
        setWalkerList((prev) =>
            prev.map((w) =>
                w.id === walkerId ? { ...w, status: "approved" as const } : w
            )
        );
    };

    const handleReject = (walkerId: string) => {
        setWalkerList((prev) =>
            prev.map((w) =>
                w.id === walkerId ? { ...w, status: "rejected" as const } : w
            )
        );
    };

    return (
        <div className="min-h-screen bg-cream pt-24 pb-16">
            <div className="container-wide">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href="/admin"
                        className="text-charcoal-light hover:text-coral transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-charcoal">Walker Management</h1>
                        <p className="text-charcoal-light">Review and manage walker applications</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-full font-medium transition-colors ${activeTab === tab.id
                                    ? "gradient-coral text-white"
                                    : "bg-white text-charcoal-light hover:bg-gray-light/50"
                                }`}
                        >
                            {tab.label} ({tab.count})
                        </button>
                    ))}
                </div>

                {/* Walker List */}
                <div className="space-y-4">
                    {filteredWalkers.length > 0 ? (
                        filteredWalkers.map((walker) => (
                            <div
                                key={walker.id}
                                className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6"
                            >
                                {/* Photo & Basic Info */}
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                                        <Image
                                            src={walker.photo}
                                            alt={walker.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold text-charcoal">{walker.name}</h3>
                                            <Badge
                                                variant={
                                                    walker.status === "approved"
                                                        ? "success"
                                                        : walker.status === "pending"
                                                            ? "warning"
                                                            : "error"
                                                }
                                            >
                                                {walker.status}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-charcoal-light line-clamp-2 mb-2">
                                            {walker.bio}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {walker.services.slice(0, 4).map((service) => (
                                                <Badge key={service} variant="sage" size="sm">
                                                    {service}
                                                </Badge>
                                            ))}
                                            {walker.services.length > 4 && (
                                                <Badge variant="default" size="sm">
                                                    +{walker.services.length - 4}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex flex-col gap-2 md:w-48">
                                    <div className="text-sm">
                                        <span className="text-charcoal-light">Experience:</span>{" "}
                                        <span className="text-charcoal font-medium">{walker.experience}</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-charcoal-light">Starting at:</span>{" "}
                                        <span className="text-charcoal font-medium">
                                            ${Math.min(...Object.values(walker.pricing))}
                                        </span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-charcoal-light">Area:</span>{" "}
                                        <span className="text-charcoal">{walker.serviceArea.slice(0, 2).join(", ")}</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex md:flex-col gap-2 md:w-32">
                                    {walker.status === "pending" && (
                                        <>
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                fullWidth
                                                onClick={() => handleApprove(walker.id)}
                                            >
                                                Approve
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                fullWidth
                                                onClick={() => handleReject(walker.id)}
                                            >
                                                Reject
                                            </Button>
                                        </>
                                    )}
                                    {walker.status === "approved" && (
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            fullWidth
                                            onClick={() => handleReject(walker.id)}
                                        >
                                            Disable
                                        </Button>
                                    )}
                                    {walker.status === "rejected" && (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            fullWidth
                                            onClick={() => handleApprove(walker.id)}
                                        >
                                            Re-approve
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white rounded-2xl shadow-md p-12 text-center">
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
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-charcoal mb-2">
                                No {activeTab} walkers
                            </h3>
                            <p className="text-charcoal-light">
                                {activeTab === "pending"
                                    ? "There are no pending applications to review."
                                    : activeTab === "approved"
                                        ? "No walkers have been approved yet."
                                        : "No walkers have been rejected."}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
