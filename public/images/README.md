# Images for The Local Guide - Satara

This folder contains organized images for places, hotels, restaurants, and food items in Satara.

## 📁 Folder Structure

```
public/images/
├── places/          # Tourist attractions & landmarks
├── hotels/          # Accommodation options
├── restaurants/     # Dining establishments
├── food/           # Local dishes & specialties
└── README.md       # This file
```

## 🏛️ Places & Landmarks (6 images)
- `places/ajinkyatara-fort.jpg` - Ajinkyatara Fort view
- `places/satara-palace.jpg` - Satara Palace (Rajwada)
- `places/natyagruha.jpg` - Yashwantrao Chavan Natyagruha
- `places/kaas-plateau.jpg` - Kaas Plateau flowers (UNESCO site)
- `places/thoseghar-falls.jpg` - Thoseghar Waterfalls
- `places/sajjangad.jpg` - Sajjangad Fort

## 🏨 Hotels (4 actual Satara hotels)
- `hotels/kaas-woods-resort.jpg` - Kaas Woods Resort
- `hotels/maharaja-regency.jpg` - Hotel Maharaja Regency
- `hotels/preeti-executive.jpg` - Hotel Preeti Executive
- `hotels/fern-residency.jpg` - The Fern Residency

## 🍽️ Restaurants (4 actual Satara restaurants)
- `restaurants/chandravilas.jpg` - Chandravilas
- `restaurants/meraaj-palace.jpg` - MERAAJ PALACE RESTAURANT
- `restaurants/kanase-punjabi-dhaba.jpg` - KANASE PUNJABI DHABA
- `restaurants/manas-resto-lounge.jpg` - Manas Resto Lounge

## 🍛 Food Items (5 famous Satara specialties)
- `food/kandi-pedha.jpg` - Kandi Pedha (Satara's signature sweet)
- `food/misal-pav.jpg` - Misal Pav (Satara style)
- `food/puri-bhaji.jpg` - Puri Bhaji
- `food/vada-pav.jpg` - Vada Pav & Batata Vada
- `food/kopra-pattice.jpg` - Kopra Pattice

## 📸 Image Upload Guidelines

### File Requirements:
- **Format**: JPG or PNG preferred
- **Size**: Minimum 800x600px, recommended 1200x800px
- **File Size**: Keep under 500KB for web optimization
- **Naming**: Use exact filenames as listed above

### Quality Standards:
- High resolution and clear images
- Good lighting and composition
- Authentic representation of the place/food
- No watermarks or text overlays

### How to Upload:
1. **Replace placeholder files** with actual images
2. **Keep exact filenames** - the app references these specific paths
3. **Maintain folder structure** - don't move files between folders
4. **Test locally** - run `npm run dev` to see images in the app

## 🔄 Auto-Detection

The app automatically loads images from these paths:
- Places: `/images/places/[filename].jpg`
- Hotels: `/images/hotels/[filename].jpg`
- Restaurants: `/images/restaurants/[filename].jpg`
- Food: `/images/food/[filename].jpg`

## 📱 Responsive Display

Images are displayed responsively in:
- Chat interface with place cards
- Image galleries for categories
- Fallback placeholders if images are missing

## ⚡ Performance Tips

- Compress images before uploading
- Use WebP format for better compression (optional)
- Consider lazy loading for large galleries
- Optimize for mobile viewing

## 🚀 Ready to Upload!

Simply replace the placeholder files with your actual images using the exact same filenames. The app will automatically display them in the chat interface and place cards!