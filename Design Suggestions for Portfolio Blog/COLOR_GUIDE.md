# Purple Color Scheme Guide

## Replacements needed:
```
amber-600 → purple-600
amber-500 → purple-500  
amber-400 → purple-400
amber-300 → purple-300
amber-700 → purple-700
orange-400 → violet-400
orange-500 → violet-500
```

## Example conversions:
```tsx
// OLD
<div className="bg-gradient-to-r from-amber-600 to-amber-500">

// NEW  
<div className="bg-gradient-to-r from-purple-600 to-purple-500">

// OLD
text-amber-600 dark:text-amber-400

// NEW
text-purple-600 dark:text-purple-400
```

## Files to update:
- HomePage.tsx
- ProjectsPage.tsx
- BlogPage.tsx
- AboutPage.tsx
- ContactPage.tsx
- Footer.tsx
