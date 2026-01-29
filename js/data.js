const PRODUCTS = [
  { id: 'p1', name: "Pro Filt'r Soft Matte Longwear Foundation", description: "A soft matte, longwear foundation that's buildable and breathable. Available in 50 shades.", price: 39.00, image: 'uploads/1767368557156-BIQ_hero_image__1440x1200___55_.jpg', category: 'Makeup', stockCount: 100, inStock: true },
  { id: 'p2', name: "Pro Filt'r Soft Matte Longwear Foundation", description: "A soft matte, longwear foundation that's buildable and breathable. Available in 50 shades.", price: 39.00, image: 'uploads/foundation1.jpg', category: 'Makeup', stockCount: 90, inStock: true },
  { id: 'p3', name: "Pro moist moisturising gloss", description: "A soft rosey finish with a beautiful soft lip. availabe in 5 shades.", price: 49.00, image: 'uploads/gloss1.jpg', category: 'Makeup', stockCount: 25, inStock: true },
  { id: 'p4', name: "Pro Filt'r foundation and applicator combo.", description: "matte foundation that's buildable and breathable.with a soft airbrush finish sponge. Available in 50 shades.", price: 39.00, image: 'uploads/sponge.jpg', category: 'Makeup', stockCount: 100, inStock: true },
  { id: 'p5', name: "whispy lashes mascara", description: "Dard and feminine uplifting effect with a beautiful non-crustible finish.", price: 35.00, image: 'uploads/mascara1.jpg', category: 'Makeup', stockCount: 100, inStock: true },
  { id: 'p6', name: "Pro moist glosses collection", description: "soft healthy lips and sultry shades finish. different shades.", price: 40.00, image: 'uploads/glosses.jpg', category: 'Makeup', stockCount: 100, inStock: true },
  { id: 'p7', name: 'Gloss Bomb Universal Lip Luminizer', description: 'A universal lip gloss that looks amazing on everyone. Non-sticky, high-shine formula.', price: 19.00, image: 'uploads/gloss4.jpg', category: 'Makeup', stockCount: 150, inStock: true },
  { id: 'p8', name: 'Killawatt Freestyle liner shade 100', description: 'A versatile liner that can be used wet or dry for a range of finishes.', price: 36.00, image: 'uploads/liner1.jpg', category: 'Makeup', stockCount: 80, inStock: true },
  { id: 'p9', name: 'Killawatt Freestyle liner shade 101', description: 'A versatile liner that can be used wet or dry for a range of finishes.', price: 36.00, image: 'uploads/liner2.jpg', category: 'Makeup', stockCount: 70, inStock: true },
  { id: 'p10', name: 'Killawatt Freestyle liner shades availabe', description: 'A versatile liner that can be used wet or dry for a range of finishes.', price: 36.00, image: 'uploads/liners.jpg', category: 'Makeup', stockCount: 60, inStock: true },
  { id: 'p11', name: 'veanna Freestyle lip tint', description: 'A versatile lip tint that can be used wet or dry for a range of finishes.', price: 36.00, image: 'uploads/1767368966890-mbm-sslg-packshot-perfect-pink-6750c8304a194.webp', category: 'Makeup', stockCount: 80, inStock: true },
  { id: 'p12', name: 'Snap Shadows Mix & Match Eyeshadow Palette', description: 'Build your own eyeshadow palette with mix and match shades.', price: 18.00, image: 'uploads/1767369293886-MBM_SSBB_OPEN_PACK_LIGHT.webp', category: 'Makeup', stockCount: 120, inStock: true },
  { id: 'p13', name: "Fat Water Pore-Refining Toner mist", description: "A pore-refining mist serum that hydrates and minimizes the appearance of pores.", price: 40.00, image: 'uploads/skinmist1.jpg', category: 'Skincare', stockCount: 80, inStock: true },
  { id: 'p14', name: "Fat Water Pore-Refining Toner Serum", description: "A pore-refining toner serum that hydrates and minimizes the appearance of pores.", price: 40.00, image: 'uploads/skinmist2.jpg', category: 'Skincare', stockCount: 70, inStock: true },
  { id: 'p15', name: "hydrafacial skin tint", description: "A skin like finish. super hydrating and plumping with full coverage.", price: 52.00, image: 'uploads/skintint1.jpg', category: 'Skincare', stockCount: 90, inStock: true },
  { id: 'p16', name: "revitalizing moisture cream", description: "A plimp hydrated and happy skin for all.", price: 32.00, image: 'uploads/moisturecream.jpg', category: 'Skincare', stockCount: 90, inStock: true },
  { id: 'p17', name: "skin plumping hydrating body mist vanilla", description: "hydrates rejuvinates skin like no other while smelling good.", price: 42.00, image: 'uploads/vanilla.jpg', category: 'Skincare', stockCount: 90, inStock: true },
  { id: 'p18', name: "skin plumping hydrating body mist rose-bouquet", description: "hydrates rejuvinates skin like no other while smelling good.", price: 42.00, image: 'uploads/bouquet.jpg', category: 'Skincare', stockCount: 90, inStock: true },
  { id: 'p19', name: 'Instant Reset Overnight Recovery Gel-Cream', description: 'An overnight gel-cream that helps reset and restore your skin while you sleep.', price: 38.00, image: 'uploads/moisturecream.jpg', category: 'Skincare', stockCount: 75, inStock: true },
  { id: 'p20', name: 'Fenty Hair Pre-Shampoo Scalp Scrub', description: 'A scalp scrub that exfoliates and refreshes your scalp before shampooing.', price: 28.00, image: 'uploads/1767641318-images.jpeg', category: 'Hair', stockCount: 95, inStock: true },
  { id: 'p21', name: 'Fenty volumizing curl cream', description: 'Achieve bouncy and healthy curls', price: 28.00, image: 'uploads/curlcream.jpg', category: 'Hair', stockCount: 95, inStock: true },
  { id: 'p22', name: 'The mista hair + body fragrance mist', description: 'Wealthy but worth it. lavish notes of amber, freesia, sparkling yuzu + coconut wrap you in luxury, escorting you into the soft life you deserve', price: 20.00, image: 'uploads/mista.jpg', category: 'Hair', stockCount: 20, inStock: true },
  { id: 'p23', name: 'The come back bond repair treatment', description: 'The come bakc kid bond repair treatment- now in bigger size for more happier repair when you need it.', price: 36.00, image: 'uploads/hair.jpg', category: 'Hair', stockCount: 75, inStock: true },
  { id: 'p24', name: 'sultry vanilla', description: 'captivate your surroundings with our subtle fragrances', price: 40.00, image: 'uploads/fragrance1.jpg', category: 'Fragrance', stockCount: 95, inStock: true },
  { id: 'p25', name: 'solia rosee', description: 'rose essence and a beautiful captivating scent', price: 55.00, image: 'uploads/fragrance3.jpg', category: 'Fragrance', stockCount: 45, inStock: true },
  { id: 'p26', name: 'yuzuai sandalwood', description: 'relaxing scent that helps you unwind', price: 50.00, image: 'uploads/fragrance2.jpg', category: 'Fragrance', stockCount: 50, inStock: true },
  { id: 'p27', name: 'yuzuai sandalwood', description: 'relaxing scent that helps you unwind', price: 50.00, image: 'uploads/fragrance2.jpg', category: 'Holiday', stockCount: 50, inStock: true },
  { id: 'p28', name: 'The come back bond repair treatment', description: 'The come bakc kid bond repair treatment- now in bigger size for more happier repair when you need it.', price: 36.00, image: 'uploads/hair.jpg', category: 'Holiday', stockCount: 75, inStock: true },
  { id: 'p29', name: 'sultry vanilla', description: 'captivate your surroundings with our subtle fragrances', price: 40.00, image: 'uploads/fragrance1.jpg', category: 'Holiday', stockCount: 95, inStock: true },
  { id: 'p30', name: "Pro moist glosses collection", description: "soft healthy lips and sultry shades finish. different shades.", price: 40.00, image: 'uploads/glosses.jpg', category: 'Holiday', stockCount: 100, inStock: true },
  { id: 'p31', name: 'Gloss Bomb Universal Lip Luminizer', description: 'A universal lip gloss that looks amazing on everyone. Non-sticky, high-shine formula.', price: 19.00, image: 'uploads/gloss4.jpg', category: 'Holiday', stockCount: 150, inStock: true },
  { id: 'p32', name: 'Killawatt Freestyle liner shade 100', description: 'A versatile liner that can be used wet or dry for a range of finishes.', price: 36.00, image: 'uploads/liner1.jpg', category: 'Holiday', stockCount: 80, inStock: true },
  { id: 'p33', name: 'Killawatt Freestyle liner shade 101', description: 'A versatile liner that can be used wet or dry for a range of finishes.', price: 36.00, image: 'uploads/liner2.jpg', category: 'Holiday', stockCount: 70, inStock: true },
  




  
];

function getProducts() { return PRODUCTS; }
function getProductById(id) { return PRODUCTS.find(p => p.id === id); }
function getProductsByCategory(cat) { return PRODUCTS.filter(p => p.category === cat); }
function getProductsLimit(n) { return PRODUCTS.slice(0, n); }
