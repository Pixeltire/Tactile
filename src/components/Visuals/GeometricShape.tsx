import React from 'react';

export interface GeometricShapeProps {
    type?: 'circle' | 'pill' | 'square' | 'donut' | 'arch';
    color?: string; // Tailwind color class or hex
    size?: 'sm' | 'md' | 'lg' | 'xl';
    rotate?: number;
    blur?: boolean;
    className?: string;
}

export const GeometricShape: React.FC<GeometricShapeProps> = ({
    type = 'circle',
    color = 'bg-tac-primary',
    size = 'md',
    rotate = 0,
    blur = false,
    className = ''
}) => {

    const sizeClasses = {
        sm: 'w-12 h-12',
        md: 'w-24 h-24',
        lg: 'w-48 h-48',
        xl: 'w-96 h-96'
    };

    const shapeStyles = {
        circle: 'rounded-full',
        pill: 'rounded-full w-auto aspect-[2/1]',
        square: 'rounded-3xl',
        donut: 'rounded-full border-[20px]',
        arch: 'rounded-t-full'
    };

    // If color starts with 'bg-', use it as class, else style object
    const isTailwindColor = color.startsWith('bg-') || color.startsWith('border-');
    const styleObj = {
        transform: `rotate(${rotate}deg)`,
        ...(!isTailwindColor ? { backgroundColor: type === 'donut' ? 'transparent' : color, borderColor: color } : {})
    };

    const colorClass = isTailwindColor ? color : '';
    const blurClass = blur ? 'blur-2xl opacity-60' : '';

    return (
        <div
            className={`
        inline-block transition-all duration-700 ease-elastic hover:scale-110 
        ${sizeClasses[size]} 
        ${shapeStyles[type]} 
        ${colorClass} 
        ${blurClass}
        ${className}
      `}
            style={styleObj}
        />
    );
};
