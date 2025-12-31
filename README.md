# Tactile Design System

> Un sistema de diseño editorial brutalista enfocado en interacciones táctiles y estética mate.

**Creado por Antonio** | [Demo en vivo](https://pixeltire.github.io/Tactile)

---

## 🎨 Filosofía de Diseño

Tactile rompe con los estándares tech aburridos mediante una combinación **Editorial Brutalista** que mezcla lo expresivo con lo funcional. Cada componente está diseñado para sentirse construido a mano, con opinión y carácter.

### Tipografía

- **Display/Títulos**: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque)  
  Fuente variable moderna con anchos comprimidos y formas expresivas. Se siente "construida" a mano.

- **Cuerpo**: [Schibsted Grotesk](https://fonts.google.com/specimen/Schibsted+Grotesk)  
  Diseñada para pantallas digitales con ink traps visibles que le dan un toque impreso y técnico.

### Paleta de Color

Inspirada en el **International Style**:

- **Klein Blue** `#2563EB` - Acento primario
- **Safety Orange** `#FF4F00` - Acento secundario
- **Surface Dark** `#1A1C1E` - Texto principal

### Física de Interacción

- **Sombras de Oclusión Ambiental**: Realistas y suaves
- **Transiciones Elásticas**: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Superficies Cerámicas**: Efecto mate con hover premium

---

## 🚀 Uso Rápido

```bash
# Clonar el repositorio
git clone https://github.com/Pixeltire/Tactile.git

# Abrir index.html en tu navegador
open index.html
```

No requiere instalación ni build. Todo funciona con HTML/CSS puro.

---

## 📦 Estructura

```
tactile/
├── index.html          # Demo completa del sistema
├── styles.css          # Sistema de diseño
├── README.md           # Este archivo
└── .gitignore
```

---

## 🎯 Componentes

### Botones
- **Primary** - Acción principal
- **Secondary** - Acción secundaria
- **Ghost** - Acción terciaria
- **Destructive** - Acciones peligrosas

### Formularios
- Inputs con estados hover/focus
- Checkboxes personalizados
- Radio buttons personalizados

### Feedback
- Alerts (Info, Success, Warning)
- Profile Cards
- Stats Cards
- Badges

### Layout
- Grid de 12 columnas
- Responsive (breakpoint en 1024px)
- Animaciones de reveal

---

## 🛠️ Personalización

Todas las variables están en `:root` dentro de `styles.css`:

```css
:root {
    --accent-primary: #2563EB;
    --accent-secondary: #FF4F00;
    --ease-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);
    --shadow-rest: 0 1px 2px rgba(0,0,0,0.02), ...;
}
```

Modifica estas variables para adaptar el sistema a tu marca.

---

## 📄 Licencia

MIT License - Uso libre

---

## 👤 Autor

**Antonio**  
GitHub: [@Pixeltire](https://github.com/Pixeltire)

---

## 🌟 Inspiración

Este sistema se aleja intencionalmente de los estándares corporativos genéricos (Inter, Roboto, etc.) para crear algo con personalidad. La combinación tipográfica y el enfoque en microinteracciones táctiles lo hacen único.

Si te gusta este proyecto, dale una ⭐ en GitHub.
