import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
    children,
    className = "",
    hover = false,
    glass = false,
    padding = "md",
}: CardProps) {
    const paddingStyles = {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    return (
        <div
            className={`
        rounded-2xl
        ${glass ? "glass-card" : "bg-white shadow-md"}
        ${hover ? "hover-lift cursor-pointer" : ""}
        ${paddingStyles[padding]}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
