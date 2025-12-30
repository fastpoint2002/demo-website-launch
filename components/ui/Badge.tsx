import { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    variant?: "default" | "success" | "warning" | "error" | "coral" | "sage";
    size?: "sm" | "md";
    className?: string;
}

export default function Badge({
    children,
    variant = "default",
    size = "sm",
    className = "",
}: BadgeProps) {
    const variants = {
        default: "bg-gray-light text-charcoal-light",
        success: "bg-success/10 text-success",
        warning: "bg-warning/20 text-warning",
        error: "bg-error/10 text-error",
        coral: "bg-coral/10 text-coral",
        sage: "bg-sage/10 text-sage-dark",
    };

    const sizes = {
        sm: "px-2.5 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
    };

    return (
        <span
            className={`
        inline-flex items-center font-medium rounded-full
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
        >
            {children}
        </span>
    );
}
