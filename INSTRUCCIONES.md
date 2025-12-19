# 🎅 Carta a Santa - Tarjeta con Flip 3D

## ✅ Implementación completada

Se han creado/actualizado los siguientes archivos:

1. **`app/page.tsx`** - Página principal con fondo navideño y copos de nieve
2. **`app/components/FlipLetterCard.tsx`** - Componente de tarjeta con flip 3D
3. **`app/globals.css`** - Estilos CSS con animaciones navideñas

## 🎨 Características implementadas

✅ Tarjeta cuadrada (aspect ratio 1:1) vista por detrás inicialmente
✅ Animación de flip 3D (rotateY 180deg) al hacer click o presionar Enter/Espacio
✅ Cara trasera estilo postal navideña con campos "To:" y "From:"
✅ Decoración con emoji de regalo y sello navideño
✅ Cara frontal con la carta completa (título, párrafos, firma y fecha)
✅ Botón "Cerrar" (X) en esquina superior derecha cuando está abierta
✅ Scroll interno en la cara frontal para texto largo
✅ Fondo navideño con gradiente animado y copos de nieve CSS
✅ Totalmente accesible (ARIA labels, focus management, teclado)
✅ Soporte para `prefers-reduced-motion`
✅ Responsive (mobile y desktop)

## 📝 Cómo editar el contenido de la carta

Abre el archivo **`app/components/FlipLetterCard.tsx`** y modifica:

### 1. El contenido de los párrafos (líneas 6-11):
```typescript
const paragraphs = [
  "Querido Santa Claus:",
  "Tu texto aquí...",
  // Añade o modifica párrafos
];
```

### 2. Tu nombre en la firma (línea 13):
```typescript
const signature = "Un Yerno con calor"; // 📝 EDITA AQUÍ TU NOMBRE
```

## 🚀 Cómo ejecutar

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎯 Funcionalidades

- **Click**: Voltea la tarjeta (flip 3D)
- **Teclado**: `Enter` o `Espacio` para voltear
- **Botón X**: Cierra la tarjeta y regresa a la vista trasera
- **Accesibilidad**: Navegable completamente con teclado
- **Responsive**: Se adapta a móviles y tablets
- **Animaciones**: Respeta preferencias de movimiento reducido
- **Scroll**: La cara frontal tiene scroll interno si el texto es muy largo

## 🎄 Estructura del proyecto

```
app/
├── page.tsx                        # Página principal
├── globals.css                     # Estilos globales + animaciones navideñas
├── components/
│   ├── FlipLetterCard.tsx         # Componente de tarjeta con flip 3D
│   └── EnvelopeLetter.tsx         # (componente anterior, no usado)
└── layout.tsx                      # Layout de Next.js
```

## 🎁 Personalización adicional

### Colores de la tarjeta:
- **Cara trasera**: Edita gradientes en la línea del `<button>` (from-red-50, via-white, to-green-50)
- **Cara frontal**: Edita gradientes en el contenedor (from-amber-50, via-yellow-50, to-amber-100)

### Tamaño de la tarjeta:
Modifica en `FlipLetterCard.tsx` dentro del `<style jsx>`:
```css
.flip-card-container {
  max-width: 500px; /* Cambia este valor */
  aspect-ratio: 1 / 1; /* Mantén 1:1 para cuadrada */
}
```

### Velocidad de animación:
Cambia en el estilo inline del `.flip-card-inner`:
```tsx
transition: 'transform 0.8s ...' // Cambia 0.8s
```

### Contenido de la postal (cara trasera):
- **To**: Línea del destinatario
- **From**: Tu nombre (usa la variable `signature`)
- **Emoji decorativo**: Cambia 🎁 por otro emoji navideño

¡Disfruta de tu carta navideña con flip 3D! 🎅🎄✨
