import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
}

export default function Input({
    label,
    error,
    icon,
    iconPosition = "left",
    className = "",
    id,
    ...props
}: InputProps) {
    const inputId = id || props.name || Math.random().toString(36).substr(2, 9);

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium text-charcoal mb-2"
                >
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && iconPosition === "left" && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray">
                        {icon}
                    </div>
                )}
                <input
                    id={inputId}
                    className={`
            w-full px-4 py-3 rounded-xl
            bg-white border border-gray-light
            text-charcoal placeholder:text-gray
            focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20
            transition-all duration-200
            ${icon && iconPosition === "left" ? "pl-12" : ""}
            ${icon && iconPosition === "right" ? "pr-12" : ""}
            ${error ? "border-error focus:border-error focus:ring-error/20" : ""}
            ${className}
          `}
                    {...props}
                />
                {icon && iconPosition === "right" && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray">
                        {icon}
                    </div>
                )}
            </div>
            {error && (
                <p className="mt-2 text-sm text-error">{error}</p>
            )}
        </div>
    );
}
