import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const ElasticSlider = () => {
    const [value, setValue] = useState(50);
    const x = useMotionValue(0);
    const background = useTransform(x, [-150, 150], ["#FF4F00", "#2563EB"]);

    return (
        <div className="w-full max-w-md mx-auto p-10 bg-white dark:bg-slate-800 rounded-3xl shadow-rest">
            <h4 className="font-bold mb-8 text-center text-slate-500 text-sm uppercase tracking-wider">Drag Physics</h4>
            <div className="relative h-2 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -140, right: 140 }}
                    dragElastic={0.2}
                    style={{ x, background }}
                    className="w-12 h-12 rounded-full shadow-lg cursor-grab active:cursor-grabbing relative z-10"
                />
                <div className="absolute inset-0 flex justify-between px-4 items-center text-xs font-mono text-slate-300 pointer-events-none">
                    <span>0%</span>
                    <span>100%</span>
                </div>
            </div>
            <p className="text-center mt-6 text-sm text-slate-400">Arrastra el círculo. Siente la resistencia elástica.</p>
        </div>
    )
}
