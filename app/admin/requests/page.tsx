"use client";

import { useState } from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { walkRequests, WalkRequest } from "@/lib/data/requests";

type StatusFilter = "all" | "pending" | "confirmed" | "completed" | "cancelled";

export default function AdminRequestsPage() {
    const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
    const [expandedRequest, setExpandedRequest] = useState<string | null>(null);

    const filteredRequests =
        statusFilter === "all"
            ? walkRequests
            : walkRequests.filter((r) => r.status === statusFilter);

    const statusCounts = {
        all: walkRequests.length,
        pending: walkRequests.filter((r) => r.status === "pending").length,
        confirmed: walkRequests.filter((r) => r.status === "confirmed").length,
        completed: walkRequests.filter((r) => r.status === "completed").length,
        cancelled: walkRequests.filter((r) => r.status === "cancelled").length,
    };

    const toggleExpand = (requestId: string) => {
        setExpandedRequest(expandedRequest === requestId ? null : requestId);
    };

    const getStatusBadgeVariant = (status: WalkRequest["status"]) => {
        switch (status) {
            case "pending":
                return "warning";
            case "confirmed":
                return "sage";
            case "completed":
                return "success";
            case "cancelled":
                return "error";
            default:
                return "default";
        }
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
                        <h1 className="text-3xl font-bold text-charcoal">Walk Requests</h1>
                        <p className="text-charcoal-light">View and manage all walk requests</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {(["all", "pending", "confirmed", "completed", "cancelled"] as StatusFilter[]).map(
                        (status) => (
                            <button
                                key={status}
                                onClick={() => setStatusFilter(status)}
                                className={`px-4 py-2 rounded-full font-medium capitalize transition-colors ${statusFilter === status
                                        ? "gradient-coral text-white"
                                        : "bg-white text-charcoal-light hover:bg-gray-light/50"
                                    }`}
                            >
                                {status} ({statusCounts[status]})
                            </button>
                        )
                    )}
                </div>

                {/* Requests List */}
                <div className="space-y-4">
                    {filteredRequests.length > 0 ? (
                        filteredRequests.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden"
                            >
                                {/* Main Row */}
                                <div
                                    className="p-6 cursor-pointer hover:bg-cream/50 transition-colors"
                                    onClick={() => toggleExpand(request.id)}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-semibold text-charcoal">
                                                    {request.ownerName}
                                                </h3>
                                                <Badge variant={getStatusBadgeVariant(request.status)}>
                                                    {request.status}
                                                </Badge>
                                            </div>
                                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-charcoal-light">
                                                <span>🐕 {request.dogName} ({request.dogBreed})</span>
                                                <span>📅 {new Date(request.date).toLocaleDateString()}</span>
                                                <span>⏰ {request.timeWindow}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-right">
                                                <p className="text-sm text-charcoal-light">Walker</p>
                                                <p className="font-medium text-charcoal">{request.walkerName}</p>
                                            </div>
                                            <svg
                                                className={`w-5 h-5 text-charcoal-light transition-transform ${expandedRequest === request.id ? "rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Details */}
                                {expandedRequest === request.id && (
                                    <div className="px-6 pb-6 border-t border-gray-light animate-fade-in">
                                        <div className="grid md:grid-cols-2 gap-6 pt-6">
                                            {/* Owner Info */}
                                            <div>
                                                <h4 className="font-medium text-charcoal mb-3">Owner Information</h4>
                                                <div className="space-y-2 text-sm">
                                                    <p>
                                                        <span className="text-charcoal-light">Name:</span>{" "}
                                                        <span className="text-charcoal">{request.ownerName}</span>
                                                    </p>
                                                    <p>
                                                        <span className="text-charcoal-light">Email:</span>{" "}
                                                        <span className="text-charcoal">{request.ownerEmail}</span>
                                                    </p>
                                                    <p>
                                                        <span className="text-charcoal-light">Phone:</span>{" "}
                                                        <span className="text-charcoal">{request.ownerPhone}</span>
                                                    </p>
                                                    <p>
                                                        <span className="text-charcoal-light">Location:</span>{" "}
                                                        <span className="text-charcoal">{request.location}</span>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Dog Info */}
                                            <div>
                                                <h4 className="font-medium text-charcoal mb-3">Dog Information</h4>
                                                <div className="space-y-2 text-sm">
                                                    <p>
                                                        <span className="text-charcoal-light">Name:</span>{" "}
                                                        <span className="text-charcoal">{request.dogName}</span>
                                                    </p>
                                                    <p>
                                                        <span className="text-charcoal-light">Breed:</span>{" "}
                                                        <span className="text-charcoal">{request.dogBreed}</span>
                                                    </p>
                                                    <p>
                                                        <span className="text-charcoal-light">Size:</span>{" "}
                                                        <span className="text-charcoal capitalize">{request.dogSize}</span>
                                                    </p>
                                                    <p>
                                                        <span className="text-charcoal-light">Temperament:</span>{" "}
                                                        <span className="text-charcoal">{request.dogTemperament}</span>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Walk Details */}
                                            <div>
                                                <h4 className="font-medium text-charcoal mb-3">Walk Details</h4>
                                                <div className="space-y-2 text-sm">
                                                    <p>
                                                        <span className="text-charcoal-light">Service:</span>{" "}
                                                        <span className="text-charcoal">{request.serviceType}</span>
                                                    </p>
                                                    <p>
                                                        <span className="text-charcoal-light">Date:</span>{" "}
                                                        <span className="text-charcoal">
                                                            {new Date(request.date).toLocaleDateString("en-US", {
                                                                weekday: "long",
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            })}
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className="text-charcoal-light">Time:</span>{" "}
                                                        <span className="text-charcoal">{request.timeWindow}</span>
                                                    </p>
                                                    <p>
                                                        <span className="text-charcoal-light">Submitted:</span>{" "}
                                                        <span className="text-charcoal">
                                                            {new Date(request.createdAt).toLocaleString()}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Notes */}
                                            {request.notes && (
                                                <div>
                                                    <h4 className="font-medium text-charcoal mb-3">Notes</h4>
                                                    <p className="text-sm text-charcoal-light bg-cream p-3 rounded-lg">
                                                        {request.notes}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
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
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-charcoal mb-2">
                                No requests found
                            </h3>
                            <p className="text-charcoal-light">
                                There are no {statusFilter === "all" ? "" : statusFilter} walk requests.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
