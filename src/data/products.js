import poloWhiteShirt from '../assets/products/shirt_white_polo_ralph_lauren.png';
import navyPlaidShirt from '../assets/products/shirt_navy_white_plaid.png';
import yellowStripedShirt from '../assets/products/shirt_yellow_striped_resort.png';
import sageGreenShirt from '../assets/products/shirt_sage_green_pinstripe.png';
import rugbyPolo from '../assets/products/shirt_brown_striped_rugby_polo.png';
import skyBlueShirt from '../assets/products/shirt_sky_blue_bengal_stripe.png';
import redStripedPullover from '../assets/products/pullover_red_white_striped_crew.png';
import layeredPlaidTee from '../assets/products/streetwear_layered_plaid_sleeve_tee.png';
import geniusJersey from '../assets/products/jersey_genius_23_mesh_tee.png';
import skatenClubShirt from '../assets/products/shirt_skaten_club_crimson_check.png';
import lvMonogramShirt from '../assets/products/shirt_louis_vuitton_monogram_sketch.png';
import pressMicShirt from '../assets/products/shirt_press_conference_mic_graphic.png';
import flaredDenim from '../assets/products/jeans_vintage_flared_denim.png';
import pinstripeTrousers from '../assets/products/trousers_black_pinstripe_drawstring.png';
import dirtyWashJeans from '../assets/products/jeans_dirty_wash_baggy_skate.png';
import brownLooseJeans from '../assets/products/jeans_brown_distressed_loose.png';
import respectiveMarbleJeans from '../assets/products/jeans_respective_marble_acid.png';
import vintageTintBarrelJeans from '../assets/products/jeans_vintage_tint_barrel_leg.png';
import washedCharcoalSkateJeans from '../assets/products/jeans_washed_charcoal_baggy_skate.png';
import sunFadedFlaredJeans from '../assets/products/jeans_sun_faded_flared_bootcut.png';
import poloSkyMandarin from '../assets/products/shirt_polo_ralph_lauren_sky_blue_mandarin.png';
import oatmealLinenShirt from '../assets/products/shirt_oatmeal_raw_linen_mandarin.png';
import whiteSplitTunic from '../assets/products/shirt_white_split_neck_tunic.png';
import whiteCrinkledLinen from '../assets/products/shirt_white_crinkled_linen_pocket.png';
import greyAcidJeans from '../assets/products/jeans_grey_acid_wash_loose.png';
import indigoBaggyJeans from '../assets/products/jeans_dark_indigo_whiskered_baggy.png';
import charcoalWhiskerJeans from '../assets/products/jeans_charcoal_faded_whisker_wide.png';
import skyBlueStraightJeans from '../assets/products/jeans_sky_blue_clean_straight.png';
import greenTintPuddleJeans from '../assets/products/jeans_green_tint_ocean_puddle.png';
import img1 from '../assets/products/product_01_shirt_1793347219307.jpg';
import img2 from '../assets/products/product_02_shirt_1793347248166.jpg';
import img3 from '../assets/products/product_03_shirt_1793347267116.jpg';
import img4 from '../assets/products/product_04_shirt_1793347312680.jpg';
import img5 from '../assets/products/product_05_shirt_1793347328211.jpg';
import img6 from '../assets/products/product_06_shirt_1793347353569.jpg';

