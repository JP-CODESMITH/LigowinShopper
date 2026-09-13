import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "./contract.d";
import contractJson from "./contract.json" with { type: "json" };

const db = postgres<Contract>({
  contractJson,
  url: process.env["DATABASE_URL"],
});

const BASE_URL = "https://rmcnjxvjosmglbobgfyh.supabase.co/storage/v1/object/public/products/";

const categories = [
  { name: "Jewelry", slug: "jewelry" },
  { name: "Footwear", slug: "footwear" },
  { name: "Perfume", slug: "perfume" },
];

const products = [
  {
    name: "Watch",
    slug: "watch",
    description: "A stylish watch with a leather strap",
    price: 29.99,
    categoryName: "jewelry",
    imageUrl: `${BASE_URL}IMG-20260307-WA0088.jpg`,
  },
  {
    name: "Shoes",
    slug: "shoes",
    description: "Comfortable running shoes for everyday wear",
    price: 49.99,
    categoryName: "footwear",
    imageUrl: `${BASE_URL}IMG-20260307-WA0089.jpg`,
  },
  {
    name: "La Vida es Bella",
    slug: "la-vida-es-bella",
    description: "La Vie Est Belle perfume",
    price: 210000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0001.jpg`,
  },
  {
    name: "Maison Crivelli's Oud Maracuja",
    slug: "maison-crivellis-oud-maracuja",
    description: "Maison Crivelli's Oud Maracuja is a bold, fruity-woody Extrait de Parfum (2023) blending bright passion fruit with intense, smoky oud and leather. 100ml",
    price: 480000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0002.jpg`,
  },
  {
    name: "9pm Elixir Afnan",
    slug: "9pm-elixir-afnan",
    description: "9pm Elixir by Afnan perfume",
    price: 135000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0005.jpg`,
  },
  {
    name: "Asad Elixir Lattafa",
    slug: "asad-elixir-lattafa",
    description: "Asad Elixir by Lattafa perfume",
    price: 75000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0006.jpg`,
  },
  {
    name: "Hayaati Lattafa",
    slug: "hayaati-lattafa",
    description: "Hayaati by Lattafa perfume",
    price: 25000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0007.jpg`,
  },
  {
    name: "Teriaq Intense Lattafa",
    slug: "teriaq-intense-lattafa",
    description: "Teriaq Intense by Lattafa perfume",
    price: 87000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0008.jpg`,
  },
  {
    name: "His Coffession Lattafa",
    slug: "his-coffession-lattafa",
    description: "His Coffession by Lattafa perfume",
    price: 63000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0009.jpg`,
  },
  {
    name: "Haramain Amber Oud",
    slug: "haramain-amber-oud",
    description: "Haramain Amber Oud perfume",
    price: 185000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0010.jpg`,
  },
  {
    name: "Tom Ford Lost Cherry",
    slug: "tom-ford-lost-cherry",
    description: "Tom Ford Lost Cherry - rich blend of black cherry, almond, and spicy Turkish rose. 100ml",
    price: 650000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0012.jpg`,
  },
  {
    name: "Maison Extrait de Parfum",
    slug: "maison-extrait-de-parfum",
    description: "Barakkat Rouge 540, 100ml, 3.4 FLOZ",
    price: 29500,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0013.jpg`,
  },
  {
    name: "Christian Dior Oud Ispahan",
    slug: "christian-dior-oud-ispahan",
    description: "Christian Dior Oud Ispahan 100ml - opulent, unisex oriental floral fragrance with Damascena rose and intense agarwood (oud).",
    price: 1400000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0014.jpg`,
  },
  {
    name: "La Vie Est Belle",
    slug: "la-vie-est-belle",
    description: "La Vie Est Belle perfume, 75ml, 2.5 FLOZ",
    price: 50000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0015.jpg`,
  },
  {
    name: "Dolce & Gabbana",
    slug: "dolce-gabbana",
    description: "Dolce & Gabbana Rose The One perfume",
    price: 200000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0016.jpg`,
  },
  {
    name: "Tom Ford Tobacco Vanille",
    slug: "tom-ford-tobacco-vanille",
    description: "Tom Ford Tobacco Vanille 100ml Eau de Parfum - luxurious unisex Oriental Spicy fragrance with tobacco leaf, tonka bean, vanilla, and cocoa.",
    price: 550000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0017.jpg`,
  },
  {
    name: "Maison Fragrance Khurshid Paris",
    slug: "maison-fragrance-khurshid-paris",
    description: "Oceanic Rouge 504, Eau de Parfum",
    price: 20000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0019.jpg`,
  },
  {
    name: "Club de Nuit",
    slug: "club-de-nuit",
    description: "Club de Nuit perfume, 105ml",
    price: 70000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0020.jpg`,
  },
  {
    name: "Body Mist",
    slug: "body-mist",
    description: "Body mist perfume",
    price: 15000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0021.jpg`,
  },
  {
    name: "Gucci Osmanthus",
    slug: "gucci-osmanthus",
    description: "Gucci Osmanthus - high-end floral-woody unisex scent with osmanthus flower, apricot, and sandalwood. 100ml",
    price: 580000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0022.jpg`,
  },
  {
    name: "Bloom",
    slug: "bloom",
    description: "G.M.C Maria Grazia Cucinotta Bloom, 100ml, 3.4 FLOZ",
    price: 45000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0023.jpg`,
  },
  {
    name: "Roja Perfume Burlington",
    slug: "roja-perfume-burlington",
    description: "Roja Perfume Burlington 19 review",
    price: 450000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0024.jpg`,
  },
  {
    name: "Viktor & Rolf Flowerbomb",
    slug: "viktor-rolf-flowerbomb",
    description: "Viktor & Rolf Flowerbomb Crystal",
    price: 70000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0025.jpg`,
  },
  {
    name: "Marc Jacobs Pour Homme",
    slug: "marc-jacobs-pour-homme",
    description: "Marc Jacobs Pour Homme - 100ml, Eau de Parfum",
    price: 18000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0026.jpg`,
  },
  {
    name: "Euphoric",
    slug: "euphoric",
    description: "Euphoric perfume",
    price: 60000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0027.jpg`,
  },
  {
    name: "Terre d'Hermes",
    slug: "terre-dhermes",
    description: "Terre d'Hermes - Eau de Parfum natural spray",
    price: 40000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0028.jpg`,
  },
  {
    name: "Bleu de Chanel",
    slug: "bleu-de-chanel",
    description: "Bleu de Chanel perfume",
    price: 15000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0029.jpg`,
  },
  {
    name: "Azzaro The Most Wanted",
    slug: "azzaro-the-most-wanted",
    description: "Azzaro The Most Wanted perfume",
    price: 180000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0030.jpg`,
  },
  {
    name: "Dior Sauvage",
    slug: "dior-sauvage",
    description: "Dior Sauvage - Eau de Parfum, 100ml, 3.4 FLOZ",
    price: 120000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0031.jpg`,
  },
  {
    name: "Ombre Nomade Louis Vuitton",
    slug: "ombre-nomade-louis-vuitton",
    description: "Louis Vuitton Ombre Nomade - Assam Oud wood, benzoin, raspberry, and leathery notes. Smoky, fruity, and sweet.",
    price: 1000000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0032.jpg`,
  },
  {
    name: "Gabrielle Chanel",
    slug: "gabrielle-chanel",
    description: "Gabrielle Chanel perfume",
    price: 30000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0033.jpg`,
  },
  {
    name: "Libre Eau de Parfum",
    slug: "libre-eau-de-parfum",
    description: "Libre Eau de Parfum",
    price: 60000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0034.jpg`,
  },
  {
    name: "Bloom",
    slug: "bloom-red",
    description: "G.M.C Maria Grazia Cucinotta Bloom, 100ml, 3.4 FLOZ",
    price: 50000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0035.jpg`,
  },
  {
    name: "Sexy Scandal",
    slug: "sexy-scandal",
    description: "Sexy Scandal perfume",
    price: 22000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0036.jpg`,
  },
  {
    name: "Gabrielle Chanel",
    slug: "gabrielle-chanel-100ml",
    description: "Gabrielle Chanel - solar and voluptuous feminine fragrance by Olivier Polge. 100ml",
    price: 390000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0037.jpg`,
  },
  {
    name: "Angels Share Kilian",
    slug: "angels-share-kilian",
    description: "Kilian Angels Share - vaporisation spray, 50ml, 1.7 oz",
    price: 430000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0038.jpg`,
  },
  {
    name: "Pure Oud Louis Vuitton",
    slug: "pure-oud-louis-vuitton",
    description: "Louis Vuitton Pure Oud - ultra-premium unisex woody-spicy fragrance with rare Indian and Cambodian oud. 100ml",
    price: 4000000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0039.jpg`,
  },
  {
    name: "Coco Mademoiselle",
    slug: "coco-mademoiselle",
    description: "Coco Mademoiselle perfume",
    price: 15000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0040.jpg`,
  },
  {
    name: "Dior Sauvage Elixir",
    slug: "dior-sauvage-elixir",
    description: "Dior Sauvage Elixir - intensely concentrated woody-aromatic fragrance with lavender, spices, and rich woods. 10-12+ hours longevity.",
    price: 420000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0041.jpg`,
  },
  {
    name: "5th Avenue Coach",
    slug: "5th-avenue-coach",
    description: "5th Avenue Coach - Eau de Parfum",
    price: 20000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0042.jpg`,
  },
  {
    name: "Coach Eau de Parfum",
    slug: "coach-eau-de-parfum",
    description: "Coach Eau de Parfum spray, 100ml, 3.4 FLOZ",
    price: 42000,
    categoryName: "perfume",
    imageUrl: `${BASE_URL}IMG-20260401-WA0043.jpg`,
  },
];

async function main() {
  console.log("Seeding database...");

  // Create categories
  for (const category of categories) {
    const existing = await db.orm.public.Category.first({
      slug: category.slug,
    });

    if (!existing) {
      await db.orm.public.Category.create({
        name: category.name,
        slug: category.slug,
      });
      console.log(`Created category: ${category.name}`);
    } else {
      console.log(`Category already exists: ${category.name}`);
    }
  }

  // Create products
  for (const product of products) {
    const existing = await db.orm.public.Product.first({
      slug: product.slug,
    });

    if (existing) {
      console.log(`Product already exists: ${product.name}`);
      continue;
    }

    const category = await db.orm.public.Category.first({
      slug: product.categoryName,
    });

    if (!category) {
      console.error(`Category not found: ${product.categoryName}`);
      continue;
    }

    const createdProduct = await db.orm.public.Product.create({
      name: product.name,
      slug: product.slug,
      description: product.description,
      price: product.price,
      stockQty: 100,
      active: true,
      categoryId: category.id,
    });

    // Create product image
    await db.orm.public.ProductImage.create({
      url: product.imageUrl,
      productId: createdProduct.id,
    });

    console.log(`Created product: ${product.name}`);
  }

  console.log("Seeding completed!");
  await db.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
