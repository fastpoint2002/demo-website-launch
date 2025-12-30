export interface Walker {
    id: string;
    name: string;
    photo: string;
    bio: string;
    services: string[];
    pricing: Record<string, number>;
    serviceArea: string[];
    availability: string;
    status: "pending" | "approved" | "rejected";
    rating: number;
    reviews: number;
    distance?: number;
    experience: string;
}

export const walkers: Walker[] = [
    {
        id: "1",
        name: "Sarah Johnson",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
        bio: "Dog lover with 5+ years of professional walking experience. I treat every pup like my own! Certified in pet first aid and trained in positive reinforcement techniques.",
        services: ["30-min walk", "60-min walk", "Puppy care", "Senior dog care"],
        pricing: { "30-min walk": 20, "60-min walk": 35, "Puppy care": 25, "Senior dog care": 25 },
        serviceArea: ["10001", "10002", "10003"],
        availability: "Mon-Fri, 8am-6pm",
        status: "approved",
        rating: 4.9,
        reviews: 47,
        distance: 0.3,
        experience: "5+ years",
    },
    {
        id: "2",
        name: "Marcus Chen",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        bio: "Former veterinary technician turned full-time dog walker. I understand dog behavior and health needs. Your pup is in safe hands!",
        services: ["30-min walk", "60-min walk", "Group walks", "Medication admin"],
        pricing: { "30-min walk": 22, "60-min walk": 38, "Group walks": 18, "Medication admin": 5 },
        serviceArea: ["10001", "10004", "10005"],
        availability: "Mon-Sat, 7am-8pm",
        status: "approved",
        rating: 4.8,
        reviews: 32,
        distance: 0.5,
        experience: "3 years",
    },
    {
        id: "3",
        name: "Emma Rodriguez",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        bio: "Running enthusiast who loves taking dogs on adventures! Perfect for high-energy pups who need extra exercise. Let's tire them out together!",
        services: ["30-min walk", "60-min walk", "Running buddy", "Hiking trips"],
        pricing: { "30-min walk": 18, "60-min walk": 32, "Running buddy": 30, "Hiking trips": 75 },
        serviceArea: ["10002", "10003", "10006"],
        availability: "Tue-Sun, 6am-4pm",
        status: "approved",
        rating: 4.7,
        reviews: 28,
        distance: 0.8,
        experience: "2 years",
    },
    {
        id: "4",
        name: "James Wilson",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
        bio: "Retired dog trainer specializing in reactive and anxious dogs. I use calming techniques and create stress-free walking experiences for sensitive pups.",
        services: ["30-min walk", "60-min walk", "Reactive dog specialist", "Training walks"],
        pricing: { "30-min walk": 28, "60-min walk": 45, "Reactive dog specialist": 40, "Training walks": 50 },
        serviceArea: ["10001", "10002", "10007"],
        availability: "Mon-Fri, 9am-5pm",
        status: "approved",
        rating: 5.0,
        reviews: 19,
        distance: 1.2,
        experience: "10+ years",
    },
    {
        id: "5",
        name: "Olivia Martinez",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
        bio: "College student studying animal science. Flexible schedule and endless energy for your furry friends! Great with puppies and young dogs.",
        services: ["30-min walk", "60-min walk", "Puppy care", "Weekend walks"],
        pricing: { "30-min walk": 15, "60-min walk": 28, "Puppy care": 20, "Weekend walks": 25 },
        serviceArea: ["10003", "10004", "10008"],
        availability: "Flexible, weekends preferred",
        status: "approved",
        rating: 4.6,
        reviews: 15,
        distance: 1.5,
        experience: "1 year",
    },
    {
        id: "6",
        name: "David Thompson",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        bio: "Dog dad to three rescues. I specialize in large breeds and have experience with Danes, Mastiffs, and other gentle giants. Strong and reliable!",
        services: ["30-min walk", "60-min walk", "Large breed specialist", "Multi-dog walks"],
        pricing: { "30-min walk": 25, "60-min walk": 40, "Large breed specialist": 35, "Multi-dog walks": 45 },
        serviceArea: ["10002", "10005", "10009"],
        availability: "Daily, 6am-9pm",
        status: "approved",
        rating: 4.8,
        reviews: 41,
        distance: 0.7,
        experience: "4 years",
    },
    {
        id: "7",
        name: "Aisha Patel",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
        bio: "Professional pet sitter and walker. I offer GPS-tracked walks with photo updates so you always know your pup is happy and safe!",
        services: ["30-min walk", "60-min walk", "GPS tracking", "Photo updates"],
        pricing: { "30-min walk": 20, "60-min walk": 35, "GPS tracking": 0, "Photo updates": 0 },
        serviceArea: ["10001", "10006", "10010"],
        availability: "Mon-Sat, 8am-7pm",
        status: "approved",
        rating: 4.9,
        reviews: 56,
        distance: 0.4,
        experience: "6 years",
    },
    {
        id: "8",
        name: "Michael Brown",
        photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
        bio: "Former K9 handler with the police department. Expert in dog behavior and safety. Your dog will get the structure and exercise they need!",
        services: ["30-min walk", "60-min walk", "Obedience reinforcement", "Security walks"],
        pricing: { "30-min walk": 30, "60-min walk": 50, "Obedience reinforcement": 45, "Security walks": 60 },
        serviceArea: ["10001", "10002", "10003", "10004"],
        availability: "Daily, 5am-10pm",
        status: "approved",
        rating: 4.9,
        reviews: 38,
        distance: 0.6,
        experience: "15 years",
    },
];

export function getWalkerById(id: string): Walker | undefined {
    return walkers.find((walker) => walker.id === id);
}

export function getApprovedWalkers(): Walker[] {
    return walkers.filter((walker) => walker.status === "approved");
}

export function searchWalkers(query: {
    location?: string;
    maxPrice?: number;
    services?: string[];
}): Walker[] {
    let results = getApprovedWalkers();

    if (query.maxPrice) {
        results = results.filter((walker) =>
            Object.values(walker.pricing).some((price) => price <= query.maxPrice!)
        );
    }

    if (query.services && query.services.length > 0) {
        results = results.filter((walker) =>
            query.services!.some((service) => walker.services.includes(service))
        );
    }

    return results;
}
