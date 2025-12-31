import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Type, MousePointer2, Bell, Layers, Settings } from 'lucide-react';

const navItems = [
    { icon: LayoutDashboard, label: 'Overview', id: 'overview' },
    { icon: Type, label: 'Fundamentos', id: 'foundations' },
    { icon: MousePointer2, label: 'Interactividad', id: 'interaction' },
    { icon: Bell, label: 'Feedback', id: 'feedback' },
    { icon: Layers, label: 'Componentes', id: 'components' },
];

export const NavigationRail = ({ activeSection, onNavigate }: { activeSection: string, onNavigate: (id: string) => void }) => {
    return (
        <nav className="fixed left-0 top-0 h-screen w-20 bg-tac-surface border-r border-slate-200 dark:border-slate-800 flex flex-col items-center py-8 z-50 hidden md:flex">
            <div className="mb-12 font-display font-bold text-2xl tracking-tighter">Tc<span className="text-tac-primary">.</span></div>

            <div className="flex flex-col gap-8 w-full px-2">
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`relative group flex flex-col items-center gap-2 p-2 rounded-xl transition-all duration-300 ${isActive ? 'text-tac-primary' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-nav"
                                    className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-xl -z-10"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </button>
                    )
                })}
            </div>

            <div className="mt-auto">
                <button className="p-3 text-slate-400 hover:text-slate-600 transition-colors">
                    <Settings size={24} />
                </button>
            </div>
        </nav>
    );
};
