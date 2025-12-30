import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    fullWidth?: boolean;
    loading?: boolean;
}

export default function Button({
    variant = "primary",
    size = "md",
    children,
    fullWidth = false,
    loading = false,
    className = "",
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "gradient-coral text-white hover:opacity-90 shadow-md hover:shadow-lg",
        secondary:
            "bg-sage text-white hover:bg-sage-dark shadow-md hover:shadow-lg",
        ghost:
            "bg-transparent text-charcoal hover:bg-gray-light/50",
        outline:
            "bg-transparent border-2 border-coral text-coral hover:bg-coral hover:text-white",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm gap-1.5",
        md: "px-6 py-2.5 text-base gap-2",
        lg: "px-8 py-3.5 text-lg gap-2.5",
    };

    return (
        <button
            className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}
            {children}
        </button>
    );
}
