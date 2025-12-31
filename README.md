# Tactile Design System

> An Editorial Brutalist design system focused on tactile interactions and matte aesthetics.
>
> [🇪🇸 Leer en Español](./README.es.md)

**Created by Antonio** | [Live Demo](https://pixeltire.github.io/Tactile)

---

## 🎨 Design Philosophy

Tactile breaks away from boring tech standards through an **Editorial Brutalist** combination that mixes the expressive with the functional. Every component is designed to feel hand-built, with opinion and character.

### Typography

- **Display/Headings**: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque)  
  A modern variable font with compressed widths and expressive shapes. Feels "hand-built".

- **Body**: [Schibsted Grotesk](https://fonts.google.com/specimen/Schibsted+Grotesk)  
  Designed for digital screens with visible ink traps that give it a printed and technical touch.

### Color Palette

Inspired by the **International Style**:

- **Klein Blue** `#2563EB` - Primary Accent
- **Safety Orange** `#FF4F00` - Secondary Accent
- **Surface Dark** `#1A1C1E` - Main Text

### Interaction Physics

- **Ambient Occlusion Shadows**: Realistic and soft
- **Elastic Transitions**: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Ceramic Surfaces**: Matte effect with premium hover

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Pixeltire/Tactile.git

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

---

## 📦 Structure

```
tactile/
├── src/
│   ├── components/    # React Components
│   ├── tokens/        # Design Tokens
│   └── styles/        # Global CSS
├── .storybook/        # Storybook Configuration
└── package.json       # Dependencies
```

---

## 🎯 Components

### Buttons
- **Primary** - Main action
- **Secondary** - Secondary action
- **Ghost** - Tertiary action
- **Destructive** - Dangerous actions

### Forms
- Inputs with hover/focus states
- Custom Checkboxes
- Custom Radio buttons

### Feedback
- Alerts (Info, Success, Warning)
- Profile Cards
- Stats Cards
- Badges

---

## 🛠️ Customization

All variables are in `:root` within `src/styles/global.css`:

```css
:root {
    --accent-primary: #2563EB;
    --accent-secondary: #FF4F00;
    --ease-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 📄 License

MIT License - Free use

---

## 👤 Author

**Antonio**  
GitHub: [@Pixeltire](https://github.com/Pixeltire)

---
