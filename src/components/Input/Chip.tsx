import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ChipProps {
    label: string;
    selected?: boolean;
    onClick?: () => void;
    icon?: React.ReactNode;
}

export const Chip = ({ label, selected, onClick, icon }: ChipProps) => {
    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors
        ${selected
                    ? 'bg-tac-primary/10 border-tac-primary text-tac-primary'
                    : 'bg-transparent border-slate-300 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800'}
      `}
        >
            {selected && (
                <motion.span initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                    <Check size={14} strokeWidth={3} />
                </motion.span>
            )}
            {!selected && icon && <span className="opacity-70">{icon}</span>}
            {label}
        </motion.button>
    );
};
