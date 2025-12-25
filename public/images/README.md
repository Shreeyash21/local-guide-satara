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

## 🏨 Hotels (4 images)
- `hotels/hotel-radhika.jpg` - Hotel Radhika Executive
- `hotels/hotel-shreyas.jpg` - Hotel Shreyas
- `hotels/satara-residency.jpg` - Satara Residency
- `hotels/hotel-surya.jpg` - Hotel Surya Executive

## 🍽️ Restaurants (6 images)
- `restaurants/radhika-restaurant.jpg` - Hotel Radhika Restaurant
- `restaurants/shivneri-restaurant.jpg` - Shivneri Restaurant
- `restaurants/misal-house.jpg` - Misal House
- `restaurants/ccd-satara.jpg` - Cafe Coffee Day Satara
- `restaurants/kokani-darbar.jpg` - Kokani Darbar
- `restaurants/bhel-puri-corner.jpg` - Bhel Puri Corner

## 🍛 Food Items (5 images)
- `food/satara-misal.jpg` - Satara Special Misal
- `food/solkadhi.jpg` - Solkadhi drink
- `food/bhakri-pitla.jpg` - Bhakri with Pitla
- `food/puran-poli.jpg` - Puran Poli
- `food/koliwada-fish.jpg` - Koliwada Fish Fry

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