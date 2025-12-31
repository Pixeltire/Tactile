# Sistema de Diseño Tactile v1.0.3

> Una biblioteca de interfaz centrada en interacciones táctiles, estética mate y movimiento basado en físicas.
> Ahora impulsada por **React 18 + Vite + Tailwind v4**.

[🇺🇸 Read in English](./README.md)

**Creado por Antonio** | [Demo en Vivo (Local)](http://localhost:5174)

---

## 🌟 ¿Qué hay de nuevo en v1.0.3?

- **🚀 Arquitectura React**: Migración completa de HTML estático a un sistema robusto de componentes React.
- **⚡ Vite Power**: Recarga instantánea y builds ultrarrápidos.
- **🌗 Detección Automática de Tema**: El sistema escucha la preferencia de tu SO (Claro/Oscuro) y se adapta automáticamente.
- **🧲 Laboratorio de Física**: Nuevos componentes experimentales con atracción magnética y resistencia elástica.

---

## 🎨 Filosofía de Diseño

Tactile rompe con lo genérico usando un enfoque **Brutalista Editorial**. No solo mostramos píxeles; simulamos materia.

### Tipografía
- **Display**: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) (Expresiva, Comprimida)
- **Cuerpo**: [Schibsted Grotesk](https://fonts.google.com/specimen/Schibsted+Grotesk) (Técnica, Legible)

### Físicas de Interacción
- **Botones Magnéticos**: Elementos que "sienten" la gravedad del cursor.
- **Transiciones Elásticas**: `spring(stiffness: 150, damping: 15)` para movimiento natural.
- **Superficies Cerámicas**: Acabados mate con sombras de oclusión ambiental suaves.

---

## 🚀 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/Pixeltire/Tactile.git

# Instalar dependencias
npm install

# Iniciar Servidor de Desarrollo (con Physics Lab)
npm run dev
```

---

## 📦 Estructura del Proyecto

```
tactile/
├── src/
│   ├── components/
│   │   ├── Button/           # Interacción Base
│   │   ├── Interaction/      # Componentes Físicos (Magnético, Elástico) [NUEVO]
│   │   └── Visuals/          # Fondos y Formas
│   ├── styles/               # Configuración Tailwind v4 CSS-first
│   ├── App.tsx               # Aplicación Demo Principal
│   └── main.tsx              # Punto de entrada React
├── package.json              # v1.0.3
├── vite.config.ts            # Configuración de Build
└── README.es.md
```

---

## 🎯 Biblioteca de Componentes

### 1. Físicas y Movimiento [NUEVO]
- **MagneticButton**: Envuelve cualquier elemento para darle física de atracción al cursor.
- **ElasticSlider**: Un deslizador arrastrable con resistencia de resorte.

### 2. Elementos Core
- **Botones Hápticos**: Primario, Secundario, Fantasma, Destructivo.
- **Inputs Inteligentes**: Formularios que responden al foco con animaciones "pop".
- **Tarjetas de Superficie**: Estados Elevado, Contorneado y Relleno.

### 3. Utilidades
- **Auto-Theme**: Sin interruptores necesarios. Respeta `prefers-color-scheme`.
- **Modales**: Diálogos elásticos potenciados por Framer Motion.

---

## 🛠️ Stack Tecnológico

- **Framework**: React 18 + TypeScript
- **Estilos**: Tailwind CSS v4 (Configuración CSS-first)
- **Movimiento**: Framer Motion
- **Iconos**: Lucide React
- **Build**: Vite

---

## 👤 Autor

**Antonio**  
GitHub: [@Pixeltire](https://github.com/Pixeltire)

---
*Última Actualización: v1.0.3 (Physics Update)*
