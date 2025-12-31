import React, { useState } from 'react';
import { Button } from './components/Button';
import { MagneticButton } from './components/Interaction/MagneticButton';
import { ElasticSlider } from './components/Interaction/ElasticSlider';
import { Moon, Sun, Heart, Trash, Info, CheckCircle, ChartLine, X, Move3d } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('preview');

    // Automatic Theme Detection
    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
            const systemTheme = e.matches ? 'dark' : 'light';
            setTheme(systemTheme);
            document.documentElement.setAttribute('data-theme', systemTheme);
        };

        // Set initial
        handleChange(mediaQuery);

        // Listen for changes
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="min-h-screen bg-tac-bg text-tac-primary font-body relative overflow-x-hidden transition-colors duration-500">

            <main className="max-w-[1200px] mx-auto px-6 py-20">

                {/* NAV */}
                <nav className="flex justify-between items-center mb-20">
                    <div className="font-bold text-2xl tracking-tighter font-display">Tc<span className="text-tac-primary">.</span></div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500 items-center">
                        <a href="#" className="hover:text-tac-primary transition-colors">Sistema</a>
                        <a href="#" className="hover:text-tac-primary transition-colors">Componentes</a>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 hover:text-tac-primary"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </div>
                </nav>

                {/* HEADER */}
                <header className="mb-24">
                    <div className="inline-block px-3 py-1 bg-tac-secondary text-white text-xs font-bold rounded-full mb-6 font-display">v1.0.3 Auto-Theme</div>
                    <h1 className="text-6xl font-display font-bold tracking-tighter leading-tight mb-2">
                        Sistema de Diseño<br />
                        <span className="text-slate-400">Tactile & Matte.</span>
                    </h1>
                </header>

                {/* NEW: 00. PHYSICS PLAYGROUND */}
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold font-display">00. Physics Lab</h2>
                    <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                        <Move3d size={12} /> NEW
                    </span>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {/* Magnetic Buttons Demo */}
                    <div className="bg-tac-surface p-10 rounded-[2rem] shadow-rest flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl font-bold mb-6">Botones Magnéticos</h3>
                        <div className="flex gap-6">
                            <MagneticButton>
                                <button className="w-16 h-16 rounded-full bg-[#1A1C1E] text-white flex items-center justify-center text-2xl shadow-xl">
                                    👋
                                </button>
                            </MagneticButton>
                            <MagneticButton>
                                <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold shadow-xl hover:bg-blue-700 transition-colors">
                                    Hover Me
                                </button>
                            </MagneticButton>
                        </div>
                        <p className="mt-8 text-sm text-slate-400 max-w-xs">
                            El cursor ejerce una fuerza de atracción sobre los elementos, creando una sensación de "peso" digital.
                        </p>
                    </div>

                    {/* Elastic Slider Demo */}
                    <div className="flex items-center justify-center">
                        <ElasticSlider />
                    </div>
                </section>

                {/* 1. TYPOGRAPHY & COLORS */}
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold font-display">01. Fundamentos</h2>
                    <span className="text-slate-400 text-sm font-mono">Typography & Color</span>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
                    <div className="col-span-1 md:col-span-8 bg-tac-surface p-10 rounded-3xl shadow-rest hover:shadow-hover transition-all duration-500">
                        <h1 className="text-5xl font-extrabold mb-6 font-display">Heading 1</h1>
                        <h2 className="text-4xl font-bold mb-5 font-display">Heading 2</h2>
                        <h3 className="text-3xl font-bold mb-4 font-display">Heading 3</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            Body Text Large. Tactile utiliza una tipografía grotesca funcional para títulos y una sans-serif
                            humanista para lectura, creando un contraste editorial sólido.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-4 grid grid-rows-3 gap-4">
                        <div className="bg-[#1A1C1E] p-6 rounded-3xl text-white flex justify-between items-end shadow-rest hover:scale-105 transition-transform duration-300">
                            <span className="font-mono text-xs opacity-50">#1A1C1E</span>
                            <span className="font-bold">Surface Dark</span>
                        </div>
                        <div className="bg-[#2563EB] p-6 rounded-3xl text-white flex justify-between items-end shadow-rest hover:scale-105 transition-transform duration-300">
                            <span className="font-mono text-xs opacity-50">#2563EB</span>
                            <span className="font-bold">Klein Blue</span>
                        </div>
                        <div className="bg-[#FF4F00] p-6 rounded-3xl text-white flex justify-between items-end shadow-rest hover:scale-105 transition-transform duration-300">
                            <span className="font-mono text-xs opacity-50">#FF4F00</span>
                            <span className="font-bold">Safety Orange</span>
                        </div>
                    </div>
                </section>

                {/* Rest of the v1 content remains below (truncated for brevity/focus, but I am keeping it all in real file) ... */}
                {/* I will append the rest of the file content in the actual write step to ensure full file integrity */}

                {/* 2. INTERACTIVE ELEMENTS */}
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold font-display">02. Interactividad</h2>
                    <span className="text-slate-400 text-sm font-mono">Buttons & Inputs</span>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
                    {/* Buttons Card */}
                    <div className="col-span-1 md:col-span-6 bg-tac-surface p-10 rounded-3xl shadow-rest hover:shadow-hover transition-all duration-500">
                        <h4 className="text-sm font-bold uppercase text-slate-400 mb-8 tracking-widest font-display">Botones Hápticos</h4>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <Button variant="primary">Primary Action</Button>
                            <Button variant="secondary">Secondary</Button>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Button variant="ghost">Ghost Button</Button>
                            <Button variant="destructive">
                                <Trash size={18} className="mr-2" />
                                Eliminar
                            </Button>
                            <button className="w-12 h-12 rounded-full bg-tac-surface flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors text-tac-primary">
                                <Heart size={20} weight="bold" />
                            </button>
                        </div>
                    </div>

                    {/* Forms Card */}
                    <div className="col-span-1 md:col-span-6 bg-tac-surface p-10 rounded-3xl shadow-rest hover:shadow-hover transition-all duration-500">
                        <h4 className="text-sm font-bold uppercase text-slate-400 mb-8 tracking-widest font-display">Entrada de Datos</h4>

                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2 ml-1 text-slate-700 dark:text-slate-300">Correo Electrónico</label>
                            <input
                                type="email"
                                className="w-full px-5 py-3 bg-slate-50 dark:bg-slate-900 border-2 border-transparent rounded-xl focus:bg-white dark:focus:bg-slate-800 focus:border-tac-primary focus:outline-none transition-all duration-300 font-medium placeholder-slate-400 text-slate-800 dark:text-slate-200"
                                placeholder="nombre@ejemplo.com"
                            />
                        </div>

                        <div className="flex gap-8 mt-8">
                            <div className="flex flex-col gap-3">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-5 h-5 rounded-md border-2 border-slate-300 dark:border-slate-700 text-tac-primary focus:ring-offset-0 focus:ring-0 cursor-pointer accent-tac-primary" defaultChecked />
                                    <span className="font-medium text-sm group-hover:text-tac-primary transition-colors">Sincronizar</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-5 h-5 rounded-md border-2 border-slate-300 dark:border-slate-700 text-tac-primary focus:ring-offset-0 focus:ring-0 cursor-pointer accent-tac-primary" />
                                    <span className="font-medium text-sm text-slate-500 group-hover:text-tac-primary transition-colors">Auto-guardado</span>
                                </label>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="radio" name="opts" className="w-5 h-5 border-2 border-slate-300 dark:border-slate-700 text-tac-primary focus:ring-offset-0 focus:ring-0 cursor-pointer accent-tac-primary" defaultChecked />
                                    <span className="font-medium text-sm group-hover:text-tac-primary transition-colors">Opción A</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="radio" name="opts" className="w-5 h-5 border-2 border-slate-300 dark:border-slate-700 text-tac-primary focus:ring-offset-0 focus:ring-0 cursor-pointer accent-tac-primary" />
                                    <span className="font-medium text-sm text-slate-500 group-hover:text-tac-primary transition-colors">Opción B</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. FEEDBACK & DATA */}
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold font-display">03. Feedback</h2>
                    <span className="text-slate-400 text-sm font-mono">Alerts & Cards</span>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">

                    {/* Alerts Column */}
                    <div className="col-span-1 md:col-span-5 flex flex-col gap-4">
                        <div className="flex gap-4 p-5 bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl items-start hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors cursor-default">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex-shrink-0 flex items-center justify-center text-blue-600 dark:text-blue-200">
                                <Info size={20} weight="bold" />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm mb-1 text-blue-900 dark:text-blue-100">Nueva Versión Disponible</h5>
                                <p className="text-sm text-blue-700/80 dark:text-blue-300/80">El sistema se ha actualizado a v1.0.0.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-5 bg-green-50/50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30 rounded-2xl items-start hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors cursor-default">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex-shrink-0 flex items-center justify-center text-green-600 dark:text-green-200">
                                <CheckCircle size={20} weight="bold" />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm mb-1 text-green-900 dark:text-green-100">Pago Procesado</h5>
                                <p className="text-sm text-green-700/80 dark:text-green-300/80">La transacción #8920 se completó.</p>
                            </div>
                        </div>
                    </div>

                    {/* Profile Card */}
                    <div className="col-span-1 md:col-span-4 bg-tac-surface rounded-3xl overflow-hidden shadow-rest hover:shadow-hover transition-all duration-500 group">
                        <div className="h-24 bg-slate-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
                        </div>
                        <div className="px-8 pb-8">
                            <div className="w-20 h-20 bg-white p-1 rounded-full -mt-10 mb-4 relative z-10">
                                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="Avatar" className="w-full h-full rounded-full bg-slate-100" />
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-lg font-display">Alex Morgan</h3>
                                    <p className="text-slate-500 text-sm">Product Designer</p>
                                </div>
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded text-xs font-bold font-mono">PRO</span>
                            </div>
                            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                Explorando los límites de la interacción digital y la materia.
                            </p>
                            <Button variant="secondary" className="w-full">Ver Perfil</Button>
                        </div>
                    </div>

                    {/* Stats Column */}
                    <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
                        <div className="bg-tac-surface p-6 rounded-3xl shadow-rest hover:shadow-hover transition-all duration-500 flex flex-col justify-between h-full">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 font-bold text-xl">
                                    <ChartLine size={24} />
                                </div>
                                <span className="text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2 py-1 rounded">+12%</span>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-1 font-display">24.5k</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Visitas Totales</div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* 4. UTILITIES PRO */}
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold font-display">04. Utilidades PRO</h2>
                    <span className="text-slate-400 text-sm font-mono">Modal & Tabs</span>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
                    {/* Tabs Component */}
                    <div className="col-span-1 md:col-span-6 bg-tac-surface p-10 rounded-3xl shadow-rest hover:shadow-hover transition-all duration-500">
                        <h4 className="text-sm font-bold uppercase text-slate-400 mb-6 tracking-widest font-display">Navegación por Pestañas</h4>

                        <div className="flex border-b border-slate-200 dark:border-slate-700 mb-6">
                            <button
                                onClick={() => setActiveTab('preview')}
                                className={`pb-2 px-4 text-sm font-medium transition-colors ${activeTab === 'preview' ? 'border-b-2 border-tac-primary text-tac-primary' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                Vista Previa
                            </button>
                            <button
                                onClick={() => setActiveTab('code')}
                                className={`pb-2 px-4 text-sm font-medium transition-colors ${activeTab === 'code' ? 'border-b-2 border-tac-primary text-tac-primary' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                Código
                            </button>
                        </div>

                        {activeTab === 'preview' ? (
                            <div>
                                <p className="text-slate-500 leading-relaxed mb-4">
                                    Este es un componente de pestañas funcional. Permite organizar contenido denso en secciones manejables.
                                </p>
                                <div className="flex gap-2">
                                    <span className="bg-blue-100/50 text-blue-700 px-2 py-1 rounded text-xs font-bold">Interactivo</span>
                                    <span className="bg-slate-100/50 text-slate-700 px-2 py-1 rounded text-xs font-bold">Accesible</span>
                                </div>
                            </div>
                        ) : (
                            <pre className="bg-slate-900 text-slate-300 p-4 rounded-xl text-xs overflow-x-auto font-mono">
                                {`<div className="tabs">
  <Tab label="Vista Previa" />
  <Tab label="Código" />
</div>`}
                            </pre>
                        )}
                    </div>

                    {/* Modal Launcher */}
                    <div className="col-span-1 md:col-span-6 bg-tac-surface p-10 rounded-3xl shadow-rest hover:shadow-hover transition-all duration-500 flex flex-col items-center justify-center text-center">
                        <div className="mb-6 w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-300">
                            <Info size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Modal Elástico</h3>
                        <p className="text-slate-500 mb-8 max-w-xs">
                            Ventanas emergentes con física de resortes y desenfoque de fondo.
                        </p>
                        <Button onClick={() => setIsModalOpen(true)}>Abrir Demo Modal</Button>
                    </div>
                </section>

            </main>

            {/* MODAL IMPLEMENTATION */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="bg-tac-surface w-full max-w-md p-8 rounded-3xl shadow-2xl relative z-10 overflow-hidden"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold font-display">Confirmación</h3>
                                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors">
                                    <X size={24} />
                                </button>
                            </div>
                            <p className="text-slate-500 mb-8 leading-relaxed">
                                ¿Estás seguro de que deseas realizar esta acción? Esta es una demostración de la física de los modales.
                            </p>
                            <div className="flex justify-end gap-3">
                                <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
                                <Button variant="primary" onClick={() => setIsModalOpen(false)}>Confirmar</Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}

export default App;
