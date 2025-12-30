import Link from "next/link";
import { walkers } from "@/lib/data/walkers";
import { walkRequests } from "@/lib/data/requests";

export default function AdminDashboard() {
    const pendingWalkers = walkers.filter((w) => w.status === "pending").length;
    const approvedWalkers = walkers.filter((w) => w.status === "approved").length;
    const pendingRequests = walkRequests.filter((r) => r.status === "pending").length;
    const totalRequests = walkRequests.length;

    const stats = [
        {
            label: "Pending Applications",
            value: pendingWalkers,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "bg-warning/10 text-warning",
            href: "/admin/walkers",
        },
        {
            label: "Active Walkers",
            value: approvedWalkers,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: "bg-sage/10 text-sage",
            href: "/admin/walkers",
        },
        {
            label: "Pending Requests",
            value: pendingRequests,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
            color: "bg-coral/10 text-coral",
            href: "/admin/requests",
        },
        {
            label: "Total Requests",
            value: totalRequests,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            color: "bg-charcoal/10 text-charcoal",
            href: "/admin/requests",
        },
    ];

    // Recent requests
    const recentRequests = walkRequests.slice(0, 5);

    return (
        <div className="min-h-screen bg-cream pt-24 pb-16">
            <div className="container-wide">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-charcoal mb-2">Admin Dashboard</h1>
                    <p className="text-charcoal-light">
                        Manage walkers and walk requests.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, index) => (
                        <Link key={index} href={stat.href}>
                            <div className="bg-white rounded-2xl shadow-md p-6 hover-lift">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                                        {stat.icon}
                                    </div>
                                    <span className="text-3xl font-bold text-charcoal">{stat.value}</span>
                                </div>
                                <p className="text-charcoal-light text-sm">{stat.label}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Quick Links */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <Link href="/admin/walkers">
                        <div className="bg-white rounded-2xl shadow-md p-6 hover-lift border-l-4 border-coral">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-charcoal mb-1">Walker Management</h2>
                                    <p className="text-charcoal-light text-sm">Review and approve walker applications</p>
                                </div>
                                <svg className="w-6 h-6 text-charcoal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                    <Link href="/admin/requests">
                        <div className="bg-white rounded-2xl shadow-md p-6 hover-lift border-l-4 border-sage">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-charcoal mb-1">Walk Requests</h2>
                                    <p className="text-charcoal-light text-sm">View and manage walk requests</p>
                                </div>
                                <svg className="w-6 h-6 text-charcoal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Recent Requests */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <div className="p-6 border-b border-gray-light">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-charcoal">Recent Walk Requests</h2>
                            <Link href="/admin/requests" className="text-coral hover:underline text-sm font-medium">
                                View all
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-cream">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-charcoal-light uppercase tracking-wider">
                                        Owner
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-charcoal-light uppercase tracking-wider">
                                        Walker
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-charcoal-light uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-charcoal-light uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-light">
                                {recentRequests.map((request) => (
                                    <tr key={request.id} className="hover:bg-cream/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div>
                                                <p className="font-medium text-charcoal">{request.ownerName}</p>
                                                <p className="text-sm text-charcoal-light">{request.dogName} ({request.dogBreed})</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-charcoal">
                                            {request.walkerName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-charcoal-light">
                                            {new Date(request.date).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-2.5 py-1 rounded-full text-xs font-medium ${request.status === "pending"
                                                        ? "bg-warning/10 text-warning"
                                                        : request.status === "confirmed"
                                                            ? "bg-sage/10 text-sage"
                                                            : "bg-gray-light text-charcoal-light"
                                                    }`}
                                            >
                                                {request.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
