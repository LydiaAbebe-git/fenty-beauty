const PRODUCTS = [
  { id: 'p1', name: "Pro Filt'r Soft Matte Longwear Foundation", description: "A soft matte, longwear foundation that's buildable and breathable. Available in 50 shades.", price: 39.00, image: 'uploads/1767368557156-BIQ_hero_image__1440x1200___55_.jpg', category: 'Makeup', stockCount: 100, inStock: true },
  { id: 'p2', name: 'Gloss Bomb Universal Lip Luminizer', description: 'A universal lip gloss that looks amazing on everyone. Non-sticky, high-shine formula.', price: 19.00, image: 'uploads/1767368697765-BIQ_hero_image__1440x1200___55_.jpg', category: 'Makeup', stockCount: 150, inStock: true },
  { id: 'p3', name: 'Killawatt Freestyle Highlighter', description: 'A versatile highlighter that can be used wet or dry for a range of finishes.', price: 36.00, image: 'uploads/1767368966890-mbm-sslg-packshot-perfect-pink-6750c8304a194.webp', category: 'Makeup', stockCount: 80, inStock: true },
  { id: 'p4', name: 'Snap Shadows Mix & Match Eyeshadow Palette', description: 'Build your own eyeshadow palette with mix and match shades.', price: 18.00, image: 'uploads/1767369293886-MBM_SSBB_OPEN_PACK_LIGHT.webp', category: 'Makeup', stockCount: 120, inStock: true },
  { id: 'p5', name: "Fat Water Pore-Refining Toner Serum", description: "A pore-refining toner serum that hydrates and minimizes the appearance of pores.", price: 32.00, image: 'uploads/1767368557156-BIQ_hero_image__1440x1200___55_.jpg', category: 'Skincare', stockCount: 90, inStock: true },
  { id: 'p6', name: "Total Cleans'r Remove-It-All Cleanser", description: "A gentle, effective cleanser that removes makeup and impurities without stripping skin.", price: 25.00, image: 'uploads/1767368697765-BIQ_hero_image__1440x1200___55_.jpg', category: 'Skincare', stockCount: 110, inStock: true },
  { id: 'p7', name: 'Instant Reset Overnight Recovery Gel-Cream', description: 'An overnight gel-cream that helps reset and restore your skin while you sleep.', price: 38.00, image: 'uploads/1767368966890-mbm-sslg-packshot-perfect-pink-6750c8304a194.webp', category: 'Skincare', stockCount: 75, inStock: true },
  { id: 'p8', name: 'Fenty Hair Pre-Shampoo Scalp Scrub', description: 'A scalp scrub that exfoliates and refreshes your scalp before shampooing.', price: 28.00, image: 'uploads/1767641318-images.jpeg', category: 'Hair', stockCount: 95, inStock: true },
  { id: 'p9', name: 'Fenty Hair Pre-Shampoo Scalp Scrub', description: 'A scalp scrub that exfoliates and refreshes your scalp before shampooing.', price: 28.00, image: 'uploads/1767641318-images.jpeg', category: 'Hair', stockCount: 95, inStock: true },
  { id: 'p10', name: 'The come back bond repair treatment', description: 'A scalp scrub that exfoliates and refreshes your scalp before shampooing.', price: 36.00, image: 'uploads/hair.jpg', category: 'Hair', stockCount: 95, inStock: true },




  
];

function getProducts() { return PRODUCTS; }
function getProductById(id) { return PRODUCTS.find(p => p.id === id); }
function getProductsByCategory(cat) { return PRODUCTS.filter(p => p.category === cat); }
function getProductsLimit(n) { return PRODUCTS.slice(0, n); }
