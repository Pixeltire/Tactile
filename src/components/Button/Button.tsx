import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold tracking-tight transition-all duration-300 ease-elastic relative overflow-hidden gap-2 cursor-pointer rounded-xl active:scale-95 active:shadow-active";

    const variants = {
        primary: "bg-tac-primary text-white hover:bg-black hover:-translate-y-0.5 hover:shadow-lg",
        secondary: "bg-slate-200 text-tac-primary hover:bg-slate-300 hover:-translate-y-0.5",
        ghost: "bg-transparent text-tac-primary hover:bg-black/5",
        destructive: "bg-red-50 text-tac-error border border-red-200 hover:bg-tac-error hover:text-white hover:border-tac-error"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-7 py-3.5 text-base",
        lg: "px-9 py-4 text-lg"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
