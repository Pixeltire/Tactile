# Tactile Design System

> Un sistema de diseño editorial brutalista enfocado en interacciones táctiles y estética mate.
>
> [🇺🇸 Read in English](./README.md)

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

# Instalar dependencias
npm install

# Iniciar Storybook
npm run storybook
```

---

## 📦 Estructura

```
tactile/
├── src/
│   ├── components/    # Componentes React
│   ├── tokens/        # Tokens de Diseño
│   └── styles/        # CSS Global
├── .storybook/        # Configuración de Storybook
└── package.json       # Dependencias
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

---

## 🛠️ Personalización

Todas las variables están en `:root` dentro de `src/styles/global.css`:

```css
:root {
    --accent-primary: #2563EB;
    --accent-secondary: #FF4F00;
    --ease-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);
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
