# Tactile Design System v1.0.3

> A Human-Centric UI Library focused on tactile interactions, matte aesthetics, and physics-based motion.
> Now powered by **React 18 + Vite + Tailwind v4**.

[🇪🇸 Leer en Español](./README.es.md) (Actualizado)

**Created by Antonio** | [Live Demo (Local)](http://localhost:5174)

---

## 🌟 What's New in v1.0.3?

- **🚀 React Architecture**: Fully migrated from static HTML to a robust React Component System.
- **⚡ Powered by Vite**: Instant HMR and lightning-fast builds.
- **🌗 Automatic Theme Detection**: The system now listens to your OS preference (Light/Dark) and adapts automatically.
- **🧲 Physics Lab**: New experimental components featuring magnetic attraction and elastic resistance.

---

## 🎨 Design Philosophy

Tactile breaks using an **Editorial Brutalist** approach. We don't just display pixels; we simulate matter.

### Typography
- **Display**: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) (Expressive, Compressed)
- **Body**: [Schibsted Grotesk](https://fonts.google.com/specimen/Schibsted+Grotesk) (Technical, Legible)

### Interaction Physics
- **Magnetic Buttons**: Elements that "feel" the cursor's gravity.
- **Elastic Transitions**: `spring(stiffness: 150, damping: 15)` for natural movement.
- **Ceramic Surfaces**: Matte finishes with soft ambient occlusion shadows.

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Pixeltire/Tactile.git

# Install dependencies
npm install

# Start the Development Server (with Physics Lab)
npm run dev
```

---

## 📦 Project Structure

```
tactile/
├── src/
│   ├── components/
│   │   ├── Button/           # Base Interaction
│   │   ├── Interaction/      # Physics Components (Magnetic, Elastic) [NEW]
│   │   └── Visuals/          # Backgrounds & Shapes
│   ├── styles/               # Tailwind v4 CSS-first config
│   ├── App.tsx               # Main Demo Application
│   └── main.tsx              # React Entry Point
├── package.json              # v1.0.3
├── vite.config.ts            # Build Configuration
└── README.md
```

---

## 🎯 Component Library

### 1. Physics & Motion [NEW]
- **MagneticButton**: Wraps any element to give it cursor-attraction physics.
- **ElasticSlider**: A draggable slider with spring resistance.

### 2. Core Elements
- **Haptic Buttons**: Primary, Secondary, Ghost, Desctructive.
- **Smart Inputs**: Forms that respond to focus with "pop" animations.
- **Surface Cards**: Elevated, Outlined, and Filled states.

### 3. Utilities
- **Auto-Theme**: No toggle needed. Respects `prefers-color-scheme`.
- **Modals**: Framer Motion powered elastic dialogs.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first configuration)
- **Motion**: Framer Motion
- **Icons**: Lucide React
- **Build**: Vite

---

## 👤 Author

**Antonio**  
GitHub: [@Pixeltire](https://github.com/Pixeltire)

---
*Last Updated: v1.0.3 (Physics Update)*
