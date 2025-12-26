# 🎨 POLYMATHIST Branding Guide

## Copyright Information

This project is copyrighted by **POLYMATHIST** - a brand representing multidisciplinary knowledge and learning.

### Copyright Placement

The POLYMATHIST copyright appears in multiple locations:

1. **Header**: Subtle copyright notice in the main header
2. **Footer**: Prominent copyright with logo and full attribution
3. **README**: Copyright notice at the bottom of documentation

### Logo Design

The POLYMATHIST logo (`/public/images/logos/polymathist-logo.svg`) features:

- **Circular border**: Representing completeness and unity of knowledge
- **Horizontal lines**: Symbolizing structured learning and information
- **Central diamond**: Representing wisdom and precious knowledge
- **Three dots**: Representing multiple disciplines (poly-math)
- **Orange color scheme**: Matching the Satara website theme (#f97316)

### Usage Guidelines

#### ✅ Correct Usage:
- Always include the © symbol with POLYMATHIST
- Use the provided logo SVG for consistency
- Maintain the orange color scheme (#f97316)
- Include "All rights reserved" when space permits

#### ❌ Avoid:
- Modifying the logo design or colors
- Using POLYMATHIST without the copyright symbol
- Placing copyright in locations that interfere with user experience

### Technical Implementation

```jsx
// Footer copyright with logo
<div className="flex items-center space-x-2">
  <img 
    src="/images/logos/polymathist-logo.svg" 
    alt="POLYMATHIST Logo" 
    className="w-5 h-5"
  />
  <span className="text-orange-400 font-medium">©</span>
  <span className="font-medium">Copyright POLYMATHIST</span>
</div>
```

### Brand Colors

- **Primary Orange**: #f97316 (Satara theme color)
- **Light Orange**: #fb923c (Hover states)
- **Dark Orange**: #ea580c (Active states)

### Typography

- **Font**: Inter (consistent with website)
- **Weight**: Medium for "POLYMATHIST", Regular for "Copyright"
- **Size**: Small (text-xs) for footer, Regular for header

---

**© 2024 POLYMATHIST - All rights reserved**