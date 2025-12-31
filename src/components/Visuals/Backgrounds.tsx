import React from 'react';

export const NoiseOverlay: React.FC = () => {
    return (
        <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.85"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
};

export interface DotGridProps {
    color?: string;
    gap?: number;
    className?: string;
}

export const DotGrid: React.FC<DotGridProps> = ({
    color = '#94A3B8',
    gap = 24,
    className = ''
}) => {
    return (
        <div
            className={`absolute inset-0 -z-10 h-full w-full ${className}`}
            style={{
                backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
                backgroundSize: `${gap}px ${gap}px`
            }}
        />
    );
};
