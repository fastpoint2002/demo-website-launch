export interface WalkRequest {
    id: string;
    walkerId: string;
    walkerName: string;
    ownerName: string;
    ownerEmail: string;
    ownerPhone: string;
    location: string;
    date: string;
    timeWindow: string;
    dogName: string;
    dogBreed: string;
    dogSize: "small" | "medium" | "large" | "extra-large";
    dogTemperament: string;
    serviceType: string;
    notes: string;
    status: "pending" | "confirmed" | "completed" | "cancelled";
    createdAt: string;
}

export const walkRequests: WalkRequest[] = [
    {
        id: "req-001",
        walkerId: "1",
        walkerName: "Sarah Johnson",
        ownerName: "John Smith",
        ownerEmail: "john.smith@email.com",
        ownerPhone: "(555) 123-4567",
        location: "123 Main St, New York, NY 10001",
        date: "2024-12-30",
        timeWindow: "10:00 AM - 12:00 PM",
        dogName: "Buddy",
        dogBreed: "Golden Retriever",
        dogSize: "large",
        dogTemperament: "Friendly, loves other dogs",
        serviceType: "60-min walk",
        notes: "Buddy pulls a bit on the leash, working on training.",
        status: "pending",
        createdAt: "2024-12-28T10:30:00Z",
    },
    {
        id: "req-002",
        walkerId: "2",
        walkerName: "Marcus Chen",
        ownerName: "Emily Davis",
        ownerEmail: "emily.d@email.com",
        ownerPhone: "(555) 234-5678",
        location: "456 Oak Ave, New York, NY 10002",
        date: "2024-12-31",
        timeWindow: "2:00 PM - 4:00 PM",
        dogName: "Luna",
        dogBreed: "Labrador Mix",
        dogSize: "medium",
        dogTemperament: "Energetic, needs medication with lunch",
        serviceType: "30-min walk",
        notes: "Please give Luna her pill with a treat at the end of the walk.",
        status: "confirmed",
        createdAt: "2024-12-27T14:15:00Z",
    },
    {
        id: "req-003",
        walkerId: "4",
        walkerName: "James Wilson",
        ownerName: "Michael Lee",
        ownerEmail: "michael.lee@email.com",
        ownerPhone: "(555) 345-6789",
        location: "789 Park Blvd, New York, NY 10003",
        date: "2024-12-29",
        timeWindow: "9:00 AM - 11:00 AM",
        dogName: "Max",
        dogBreed: "German Shepherd",
        dogSize: "large",
        dogTemperament: "Reactive to other dogs, needs space",
        serviceType: "Reactive dog specialist",
        notes: "Max is working on his reactivity. Please avoid dog parks.",
        status: "pending",
        createdAt: "2024-12-28T09:00:00Z",
    },
    {
        id: "req-004",
        walkerId: "5",
        walkerName: "Olivia Martinez",
        ownerName: "Sarah Williams",
        ownerEmail: "s.williams@email.com",
        ownerPhone: "(555) 456-7890",
        location: "321 Elm St, New York, NY 10004",
        date: "2025-01-02",
        timeWindow: "4:00 PM - 6:00 PM",
        dogName: "Charlie",
        dogBreed: "Beagle Puppy",
        dogSize: "small",
        dogTemperament: "Playful, still learning leash manners",
        serviceType: "Puppy care",
        notes: "Charlie is 4 months old. Short attention span but loves treats!",
        status: "pending",
        createdAt: "2024-12-29T11:45:00Z",
    },
    {
        id: "req-005",
        walkerId: "7",
        walkerName: "Aisha Patel",
        ownerName: "Robert Brown",
        ownerEmail: "r.brown@email.com",
        ownerPhone: "(555) 567-8901",
        location: "654 Maple Dr, New York, NY 10005",
        date: "2024-12-30",
        timeWindow: "1:00 PM - 3:00 PM",
        dogName: "Daisy",
        dogBreed: "French Bulldog",
        dogSize: "small",
        dogTemperament: "Calm, loves belly rubs",
        serviceType: "30-min walk",
        notes: "Daisy can't walk far due to breathing issues. Short and slow please.",
        status: "confirmed",
        createdAt: "2024-12-26T16:20:00Z",
    },
];

export function getRequestsByStatus(status: WalkRequest["status"]): WalkRequest[] {
    return walkRequests.filter((request) => request.status === status);
}

export function getRequestsByWalkerId(walkerId: string): WalkRequest[] {
    return walkRequests.filter((request) => request.walkerId === walkerId);
}

export function getAllRequests(): WalkRequest[] {
    return walkRequests;
}