// For remaining products, use high-quality Unsplash fashion photos
const unsplash = (id, w = 600, h = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const products = [
  // ===== SHIRTS (IDs 1-10) =====
  {
    id: 1,
    name: 'Polo Ralph Lauren White Linen Shirt',
    fullName: 'Polo Ralph Lauren Pure White Textured Linen-Cotton Shirt',
    price: 2499,
    rating: 4.9,
    category: 'Shirts',
    image: poloWhiteShirt,
    description: 'Signature Polo Ralph Lauren pony embroidery on a breathable textured pure white linen-cotton blend with spread collar.',
  },
  {
    id: 2,
    name: 'Navy & White Check Flannel Shirt',
    fullName: 'Clothes Hub Navy & White Tartan Plaid Flannel Overshirt',
    price: 2199,
    rating: 4.8,
    category: 'Shirts',
    image: navyPlaidShirt,
    description: 'Classic oversized navy blue and crisp white block check shirt in soft brushed cotton flannel.',
  },
  {
    id: 3,
    name: 'Yellow Striped Resort Camp Shirt',
    fullName: 'H&M Lemon Yellow Striped Resort Camp Collar Shirt',
    price: 1899,
    rating: 4.8,
    category: 'Shirts',
    image: yellowStripedShirt,
    description: 'Vibrant lemon yellow vertical candy stripes with relaxed Cuban camp collar and cursive chest embroidery.',
  },
  {
    id: 4,
    name: 'Sage Green Pinstripe Cotton Shirt',
    fullName: 'Tommy Hilfiger Sage Green Vertical Pinstripe Cotton Shirt',
    price: 2299,
    rating: 4.9,
    category: 'Shirts',
    image: sageGreenShirt,
    description: 'Understated sage green and white micro pinstripes on premium combed cotton with roll-up sleeve tabs.',
  },
  {
    id: 5,
    name: 'Retro Striped Rugby Polo Shirt',
    fullName: 'Clothes Hub "Future" Block Striped Rugby Polo Shirt',
    price: 2199,
    rating: 4.8,
    category: 'Shirts',
    image: rugbyPolo,
    description: 'Heavyweight brown and white bold horizontal stripe rugby polo with contrast white spread collar and Future chest badge.',
  },
  {
    id: 6,
    name: 'Sky Blue Bengal Stripe Shirt',
    fullName: 'Brooks Brothers Tailored Sky Blue Bengal Stripe Oxford Shirt',
    price: 2399,
    rating: 4.9,
    category: 'Shirts',
    image: skyBlueShirt,
    description: 'Sharp crisp vertical Bengal pinstripes in powder sky blue on 100% Egyptian long-staple cotton.',
  },
  {
    id: 7,
    name: 'Red & Cream Breton Striped Pullover',
    fullName: 'Uniqlo Heavyweight Red & Off-White Striped Long Sleeve Pullover',
    price: 1899,
    rating: 4.7,
    category: 'Shirts',
    image: redStripedPullover,
    description: 'Classic nautical-inspired red and cream horizontal striped long sleeve crewneck cut in premium combed cotton.',
  },
  {
    id: 8,
    name: '2-in-1 Layered Plaid Sleeve Tee',
    fullName: 'ASOS Streetwear 2-in-1 Oversized Tee with Plaid Flannel Sleeves',
    price: 2099,
    rating: 4.8,
    category: 'Shirts',
    image: layeredPlaidTee,
    description: 'Korean streetwear-inspired dropped shoulder white tee with contrast black and white tartan plaid undershirt sleeves.',
  },
  {
    id: 9,
    name: 'Skaten Club Crimson Check Shirt',
    fullName: 'Clothes Hub "Skaten Club" Crimson Windowpane Check Overshirt',
    price: 2199,
    rating: 4.8,
    category: 'Shirts',
    image: skatenClubShirt,
    description: 'Crimson red and white windowpane grid check with gothic script Skaten Club chest embroidery and abstract swirl hem print.',
  },
  {
    id: 10,
    name: 'LV Monogram Sketch Resort Shirt',
    fullName: 'Louis Vuitton Monogram Sketch Short-Sleeve Resort Shirt',
    price: 2899,
    rating: 4.9,
    category: 'Shirts',
    image: lvMonogramShirt,
    description: 'Burgundy red tone-on-tone monogram jacquard featuring Virgil Abloh-inspired white doodle sketches and metal clasp closures.',
  },

  // ===== T-SHIRTS (IDs 11, 13, 14, 19, 20) =====
  {
    id: 11,
    name: 'Genius No. 23 Oversized Mesh Jersey',
    fullName: 'Genius No. 23 Athletic Mesh Oversized V-Neck Jersey',
    price: 1999,
    rating: 4.8,
    category: 'T-Shirts',
    image: geniusJersey,
    description: 'Vintage American football aesthetic with #23 front print, star sleeve graphics, and ribbed striped V-neck collar.',
  },
  {
    id: 12,
    name: 'Press Mic Graphic Striped Shirt',
    fullName: 'Clothes Hub Press Conference Microphones Striped Casual Shirt',
    price: 2299,
    rating: 4.8,
    category: 'Shirts',
    image: pressMicShirt,
    description: 'Statement avant-garde vertical pinstripe dress shirt printed with colorful broadcast microphones across the front.',
  },
  {
    id: 13,
    name: 'Retro Colorblock Long-Sleeve Rugby Polo',
    fullName: 'Clothes Hub Retro Colorblock Long-Sleeve Rugby Polo',
    price: 1849,
    rating: 4.6,
    category: 'T-Shirts',
    image: unsplash('1618354691373-d851c5c3a990'),
    description: 'Retro-inspired colorblock rugby polo with contrast collar.',
  },
  {
    id: 14,
    name: 'Contrast Ribbed Knit Polo Shirt',
    fullName: 'Clothes Hub Contrast Ribbed Knit Polo Shirt',
    price: 1799,
    rating: 4.8,
    category: 'T-Shirts',
    image: unsplash('1586790170083-2f9ceadc732d'),
    description: 'Textured ribbed knit polo with contrast trim detailing.',
  },

  // ===== SHIRTS continued (IDs 15-18) =====
  {
    id: 15,
    name: 'Polo Ralph Lauren Baby Blue Henley Shirt',
    fullName: 'Polo Ralph Lauren Mandarin Collar Baby Blue Cotton Henley',
    price: 2499,
    rating: 4.9,
    category: 'Shirts',
    image: poloSkyMandarin,
    description: 'Signature embroidered pony on pastel sky blue cotton with band mandarin collar and four-button henley placket.',
  },
  {
    id: 16,
    name: 'Oatmeal Raw Linen Mandarin Shirt',
    fullName: 'Massimo Dutti Oatmeal Pure Raw Linen Mandarin Shirt',
    price: 2299,
    rating: 4.8,
    category: 'Shirts',
    image: oatmealLinenShirt,
    description: 'Unprocessed natural oatmeal flax linen with relaxed grandad band collar and roll-up buttoned sleeves.',
  },
  {
    id: 17,
    name: 'Crisp White Split V-Neck Popover Tunic',
    fullName: 'COS Minimalist White Split V-Neck Poplin Popover Tunic',
    price: 2199,
    rating: 4.8,
    category: 'Shirts',
    image: whiteSplitTunic,
    description: 'Architectural collarless poplin tunic featuring a clean split V-neckline and curved drop hem.',
  },
  {
    id: 18,
    name: 'Relaxed Pure White Linen Shirt',
    fullName: 'Mango Man Relaxed Pure White Crinkled Linen Casual Shirt',
    price: 2299,
    rating: 4.8,
    category: 'Shirts',
    image: whiteCrinkledLinen,
    description: 'Airy crinkled pure white linen shirt with single chest pocket and mother-of-pearl buttons.',
  },

  // ===== T-SHIRTS continued (IDs 19-20) =====
  {
    id: 19,
    name: 'Typography Printed Designer Tee',
    fullName: 'Typography Printed Designer Tee',
    price: 1599,
    rating: 4.2,
    category: 'T-Shirts',
    image: unsplash('1521572163474-6864f9cf17ab'),
    description: 'Statement typography graphic on premium cotton tee.',
  },
  {
    id: 20,
    name: 'Breathable Modal Blend Polo',
    fullName: 'Breathable Modal Blend Polo',
    price: 1849,
    rating: 4.6,
    category: 'T-Shirts',
    image: unsplash('1625910513413-5cc2d2d25c20'),
    description: 'Ultra-soft modal blend polo with breathable stretch comfort.',
  },

  // ===== JEANS & TROUSERS (IDs 21-30) =====
  {
    id: 21,
    name: 'Vintage Wash Flared Denim Jeans',
    fullName: 'Levi\'s Style Vintage Wash Flared Denim Jeans',
    price: 2599,
    rating: 4.9,
    category: 'Jeans',
    image: flaredDenim,
    description: '70s retro bootcut flare silhouette in stonewashed vintage blue premium denim.',
  },
  {
    id: 22,
    name: 'Pinstripe Drawstring Wide-Leg Trousers',
    fullName: 'Zara Man Black Pinstripe Drawstring Wide-Leg Trousers',
    price: 2499,
    rating: 4.8,
    category: 'Jeans',
    image: pinstripeTrousers,
    description: 'Fluid pleated relaxed-fit black trousers with subtle chalk pinstripes and elastic drawstring waistband.',
  },
  {
    id: 23,
    name: 'Dirty Wash Baggy Skater Jeans',
    fullName: 'Diesel Tinted Dirty Wash Baggy Skater Jeans',
    price: 2799,
    rating: 4.8,
    category: 'Jeans',
    image: dirtyWashJeans,
    description: 'Y2K vintage yellow-tinted dirty wash wide-leg denim with authentic fade and relaxed break at the ankle.',
  },
  {
    id: 24,
    name: 'Distressed Brown Wash Loose Jeans',
    fullName: 'Bershka Mineral Brown Washed Distressed Loose Jeans',
    price: 2699,
    rating: 4.8,
    category: 'Jeans',
    image: brownLooseJeans,
    description: 'Mineral-washed earthy brown denim with raw distressed pocket accents and wide straight cut.',
  },
  {
    id: 25,
    name: 'Marble Acid Wash "Respective" Jeans',
    fullName: 'Clothes Hub "Respective" Marble Bleach Acid Wash Wide-Leg Jeans',
    price: 2899,
    rating: 4.9,
    category: 'Jeans',
    image: respectiveMarbleJeans,
    description: 'High-contrast marble acid bleach treatment with gold cursive "Respective" embroidery across the back yoke.',
  },
  {
    id: 26,
    name: 'Vintage Tint Curved Barrel Jeans',
    fullName: 'Acne Studios Tinted Curved Barrel-Leg Baggy Denim',
    price: 2799,
    rating: 4.8,
    category: 'Jeans',
    image: vintageTintBarrelJeans,
    description: 'Y2K yellowish faded wash with directional knee darts forming a relaxed barrel curved leg silhouette.',
  },
  {
    id: 27,
    name: 'Washed Charcoal Black Skater Jeans',
    fullName: 'Stüssy Washed Charcoal Faded Black Loose Skater Jeans',
    price: 2699,
    rating: 4.8,
    category: 'Jeans',
    image: washedCharcoalSkateJeans,
    description: 'Heavyweight faded vintage charcoal denim with authentic whisker wash and ultra-baggy skate cut.',
  },
  {
    id: 28,
    name: 'Sun-Faded Bootcut Flared Jeans',
    fullName: 'Levi\'s Sun-Faded Light Blue Bootcut Flare Skater Jeans',
    price: 2599,
    rating: 4.8,
    category: 'Jeans',
    image: sunFadedFlaredJeans,
    description: 'Sun-bleached light ocean blue wash with subtle flare bottom hem designed to drape over sneakers.',
  },
  {
    id: 29,
    name: 'Grey Acid Wash Loose Jeans',
    fullName: 'Clothes Hub Grey Acid Wash Loose Straight Denim',
    price: 2649,
    rating: 4.8,
    category: 'Jeans',
    image: greyAcidJeans,
    description: 'Vintage 90s stone grey acid wash with relaxed straight leg profile.',
  },
  {
    id: 30,
    name: 'Deep Indigo Whiskered Skater Jeans',
    fullName: 'Carhartt Style Deep Indigo Whiskered Loose Denim',
    price: 2799,
    rating: 4.9,
    category: 'Jeans',
    image: indigoBaggyJeans,
    description: 'Heavyweight dark indigo denim with hand-sanded thigh whiskering and wide skater cut.',
  },
  {
    id: 49,
    name: 'Charcoal Faded Whisker Wide-Leg Jeans',
    fullName: 'Weekday Charcoal Faded Whisker Wide-Leg Denim',
    price: 2699,
    rating: 4.8,
    category: 'Jeans',
    image: charcoalWhiskerJeans,
    description: 'Faded washed charcoal black wash with vintage whiskering and generous wide-leg puddle drape.',
  },
  {
    id: 50,
    name: 'Sky Blue Clean Straight Denim',
    fullName: 'Levi\'s Sky Blue Classic Clean Straight Leg Jeans',
    price: 2499,
    rating: 4.8,
    category: 'Jeans',
    image: skyBlueStraightJeans,
    description: 'Clean light sky blue wash in durable 100% rigid cotton with relaxed straight drape.',
  },
  {
    id: 51,
    name: 'Green-Tint Ocean Puddle Baggy Jeans',
    fullName: 'Balenciaga Style Green-Tint Ocean Puddle Baggy Jeans',
    price: 2899,
    rating: 4.9,
    category: 'Jeans',
    image: greenTintPuddleJeans,
    description: 'Distinctive green-tinted ocean wash denim with oversized puddle stack hem.',
  },

  // ===== JACKETS & BLAZERS (IDs 31-40) =====
  {
    id: 31,
    name: 'Ripped White Denim Trucker Jacket',
    fullName: 'Clothes Hub Ripped White Denim Trucker Jacket',
    price: 2899,
    rating: 4.9,
    category: 'Jackets',
    image: unsplash('1591047139829-d91aecb6caea'),
    description: 'Bold white denim trucker jacket with artful rip detailing.',
  },
  {
    id: 32,
    name: 'Taupe Double-Breasted Tailored Blazer',
    fullName: 'Clothes Hub Taupe Double-Breasted Tailored Blazer',
    price: 2899,
    rating: 4.9,
    category: 'Jackets',
    image: unsplash('1507003211169-0a1dd7228f2d'),
    description: 'Impeccably tailored double-breasted blazer in warm taupe.',
  },
  {
    id: 33,
    name: 'Chocolate Brown Double-Breasted Blazer',
    fullName: 'Clothes Hub Chocolate Brown Double-Breasted Blazer',
    price: 2949,
    rating: 4.8,
    category: 'Jackets',
    image: unsplash('1617127365659-c47fa864d8bc'),
    description: 'Rich chocolate brown double-breasted blazer for refined elegance.',
  },

  {
    id: 40,
    name: 'Heritage Harrington Utility Jacket',
    fullName: 'Heritage Harrington Utility Jacket',
    price: 2699,
    rating: 4.6,
    category: 'Jackets',
    image: unsplash('1548126032-079a0fb0099d'),
    description: 'Timeless Harrington silhouette with modern utility pocket details.',
  },

  // ===== HOODIES & SWEATSHIRTS (IDs 41-46) =====
  {
    id: 41,
    name: 'Dual-Tone Wave Crewneck Sweatshirt',
    fullName: 'Clothes Hub Dual-Tone Wave Crewneck Sweatshirt',
    price: 2299,
    rating: 4.8,
    category: 'Hoodies',
    image: unsplash('1556821840-3a63f95609a7'),
    description: 'Dual-tone wave pattern crewneck in premium heavyweight fleece.',
  },
  {
    id: 42,
    name: 'Cable-Knit Striped Chunky Sweater',
    fullName: 'Clothes Hub Cable-Knit Striped Chunky Sweater',
    price: 2499,
    rating: 4.9,
    category: 'Hoodies',
    image: unsplash('1614975059251-992f11792b9f'),
    description: 'Chunky cable-knit sweater with multicolor stripe detailing.',
  },

];

export const categories = ['Shirts', 'T-Shirts', 'Jeans', 'Jackets', 'Hoodies', 'Ethnic Wear'];

export default products;
